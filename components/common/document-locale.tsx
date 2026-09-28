"use client";

import { useEffect } from "react";

import type { Locale } from "@/lib/locale";

type DocumentLocaleProps = {
  locale: Locale;
};

export function DocumentLocale({ locale }: DocumentLocaleProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}