import {
  getCachedGoogleReviews,
  mapToReviewsPageTestimonials,
  sortReviewsByTextLengthDescending,
  sortReviewsNewestFirst,
} from "@/lib/reviews-cache";
import { getRegionConfig } from "@/lib/region";
import { REVIEWS_CAROUSEL_PREVIEW_LIMIT } from "@/config/reviews-carousel";
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

async function getReviewsPageContent(region: RegionSlug): Promise<ReviewsPageContent> {
  const regionConfig = getRegionConfig(region);
  const raw = await getCachedGoogleReviews(region);
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

interface ReviewsCarouselPreview {
  testimonials: ReviewsPageContent["testimonials"];
  googleBusinessProfileUrl: string;
}

/** Carousel bands only — avoids rendering hundreds of client cards on `/` and `/about`. */
async function getReviewsCarouselPreview(region: RegionSlug): Promise<ReviewsCarouselPreview> {
  const content = await getReviewsPageContent(region);
  const testimonials = sortReviewsByTextLengthDescending(content.testimonials).slice(
    0,
    REVIEWS_CAROUSEL_PREVIEW_LIMIT,
  );

  return {
    testimonials,
    googleBusinessProfileUrl: content.googleBusinessProfileUrl,
  };
}

export { getReviewsCarouselPreview, getReviewsPageContent, isDisplayableReviewText };
