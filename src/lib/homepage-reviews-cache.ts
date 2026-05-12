import bangkokReviewsJson from "@/data/reviews/bangkok.json";
import baliReviewsJson from "@/data/reviews/bali.json";
import phuketReviewsJson from "@/data/reviews/phuket.json";
import { mapGoogleReviewsToHomepageTestimonials } from "@/lib/map-google-review-to-homepage-testimonial";
import { googleReviewsFileSchema } from "@/lib/schemas/google-review";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

function loadRegionalPool(raw: unknown, label: string) {
  const parsed = googleReviewsFileSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Invalid homepage reviews JSON (${label}): ${parsed.error.message}`);
  }
  return parsed.data.reviews;
}

const regionalPools: Record<Exclude<RegionSlug, "global">, HomepageTestimonial[]> = {
  bangkok: mapGoogleReviewsToHomepageTestimonials(loadRegionalPool(bangkokReviewsJson, "bangkok")),
  bali: mapGoogleReviewsToHomepageTestimonials(loadRegionalPool(baliReviewsJson, "bali")),
  phuket: mapGoogleReviewsToHomepageTestimonials(loadRegionalPool(phuketReviewsJson, "phuket")),
};

function mixRegionalHomepageTestimonials(): HomepageTestimonial[] {
  const orderedRegions: Exclude<RegionSlug, "global">[] = ["bangkok", "bali", "phuket"];
  const sources = orderedRegions.map((region) => regionalPools[region]);
  const maxLength = Math.max(...sources.map((items) => items.length));
  const mixed: HomepageTestimonial[] = [];

  for (let i = 0; i < maxLength; i += 1) {
    for (const items of sources) {
      const item = items[i];
      if (item) mixed.push(item);
    }
  }

  return mixed;
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
  return regionalPools[region];
}
