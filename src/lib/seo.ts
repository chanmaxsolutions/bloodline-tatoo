import type { Metadata } from "next";
import type { PageSeoInput, RegionConfig } from "@/types";
import { absoluteRegionalUrl } from "@/lib/schema";

export function buildMetadata(input: PageSeoInput, region: RegionConfig): Metadata {
  const title = input.title || region.seo.defaultTitle;
  const description = input.description || region.seo.defaultDescription;
  const canonical = absoluteRegionalUrl(region, input.canonicalPath);
  const ogImageUrl = absoluteRegionalUrl(region, input.ogImagePath ?? region.branding.logoPath);

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
      locale: "en",
      images: [
        {
          url: ogImageUrl,
          alt: region.seo.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
