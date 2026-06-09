import { aboutPageContentForRegion } from "@/config/about-page";
import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import { getCachedGoogleReviews, mapToReviewsPageTestimonials } from "@/lib/reviews-cache";
import { isDisplayableReviewText } from "@/lib/reviews-page";
import { getRegionConfig } from "@/lib/region";
import type { AboutPageContent } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

async function getCuratedReviewCount(region: RegionSlug): Promise<number> {
  const raw = await getCachedGoogleReviews(region);
  const mapped = mapToReviewsPageTestimonials(raw);
  return mapped.filter((item) => isDisplayableReviewText(item.text)).length;
}

async function getAboutPageContent(region: RegionSlug): Promise<AboutPageContent> {
  const regionConfig = getRegionConfig(region);
  const curatedReviewCount = await getCuratedReviewCount(region);
  const base = aboutPageContentForRegion(region, regionConfig.regionName, curatedReviewCount);

  return {
    ...base,
    introBackgroundImage: pageIntroBackgroundFor("about"),
    headerCtaLabel: regionConfig.headerCta.label,
  };
}

export { getAboutPageContent };
