import type { RegionSlug } from "@/types/region";

const homepageImageRoot = "/images/homepage" as const;

/** Fixed filenames per homepage image slot (one set per region folder). */
export const HOMEPAGE_IMAGE_FILES = {
  standardsSplit: "standards-split.webp",
  authorityCraft: "authority-craft.webp",
  authorityStudio: "authority-studio.webp",
  sessionPath: "session-path.webp",
  heroPoster: "hero-poster.webp",
} as const;

/**
 * When replacing a regional homepage image:
 * 1. Pick an unused file from `image resources/{region}/`
 * 2. Move the current active WebP to `public/images/homepage/{region}/archive/{slot}-{date}.webp`
 * 3. Export at near-full source width, WebP q92, dated filename (e.g. `standards-split-20250718-home.webp`)
 * 4. Point `homepageImageFileOverrideByRegion` at the new dated filename
 * 5. Update alt text in `src/config/homepage-standards-split.ts` (or relevant config)
 */

export type HomepageImageSlot = keyof typeof HOMEPAGE_IMAGE_FILES;

/** Active filename overrides after a regional swap (dated slug busts `/_next/image` cache). */
const homepageImageFileOverrideByRegion: Partial<
  Record<RegionSlug, Partial<Record<HomepageImageSlot, string>>>
> = {
  bali: {
    standardsSplit: "standards-split-20250718-home.webp",
    sessionPath: "session-path-20250718-home.webp",
  },
};

function resolveHomepageImageFile(region: RegionSlug, slot: HomepageImageSlot): string {
  return homepageImageFileOverrideByRegion[region]?.[slot] ?? HOMEPAGE_IMAGE_FILES[slot];
}

function homepageImageSrc(region: RegionSlug, slot: HomepageImageSlot): string {
  return `${homepageImageRoot}/${region}/${resolveHomepageImageFile(region, slot)}`;
}

/** Regional homepage image paths — use with section-specific alt text in config. */
export const homepageMediaPaths = {
  standardsSplit: (region: RegionSlug) => homepageImageSrc(region, "standardsSplit"),
  authorityCraft: (region: RegionSlug) => homepageImageSrc(region, "authorityCraft"),
  authorityStudio: (region: RegionSlug) => homepageImageSrc(region, "authorityStudio"),
  sessionPath: (region: RegionSlug) => homepageImageSrc(region, "sessionPath"),
  heroPoster: (region: RegionSlug) => homepageImageSrc(region, "heroPoster"),
} as const;

/** Regional homepage hero background videos (fixed filenames under /videos/hero/). */
export const homepageHeroVideoByRegion = {
  global: "/videos/hero/hero-global.mp4",
  bangkok: "/videos/hero/hero-bangkok.mp4",
  bali: "/videos/hero/hero-bali.mp4",
  phuket: "/videos/hero/hero-phuket.mp4",
} as const satisfies Record<RegionSlug, string>;

/**
 * When replacing a regional hero clip:
 * 1. Move the current active MP4 to `public/videos/hero/archive/{region}/hero-{region}-{date}-home.mp4`
 * 2. Store the raw upload in `archive/{region}/sources/` with a dated filename
 * 3. Export the new active file as `hero-{region}.mp4` (web-optimized MP4)
 * 4. Bump the matching version below so browsers and CDNs fetch the new file
 *    (same path otherwise stays cached aggressively).
 */
const homepageHeroVideoVersionByRegion: Partial<Record<RegionSlug, string>> = {
  global: "20250604-home",
  bangkok: "20250604-home",
  bali: "20250717-home",
  phuket: "20250604-home",
};

export function homepageHeroVideoSrc(region: RegionSlug): string {
  const path = homepageHeroVideoByRegion[region];
  const version = homepageHeroVideoVersionByRegion[region];
  return version ? `${path}?v=${version}` : path;
}

const baliHomepageAuthorityVideoRoot = "/videos/homepage/bali" as const;
const baliHomepageAuthorityVideoVersion = "20250628" as const;

export type BaliHomepageAuthorityVideoSlot = "craft" | "studio";

/** Bali homepage authority card clips (craft + studio columns). */
export function baliHomepageAuthorityVideoSrc(slot: BaliHomepageAuthorityVideoSlot): string {
  const file = slot === "craft" ? "authority-craft.mp4" : "authority-studio.mp4";
  return `${baliHomepageAuthorityVideoRoot}/${file}?v=${baliHomepageAuthorityVideoVersion}`;
}
