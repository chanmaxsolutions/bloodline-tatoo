import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionSpacingTier = "tight" | "default" | "cinematic" | "none";
type SectionSurface = "transparent" | "base" | "elevated" | "strong";

interface SectionShellProps {
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  spacing?: SectionSpacingTier;
  surface?: SectionSurface;
  containerSize?: "default" | "narrow" | "wide" | "full";
  className?: string;
  /** Applied to the outer `<section>` (e.g. gradients that must not be overridden by utilities). */
  style?: CSSProperties;
  children: ReactNode;
}

const spacingClassMap: Record<SectionSpacingTier, string> = {
  tight: "section-space-tight",
  default: "section-space",
  cinematic: "py-24 md:py-32",
  none: "",
};

const surfaceClassMap: Record<SectionSurface, string> = {
  transparent: "",
  base: "bg-surface/40",
  elevated: "bg-surface-elevated/40",
  strong: "bg-surface-strong/40",
};

function SectionShell({
  id,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
  spacing = "default",
  surface = "transparent",
  containerSize = "wide",
  className,
  style,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      style={style}
      className={cn(spacingClassMap[spacing], surfaceClassMap[surface], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export { SectionShell };
export type { SectionSpacingTier, SectionSurface };
