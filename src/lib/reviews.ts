import type { GoogleReview, RegionSlug } from "@/types";

export async function getRegionReviews(
  region: Exclude<RegionSlug, "global">,
): Promise<GoogleReview[]> {
  // Phase 1 placeholder: cached review ingestion is intentionally deferred.
  // When wiring real data: validate payloads with `googleReviewRecordSchema` (or
  // `googleReviewsFileSchema`), then map with `mapGoogleReviewsToHomepageTestimonials`
  // from `@/lib/map-google-review-to-homepage-testimonial` for the homepage carousel.
  void region;
  return [];
}
