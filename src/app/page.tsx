import {
  AuthoritySection,
  HeroSection,
  HomepageTestimonialsCarouselSection,
  TattooStylesSection,
  TrustProofBarSection,
  type TrustProofItem,
} from "@/components/sections";
import { getHomepageTestimonials } from "@/config/homepage-testimonials";
import { resolveHomepageTattooStyleTiles } from "@/config/tattoo-style-catalog";
import { getRequestRegionContext } from "@/lib/request-region";

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
  const homepageTestimonials = getHomepageTestimonials(region);

  const heroDescription =
    region === "global"
      ? "Controlled atmosphere, disciplined artistry, and tactical consultation systems designed for premium tattoo journeys."
      : `Disciplined artistry and high-trust studio standards for clients seeking premium tattoo work in ${regionConfig.regionName}.`;

  const heroRegionWord = region === "global" ? "ASIA" : regionConfig.regionName.toUpperCase();

  const heroVideoByRegion: Record<typeof region, string> = {
    global: "/videos/hero/hero-global.mp4",
    bangkok: "/videos/hero/hero-bangkok.mp4",
    bali: "/videos/hero/hero-bali.mp4",
    phuket: "/videos/hero/hero-phuket.mp4",
  };

  return (
    <main className="min-w-0 bg-background">
      <HeroSection
        eyebrow="Premium Tattoo Culture"
        title={
          <>
            WORLD CLASS TATTOO ART STUDIO IN <span className="text-accent">{heroRegionWord}</span>
          </>
        }
        description={heroDescription}
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
      />
      <TrustProofBarSection items={defaultTrustProofItems} />
      <AuthoritySection content={regionConfig.homepageAuthority} />
      <HomepageTestimonialsCarouselSection
        testimonials={homepageTestimonials}
        googleBusinessProfileUrl={regionConfig.googleBusinessProfileUrl}
      />
      <TattooStylesSection
        config={regionConfig.homepageTattooStyles}
        tiles={homepageTattooStyleTiles}
      />
    </main>
  );
}
