import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { Timeline } from "@/components/common/timeline";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type EducationProps = {
  locale: Locale;
};

export function Education({ locale }: EducationProps) {
  const copy = getPortfolioCopy(locale);

  const timelineItems = copy.educationEntries.map((entry) => ({
    title: entry.institution,
    subtitle: entry.focus,
    period: entry.period,
    description: entry.description,
    highlights: [entry.focus],
  }));

  return (
    <section id="education" className="py-24 sm:py-28">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow={copy.education.eyebrow}
            title={copy.education.title}
            description={copy.education.description}
          />
          <Timeline items={timelineItems} />
        </div>
      </Container>
    </section>
  );
}