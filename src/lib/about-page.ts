import { aboutPageContentForRegion } from "@/config/about-page";
import { pageIntroBandBackgroundImage } from "@/config/page-intro-band";
import { getCachedGoogleReviews, mapToReviewsPageTestimonials } from "@/lib/reviews-cache";
import { isDisplayableReviewText } from "@/lib/reviews-page";
import { getRegionConfig } from "@/lib/region";
import type { AboutPageContent } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

function getCuratedReviewCount(region: RegionSlug): number {
  const raw = getCachedGoogleReviews(region);
  const mapped = mapToReviewsPageTestimonials(raw);
  return mapped.filter((item) => isDisplayableReviewText(item.text)).length;
}

function getAboutPageContent(region: RegionSlug): AboutPageContent {
  const regionConfig = getRegionConfig(region);
  const curatedReviewCount = getCuratedReviewCount(region);
  const base = aboutPageContentForRegion(region, regionConfig.regionName, curatedReviewCount);

  return {
    ...base,
    introBackgroundImage: pageIntroBandBackgroundImage,
    headerCtaLabel: regionConfig.headerCta.label,
  };
}

export { getAboutPageContent };
