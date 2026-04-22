import type { Language } from "@/lib/translations";

export const getLanguagePath = (pathname: string, language: Language) => {
  const normalizedPath = pathname || "/";
  return language === "en"
    ? `https://southvoyage.com${normalizedPath}`
    : `https://southvoyage.com${normalizedPath}?lang=${language}`;
};

export const buildAlternateLinks = (pathname: string) => [
  { hrefLang: "en", href: getLanguagePath(pathname, "en") },
  { hrefLang: "es", href: getLanguagePath(pathname, "es") },
  { hrefLang: "fr", href: getLanguagePath(pathname, "fr") },
  { hrefLang: "ru", href: getLanguagePath(pathname, "ru") },
  { hrefLang: "x-default", href: getLanguagePath(pathname, "en") },
];

export const ogLocaleByLanguage: Record<Language, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  ru: "ru_RU",
};