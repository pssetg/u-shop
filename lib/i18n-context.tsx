"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang } from "./types";
import { t, TKey } from "./translations";

const STORAGE_KEY = "ushop-lang";
const DEFAULT_LANG: Lang = "ua";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: TKey) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Load saved language after mount (avoids hydration mismatch).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "ua" || saved === "en" || saved === "es") {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    try {
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  };

  const tr = (key: TKey) => t[key][lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
