"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { ProductArt } from "./ProductArt";

export function ThankYouModal() {
  const { tr } = useI18n();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.7, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-sm rounded-3xl bg-ink-soft p-8 text-center ring-1 ring-pink/40 shadow-glowpink"
      >
        <motion.div
          initial={{ rotate: -20, scale: 0.6 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}
          className="mx-auto mb-4 h-28 w-28"
        >
          <ProductArt id="pin-heart" />
        </motion.div>
        <h2 className="font-display text-2xl font-extrabold text-pink">
          {tr("thankYouTitle")}
        </h2>
        <p className="mt-2 text-sm text-teal/80">{tr("thankYouText")}</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="mt-6 w-full rounded-2xl bg-teal py-3 font-display font-extrabold text-ink shadow-glowteal hover:brightness-105"
        >
          {tr("keepShopping")} 💕
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
