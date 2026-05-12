import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { cn } from "@/lib/utils";
import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";

interface AuthoritySectionProps {
  content: RegionHomepageAuthorityConfig;
}

/** Matches `SectionHeading` eyebrow treatment */
const authorityEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const descriptionClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

function AuthoritySection({ content }: AuthoritySectionProps) {
  return (
    <section
      id="homepage-authority"
      aria-labelledby="homepage-authority-heading"
      className={cn(
        "relative overflow-hidden bg-gradient-authority text-foreground",
        "pt-(--section-space-y-tight) pb-0",
        "lg:pt-(--section-space-y) lg:pb-0",
      )}
    >
      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-5">
          <p className={authorityEyebrowClassName}>{content.eyebrow}</p>
          <h2
            id="homepage-authority-heading"
            className="text-heading-display text-5xl leading-[0.95] md:text-6xl md:leading-[0.93] lg:text-7xl lg:leading-[0.9] text-foreground"
          >
            {content.heading}
          </h2>
          <p className={descriptionClassName}>
            {splitDescriptionEmphasis(content.description).map((segment, index) =>
              segment.emphasis ? (
                <strong key={index} className={emphasisClassName}>
                  {segment.text}
                </strong>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </p>
          <div className="flex justify-center">
            <Link
              href={content.ctaHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full border-border-strong bg-transparent sm:w-auto",
              )}
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { AuthoritySection };
