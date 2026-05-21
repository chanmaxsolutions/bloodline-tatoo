import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { AboutPageReviewsCarousel } from "@/components/sections/about-page-reviews-carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaSurfaceClassName } from "@/lib/homepage-ghost-cta";
import { reviewsPreviewCopy } from "@/lib/reviews-preview-copy";
import { sortReviewsByTextLengthDescending } from "@/lib/reviews-cache";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";

const homepageReviewsHeadingId = "homepage-reviews-preview-heading";

const reviewsEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const reviewsTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const reviewsDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const homepageReviewsBottomSpacingClassName =
  "pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)";

interface HomepageTestimonialsCarouselSectionProps {
  region: RegionSlug;
  regionName: string;
  testimonials: readonly ReviewsPageTestimonial[];
  googleBusinessProfileUrl: string;
}

function HomepageTestimonialsCarouselSection({
  region,
  regionName,
  testimonials,
  googleBusinessProfileUrl,
}: HomepageTestimonialsCarouselSectionProps) {
  const reviewsCopy = reviewsPreviewCopy(region, regionName);
  const carouselItems = sortReviewsByTextLengthDescending(testimonials);
  const showStudioName = region === "global";

  if (carouselItems.length === 0) return null;

  return (
    <section
      id="homepage-testimonials"
      aria-labelledby={homepageReviewsHeadingId}
      className={cn(
        "border-t border-border/50 bg-surface text-foreground",
        "pt-16 md:pt-20 lg:pt-24",
        homepageReviewsBottomSpacingClassName,
      )}
    >
      <Container size="wide">
        <SectionReveal className="flex flex-col gap-10 md:gap-12">
          <SectionHeading
            align="center"
            eyebrow={reviewsCopy.eyebrow}
            heading={reviewsCopy.heading}
            description={reviewsCopy.description}
            headingId={homepageReviewsHeadingId}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", reviewsEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", reviewsTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", reviewsDescriptionClassName)}
          />

          <div className={sectionRevealItemClass("lg", "flex flex-col gap-4 md:gap-5")}>
            <AboutPageReviewsCarousel
              sectionLabelId={homepageReviewsHeadingId}
              testimonials={carouselItems}
              googleBusinessProfileUrl={googleBusinessProfileUrl}
              showStudioName={showStudioName}
            />
            <div className="flex justify-center">
              <Link
                href="/reviews"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  homepageGhostCtaSurfaceClassName,
                )}
              >
                View all reviews
              </Link>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { HomepageTestimonialsCarouselSection };
