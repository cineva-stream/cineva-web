"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Locale } from "./content";

type TranslationDict = (typeof translations)["id"];

interface LanguageContextValue {
  lang: Locale;
  setLang: (next: Locale) => void;
  t: TranslationDict;
}

const STORAGE_KEY = "cineva_lang";

function detectSystemLocale(): Locale {
  if (typeof window === "undefined") return "id";
  const nav = window.navigator;
  const rawLang = (nav.languages?.[0] || nav.language || "").toLowerCase().trim();
  // Kode bahasa Indonesia pada browser/OS modern ("id", "id-id") maupun Android/Java lama ("in", "in-id")
  if (rawLang === "id" || rawLang.startsWith("id-") || rawLang === "in" || rawLang.startsWith("in-")) {
    return "id";
  }
  return "en";
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "id",
  setLang: () => {},
  t: translations.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("id");

  useEffect(() => {
    let resolved: Locale = detectSystemLocale();
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "id" || saved === "en") {
        resolved = saved;
      }
    } catch {
      /* ignore storage errors */
    }
    setLangState((prev) => (prev !== resolved ? resolved : prev));
    document.documentElement.lang = resolved;
  }, []);

  const setLang = (next: Locale) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang] || translations.id,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
