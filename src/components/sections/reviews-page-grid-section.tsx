import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ReviewsPageGrid } from "@/components/sections/reviews-page-grid";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageContent } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";

interface ReviewsPageGridSectionProps {
  testimonials: ReviewsPageContent["testimonials"];
  googleBusinessProfileUrl: ReviewsPageContent["googleBusinessProfileUrl"];
  region: RegionSlug;
}

function ReviewsPageGridSection({
  testimonials,
  googleBusinessProfileUrl,
  region,
}: ReviewsPageGridSectionProps) {
  const showStudioName = region === "global";

  return (
    <section
      aria-label="Google reviews from Bloodline clients"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal>
          <div className={sectionRevealItemClass("lg")}>
            <ReviewsPageGrid
              testimonials={testimonials}
              googleBusinessProfileUrl={googleBusinessProfileUrl}
              showStudioName={showStudioName}
            />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ReviewsPageGridSection };
