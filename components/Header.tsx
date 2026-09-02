"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { count, openCart, registerCartTarget, cartBump } = useCart();
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    registerCartTarget(iconRef.current);
  }, [registerCartTarget]);

  // Pop the cart when an item lands (skip first render).
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    controls.start({
      scale: [1, 1.35, 0.9, 1],
      rotate: [0, -10, 8, 0],
      transition: { duration: 0.5 },
    });
  }, [cartBump, controls]);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Logo onClick={scrollTop} />

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <motion.button
            onClick={openCart}
            whileTap={{ scale: 0.9 }}
            animate={controls}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-soft ring-1 ring-white/10 outline-none hover:ring-pink/50 focus-visible:ring-2 focus-visible:ring-pink"
            aria-label="Open cart"
          >
            <span ref={iconRef} className="text-2xl leading-none">
              🛒
            </span>
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 600, damping: 20 }}
                className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink px-1 text-xs font-extrabold text-ink shadow-glowpink"
              >
                {count}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
