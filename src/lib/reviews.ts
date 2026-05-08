import type { GoogleReview, RegionSlug } from "@/types";

export async function getRegionReviews(
  region: Exclude<RegionSlug, "global">,
): Promise<GoogleReview[]> {
  // Phase 1 placeholder: cached review ingestion is intentionally deferred.
  void region;
  return [];
}
