import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { Timeline } from "@/components/common/timeline";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const copy = getPortfolioCopy(locale);

  const items = copy.experienceEntries.map((entry) => ({
    title: entry.company,
    subtitle: entry.role,
    period: entry.period,
    description: `${entry.description} ${entry.location}.`,
    highlights: entry.highlights,
  }));

  return (
    <section id="experience" className="py-24 sm:py-28">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow={copy.experience.eyebrow}
            title={copy.experience.title}
            description={copy.experience.description}
          />
          <Timeline items={items} />
        </div>
      </Container>
    </section>
  );
}