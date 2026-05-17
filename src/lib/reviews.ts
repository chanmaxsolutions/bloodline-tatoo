import { getCachedGoogleReviews } from "@/lib/reviews-cache";
import type { GoogleReview } from "@/types/review";
import type { RegionSlug } from "@/types/region";

async function getRegionReviews(region: Exclude<RegionSlug, "global">): Promise<GoogleReview[]> {
  return getCachedGoogleReviews(region);
}

export { getRegionReviews };
