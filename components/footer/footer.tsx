import { Container } from "@/components/common/container";
import { site } from "@/data/site";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = getPortfolioCopy(locale);

  return (
    <footer className="border-t border-white/8 py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {site.name}. {copy.footer}
          </p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(copy.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-sm text-slate-300 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}