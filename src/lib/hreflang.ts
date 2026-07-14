import { regionsBySlug } from "@/config/regions";
import { isTattooStyleAvailableInRegion } from "@/config/region-tattoo-style-availability";
import { isTattooStyleSlug } from "@/config/tattoo-style-catalog";
import { absoluteRegionalUrl } from "@/lib/schema";
import type { RegionSlug } from "@/types/region";

/**
 * BCP47 hreflang keys for Bloodline regional domains.
 *
 * Bangkok and Phuket are both Thailand (en-TH). Google allows one URL per
 * language-region code, so Bangkok owns `en-TH`. Phuket uses a private-use
 * subtag so the reciprocal cluster stays complete for discovery without
 * claiming a second en-TH page.
 */
const HREFLANG_BY_REGION: Record<RegionSlug, string> = {
  global: "x-default",
  bangkok: "en-TH",
  bali: "en-ID",
  phuket: "en-x-phuket",
};

const ALL_REGION_SLUGS: readonly RegionSlug[] = ["global", "bangkok", "bali", "phuket"];

function regionsOfferingPath(canonicalPath: string): readonly RegionSlug[] {
  const normalized = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const styleMatch = normalized.match(/^\/tattoo-styles\/([^/]+)\/?$/);

  if (!styleMatch) {
    return ALL_REGION_SLUGS;
  }

  const styleSlug = styleMatch[1];
  if (!isTattooStyleSlug(styleSlug)) {
    return ALL_REGION_SLUGS;
  }

  return ALL_REGION_SLUGS.filter((region) => isTattooStyleAvailableInRegion(styleSlug, region));
}

/**
 * Reciprocal cross-domain language alternates for a shared path.
 * Omits regional URLs that do not serve the path (e.g. bamboo on Bali).
 */
export function buildRegionalHreflangLanguages(canonicalPath: string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const regionSlug of regionsOfferingPath(canonicalPath)) {
    const region = regionsBySlug[regionSlug];
    const hreflang = HREFLANG_BY_REGION[regionSlug];
    languages[hreflang] = absoluteRegionalUrl(region, canonicalPath);

    // Generic English fallback points at the global hub when present.
    if (regionSlug === "global") {
      languages.en = absoluteRegionalUrl(region, canonicalPath);
    }
  }

  return languages;
}
