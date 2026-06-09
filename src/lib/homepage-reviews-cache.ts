import {
  getCachedGoogleReviews,
  mapToHomepageTestimonials,
  sortReviewsNewestFirst,
} from "@/lib/reviews-cache";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

/**
 * Cached Outscraper → validated JSON → homepage carousel model.
 * - `global`: interleaved mix (Bangkok, Bali, Phuket) for the main site.
 * - Regional domains: that region’s pool only.
 */
export async function getHomepageTestimonialsFromCachedJson(
  region: RegionSlug,
): Promise<readonly HomepageTestimonial[]> {
  const reviews = await getCachedGoogleReviews(region);
  return sortReviewsNewestFirst(mapToHomepageTestimonials(reviews));
}
