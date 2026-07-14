import type { MetadataRoute } from "next";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl } from "@/lib/schema";

/**
 * Allow public crawl for search engines and AI bots.
 * GPTBot / ClaudeBot / PerplexityBot / Google-Extended inherit Allow: / via *.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const { regionConfig } = await getRequestRegionContext();
  const sitemapUrl = absoluteRegionalUrl(regionConfig, "/sitemap.xml");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: sitemapUrl,
  };
}
