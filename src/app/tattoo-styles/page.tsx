import type { Metadata } from "next";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { TattooStylesIndexGridSection } from "@/components/sections/tattoo-styles-index-grid-section";
import { TattooStylesIndexIntroSection } from "@/components/sections/tattoo-styles-index-intro-section";
import { pageIntroBandBackgroundImage } from "@/config/page-intro-band";
import { resolveHomepageTattooStyleTiles } from "@/config/tattoo-style-catalog";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import {
  tattooStylesIndexClosingForRegion,
  tattooStylesIndexIntroForRegion,
} from "@/config/tattoo-styles-index";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `Tattoo Styles | ${regionConfig.seo.siteName}`
      : `Tattoo Styles in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Browse every tattoo style offered across Bloodline studios in Bangkok, Bali, and Phuket."
      : `Browse every tattoo style available at Bloodline in ${regionConfig.regionName}.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/tattoo-styles",
    },
    regionConfig,
  );
}

export default async function TattooStylesIndexPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const intro = tattooStylesIndexIntroForRegion(region);
  const closing = tattooStylesIndexClosingForRegion(region, regionConfig.regionName);
  const tiles = resolveHomepageTattooStyleTiles(tattooStyleSlugsForRegion(region));

  return (
    <div className="min-w-0 bg-background">
      <TattooStylesIndexIntroSection
        intro={intro}
        introBackgroundImage={pageIntroBandBackgroundImage}
      />
      <TattooStylesIndexGridSection tiles={tiles} />
      <PageClosingCtaSection
        content={closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="tattoo-styles-index-cta-heading"
      />
    </div>
  );
}
