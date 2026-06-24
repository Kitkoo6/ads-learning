"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { messages, type MessageKey } from "./messages";
import type { Bilingual, Locale, StudyMode } from "./types";

type I18nContextValue = {
  locale: Locale;
  studyMode: StudyMode;
  setLocale: (l: Locale) => void;
  setStudyMode: (m: StudyMode) => void;
  t: (key: MessageKey) => string;
  /** Render bilingual content according to current locale + study mode. */
  tb: (b: Bilingual) => { primary: string; secondary?: string };
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCALE_KEY = "ads-learning:locale";
const MODE_KEY = "ads-learning:study-mode";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [studyMode, setStudyModeState] = useState<StudyMode>("single");

  useEffect(() => {
    const storedLocale = (localStorage.getItem(LOCALE_KEY) as Locale | null) ?? "en";
    const storedMode = (localStorage.getItem(MODE_KEY) as StudyMode | null) ?? "single";
    setLocaleState(storedLocale);
    setStudyModeState(storedMode);
    document.documentElement.lang = storedLocale;
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(LOCALE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const setStudyMode = useCallback((m: StudyMode) => {
    setStudyModeState(m);
    localStorage.setItem(MODE_KEY, m);
  }, []);

  const t = useCallback(
    (key: MessageKey) => messages[key][locale],
    [locale]
  );

  const tb = useCallback(
    (b: Bilingual) => {
      if (studyMode === "side-by-side") {
        return {
          primary: b[locale],
          secondary: b[locale === "en" ? "th" : "en"],
        };
      }
      return { primary: b[locale] };
    },
    [locale, studyMode]
  );

  const value = useMemo(
    () => ({ locale, studyMode, setLocale, setStudyMode, t, tb }),
    [locale, studyMode, setLocale, setStudyMode, t, tb]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
