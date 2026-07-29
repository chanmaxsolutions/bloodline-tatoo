import dynamic from "next/dynamic";
import { getImageProps } from "next/image";
import {
  AuthoritySection,
  HeroSection,
  HomepageStandardsSplitSection,
  PageClosingCtaSection,
  TattooStylesSection,
  TrustProofBarSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { homepageClosingForRegion } from "@/config/homepage-closing-cta";
import { resolveHomepageTattooStyleTiles } from "@/config/tattoo-style-catalog";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import {
  resolveGoogleBusinessProofPresentation,
  resolveHomepageTrustProofItems,
} from "@/lib/google-business-proof";
import { homepageHeroTitle } from "@/lib/homepage-hero-title";
import { homepageClosingCtaBandClassName } from "@/lib/homepage-section-surfaces";
import { pageClosingCtaBandBorderlessSectionClassName } from "@/lib/page-closing-cta-band";
import { getReviewsCarouselPreview } from "@/lib/reviews-page";
import { buildStudioEntitySchema, buildWebSiteSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { RegionConfig } from "@/types";
import type { RegionSlug } from "@/types/region";

const HomepageTestimonialsCarouselSection = dynamic(
  () =>
    import("@/components/sections/homepage-testimonials-carousel-section").then((mod) => ({
      default: mod.HomepageTestimonialsCarouselSection,
    })),
  {
    loading: () => (
      <section className="w-full min-h-[min(42vh,360px)] bg-surface-elevated" aria-hidden />
    ),
  },
);

interface StudioHomepageProps {
  region: RegionSlug;
  regionConfig: RegionConfig;
}

/**
 * Full studio homepage (hero → trust → proof → depth → conversion).
 * Used by Bangkok / Bali / Phuket. Global previously used this; see
 * `src/archive/global-homepage/` to restore.
 */
async function StudioHomepage({ region, regionConfig }: StudioHomepageProps) {
  const homepageTattooStyleTiles = resolveHomepageTattooStyleTiles(
    regionConfig.homepageTattooStyles.featuredSlugs,
    region,
  );
  const reviewsPreview = await getReviewsCarouselPreview(region);
  const googleBusinessProof = resolveGoogleBusinessProofPresentation(region);
  const trustProofItems = resolveHomepageTrustProofItems(region);
  const structuredData = [
    buildStudioEntitySchema(regionConfig, region),
    buildWebSiteSchema(regionConfig),
  ];

  const heroPosterSrc = homepageMediaPaths.heroPoster(region);
  const {
    props: {
      src: heroPosterPreloadSrc,
      srcSet: heroPosterPreloadSrcSet,
      sizes: heroPosterPreloadSizes,
    },
  } = getImageProps({
    alt: "",
    src: heroPosterSrc,
    width: 1920,
    height: 1080,
    sizes: "100vw",
    priority: true,
  });

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={structuredData} />
      <link
        rel="preload"
        as="image"
        href={heroPosterPreloadSrc}
        imageSrcSet={heroPosterPreloadSrcSet}
        imageSizes={heroPosterPreloadSizes}
        fetchPriority="high"
      />
      <HeroSection
        title={homepageHeroTitle(regionConfig.heroHeading, region)}
        description={regionConfig.heroDescription}
        media={{
          src: homepageMediaPaths.heroPoster(region),
          videoSrc: homepageHeroVideoSrc(region),
          alt: `${regionConfig.seo.siteName} studio mark`,
          poster: homepageMediaPaths.heroPoster(region),
        }}
        primaryCta={{
          label: regionConfig.headerCta.label,
          href: regionConfig.headerCta.href,
        }}
        secondaryCta={{
          label: "VIEW PORTFOLIO",
          href: "/portfolio",
        }}
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        googleBusinessProof={googleBusinessProof}
      />
      <TrustProofBarSection items={[...trustProofItems]} />
      <AuthoritySection content={regionConfig.homepageAuthority} />
      <TattooStylesSection
        config={regionConfig.homepageTattooStyles}
        tiles={homepageTattooStyleTiles}
      />
      <HomepageStandardsSplitSection
        content={regionConfig.homepageStandardsSplit}
        layout="approach"
      />
      <HomepageStandardsSplitSection
        sectionId="homepage-session-path"
        content={regionConfig.homepageSessionPathSplit}
        layout="approach"
      />
      <HomepageTestimonialsCarouselSection
        region={region}
        regionName={regionConfig.regionName}
        testimonials={reviewsPreview.testimonials}
        googleBusinessProfileUrl={reviewsPreview.googleBusinessProfileUrl}
      />
      <PageClosingCtaSection
        content={homepageClosingForRegion(region, regionConfig.regionName)}
        headerCtaLabel={regionConfig.headerCta.label}
        headingId="homepage-closing-cta-heading"
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
        sectionClassName={cn(
          pageClosingCtaBandBorderlessSectionClassName,
          homepageClosingCtaBandClassName,
        )}
      />
    </div>
  );
}

export { StudioHomepage };
