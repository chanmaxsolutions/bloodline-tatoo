import type { Metadata } from "next";
import { GlobalStudioLandingSection } from "@/components/sections/global-studio-landing-section";
import { StudioHomepage } from "@/components/sections/studio-homepage";
import { getRequestRegionContext } from "@/lib/request-region";
import { buildMetadata } from "@/lib/seo";

const brandOgImagePath = "/images/og/bloodline-family-og.jpg" as const;

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  return buildMetadata(
    {
      title: regionConfig.seo.defaultTitle,
      description: regionConfig.seo.defaultDescription,
      canonicalPath: "/",
      ogImagePath: brandOgImagePath,
    },
    regionConfig,
  );
}

export default async function Home() {
  const { region, regionConfig } = await getRequestRegionContext();

  if (region === "global") {
    return <GlobalStudioLandingSection regionConfig={regionConfig} />;
  }

  return <StudioHomepage region={region} regionConfig={regionConfig} />;
}
