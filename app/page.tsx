import type { Metadata } from "next";

import { About } from "@/components/about/about";
import { Education } from "@/components/about/education";
import { AnimatedBackground } from "@/components/effects/animated-background";
import { MouseGlow } from "@/components/effects/mouse-glow";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/Hero";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { DocumentLocale } from "@/components/common/document-locale";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import { site } from "@/data/site";
import { normalizeLocale, type Locale } from "@/lib/locale";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const { lang } = (await searchParams) ?? {};
  const locale = normalizeLocale(lang);
  const copy = getPortfolioCopy(locale);

  return {
    title: `${site.name} | ${copy.hero.titleLine}`,
    description: copy.hero.description,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { lang } = (await searchParams) ?? {};
  const locale = normalizeLocale(lang);

  return (
    <main className="relative isolate overflow-hidden">
      <DocumentLocale locale={locale} />
      <AnimatedBackground />
      <MouseGlow />
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Experience locale={locale} />
      <Education locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}