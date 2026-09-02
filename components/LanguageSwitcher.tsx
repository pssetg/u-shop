"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { LANGS } from "@/lib/translations";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="relative flex items-center gap-0.5 rounded-full bg-ink-soft p-1 ring-1 ring-white/10">
      {LANGS.map((l) => {
        const active = l.id === lang;
        return (
          <button
            key={l.id}
            onClick={() => setLang(l.id)}
            className={`relative z-10 rounded-full px-2.5 py-1 text-sm font-bold transition-colors ${
              active ? "text-ink" : "text-teal/80 hover:text-teal"
            }`}
            aria-pressed={active}
            aria-label={`Switch language to ${l.label}`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-teal"
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            )}
            <span className="mr-1">{l.flag}</span>
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
