"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CartLine, CartLineDetailed } from "./types";
import { productsById } from "./products";
import { ProductArt } from "@/components/ProductArt";

const STORAGE_KEY = "ushop-cart";

interface Flight {
  key: number;
  productId: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
}

interface CartValue {
  lines: CartLine[];
  detailed: CartLineDetailed[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (id: string, originEl?: HTMLElement | null) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  registerCartTarget: (el: HTMLElement | null) => void;
  cartBump: number;
}

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [cartBump, setCartBump] = useState(0);
  const flightKey = useRef(0);
  const cartTargetRef = useRef<HTMLElement | null>(null);

  // Load from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (l) => l && typeof l.id === "string" && productsById[l.id] && l.qty > 0
            )
          );
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Persist whenever lines change (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const registerCartTarget = useCallback((el: HTMLElement | null) => {
    cartTargetRef.current = el;
  }, []);

  const bumpCart = useCallback(() => setCartBump((n) => n + 1), []);

  const addToCart = useCallback(
    (id: string, originEl?: HTMLElement | null) => {
      if (!productsById[id]) return;
      setLines((prev) => {
        const existing = prev.find((l) => l.id === id);
        if (existing) {
          return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
        }
        return [...prev, { id, qty: 1 }];
      });

      // Fly-to-cart animation.
      const target = cartTargetRef.current;
      if (originEl && target) {
        const o = originEl.getBoundingClientRect();
        const tt = target.getBoundingClientRect();
        const from = { x: o.left + o.width / 2, y: o.top + o.height / 2 };
        const to = { x: tt.left + tt.width / 2, y: tt.top + tt.height / 2 };
        const key = flightKey.current++;
        setFlights((f) => [...f, { key, productId: id, from, to }]);
        window.setTimeout(() => bumpCart(), 620);
      } else {
        bumpCart();
      }
    },
    [bumpCart]
  );

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l))
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const detailed = useMemo<CartLineDetailed[]>(
    () =>
      lines
        .map((l) => {
          const p = productsById[l.id];
          return p ? { ...p, qty: l.qty } : null;
        })
        .filter((x): x is CartLineDetailed => x !== null),
    [lines]
  );

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const total = useMemo(
    () => detailed.reduce((s, l) => s + l.price * l.qty, 0),
    [detailed]
  );

  const value: CartValue = {
    lines,
    detailed,
    count,
    total,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    registerCartTarget,
    cartBump,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Fly-to-cart overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        <AnimatePresence>
          {flights.map((f) => (
            <motion.div
              key={f.key}
              initial={{
                x: f.from.x - 28,
                y: f.from.y - 28,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: f.to.x - 18,
                y: f.to.y - 18,
                scale: 0.35,
                opacity: 0.9,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0.9, 0.3, 1] }}
              onAnimationComplete={() =>
                setFlights((cur) => cur.filter((x) => x.key !== f.key))
              }
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <div className="h-14 w-14 rounded-2xl bg-ink-card p-1 shadow-glowpink ring-1 ring-pink/40">
                <ProductArt id={f.productId} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CartContext.Provider>
  );
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
