export type Locale = "fr" | "en" | "ar";

const localePattern = /^(fr|en|ar)$/;

export function normalizeLocale(locale?: string): Locale {
  if (locale && localePattern.test(locale)) {
    return locale as Locale;
  }

  return "fr";
}

export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}