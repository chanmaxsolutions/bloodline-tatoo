import { getHomepageTestimonialsFromCachedJson } from "@/lib/homepage-reviews-cache";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

/**
 * Homepage testimonial carousel data: validated cached JSON per region (see `src/data/reviews/`).
 * Re-import from Outscraper with `scripts/generate-homepage-reviews-json.py`.
 */
export function getHomepageTestimonials(region: RegionSlug): readonly HomepageTestimonial[] {
  return getHomepageTestimonialsFromCachedJson(region);
}
