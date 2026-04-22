import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { languageNames, languages, translations, type Language } from "@/lib/translations";

type Direction = "ltr" | "rtl";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  dir: Direction;
  languageNames: Record<Language, string>;
  content: (typeof translations)[Language];
};

const STORAGE_KEY = "southvoyage-language";
const RTL_LANGUAGES = new Set<string>(["ar", "he", "fa", "ur"]);

const isLanguage = (value: string | null): value is Language => {
  return value !== null && (languages as readonly string[]).includes(value);
};

const getDirection = (language: Language): Direction => {
  return RTL_LANGUAGES.has(language) ? "rtl" : "ltr";
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const urlLanguage = new URLSearchParams(window.location.search).get("lang");
    if (isLanguage(urlLanguage)) return urlLanguage;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : "en";
  });

  const dir = getDirection(language);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [dir, language]);

  useEffect(() => {
    const urlLanguage = searchParams.get("lang");
    if (isLanguage(urlLanguage) && urlLanguage !== language) {
      setLanguage(urlLanguage);
      return;
    }

    if (!urlLanguage && language !== "en") {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("lang", language);
      setSearchParams(nextParams, { replace: true });
    }

    if (urlLanguage === "en") {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("lang");
      setSearchParams(nextParams, { replace: true });
    }
  }, [language, searchParams, setSearchParams]);

  const handleSetLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const nextParams = new URLSearchParams(searchParams);

    if (nextLanguage === "en") {
      nextParams.delete("lang");
    } else {
      nextParams.set("lang", nextLanguage);
    }

    setSearchParams(nextParams, { replace: false });
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      dir,
      languageNames,
      content: translations[language],
    }),
    [dir, language, searchParams],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};
