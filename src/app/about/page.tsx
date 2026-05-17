import type { Metadata } from "next";
import { AboutPageClosingSection } from "@/components/sections/about-page-closing-section";
import { AboutPageIntroSection } from "@/components/sections/about-page-intro-section";
import { HomepageStandardsSplitSection } from "@/components/sections/homepage-standards-split-section";
import { getAboutPageContent } from "@/lib/about-page";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `About Bloodline Tattoo | ${regionConfig.seo.siteName}`
      : `About Bloodline Tattoo ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Learn how Bloodline Tattoo operates across Bangkok, Bali, and Phuket: consultation-first process, sterile discipline, and premium custom work."
      : `Learn how Bloodline Tattoo in ${regionConfig.regionName} runs: consultation-first process, sterile discipline, and premium custom work.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/about",
    },
    regionConfig,
  );
}

export default async function AboutPage() {
  const { region } = await getRequestRegionContext();
  const content = getAboutPageContent(region);

  return (
    <div className="min-w-0 bg-background">
      <AboutPageIntroSection intro={content.intro} />
      <HomepageStandardsSplitSection
        sectionId="about-standards-split"
        content={content.standardsSplit}
      />
      <AboutPageClosingSection closing={content.closing} headerCtaLabel={content.headerCtaLabel} />
    </div>
  );
}
