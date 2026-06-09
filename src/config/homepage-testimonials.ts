import { getHomepageTestimonialsFromCachedJson } from "@/lib/homepage-reviews-cache";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

/**
 * Homepage testimonial carousel data: validated cached JSON per region (see `src/data/reviews/`).
 */
export async function getHomepageTestimonials(
  region: RegionSlug,
): Promise<readonly HomepageTestimonial[]> {
  return getHomepageTestimonialsFromCachedJson(region);
}
