import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva("grid gap-3", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

interface SectionHeadingProps
  extends React.ComponentProps<"header">, VariantProps<typeof sectionHeadingVariants> {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

function SectionHeading({
  className,
  align,
  eyebrow,
  heading,
  description,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeadingProps) {
  return (
    <header
      data-slot="section-heading"
      className={cn(sectionHeadingVariants({ align }), className)}
      {...props}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-heading-display text-3xl md:text-4xl", titleClassName)}>{heading}</h2>
      {description ? (
        <p
          className={cn(
            "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

export { SectionHeading, sectionHeadingVariants };
