import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { GalleryPageIntroSection } from "@/components/sections/gallery-page-intro-section";
import { GalleryPageMasonrySection } from "@/components/sections/gallery-page-masonry-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import { pickRandomTattooStyleHeroVideoSrc } from "@/config/tattoo-style-hero-video";
import {
  galleryPageClosingForRegion,
  portfolioMetadataForRegionAndCategory,
} from "@/config/gallery-page";
import { portfolioClosingCtaSectionClassName } from "@/lib/gallery-page-layout";
import { getGalleryPageContent, isValidGalleryCategoryParam } from "@/lib/gallery";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ searchParams }: PortfolioPageProps): Promise<Metadata> {
  const { category: categoryParam } = await searchParams;

  if (!isValidGalleryCategoryParam(categoryParam)) {
    return {};
  }

  const { region, regionConfig } = await getRequestRegionContext();
  const content = await getGalleryPageContent(region, regionConfig.regionName, categoryParam);
  const meta = portfolioMetadataForRegionAndCategory(
    region,
    regionConfig.regionName,
    regionConfig.seo.siteName,
    content.activeCategory,
  );

  return buildMetadata(
    {
      title: meta.title,
      description: meta.description,
      canonicalPath: meta.canonicalPath,
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
  const content = await getGalleryPageContent(region, regionConfig.regionName, categoryParam);
  const closing = galleryPageClosingForRegion(region, regionConfig.regionName);
  const introBackgroundVideoSrc = pickRandomTattooStyleHeroVideoSrc(region);

  return (
    <div className="min-w-0 bg-background">
      <GalleryPageIntroSection
        intro={content.intro}
        introBackgroundImage={pageIntroBackgroundFor("portfolio")}
        introBackgroundVideoSrc={introBackgroundVideoSrc}
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
