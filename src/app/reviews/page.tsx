import type { Metadata } from "next";
import { ReviewsGoogleCtaSection } from "@/components/sections/reviews-google-cta-section";
import { ReviewsPageGridSection } from "@/components/sections/reviews-page-grid-section";
import { ReviewsPageIntroSection } from "@/components/sections/reviews-page-intro-section";
import { JsonLd } from "@/components/seo/json-ld";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { trustpilotEvaluateLinksForRegion } from "@/config/trustpilot";
import { getReviewsPageContent } from "@/lib/reviews-page";
import { buildStudioEntitySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `Google Reviews | ${regionConfig.seo.siteName}`
      : `Google Reviews in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Read verified Google reviews from Bloodline Tattoo clients across Bangkok, Bali, and Phuket. Open each studio’s Google Business Profile for the full timeline."
      : `Read verified Google reviews from Bloodline Tattoo clients in ${regionConfig.regionName}. Browse curated feedback and open our Google Business Profile for the complete history.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/reviews",
      ogImagePath: homepageMediaPaths.heroPoster(region),
    },
    regionConfig,
  );
}

export default async function ReviewsPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const content = await getReviewsPageContent(region);
  const trustpilotLinks = trustpilotEvaluateLinksForRegion(region);

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={buildStudioEntitySchema(regionConfig, region)} />
      <ReviewsPageIntroSection
        intro={content.intro}
        trustStats={content.trustStats}
        introBackgroundVideoSrc={homepageHeroVideoSrc(region)}
        introBackgroundPoster={{
          src: homepageMediaPaths.heroPoster(region),
          alt: `${regionConfig.seo.siteName} studio atmosphere`,
        }}
      />
      <ReviewsPageGridSection
        testimonials={content.testimonials}
        googleBusinessProfileUrl={content.googleBusinessProfileUrl}
        region={region}
        trustpilotLinks={trustpilotLinks}
      />
      <ReviewsGoogleCtaSection studioLinks={content.studioLinks} isGlobal={region === "global"} />
    </div>
  );
}
