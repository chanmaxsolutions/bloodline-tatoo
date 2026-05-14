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
  "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

function splitAuthorityDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function AuthoritySection({ content }: AuthoritySectionProps) {
  const descriptionParagraphs = splitAuthorityDescription(content.description);

  return (
    <section
      id="homepage-authority"
      aria-labelledby="homepage-authority-heading"
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-5">
          <p className={cn(authorityEyebrowClassName, "hero-reveal-motion")}>{content.eyebrow}</p>
          <h2
            id="homepage-authority-heading"
            className="text-heading-authority-display hero-reveal-motion hero-reveal-motion-delay-sm"
          >
            {content.heading}
          </h2>
          <div className="hero-reveal-motion hero-reveal-motion-delay-md flex w-full flex-col gap-4 md:gap-5">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className={descriptionClassName}>
                {splitDescriptionEmphasis(paragraph).map((segment, segIndex) =>
                  segment.emphasis ? (
                    <strong key={segIndex} className={emphasisClassName}>
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={segIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href={content.ctaHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "hero-reveal-motion hero-reveal-motion-delay-lg w-full border-border-strong bg-transparent sm:w-auto",
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
