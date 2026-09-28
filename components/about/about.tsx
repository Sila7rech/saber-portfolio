import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { StatCard } from "@/components/common/stat-card";
import { site, stats } from "@/data/site";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const copy = getPortfolioCopy(locale);

  return (
    <section id="about" className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-10">
            <SectionTitle
              eyebrow={copy.about.eyebrow}
              title={copy.about.title}
              description={copy.about.paragraphs[0]}
            />

            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
              <p>{copy.about.paragraphs[0]}</p>
              <p>{copy.about.paragraphs[1]}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}