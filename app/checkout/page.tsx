"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n-context";
import { productsById } from "@/lib/products";
import { CartLineDetailed } from "@/lib/types";
import { CheckoutForm } from "@/components/CheckoutForm";
import { ThankYouModal } from "@/components/ThankYouModal";

function CheckoutInner() {
  const { tr } = useI18n();
  const { detailed, clearCart } = useCart();
  const searchParams = useSearchParams();
  const buyId = searchParams.get("buy");
  const [done, setDone] = useState(false);

  // "Quick buy" — a single product bypassing the cart.
  const buyNow = buyId && productsById[buyId] ? productsById[buyId] : null;

  const items: CartLineDetailed[] = useMemo(() => {
    if (buyNow) return [{ ...buyNow, qty: 1 }];
    return detailed;
  }, [buyNow, detailed]);

  const onSuccess = () => {
    if (!buyNow) clearCart();
    setDone(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-8">
      <Link
        href="/"
        className="inline-block font-display text-sm font-bold text-teal hover:text-pink"
      >
        {tr("backToShop")}
      </Link>

      <h1 className="mb-6 mt-3 font-display text-3xl font-extrabold text-pink">
        {tr("checkoutTitle")}
      </h1>

      {items.length === 0 ? (
        <div className="rounded-3xl bg-ink-soft p-10 text-center ring-1 ring-white/10">
          <p className="font-display text-lg text-teal">{tr("emptyCheckout")}</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-2xl bg-teal px-5 py-2.5 font-display font-bold text-ink"
          >
            {tr("keepShopping")}
          </Link>
        </div>
      ) : (
        <CheckoutForm items={items} onSuccess={onSuccess} />
      )}

      <AnimatePresence>{done && <ThankYouModal />}</AnimatePresence>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center text-teal">…</div>
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}
