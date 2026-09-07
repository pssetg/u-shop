"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { ProductArt } from "./ProductArt";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n-context";
import { categoryAccent } from "@/lib/translations";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { lang, tr } = useI18n();
  const router = useRouter();
  const artRef = useRef<HTMLDivElement | null>(null);
  const accent = categoryAccent[product.category];

  return (
    <motion.div
      layout
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{ rest: { y: 0 }, hover: { y: -8 } }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`flex flex-col rounded-3xl bg-ink-card p-4 ring-1 transition-shadow duration-300 ${accent.card}`}
    >
      <motion.div
        ref={artRef}
        variants={{
          rest: { rotate: 0, scale: 1, y: 0 },
          hover: {
            rotate: [0, -9, 7, -4, 0],
            scale: 1.1,
            y: -4,
            transition: { duration: 0.65, ease: "easeInOut" },
          },
        }}
        className="mb-3 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-3"
      >
        <ProductArt id={product.id} />
      </motion.div>

      <h3 className="font-display text-lg font-bold text-pink">
        {product.name[lang]}
      </h3>
      <p className="mt-0.5 line-clamp-1 text-sm text-teal/80">
        {product.desc[lang]}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-display text-xl font-extrabold text-teal">
          €{product.price.toFixed(2)}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => addToCart(product.id, artRef.current)}
          className="rounded-2xl bg-pink py-2 font-display font-bold text-ink shadow-glowpink transition-transform hover:brightness-105 active:brightness-95"
        >
          {tr("addToCart")} 🛒
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => router.push(`/checkout?buy=${product.id}`)}
          className="rounded-2xl bg-transparent py-2 font-display font-bold text-teal ring-2 ring-teal/60 transition-colors hover:bg-teal/10"
        >
          {tr("buyNow")} ⚡
        </motion.button>
      </div>
    </motion.div>
  );
}
