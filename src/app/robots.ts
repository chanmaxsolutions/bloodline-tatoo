import type { MetadataRoute } from "next";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl } from "@/lib/schema";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { regionConfig } = await getRequestRegionContext();
  const sitemapUrl = absoluteRegionalUrl(regionConfig, "/sitemap.xml");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
