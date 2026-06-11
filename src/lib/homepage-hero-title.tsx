import type { ReactNode } from "react";
import type { RegionSlug } from "@/types/region";

const homepageHeroHeadingAccentByRegion: Record<RegionSlug, string> = {
  global: "ASIA",
  bangkok: "BANGKOK",
  bali: "BALI",
  phuket: "PHUKET",
};

function homepageHeroTitle(heading: string, region: RegionSlug): ReactNode {
  const accent = homepageHeroHeadingAccentByRegion[region];
  const index = heading.indexOf(accent);

  if (index === -1) {
    return heading;
  }

  return (
    <>
      {heading.slice(0, index)}
      <span className="text-accent">{accent}</span>
      {heading.slice(index + accent.length)}
    </>
  );
}

export { homepageHeroTitle };
