"use client";

import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownToLine, Mail, Sparkles } from "lucide-react";

import { heroRoles, socialLinks, site } from "@/data/site";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

import { Container } from "@/components/common/container";
import { MagneticButton } from "@/components/common/magnetic-button";
import { StatCard } from "@/components/common/stat-card";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const copy = getPortfolioCopy(locale);

  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-10 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-xl">
              <Sparkles className="size-3.5 text-cyan-300" />
              {copy.hero.badge}
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-cyan-200/75">{copy.hero.titleLine}</p>
              <h1 className="font-heading text-5xl leading-[0.95] font-semibold text-white sm:text-7xl lg:text-8xl">
                Saber Bradai
              </h1>
              <div className="font-heading text-2xl font-medium text-slate-200 sm:text-3xl lg:text-4xl">
                <TypeAnimation
                  sequence={copy.hero.roles.flatMap((role) => [role, 1800])}
                  wrapper="span"
                  speed={42}
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{copy.hero.description}</p>

            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#contact" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                {copy.hero.buttons.contact}
              </MagneticButton>
              <MagneticButton href="#projects">{copy.hero.buttons.projects}</MagneticButton>
              <a
                href="/CV-Saber%20Bradai%202026.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl hover:bg-white/10"
              >
                <ArrowDownToLine className="size-4" />
                {copy.hero.buttons.download}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel={link.icon === "mail" ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl hover:bg-white/8"
                >
                  {link.icon === "github" && <FaGithub className="size-4" />}
                  {link.icon === "linkedin" && <FaLinkedinIn className="size-4" />}
                  {link.icon === "mail" && <Mail className="size-4" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem]">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_28%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="grid gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1220]">
                  <Image
                    src="/monimage.jpeg"
                    alt="Saber Bradai portrait"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{copy.hero.locationLabel}</p>
                    <p className="mt-2 text-sm text-white">{site.location}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{copy.hero.bornLabel}</p>
                    <p className="mt-2 text-sm text-white">{site.birthDate}</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <StatCard value="6+" label={copy.hero.stats.projects.label} detail={copy.hero.stats.projects.detail} className="p-4" />
                  <StatCard value="3" label={copy.hero.stats.internships.label} detail={copy.hero.stats.internships.detail} className="p-4" />
                  <StatCard value="100%" label={copy.hero.stats.focus.label} detail={copy.hero.stats.focus.detail} className="p-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}