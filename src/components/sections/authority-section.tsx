import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { homepageGhostCtaClassName } from "@/lib/homepage-ghost-cta";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
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
        <SectionReveal className="mx-auto flex w-full flex-col items-center gap-4 text-center md:gap-5">
          <p className={sectionRevealItemClass("none", authorityEyebrowClassName)}>
            {content.eyebrow}
          </p>
          <h2
            id="homepage-authority-heading"
            className={sectionRevealItemClass(
              "sm",
              "text-heading-authority-display w-full max-w-4xl lg:max-w-5xl",
            )}
          >
            {content.heading}
          </h2>
          <div
            className={sectionRevealItemClass(
              "md",
              "flex w-full max-w-3xl flex-col gap-4 md:gap-5",
            )}
          >
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
          <div className={sectionRevealItemClass("lg", "flex justify-center")}>
            <Link href={content.ctaHref} className={homepageGhostCtaClassName()}>
              {content.ctaLabel}
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AuthoritySection };
