import type { Metadata } from "next";
import { ReviewsGoogleCtaSection } from "@/components/sections/reviews-google-cta-section";
import { ReviewsPageSection } from "@/components/sections/reviews-page-section";
import { getReviewsPageContent } from "@/lib/reviews-page";
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
    },
    regionConfig,
  );
}

export default async function ReviewsPage() {
  const { region } = await getRequestRegionContext();
  const content = getReviewsPageContent(region);

  return (
    <div className="min-w-0 bg-background">
      <ReviewsPageSection content={content} region={region} />
      <ReviewsGoogleCtaSection studioLinks={content.studioLinks} isGlobal={region === "global"} />
    </div>
  );
}
