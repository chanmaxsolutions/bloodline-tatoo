import type { Metadata } from "next";
import { FaqPageContentSection } from "@/components/sections/faq-page-content-section";
import { FaqPageIntroSection } from "@/components/sections/faq-page-intro-section";
import { PageClosingCtaSection } from "@/components/sections/page-closing-cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getFaqPageContent } from "@/lib/faq-page";
import { homepageClosingCtaBandClassName } from "@/lib/homepage-section-surfaces";
import { pageClosingCtaBandBorderlessSectionClassName } from "@/lib/page-closing-cta-band";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl, buildFaqPageSchema, buildStudioEntitySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const { region, regionConfig } = await getRequestRegionContext();

  const title =
    region === "global"
      ? `Tattoo FAQ | ${regionConfig.seo.siteName}`
      : `Tattoo FAQ in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`;

  const description =
    region === "global"
      ? "Answers on booking, sterile practice, travel timing, and tattoo styles across Bloodline studios in Bangkok, Bali, and Phuket."
      : region === "phuket"
        ? "Answers on booking, deposits, artist matching, travel timing, hygiene, and aftercare at Bloodline Tattoo Phuket."
        : `Answers on booking, sterile practice, travel timing, and tattoo styles at Bloodline ${regionConfig.regionName}.`;

  return buildMetadata(
    {
      title,
      description,
      canonicalPath: "/faq",
    },
    regionConfig,
  );
}

export default async function FaqPage() {
  const { region, regionConfig } = await getRequestRegionContext();
  const content = getFaqPageContent(region, regionConfig.regionName);
  const pageUrl = absoluteRegionalUrl(regionConfig, "/faq");

  return (
    <div className="min-w-0 bg-background">
      <JsonLd
        data={[
          buildStudioEntitySchema(regionConfig, region),
          buildFaqPageSchema(content.schemaFaqs, pageUrl),
        ]}
      />
      <FaqPageIntroSection
        intro={content.intro}
        introBackgroundVideoSrc={homepageHeroVideoSrc(region)}
        introBackgroundPoster={{
          src: homepageMediaPaths.heroPoster(region),
          alt: `${regionConfig.seo.siteName} studio atmosphere`,
        }}
      />
      <FaqPageContentSection studioFaqs={content.studioFaqs} styleGroups={content.styleGroups} />
      <PageClosingCtaSection
        content={content.closing}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="faq-closing-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        sectionClassName={cn(
          pageClosingCtaBandBorderlessSectionClassName,
          homepageClosingCtaBandClassName,
        )}
      />
    </div>
  );
}
