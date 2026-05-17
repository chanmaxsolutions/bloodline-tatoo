import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { GoogleMark } from "@/components/shared/google-review-primitives";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageGoogleStudioLink } from "@/types/reviews-page";

const ctaTitleClassName =
  "text-heading-display w-full max-w-4xl text-balance text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl md:leading-[0.9] lg:text-8xl";

const ctaDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface ReviewsGoogleCtaSectionProps {
  studioLinks: readonly ReviewsPageGoogleStudioLink[];
  isGlobal: boolean;
}

function ReviewsGoogleCtaSection({ studioLinks, isGlobal }: ReviewsGoogleCtaSectionProps) {
  const primaryLink = studioLinks[0];

  return (
    <section
      aria-labelledby="reviews-google-cta-heading"
      className={cn(
        "border-t border-border/50 bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
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
            <h2 id="reviews-google-cta-heading" className={ctaTitleClassName}>
              {isGlobal ? "CHECK REVIEWS BY STUDIO" : "SEE THE FULL TIMELINE ON GOOGLE"}
            </h2>
            <p className={ctaDescriptionClassName}>
              {isGlobal
                ? "Each Bloodline studio maintains its own Google Business Profile. Open the listing for the location you are planning to visit — read every review, see photos, and confirm ratings before you book."
                : "This page shows a curated slice of our Google reviews. Open our Google Business Profile to browse the complete history, photos, and the latest ratings from clients."}
            </p>
          </div>

          <div
            className={sectionRevealItemClass(
              "sm",
              cn(
                "flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center",
                isGlobal ? "max-w-3xl" : "max-w-xl",
              ),
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

          {primaryLink && !isGlobal ? (
            <p className={sectionRevealItemClass("md", "font-sans text-sm text-muted-foreground")}>
              Prefer to verify in Maps?{" "}
              <a
                href={primaryLink.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-white/25 underline-offset-2 outline-none transition-colors motion-fast hover:decoration-white/40 focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                Open our Google Business Profile
              </a>
            </p>
          ) : null}
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ReviewsGoogleCtaSection };
