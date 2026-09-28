import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 pl-7 backdrop-blur-xl"
        >
          <span className="absolute left-3 top-7 size-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
          <div className="space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-cyan-100/75">{item.subtitle}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {item.period}
              </span>
            </div>
            <p className="text-sm leading-7 text-slate-300">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}