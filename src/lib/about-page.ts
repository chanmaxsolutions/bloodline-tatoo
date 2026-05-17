import { aboutPageContentForRegion } from "@/config/about-page";
import { getRegionConfig } from "@/lib/region";
import type { AboutPageContent } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

function getAboutPageContent(region: RegionSlug): AboutPageContent {
  const regionConfig = getRegionConfig(region);
  const base = aboutPageContentForRegion(region, regionConfig.regionName);

  return {
    ...base,
    headerCtaLabel: regionConfig.headerCta.label,
  };
}

export { getAboutPageContent };
