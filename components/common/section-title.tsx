import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-xl">
        <span className="size-1.5 rounded-full bg-cyan-400" />
        {eyebrow}
      </div>
      <div className="space-y-3">
        <h2 className="font-heading text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
      </div>
    </div>
  );
}