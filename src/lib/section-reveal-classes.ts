import { clsx } from "clsx";

export type SectionRevealDelay = "none" | "sm" | "md" | "lg" | "xl";

const sectionRevealDelayClassName: Record<SectionRevealDelay, string> = {
  none: "",
  sm: "section-reveal-delay-sm",
  md: "section-reveal-delay-md",
  lg: "section-reveal-delay-lg",
  xl: "section-reveal-delay-xl",
};

/**
 * Item inside a `SectionReveal` root — fades up when the section enters the viewport.
 * Uses `clsx` (not `cn`) so `text-heading-display` is not dropped when paired with `text-foreground`.
 */
function sectionRevealItemClass(delay: SectionRevealDelay = "none", className?: string): string {
  return clsx("section-reveal-item", sectionRevealDelayClassName[delay], className);
}

/** Staggered grid/list children (0-based index, capped at six steps). */
function sectionRevealStaggerClass(index: number, className?: string): string {
  const step = Math.min(Math.max(index, 0), 5) + 1;
  return clsx("section-reveal-item", `section-reveal-stagger-${step}`, className);
}

export { sectionRevealItemClass, sectionRevealStaggerClass };
