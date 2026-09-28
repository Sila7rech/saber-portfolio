import { Badge } from "@/components/ui/badge";

import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const copy = getPortfolioCopy(locale);

  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow={copy.skills.eyebrow}
            title={copy.skills.title}
            description={copy.skills.description}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{group.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="border-white/10 bg-white/[0.03] text-slate-100">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}