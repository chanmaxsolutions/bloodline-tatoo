import type { Metadata } from "next";
import { AboutPageIntroSection } from "@/components/sections/about-page-intro-section";
import { AboutPageStorySection } from "@/components/sections/about-page-story-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { AboutPageReviewsSection } from "@/components/sections/about-page-reviews-section";
import { AboutPageVideoSection } from "@/components/sections/about-page-video-section";
import { portfolioClosingCtaSectionClassName } from "@/lib/gallery-page-layout";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getAboutPageContent } from "@/lib/about-page";
import { getReviewsCarouselPreview } from "@/lib/reviews-page";
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
      ? "Bloodline Tattoo runs premium appointment-only studios across Bangkok, Bali and Phuket. One consultation-first standard, sterile discipline and serious custom work in every room."
      : `Bloodline Tattoo ${regionConfig.regionName} is an appointment-only studio running on consultation first, sterile discipline and premium custom work built to last.`;

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
  const { region, regionConfig } = await getRequestRegionContext();
  const content = await getAboutPageContent(region);
  const reviewsContent = await getReviewsCarouselPreview(region);

  return (
    <div className="min-w-0 bg-background">
      <AboutPageIntroSection
        intro={content.intro}
        introBackgroundVideoSrc={homepageHeroVideoSrc(region)}
        introBackgroundPoster={{
          src: homepageMediaPaths.heroPoster(region),
          alt: `${regionConfig.seo.siteName} studio atmosphere`,
        }}
        trustStats={content.trustStats}
      />
      <AboutPageStorySection storyParagraphs={content.storyParagraphs} />
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
        sectionClassName={portfolioClosingCtaSectionClassName}
      />
    </div>
  );
}
