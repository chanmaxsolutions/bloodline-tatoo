import type { Metadata } from "next";
import { AboutPageIntroSection } from "@/components/sections/about-page-intro-section";
import { AboutPageStorySection } from "@/components/sections/about-page-story-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { AboutPageReviewsSection } from "@/components/sections/about-page-reviews-section";
import { AboutPageVideoSection } from "@/components/sections/about-page-video-section";
import { JsonLd } from "@/components/seo/json-ld";
import { portfolioClosingCtaSectionClassName } from "@/lib/gallery-page-layout";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getAboutPageContent } from "@/lib/about-page";
import { getReviewsCarouselPreview } from "@/lib/reviews-page";
import { buildStudioEntitySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

const brandOgImagePath = "/images/og/bloodline-family-og.jpg" as const;

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `About the Bloodline Family | ${regionConfig.seo.siteName}`
      : `About the Studio in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Since 2015 Bloodline has grown as one family of artists, staff and clients. What started in Phuket is now premium studios in Bangkok, Bali and Phuket."
      : `Bloodline Tattoo ${regionConfig.regionName} is an appointment-only studio running on consultation first, sterile discipline and premium custom work built to last.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/about",
      ogImagePath: brandOgImagePath,
    },
    regionConfig,
  );
}

export default async function AboutPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const content = await getAboutPageContent(region);
  const heroVideoSrc = homepageHeroVideoSrc(region);
  const heroPoster = {
    src: homepageMediaPaths.heroPoster(region),
    alt: `${regionConfig.seo.siteName} studio atmosphere`,
  };

  if (region === "global") {
    return (
      <div className="min-w-0 bg-background">
        <JsonLd data={buildStudioEntitySchema(regionConfig, region)} />
        <AboutPageVideoSection
          video={content.video}
          headingLevel={1}
          backgroundVideoSrc={heroVideoSrc}
          backgroundPoster={heroPoster}
          ctaLabel={content.headerCtaLabel}
        />
      </div>
    );
  }

  const reviewsContent = await getReviewsCarouselPreview(region);

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={buildStudioEntitySchema(regionConfig, region)} />
      <AboutPageIntroSection
        intro={content.intro}
        introBackgroundVideoSrc={heroVideoSrc}
        introBackgroundPoster={heroPoster}
        trustStats={content.trustStats}
      />
      <AboutPageStorySection storyBlocks={content.storyBlocks} />
      <AboutPageVideoSection video={content.video} />
      <AboutPageReviewsSection
        region={region}
        regionName={regionConfig.regionName}
        testimonials={reviewsContent.testimonials}
        googleBusinessProfileUrl={reviewsContent.googleBusinessProfileUrl}
      />
      <PageClosingCtaSection
        content={content.closing}
        headerCtaLabel={content.headerCtaLabel}
        headingId="about-closing-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        showContactLink
        sectionClassName={portfolioClosingCtaSectionClassName}
      />
    </div>
  );
}
