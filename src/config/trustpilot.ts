import type { RegionSlug } from "@/types/region";
import type { TrustpilotRegionConfig } from "@/types/trustpilot";

function trustpilotForDomain(domain: string): TrustpilotRegionConfig {
  return {
    enabled: true,
    evaluateUrl: `https://www.trustpilot.com/evaluate/${domain}`,
  };
}

const trustpilotByRegion: Record<RegionSlug, TrustpilotRegionConfig> = {
  global: { enabled: false, evaluateUrl: "" },
  bangkok: trustpilotForDomain("bloodlinetattoobangkok.com"),
  phuket: trustpilotForDomain("bloodlinetattoophuket.com"),
  bali: trustpilotForDomain("bloodlinetattoobali.com"),
};

export function trustpilotForRegion(region: RegionSlug): TrustpilotRegionConfig {
  return trustpilotByRegion[region];
}
