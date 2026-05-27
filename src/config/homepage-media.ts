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
