"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CategoryId } from "@/lib/types";
import { CATEGORY_ORDER, productsByCategory } from "@/lib/products";
import { categoryNames, categoryEmoji } from "@/lib/translations";
import { useI18n } from "@/lib/i18n-context";
import { ProductCard } from "./ProductCard";

export function CategoryAccordion() {
  const { lang } = useI18n();
  // Independent accordion — any number of panels may be open at once.
  const [open, setOpen] = useState<Set<CategoryId>>(new Set(["pins"]));

  const toggle = (id: CategoryId) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="flex flex-col gap-4">
      {CATEGORY_ORDER.map((id) => {
        const isOpen = open.has(id);
        const items = productsByCategory(id);
        return (
          <div
            key={id}
            className="overflow-hidden rounded-3xl bg-ink-soft ring-1 ring-white/10"
          >
            <button
              onClick={() => toggle(id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-pink"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">{categoryEmoji[id]}</span>
                <span className="font-display text-2xl font-extrabold text-pink">
                  {categoryNames[id][lang]}
                </span>
                <span className="rounded-full bg-teal/15 px-2 py-0.5 text-xs font-bold text-teal">
                  {items.length}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-2xl text-teal"
                aria-hidden="true"
              >
                ⌄
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { type: "spring", stiffness: 260, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="grid grid-cols-2 gap-3 px-4 pb-5 pt-1 sm:grid-cols-3 sm:gap-4"
                  >
                    {items.map((p) => (
                      <motion.div
                        key={p.id}
                        variants={{
                          hidden: { opacity: 0, y: 16, scale: 0.96 },
                          show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: "spring", stiffness: 320, damping: 24 },
                          },
                        }}
                      >
                        <ProductCard product={p} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
