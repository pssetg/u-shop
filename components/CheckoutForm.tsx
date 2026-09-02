"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CartLineDetailed } from "@/lib/types";
import { useI18n } from "@/lib/i18n-context";
import { ProductArt } from "./ProductArt";

interface Props {
  items: CartLineDetailed[];
  onSuccess: () => void;
}

export function CheckoutForm({ items, onSuccess }: Props) {
  const { lang, tr } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const total = items.reduce((s, l) => s + l.price * l.qty, 0);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = tr("errName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = tr("errEmail");
    if (!phone.trim()) e.phone = tr("errPhone");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          customer: {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            comment: comment.trim(),
          },
          items: items.map((l) => ({
            id: l.id,
            name: l.name[lang],
            qty: l.qty,
            price: l.price,
          })),
          total,
        }),
      });
      if (!res.ok) throw new Error("bad status " + res.status);
      onSuccess();
    } catch (err) {
      console.error("Order submit failed:", err);
      setErrors({ form: tr("errSend") });
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-2xl bg-ink-card px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-teal";

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
      {/* Order summary */}
      <div>
        <h2 className="mb-3 font-display text-xl font-bold text-teal">
          {tr("yourOrder")}
        </h2>
        <ul className="flex flex-col gap-2">
          {items.map((l) => (
            <li
              key={l.id}
              className="flex items-center gap-3 rounded-2xl bg-ink-card p-3 ring-1 ring-white/10"
            >
              <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-white/5 p-1">
                <ProductArt id={l.id} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display font-bold text-pink">
                  {l.name[lang]}
                </p>
                <p className="text-xs text-teal/70">
                  {tr("qty")}: {l.qty} × €{l.price.toFixed(2)}
                </p>
              </div>
              <span className="font-display font-extrabold text-teal">
                €{(l.price * l.qty).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-pink/10 px-4 py-3 ring-1 ring-pink/30">
          <span className="font-display text-lg text-teal">{tr("total")}</span>
          <span className="font-display text-2xl font-extrabold text-pink">
            €{total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Contact form */}
      <form onSubmit={submit} className="flex flex-col gap-3" noValidate>
        <h2 className="font-display text-xl font-bold text-teal">
          {tr("contactData")}
        </h2>

        <div>
          <input
            className={inputCls}
            placeholder={tr("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-pink">{errors.name}</p>}
        </div>

        <div>
          <input
            className={inputCls}
            placeholder={tr("email")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-pink">{errors.email}</p>}
        </div>

        <div>
          <input
            className={inputCls}
            placeholder={tr("phone")}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-xs text-pink">{errors.phone}</p>}
        </div>

        <textarea
          className={inputCls + " min-h-[90px] resize-y"}
          placeholder={tr("commentOptional")}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {errors.form && (
          <p className="rounded-xl bg-pink/10 px-3 py-2 text-sm text-pink ring-1 ring-pink/30">
            {errors.form}
          </p>
        )}

        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={status === "sending"}
          className="mt-2 rounded-2xl bg-pink py-3.5 font-display text-lg font-extrabold text-ink shadow-glowpink hover:brightness-105 disabled:opacity-60"
        >
          {status === "sending" ? tr("sending") : tr("confirmOrder")}
        </motion.button>
      </form>
    </div>
  );
}
