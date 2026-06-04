import type { RegionSlug } from "@/types/region";

const homepageImageRoot = "/images/homepage" as const;

/** Fixed filenames per homepage image slot (one set per region folder). */
export const HOMEPAGE_IMAGE_FILES = {
  standardsSplit: "standards-split.jpg",
  authorityCraft: "authority-craft.jpg",
  authorityStudio: "authority-studio.jpg",
  sessionPath: "session-path.jpg",
  heroPoster: "hero-poster.jpg",
} as const;

export type HomepageImageSlot = keyof typeof HOMEPAGE_IMAGE_FILES;

function homepageImageSrc(
  region: RegionSlug,
  file: (typeof HOMEPAGE_IMAGE_FILES)[HomepageImageSlot],
): string {
  return `${homepageImageRoot}/${region}/${file}`;
}

/** Regional homepage image paths — use with section-specific alt text in config. */
export const homepageMediaPaths = {
  standardsSplit: (region: RegionSlug) =>
    homepageImageSrc(region, HOMEPAGE_IMAGE_FILES.standardsSplit),
  authorityCraft: (region: RegionSlug) =>
    homepageImageSrc(region, HOMEPAGE_IMAGE_FILES.authorityCraft),
  authorityStudio: (region: RegionSlug) =>
    homepageImageSrc(region, HOMEPAGE_IMAGE_FILES.authorityStudio),
  sessionPath: (region: RegionSlug) => homepageImageSrc(region, HOMEPAGE_IMAGE_FILES.sessionPath),
  heroPoster: (region: RegionSlug) => homepageImageSrc(region, HOMEPAGE_IMAGE_FILES.heroPoster),
} as const;

/** Regional homepage hero background videos (fixed filenames under /videos/hero/). */
export const homepageHeroVideoByRegion = {
  global: "/videos/hero/hero-global.mp4",
  bangkok: "/videos/hero/hero-bangkok.mp4",
  bali: "/videos/hero/hero-bali.mp4",
  phuket: "/videos/hero/hero-phuket.mp4",
} as const satisfies Record<RegionSlug, string>;

/**
 * Bump when replacing a regional hero MP4 so browsers and CDNs fetch the new file
 * (same path otherwise stays cached aggressively).
 */
const homepageHeroVideoVersionByRegion: Partial<Record<RegionSlug, string>> = {
  global: "20250604-home",
  bangkok: "20250604-home",
  bali: "20250604-home",
  phuket: "20250604-home",
};

export function homepageHeroVideoSrc(region: RegionSlug): string {
  const path = homepageHeroVideoByRegion[region];
  const version = homepageHeroVideoVersionByRegion[region];
  return version ? `${path}?v=${version}` : path;
}
