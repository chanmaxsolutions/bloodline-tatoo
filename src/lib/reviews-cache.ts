import fs from "node:fs";
import path from "node:path";
import { unstable_cache } from "next/cache";
import { googleReviewToHomepageTestimonial } from "@/lib/map-google-review-to-homepage-testimonial";
import {
  CONTENT_CACHE_REVALIDATE_SECONDS,
  CONTENT_CACHE_TAG_REVIEWS,
  CONTENT_CACHE_TAG_REVIEWS_BALI,
  CONTENT_CACHE_TAG_REVIEWS_BANGKOK,
  CONTENT_CACHE_TAG_REVIEWS_PHUKET,
} from "@/lib/content-cache-tags";
import { googleReviewsFileSchema } from "@/lib/schemas/google-review";
import { getRegionConfig } from "@/lib/region";
import type { GoogleReview } from "@/types/review";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

type StudioRegion = Exclude<RegionSlug, "global">;

function loadRegionalPool(raw: unknown, label: string): GoogleReview[] {
  const parsed = googleReviewsFileSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Invalid reviews JSON (${label}): ${parsed.error.message}`);
  }
  return parsed.data.reviews;
}

function readRegionalReviewPoolsFromDisk(): Record<StudioRegion, GoogleReview[]> {
  const studioRegions: StudioRegion[] = ["bangkok", "bali", "phuket"];

  return studioRegions.reduce(
    (accumulator, region) => {
      const filePath = path.join(process.cwd(), "src/data/reviews", `${region}.json`);
      const raw: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));
      accumulator[region] = loadRegionalPool(raw, region);
      return accumulator;
    },
    {} as Record<StudioRegion, GoogleReview[]>,
  );
}

const getRegionalReviewPools = unstable_cache(
  async () => readRegionalReviewPoolsFromDisk(),
  ["regional-review-pools"],
  {
    tags: [
      CONTENT_CACHE_TAG_REVIEWS,
      CONTENT_CACHE_TAG_REVIEWS_BANGKOK,
      CONTENT_CACHE_TAG_REVIEWS_BALI,
      CONTENT_CACHE_TAG_REVIEWS_PHUKET,
    ],
    revalidate: CONTENT_CACHE_REVALIDATE_SECONDS,
  },
);

function mixRegionalGoogleReviews(
  regionalPools: Record<StudioRegion, GoogleReview[]>,
): GoogleReview[] {
  const orderedRegions: StudioRegion[] = ["bangkok", "bali", "phuket"];
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

async function getCachedGoogleReviews(region: RegionSlug): Promise<GoogleReview[]> {
  const regionalPools = await getRegionalReviewPools();
  if (region === "global") return mixRegionalGoogleReviews(regionalPools);
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

function sortReviewsByTextLengthDescending<T extends { text: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.text.trim().length - a.text.trim().length);
}

export {
  getCachedGoogleReviews,
  getRegionalReviewPools,
  mapToHomepageTestimonials,
  mapToReviewsPageTestimonials,
  mixRegionalGoogleReviews,
  sortReviewsByTextLengthDescending,
  sortReviewsNewestFirst,
};
