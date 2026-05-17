import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ReviewsPageGrid } from "@/components/sections/reviews-page-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageContent } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";

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

interface ReviewsPageSectionProps {
  content: ReviewsPageContent;
  region: RegionSlug;
}

function ReviewsPageSection({ content, region }: ReviewsPageSectionProps) {
  const showStudioName = region === "global";

  return (
    <>
      <section
        aria-labelledby="reviews-page-heading"
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

        <Container size="wide" className="relative flex flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionReveal className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            <SectionHeading
              align="center"
              eyebrow={content.intro.eyebrow}
              heading={content.intro.heading}
              description={content.intro.description}
              headingId="reviews-page-heading"
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
              {content.trustStats.map((stat, index) => (
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

            <div className={sectionRevealItemClass("lg")}>
              <ReviewsPageGrid
                testimonials={content.testimonials}
                googleBusinessProfileUrl={content.googleBusinessProfileUrl}
                showStudioName={showStudioName}
              />
            </div>
          </SectionReveal>
        </Container>
      </section>
    </>
  );
}

export { ReviewsPageSection };
