import {
  getCachedGoogleReviews,
  mapToReviewsPageTestimonials,
  sortReviewsNewestFirst,
} from "@/lib/reviews-cache";
import { getRegionConfig } from "@/lib/region";
import {
  reviewsPageIntroBackgroundImage,
  reviewsPageIntroForRegion,
  reviewsPageTrustStatsForRegion,
} from "@/config/reviews-page";
import type { ReviewsPageContent, ReviewsPageGoogleStudioLink } from "@/types/reviews-page";
import type { RegionSlug } from "@/types/region";

const PHOTO_ONLY_PLACEHOLDER = "Photo review on Google — open the link to view photos on Google.";

function isDisplayableReviewText(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.length > 0 && trimmed !== PHOTO_ONLY_PLACEHOLDER;
}

function buildStudioLinks(region: RegionSlug): ReviewsPageGoogleStudioLink[] {
  const studioRegions: Exclude<RegionSlug, "global">[] = ["bangkok", "bali", "phuket"];

  if (region !== "global") {
    const config = getRegionConfig(region);
    return [
      {
        region,
        studioName: config.regionName,
        googleBusinessProfileUrl: config.googleBusinessProfileUrl,
      },
    ];
  }

  return studioRegions.map((studioRegion) => {
    const config = getRegionConfig(studioRegion);
    return {
      region: studioRegion,
      studioName: config.regionName,
      googleBusinessProfileUrl: config.googleBusinessProfileUrl,
    };
  });
}

function getReviewsPageContent(region: RegionSlug): ReviewsPageContent {
  const regionConfig = getRegionConfig(region);
  const raw = getCachedGoogleReviews(region);
  const mapped = mapToReviewsPageTestimonials(raw);
  const displayable = mapped.filter((item) => isDisplayableReviewText(item.text));
  const testimonials = sortReviewsNewestFirst(displayable);

  return {
    intro: reviewsPageIntroForRegion(region),
    introBackgroundImage: reviewsPageIntroBackgroundImage,
    trustStats: reviewsPageTrustStatsForRegion(region, testimonials.length),
    testimonials,
    googleBusinessProfileUrl: regionConfig.googleBusinessProfileUrl,
    studioLinks: buildStudioLinks(region),
  };
}

export { getReviewsPageContent, isDisplayableReviewText };
