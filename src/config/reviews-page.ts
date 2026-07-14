import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import type { ReviewsPageIntro, ReviewsPageTrustStat } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";
import { resolveGoogleBusinessTrustStats } from "@/lib/google-business-proof";

function reviewsPageIntroForRegion(region: RegionSlug): ReviewsPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Client proof",
      heading: "GOOGLE REVIEWS ACROSS BLOODLINE",
      description:
        "Real feedback from clients who booked across our Bangkok, Bali, and Phuket studios. Every card links back to Google so you can verify the source.",
    };
  }

  return {
    eyebrow: "Client proof",
    heading: `GOOGLE REVIEWS IN ${region === "bangkok" ? "BANGKOK" : region === "bali" ? "BALI" : "PHUKET"}`,
    description:
      "A curated selection from our live Google Business Profile. Open any review on Google to read the full thread, see photos, or check the latest ratings.",
  };
}

function reviewsPageTrustStatsForRegion(
  region: RegionSlug,
  curatedCount: number,
): ReviewsPageTrustStat[] {
  const curatedLabel = region === "global" ? "Reviews shown here" : `Curated on this page`;
  const googleTrust = resolveGoogleBusinessTrustStats(region);

  return [
    { label: googleTrust.rating.label, value: googleTrust.rating.value },
    { label: curatedLabel, value: String(curatedCount) },
    { label: googleTrust.reviewCount.label, value: googleTrust.reviewCount.value },
  ];
}

export const reviewsPageIntroBackgroundImage = pageIntroBackgroundFor("reviews");
export { reviewsPageIntroForRegion, reviewsPageTrustStatsForRegion };
