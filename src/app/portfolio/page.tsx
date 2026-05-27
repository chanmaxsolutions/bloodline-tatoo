import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { GalleryPageIntroSection } from "@/components/sections/gallery-page-intro-section";
import { GalleryPageMasonrySection } from "@/components/sections/gallery-page-masonry-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { pageIntroBandBackgroundImage } from "@/config/page-intro-band";
import { galleryPageClosingForRegion } from "@/config/gallery-page";
import { portfolioClosingCtaSectionClassName } from "@/lib/gallery-page-layout";
import { getGalleryPageContent, isValidGalleryCategoryParam } from "@/lib/gallery";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `Tattoo Portfolio | ${regionConfig.seo.siteName}`
      : `Tattoo Portfolio in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Curated tattoo portfolio from Bloodline studios in Bangkok, Bali, and Phuket. Explore healed work and session frames before you book."
      : `Curated tattoo portfolio and healed work from Bloodline ${regionConfig.regionName}. Explore proof on skin and book with confidence.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/portfolio",
    },
    regionConfig,
  );
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const { category: categoryParam } = await searchParams;

  if (!isValidGalleryCategoryParam(categoryParam)) {
    redirect("/portfolio");
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = getGalleryPageContent(region, categoryParam);
  const closing = galleryPageClosingForRegion(region, regionConfig.regionName);

  return (
    <div className="min-w-0 bg-background">
      <GalleryPageIntroSection
        intro={content.intro}
        introBackgroundImage={pageIntroBandBackgroundImage}
      />
      <GalleryPageMasonrySection
        items={content.items}
        showEmptyState={content.items.length === 0}
      />
      <PageClosingCtaSection
        content={closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="portfolio-index-cta-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        sectionClassName={portfolioClosingCtaSectionClassName}
      />
    </div>
  );
}
