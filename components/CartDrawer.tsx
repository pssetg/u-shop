"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n-context";
import { ProductArt } from "./ProductArt";

export function CartDrawer() {
  const { isOpen, closeCart, detailed, total, setQty, removeFromCart, count } =
    useCart();
  const { lang, tr } = useI18n();
  const router = useRouter();

  const goCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ink-soft shadow-2xl ring-1 ring-white/10"
            role="dialog"
            aria-label={tr("cart")}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="font-display text-2xl font-extrabold text-pink">
                {tr("cart")} 🛒 {count > 0 && <span className="text-teal">({count})</span>}
              </h2>
              <button
                onClick={closeCart}
                aria-label={tr("closeCart")}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-teal ring-1 ring-white/10 hover:ring-pink/50"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {detailed.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 h-24 w-24 opacity-70">
                    <ProductArt id="pin-cloud" />
                  </div>
                  <p className="font-display text-lg font-bold text-teal">
                    {tr("cartEmpty")}
                  </p>
                  <p className="mt-1 text-sm text-teal/60">{tr("cartEmptyHint")}</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {detailed.map((line) => (
                      <motion.li
                        key={line.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex items-center gap-3 rounded-2xl bg-ink-card p-3 ring-1 ring-white/10"
                      >
                        <div className="h-16 w-16 flex-shrink-0 rounded-xl bg-white/5 p-1.5">
                          <ProductArt id={line.id} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-display font-bold text-pink">
                            {line.name[lang]}
                          </p>
                          <p className="text-sm font-bold text-teal">
                            €{line.price.toFixed(2)}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-ink px-1 ring-1 ring-white/10">
                              <button
                                onClick={() => setQty(line.id, line.qty - 1)}
                                className="flex h-6 w-6 items-center justify-center rounded-full text-teal hover:bg-teal/15"
                                aria-label="−"
                              >
                                −
                              </button>
                              <span className="w-6 text-center font-bold text-white">
                                {line.qty}
                              </span>
                              <button
                                onClick={() => setQty(line.id, line.qty + 1)}
                                className="flex h-6 w-6 items-center justify-center rounded-full text-teal hover:bg-teal/15"
                                aria-label="+"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(line.id)}
                              className="text-xs text-pink/70 underline-offset-2 hover:text-pink hover:underline"
                            >
                              {tr("remove")}
                            </button>
                          </div>
                        </div>
                        <div className="font-display font-extrabold text-teal">
                          €{(line.price * line.qty).toFixed(2)}
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {detailed.length > 0 && (
              <div className="border-t border-white/10 px-5 py-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-lg text-teal/80">
                    {tr("total")}
                  </span>
                  <motion.span
                    key={total}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="font-display text-2xl font-extrabold text-pink"
                  >
                    €{total.toFixed(2)}
                  </motion.span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={goCheckout}
                  className="w-full rounded-2xl bg-teal py-3 font-display text-lg font-extrabold text-ink shadow-glowteal hover:brightness-105"
                >
                  {tr("checkout")} →
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
