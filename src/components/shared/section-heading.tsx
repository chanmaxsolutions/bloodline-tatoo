import * as React from "react";
import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva("", {
  variants: {
    align: {
      left: "grid gap-3 text-left",
      /** Matches homepage authority intro stack: centered column + tactile vertical rhythm */
      center: "flex flex-col items-center gap-4 text-center md:gap-5",
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
  /** When set, applied to the `h2` for `aria-labelledby` on the parent section. */
  headingId?: string;
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
  headingId,
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
      <h2
        id={headingId}
        className={clsx(
          "text-heading-display",
          /** `cn`/`tailwind-merge` treats `text-heading-display` + `text-foreground` as conflicting `text-*` and drops the display preset—use `clsx` only here. */
          titleClassName ?? "text-3xl md:text-4xl",
        )}
      >
        {heading}
      </h2>
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
