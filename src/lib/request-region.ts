import { headers } from "next/headers";
import {
  isPreviewRegionOverrideAllowed,
  parseRegionSlug,
  PREVIEW_REGION_HEADER,
} from "@/lib/preview-region";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";
import type { RegionConfig, RegionSlug } from "@/types";

export async function getRequestRegionContext(): Promise<{
  region: RegionSlug;
  regionConfig: RegionConfig;
}> {
  const requestHeaders = await headers();

  // Preview/local only — never honor forged override headers on production/VPS.
  if (isPreviewRegionOverrideAllowed()) {
    const previewRegion = parseRegionSlug(requestHeaders.get(PREVIEW_REGION_HEADER));
    if (previewRegion) {
      return { region: previewRegion, regionConfig: getRegionConfig(previewRegion) };
    }
  }

  const hostname =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const region = resolveRegionFromHostname(hostname);
  return { region, regionConfig: getRegionConfig(region) };
}
