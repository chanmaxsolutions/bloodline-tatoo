import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageContent, ReviewsPageIntroBackgroundImage } from "@/types/reviews-page";

const reviewsHeroEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const reviewsHeroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const reviewsHeroDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const statValueClassName =
  "font-heading text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl";

const statLabelClassName =
  "text-balance font-heading text-base font-medium uppercase tracking-normal text-muted-foreground md:text-lg";

/** Matches former single-section gap between stats row and review grid. */
const reviewsIntroBottomSpacingClassName = "pb-10 md:pb-12 lg:pb-14";

interface ReviewsPageIntroSectionProps {
  intro: ReviewsPageContent["intro"];
  trustStats: ReviewsPageContent["trustStats"];
  /** Regional hero poster — pairs with homepage hero video fallback. */
  introBackgroundPoster: ReviewsPageIntroBackgroundImage;
  /** Regional homepage hero clip (same as site hero). */
  introBackgroundVideoSrc: string;
}

function ReviewsPageIntroSection({
  intro,
  trustStats,
  introBackgroundPoster,
  introBackgroundVideoSrc,
}: ReviewsPageIntroSectionProps) {
  return (
    <section
      aria-labelledby="reviews-page-heading"
      className={cn(
        "relative isolate overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 md:pt-36",
        reviewsIntroBottomSpacingClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full overflow-hidden">
        <HeroBackgroundVideo
          key={introBackgroundVideoSrc}
          src={introBackgroundVideoSrc}
          poster={introBackgroundPoster.src}
          stillSrc={introBackgroundPoster.src}
          stillAlt={introBackgroundPoster.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div aria-hidden className={pageIntroBandSurfaceGradientClassName} />

      <Container size="wide" className="relative z-10 flex flex-col gap-10 md:gap-12 lg:gap-14">
        <SectionReveal className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={intro.eyebrow}
            heading={intro.heading}
            description={intro.description}
            headingId="reviews-page-heading"
            headingLevel={1}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", reviewsHeroEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", reviewsHeroTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", reviewsHeroDescriptionClassName)}
          />

          <ul
            aria-label="Review trust metrics"
            className={cn(
              "mx-auto grid w-full max-w-5xl divide-y divide-border/45",
              "sm:grid-cols-3 sm:divide-x sm:divide-y-0",
            )}
          >
            {trustStats.map((stat, index) => (
              <li
                key={stat.label}
                className={sectionRevealStaggerClass(
                  index,
                  "flex flex-col items-center justify-center gap-1 px-4 py-5 text-center sm:py-6",
                )}
              >
                <p className={statValueClassName} aria-hidden>
                  {stat.value}
                </p>
                <p className={statLabelClassName}>{stat.label}</p>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ReviewsPageIntroSection };
