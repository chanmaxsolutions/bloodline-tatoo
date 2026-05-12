import { headers } from "next/headers";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";
import type { RegionConfig, RegionSlug } from "@/types";

export async function getRequestRegionContext(): Promise<{
  region: RegionSlug;
  regionConfig: RegionConfig;
}> {
  const requestHeaders = await headers();
  const hostname =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const region = resolveRegionFromHostname(hostname);
  return { region, regionConfig: getRegionConfig(region) };
}
