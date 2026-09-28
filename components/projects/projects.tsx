import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { projects as projectData } from "@/data/site";
import { getLocalizedProjects, getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

import { ProjectCard } from "./project-card";

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const copy = getPortfolioCopy(locale);
  const localizedProjects = getLocalizedProjects(locale);
  const featuredProject = localizedProjects.find((project) => project.featured) ?? localizedProjects[0];
  const otherProjects = localizedProjects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow={copy.projects.eyebrow}
            title={copy.projects.title}
            description={copy.projects.description}
          />

          <ProjectCard project={featuredProject} featured locale={locale} />

          <div className="grid gap-5 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}