import { getRegionConfig } from "@/lib/region";
import type { RegionSlug } from "@/types/region";
import type { TrustpilotEvaluateLink, TrustpilotRegionConfig } from "@/types/trustpilot";

function trustpilotForDomain(domain: string): TrustpilotRegionConfig {
  return {
    /**
     * Floating site-wide widget is archived off.
     * Re-enable by setting `floatingWidgetEnabled: true` and mounting
     * `TrustpilotFloatingWidget` in `src/app/layout.tsx`.
     */
    floatingWidgetEnabled: false,
    evaluateUrl: `https://www.trustpilot.com/evaluate/${domain}`,
  };
}

const trustpilotByRegion: Record<RegionSlug, TrustpilotRegionConfig> = {
  global: { floatingWidgetEnabled: false, evaluateUrl: "" },
  bangkok: trustpilotForDomain("bloodlinetattoobangkok.com"),
  phuket: trustpilotForDomain("bloodlinetattoophuket.com"),
  bali: trustpilotForDomain("bloodlinetattoobali.com"),
};

export function trustpilotForRegion(region: RegionSlug): TrustpilotRegionConfig {
  return trustpilotByRegion[region];
}

/** Studio evaluate links for the reviews page CTA (global lists all three). */
export function trustpilotEvaluateLinksForRegion(
  region: RegionSlug,
): readonly TrustpilotEvaluateLink[] {
  const studios: Exclude<RegionSlug, "global">[] = ["bangkok", "bali", "phuket"];

  if (region !== "global") {
    const config = trustpilotByRegion[region];
    if (!config.evaluateUrl) {
      return [];
    }

    return [
      {
        region,
        studioName: getRegionConfig(region).regionName,
        evaluateUrl: config.evaluateUrl,
      },
    ];
  }

  return studios.map((studioRegion) => {
    const config = trustpilotByRegion[studioRegion];
    return {
      region: studioRegion,
      studioName: getRegionConfig(studioRegion).regionName,
      evaluateUrl: config.evaluateUrl,
    };
  });
}
