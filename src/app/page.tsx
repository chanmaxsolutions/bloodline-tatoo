import { headers } from "next/headers";
import { HeroSection, TrustProofBarSection, type TrustProofItem } from "@/components/sections";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";

const defaultTrustProofItems: TrustProofItem[] = [
  { label: "Google Rating", value: "4.9" },
  { label: "Verified Reviews", value: "1.2K+" },
  { label: "Years Experience", value: "12+" },
];

export default async function Home() {
  const requestHeaders = await headers();
  const hostname =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const region = resolveRegionFromHostname(hostname);
  const regionConfig = getRegionConfig(region);

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
    <main className="bg-background">
      <HeroSection
        eyebrow="Premium Tattoo Culture"
        title={
          <>
            WORLD CLASS TATTOO ART STUDIO IN <span className="text-accent">{heroRegionWord}</span>
          </>
        }
        description={heroDescription}
        media={{
          src: "/fallback.png",
          videoSrc: heroVideoByRegion[region],
          alt: `${regionConfig.seo.siteName} studio mark`,
          poster: "/fallback.png",
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
    </main>
  );
}
