import type { RegionConfig } from "@/types";

export function buildTattooParlorSchema(region: RegionConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: region.seo.siteName,
    url: `https://${region.domain}`,
  };
}
