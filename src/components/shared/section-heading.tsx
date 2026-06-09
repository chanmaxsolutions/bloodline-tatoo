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

function splitSectionDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);
}

interface SectionHeadingProps
  extends React.ComponentProps<"header">, VariantProps<typeof sectionHeadingVariants> {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  /** When set, applied to the heading for `aria-labelledby` on the parent section. */
  headingId?: string;
  /** Page hero sections use `1`; in-page bands default to `2`; nested sub-bands may use `3`. */
  headingLevel?: 1 | 2 | 3;
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
  headingLevel = 2,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = headingLevel === 1 ? "h1" : headingLevel === 3 ? "h3" : "h2";

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
      <HeadingTag
        id={headingId}
        className={clsx(
          "text-heading-display",
          /** `cn`/`tailwind-merge` treats `text-heading-display` + `text-foreground` as conflicting `text-*` and drops the display preset—use `clsx` only here. */
          titleClassName ?? "text-3xl md:text-4xl",
        )}
      >
        {heading}
      </HeadingTag>
      {description
        ? (() => {
            const paragraphs = splitSectionDescription(description);
            const paragraphClassName = cn(
              "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug text-pretty",
              descriptionClassName,
            );

            if (paragraphs.length <= 1) {
              return <p className={paragraphClassName}>{paragraphs[0] ?? description}</p>;
            }

            return (
              <div className="flex w-full flex-col gap-4 md:gap-5">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className={paragraphClassName}>
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          })()
        : null}
    </header>
  );
}

export { SectionHeading, sectionHeadingVariants };
