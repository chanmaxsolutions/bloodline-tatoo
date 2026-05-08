import type { Metadata } from "next";
import type { PageSeoInput, RegionConfig } from "@/types";

export function buildMetadata(input: PageSeoInput, region: RegionConfig): Metadata {
  const title = input.title || region.seo.defaultTitle;
  const description = input.description || region.seo.defaultDescription;
  const canonical = new URL(input.canonicalPath, `https://${region.domain}`).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: region.seo.siteName,
      type: "website",
    },
  };
}
