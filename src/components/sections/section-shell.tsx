import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionSpacingTier = "tight" | "default" | "cinematic";
type SectionSurface = "transparent" | "base" | "elevated" | "strong";

interface SectionShellProps {
  id?: string;
  spacing?: SectionSpacingTier;
  surface?: SectionSurface;
  containerSize?: "default" | "narrow" | "wide" | "full";
  className?: string;
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
  spacing = "default",
  surface = "transparent",
  containerSize = "wide",
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn(spacingClassMap[spacing], surfaceClassMap[surface], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export { SectionShell };
export type { SectionSpacingTier, SectionSurface };
