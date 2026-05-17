import type { Metadata } from "next";
import { TattooStylesIndexSection } from "@/components/sections/tattoo-styles-index-section";
import { resolveHomepageTattooStyleTiles } from "@/config/tattoo-style-catalog";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import { tattooStylesIndexIntroForRegion } from "@/config/tattoo-styles-index";
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
  const { region } = await getRequestRegionContext();
  const intro = tattooStylesIndexIntroForRegion(region);
  const tiles = resolveHomepageTattooStyleTiles(tattooStyleSlugsForRegion(region));

  return (
    <div className="min-w-0 bg-background">
      <TattooStylesIndexSection intro={intro} tiles={tiles} />
    </div>
  );
}
