import clsx from "clsx";
import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { GoogleMark } from "@/components/shared/google-review-primitives";
import { buttonVariants } from "@/components/ui/button";
import { homepageClosingCtaBandClassName } from "@/lib/homepage-section-surfaces";
import {
  pageClosingCtaBandActionsClassName,
  pageClosingCtaBandBorderlessSectionClassName,
  pageClosingCtaBandDescriptionClassName,
  pageClosingCtaBandSectionClassName,
  pageClosingCtaBandTitleClassName,
} from "@/lib/page-closing-cta-band";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageGoogleStudioLink } from "@/types/reviews-page";

interface ReviewsGoogleCtaSectionProps {
  studioLinks: readonly ReviewsPageGoogleStudioLink[];
  isGlobal: boolean;
}

function ReviewsGoogleCtaSection({ studioLinks, isGlobal }: ReviewsGoogleCtaSectionProps) {
  return (
    <section
      aria-labelledby="reviews-google-cta-heading"
      className={cn(
        pageClosingCtaBandSectionClassName,
        pageClosingCtaBandBorderlessSectionClassName,
        homepageClosingCtaBandClassName,
      )}
    >
      <Container size="wide">
        <SectionReveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:gap-10">
          <div
            className={sectionRevealItemClass("none", "flex flex-col items-center gap-4 md:gap-5")}
          >
            <p className="inline-flex items-center gap-2 font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
              <GoogleMark className="size-5" />
              <span>Verified on Google</span>
            </p>
            <h2
              id="reviews-google-cta-heading"
              className={clsx("text-heading-display", pageClosingCtaBandTitleClassName)}
            >
              {isGlobal ? "CHECK REVIEWS BY STUDIO" : "SEE THE FULL TIMELINE ON GOOGLE"}
            </h2>
            <p className={pageClosingCtaBandDescriptionClassName}>
              {isGlobal
                ? "Each Bloodline studio maintains its own Google Business Profile. Open the listing for the location you are planning to visit — read every review, see photos, and confirm ratings before you book."
                : "This page shows a curated slice of our Google reviews. Open our Google Business Profile to browse the complete history, photos, and the latest ratings from clients."}
            </p>
          </div>

          <div
            className={sectionRevealItemClass(
              "sm",
              cn(pageClosingCtaBandActionsClassName, isGlobal && "max-w-3xl"),
            )}
          >
            {studioLinks.map((studio) => (
              <Link
                key={studio.region}
                href={studio.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: isGlobal ? "outline" : "primary", size: "lg" }),
                  "w-auto max-w-full",
                )}
              >
                {isGlobal ? `Google reviews — ${studio.studioName}` : "View all reviews on Google"}
              </Link>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ReviewsGoogleCtaSection };
