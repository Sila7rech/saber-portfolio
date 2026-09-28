"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { site } from "@/data/site";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

import { Container } from "@/components/common/container";
import { MagneticButton } from "@/components/common/magnetic-button";
import { ThemeToggle } from "@/components/common/theme-toggle";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const copy = getPortfolioCopy(locale);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function setLocale(nextLocale: Locale) {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", nextLocale);
    const hash = window.location.hash;
    window.location.href = `${pathname}?${params.toString()}${hash}`;
  }

  function currentLanguageLabel() {
    return copy.language[locale];
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#030712]/70 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="relative flex size-11 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <Image src="/monimage.jpeg" alt="Saber Bradai" fill className="object-cover object-center" />
          </span>
          <div className="hidden sm:block">
            <p className="font-heading text-base font-semibold text-white">{site.name}</p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{site.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {Object.entries(copy.nav).map(([key, label]) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-slate-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              aria-label="Change language"
              aria-haspopup="menu"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((current) => !current)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{currentLanguageLabel()}</span>
            </button>

            {isLanguageOpen ? (
              <div className="absolute right-0 top-12 z-50 min-w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                {(["fr", "en", "ar"] as Locale[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setLocale(option);
                      setIsLanguageOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] transition",
                      locale === option ? "bg-cyan-300 text-slate-950" : "text-slate-200 hover:bg-white/10"
                    )}
                    role="menuitem"
                  >
                    <span>{copy.language[option]}</span>
                    {locale === option ? <ChevronDown className="size-3 opacity-70" /> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <ThemeToggle />
          <MagneticButton href="#contact" className="bg-white text-slate-950 hover:bg-cyan-300">
            {copy.hero.buttons.contact}
          </MagneticButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              aria-label="Change language"
              aria-haspopup="menu"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((current) => !current)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{currentLanguageLabel()}</span>
            </button>

            {isLanguageOpen ? (
              <div className="absolute right-0 top-12 z-50 min-w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                {(["fr", "en", "ar"] as Locale[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setLocale(option);
                      setIsLanguageOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] transition",
                      locale === option ? "bg-cyan-300 text-slate-950" : "text-slate-200 hover:bg-white/10"
                    )}
                    role="menuitem"
                  >
                    <span>{copy.language[option]}</span>
                    {locale === option ? <ChevronDown className="size-3 opacity-70" /> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      <div className={cn("border-t border-white/8 bg-[#030712]/96 lg:hidden", isOpen ? "block" : "hidden")}>
        <Container className="grid gap-4 py-5">
          {Object.entries(copy.nav).map(([key, label]) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
            >
              {label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}