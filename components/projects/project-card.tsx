"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/common/magnetic-button";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import type { Project } from "@/types/site";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  locale: Locale;
};

export function ProjectCard({ project, featured, locale }: ProjectCardProps) {
  const copy = getPortfolioCopy(locale);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={cn(
        "group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl",
        featured && "lg:grid lg:grid-cols-[1.1fr_0.9fr]"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "min-h-[22rem]" : "aspect-[16/10]") }>
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,7,18,0.96),rgba(3,7,18,0.18))]" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-100 backdrop-blur-md"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">{featured ? copy.projectCard.featured : copy.projectCard.selected}</p>
          <h3 className="font-heading text-2xl font-semibold text-white">{project.name}</h3>
          <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="space-y-3 text-sm text-slate-300">
          <p>
            <span className="text-white">{copy.projectCard.architecture}:</span> {project.architecture}
          </p>
          <p>
            <span className="text-white">{copy.projectCard.challenge}:</span> {project.challenges}
          </p>
          <p>
            <span className="text-white">{copy.projectCard.solution}:</span> {project.solutions}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <MagneticButton href={project.githubUrl} className="bg-white text-slate-950 hover:bg-cyan-300">
            <FaGithub className="mr-2 size-4" />
            {copy.projectCard.github}
          </MagneticButton>
          <MagneticButton href={project.liveUrl}>
            <ArrowUpRight className="mr-2 size-4" />
            {copy.projectCard.liveDemo}
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}