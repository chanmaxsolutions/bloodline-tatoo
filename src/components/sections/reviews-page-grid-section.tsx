import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ReviewsPageGrid } from "@/components/sections/reviews-page-grid";
import { ReviewsTrustpilotInviteWidget } from "@/components/sections/reviews-trustpilot-invite-widget";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ReviewsPageContent } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";
import type { TrustpilotEvaluateLink } from "@/types/trustpilot";

interface ReviewsPageGridSectionProps {
  testimonials: ReviewsPageContent["testimonials"];
  googleBusinessProfileUrl: ReviewsPageContent["googleBusinessProfileUrl"];
  region: RegionSlug;
  trustpilotLinks: readonly TrustpilotEvaluateLink[];
}

function ReviewsPageGridSection({
  testimonials,
  googleBusinessProfileUrl,
  region,
  trustpilotLinks,
}: ReviewsPageGridSectionProps) {
  const showStudioName = region === "global";
  const isGlobal = region === "global";

  return (
    <section
      aria-label="Google reviews from Bloodline clients"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <div className={sectionRevealItemClass("none")}>
            <ReviewsTrustpilotInviteWidget links={trustpilotLinks} isGlobal={isGlobal} />
          </div>
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
