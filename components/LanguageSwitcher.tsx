"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { LANGS } from "@/lib/translations";
import { Lang } from "@/lib/types";

/**
 * Real SVG flags — emoji flags are NOT rendered as flags on Windows
 * (they fall back to the two regional-indicator letters, e.g. "GB").
 */
function Flag({ lang }: { lang: Lang }) {
  const common = "h-3.5 w-5 shrink-0 rounded-[3px] ring-1 ring-black/30";

  if (lang === "ua") {
    return (
      <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
        <rect width="60" height="20" fill="#0057B7" />
        <rect y="20" width="60" height="20" fill="#FFD700" />
      </svg>
    );
  }

  if (lang === "es") {
    return (
      <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
        <rect width="60" height="40" fill="#AA151B" />
        <rect y="10" width="60" height="20" fill="#F1BF00" />
      </svg>
    );
  }

  // English — Union Jack
  return (
    <svg viewBox="0 0 60 40" className={common} aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFF" strokeWidth="8" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0 V40 M0 20 H60" stroke="#FFF" strokeWidth="13" />
      <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="8" />
    </svg>
  );
}

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
            className={`relative z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-bold transition-colors ${
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
            <Flag lang={l.id} />
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
