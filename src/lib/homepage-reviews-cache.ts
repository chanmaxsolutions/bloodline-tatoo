import {
  getCachedGoogleReviews,
  mapToHomepageTestimonials,
  mixRegionalGoogleReviews,
  regionalPools,
  sortReviewsNewestFirst,
} from "@/lib/reviews-cache";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

function mixRegionalHomepageTestimonials(): HomepageTestimonial[] {
  return sortReviewsNewestFirst(mapToHomepageTestimonials(mixRegionalGoogleReviews()));
}

/**
 * Cached Outscraper → validated JSON → homepage carousel model.
 * - `global`: interleaved mix (Bangkok, Bali, Phuket) for the main site.
 * - Regional domains: that region’s pool only.
 */
export function getHomepageTestimonialsFromCachedJson(
  region: RegionSlug,
): readonly HomepageTestimonial[] {
  if (region === "global") return mixRegionalHomepageTestimonials();
  return sortReviewsNewestFirst(mapToHomepageTestimonials(getCachedGoogleReviews(region)));
}

export { regionalPools };
