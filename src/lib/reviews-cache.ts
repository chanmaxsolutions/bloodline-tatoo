import bangkokReviewsJson from "@/data/reviews/bangkok.json";
import baliReviewsJson from "@/data/reviews/bali.json";
import phuketReviewsJson from "@/data/reviews/phuket.json";
import { googleReviewToHomepageTestimonial } from "@/lib/map-google-review-to-homepage-testimonial";
import { googleReviewsFileSchema } from "@/lib/schemas/google-review";
import { getRegionConfig } from "@/lib/region";
import type { GoogleReview } from "@/types/review";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

function loadRegionalPool(raw: unknown, label: string): GoogleReview[] {
  const parsed = googleReviewsFileSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Invalid reviews JSON (${label}): ${parsed.error.message}`);
  }
  return parsed.data.reviews;
}

const regionalPools: Record<Exclude<RegionSlug, "global">, GoogleReview[]> = {
  bangkok: loadRegionalPool(bangkokReviewsJson, "bangkok"),
  bali: loadRegionalPool(baliReviewsJson, "bali"),
  phuket: loadRegionalPool(phuketReviewsJson, "phuket"),
};

export function mixRegionalGoogleReviews(): GoogleReview[] {
  const orderedRegions: Exclude<RegionSlug, "global">[] = ["bangkok", "bali", "phuket"];
  const sources = orderedRegions.map((region) => regionalPools[region]);
  const maxLength = Math.max(...sources.map((items) => items.length));
  const mixed: GoogleReview[] = [];

  for (let i = 0; i < maxLength; i += 1) {
    for (const items of sources) {
      const item = items[i];
      if (item) mixed.push(item);
    }
  }

  return mixed;
}

function getCachedGoogleReviews(region: RegionSlug): GoogleReview[] {
  if (region === "global") return mixRegionalGoogleReviews();
  return regionalPools[region];
}

function mapToHomepageTestimonials(reviews: GoogleReview[]): HomepageTestimonial[] {
  return reviews.map((review, index) => googleReviewToHomepageTestimonial(review, { index }));
}

function mapToReviewsPageTestimonials(reviews: GoogleReview[]): ReviewsPageTestimonial[] {
  return reviews.map((review, index) => {
    const base = googleReviewToHomepageTestimonial(review, { index });
    const studioConfig = getRegionConfig(review.region);
    return {
      ...base,
      studioRegion: review.region,
      studioName: studioConfig.regionName,
    };
  });
}

function sortReviewsNewestFirst<T extends { dateIso?: string; timeLabel: string }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const aMs = a.dateIso ? Date.parse(a.dateIso) : Date.parse(a.timeLabel);
    const bMs = b.dateIso ? Date.parse(b.dateIso) : Date.parse(b.timeLabel);
    const aTime = Number.isNaN(aMs) ? 0 : aMs;
    const bTime = Number.isNaN(bMs) ? 0 : bMs;
    return bTime - aTime;
  });
}

export {
  getCachedGoogleReviews,
  mapToHomepageTestimonials,
  mapToReviewsPageTestimonials,
  regionalPools,
  sortReviewsNewestFirst,
};
