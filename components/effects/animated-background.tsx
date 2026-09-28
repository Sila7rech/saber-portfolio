import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_24%),radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,7,18,0.18),rgba(3,7,18,0.92))]" />
      <AnimatedGridPattern
        width={56}
        height={56}
        className="[mask-image:radial-gradient(circle_at_center,white,transparent_78%)] opacity-35"
        maxOpacity={0.12}
        numSquares={120}
      />
    </div>
  );
}