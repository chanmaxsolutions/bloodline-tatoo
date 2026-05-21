import dynamic from "next/dynamic";
import {
  AuthoritySection,
  HeroSection,
  HomepageStandardsSplitSection,
  PageClosingCtaSection,
  TattooStylesSection,
  TrustProofBarSection,
  type TrustProofItem,
} from "@/components/sections";
import { homepageClosingForRegion } from "@/config/homepage-closing-cta";
import { getReviewsPageContent } from "@/lib/reviews-page";
import { resolveHomepageTattooStyleTiles } from "@/config/tattoo-style-catalog";
import { getRequestRegionContext } from "@/lib/request-region";

const HomepageTestimonialsCarouselSection = dynamic(
  () =>
    import("@/components/sections/homepage-testimonials-carousel-section").then((mod) => ({
      default: mod.HomepageTestimonialsCarouselSection,
    })),
  {
    loading: () => (
      <section
        className="w-full min-h-[min(42vh,360px)] border-t border-border/50 bg-surface"
        aria-hidden
      />
    ),
  },
);

const defaultTrustProofItems: TrustProofItem[] = [
  { label: "Google Rating", value: "4.9" },
  { label: "Customers served per year", value: "5000+" },
  { label: "Five-star Google reviews", value: "2500+" },
];

export default async function Home() {
  const { region, regionConfig } = await getRequestRegionContext();
  const homepageTattooStyleTiles = resolveHomepageTattooStyleTiles(
    regionConfig.homepageTattooStyles.featuredSlugs,
  );
  const reviewsPreview = getReviewsPageContent(region);

  const heroRegionWord = region === "global" ? "ASIA" : regionConfig.regionName.toUpperCase();

  const heroVideoByRegion: Record<typeof region, string> = {
    global: "/videos/hero/hero-global.mp4",
    bangkok: "/videos/hero/hero-bangkok.mp4",
    bali: "/videos/hero/hero-bali.mp4",
    phuket: "/videos/hero/hero-phuket.mp4",
  };

  return (
    <div className="min-w-0 bg-background">
      <HeroSection
        title={
          <>
            WORLD CLASS TATTOO ART STUDIO IN <span className="text-accent">{heroRegionWord}</span>
          </>
        }
        description={regionConfig.heroDescription}
        media={{
          src: "/hero-poster.jpg",
          videoSrc: heroVideoByRegion[region],
          alt: `${regionConfig.seo.siteName} studio mark`,
          poster: "/hero-poster.jpg",
        }}
        primaryCta={{
          label: regionConfig.headerCta.label,
          href: regionConfig.headerCta.href,
        }}
        secondaryCta={{
          label: "VIEW PORTFOLIO",
          href: "/gallery",
        }}
        ctaUrgencyNote={regionConfig.heroCtaUrgencyNote}
      />
      <TrustProofBarSection items={defaultTrustProofItems} />
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
        showTrustProofStrip
      />
    </div>
  );
}
