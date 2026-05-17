import { cn } from "@/lib/utils";

export type SectionRevealDelay = "none" | "sm" | "md" | "lg" | "xl";

const sectionRevealDelayClassName: Record<SectionRevealDelay, string> = {
  none: "",
  sm: "section-reveal-delay-sm",
  md: "section-reveal-delay-md",
  lg: "section-reveal-delay-lg",
  xl: "section-reveal-delay-xl",
};

/** Item inside a `SectionReveal` root — fades up when the section enters the viewport. */
function sectionRevealItemClass(delay: SectionRevealDelay = "none", className?: string): string {
  return cn("section-reveal-item", sectionRevealDelayClassName[delay], className);
}

/** Staggered grid/list children (0-based index, capped at six steps). */
function sectionRevealStaggerClass(index: number, className?: string): string {
  const step = Math.min(Math.max(index, 0), 5) + 1;
  return cn("section-reveal-item", `section-reveal-stagger-${step}`, className);
}

export { sectionRevealItemClass, sectionRevealStaggerClass };
