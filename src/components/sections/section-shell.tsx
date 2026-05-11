import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

type SectionSpacingTier = "tight" | "default" | "cinematic";
type SectionSurface = "transparent" | "base" | "elevated" | "strong";

interface SectionShellProps {
  id?: string;
  "aria-labelledby"?: string;
  spacing?: SectionSpacingTier;
  surface?: SectionSurface;
  containerSize?: "default" | "narrow" | "wide" | "full";
  className?: string;
  reveal?: boolean;
  revealMode?: "default" | "soft";
  revealDelay?: number;
  /** Applied to the outer `<section>` (e.g. gradients that must not be overridden by utilities). */
  style?: CSSProperties;
  children: ReactNode;
}

const spacingClassMap: Record<SectionSpacingTier, string> = {
  tight: "section-space-tight",
  default: "section-space",
  cinematic: "py-24 md:py-32",
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
  spacing = "default",
  surface = "transparent",
  containerSize = "wide",
  className,
  reveal = false,
  revealMode = "default",
  revealDelay = 0,
  style,
  children,
}: SectionShellProps) {
  const content = reveal ? (
    <Reveal mode={revealMode} delay={revealDelay}>
      {children}
    </Reveal>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      style={style}
      className={cn(spacingClassMap[spacing], surfaceClassMap[surface], className)}
    >
      <Container size={containerSize}>{content}</Container>
    </section>
  );
}

export { SectionShell };
export type { SectionSpacingTier, SectionSurface };
