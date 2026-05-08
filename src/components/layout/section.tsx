import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      default: "section-space",
      tight: "section-space-tight",
      none: "",
    },
    surface: {
      none: "",
      base: "bg-surface",
      elevated: "bg-surface-elevated",
      strong: "bg-surface-strong",
    },
  },
  defaultVariants: {
    spacing: "default",
    surface: "none",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">, VariantProps<typeof sectionVariants> {}

function Section({ className, spacing, surface, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, surface }), className)}
      {...props}
    />
  );
}

export { Section, sectionVariants };
