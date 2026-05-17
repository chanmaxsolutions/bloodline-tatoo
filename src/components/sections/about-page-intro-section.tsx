import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { homepageGhostCtaClassName } from "@/lib/homepage-ghost-cta";
import { cn } from "@/lib/utils";
import type { AboutPageIntro } from "@/types/about-page";

const aboutIntroEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const aboutIntroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const aboutIntroDescriptionClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

interface AboutPageIntroSectionProps {
  intro: AboutPageIntro;
}

function splitIntroDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function AboutPageIntroSection({ intro }: AboutPageIntroSectionProps) {
  const descriptionParagraphs = splitIntroDescription(intro.description);

  return (
    <section
      aria-labelledby="about-page-heading"
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 pb-(--homepage-section-band-padding-y-mobile) md:pt-36",
        "lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,color-mix(in_oklab,var(--surface-elevated)_55%,transparent),transparent_72%)]"
      />

      <Container size="wide" className="relative">
        <SectionReveal className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center md:gap-8">
          <p className={sectionRevealItemClass("none", aboutIntroEyebrowClassName)}>
            {intro.eyebrow}
          </p>
          <h1
            id="about-page-heading"
            className={sectionRevealItemClass("sm", aboutIntroTitleClassName)}
          >
            {intro.heading}
          </h1>
          <div
            className={sectionRevealItemClass(
              "md",
              "flex w-full max-w-2xl flex-col gap-4 md:gap-5",
            )}
          >
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className={aboutIntroDescriptionClassName}>
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
            <Link href={intro.cta.href} className={homepageGhostCtaClassName()}>
              {intro.cta.label}
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageIntroSection };
