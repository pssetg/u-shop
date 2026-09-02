"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CategoryAccordion } from "@/components/CategoryAccordion";
import { useI18n } from "@/lib/i18n-context";

export default function HomePage() {
  const { tr } = useI18n();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-6 sm:pt-10">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="mb-8 text-center sm:mb-10"
      >
        <motion.h1
          className="font-display text-4xl font-extrabold sm:text-5xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          <span className="text-pink">U</span>
          <span className="text-teal">-Shop</span>
        </motion.h1>
        <p className="mt-2 font-display text-lg text-teal sm:text-xl">
          {tr("tagline")}
        </p>
        <p className="mx-auto mt-1 max-w-md text-sm text-white/60">
          {tr("heroSubtitle")}
        </p>
      </motion.section>

      <CategoryAccordion />

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-xl font-bold text-ink shadow-glowteal"
            aria-label={tr("scrollTop")}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="mt-16 text-center text-xs text-white/30">
        U-Shop · demo · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
