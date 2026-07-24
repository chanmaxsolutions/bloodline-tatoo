import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

/** Bangkok studio menu — healed is Bali-only (not offered here). */
const bangkokStyleSlugs = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
] as const satisfies readonly TattooStyleSlug[];

/** Phuket studio menu — healed is Bali-only (not offered here). */
const phuketStyleSlugs = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
] as const satisfies readonly TattooStyleSlug[];

/** Bali studio menu — only region that offers the healed proof lane. */
const baliStyleSlugs = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "healed",
] as const satisfies readonly TattooStyleSlug[];

/**
 * Global site: union of every style offered at any Bloodline studio.
 * Order: shared core first, then studio-specific (bamboo Bangkok/Phuket, healed Bali).
 */
const globalStyleSlugs = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
  "healed",
] as const satisfies readonly TattooStyleSlug[];

const tattooStyleSlugsByRegion: Record<RegionSlug, readonly TattooStyleSlug[]> = {
  global: globalStyleSlugs,
  bangkok: bangkokStyleSlugs,
  phuket: phuketStyleSlugs,
  bali: baliStyleSlugs,
};

/** Homepage grid cap: featured teaser lanes (full menu lives on `/tattoo-styles`). */
const HOMEPAGE_TATTOO_STYLE_FEATURED_LIMIT = 4 as const;

/**
 * Studio-led homepage picks (max 4). Must be a subset of `tattooStyleSlugsForRegion`.
 */
const homepageFeaturedTattooStyleSlugsByRegion: Record<RegionSlug, readonly TattooStyleSlug[]> = {
  global: ["realism", "portrait", "japanese", "colour"],
  bangkok: ["realism", "portrait", "japanese", "colour"],
  phuket: ["realism", "portrait", "japanese", "colour"],
  /** Healed replaces bamboo as the Bali-specific lane on the homepage teaser. */
  bali: ["realism", "portrait", "japanese", "healed"],
};

function tattooStyleSlugsForRegion(region: RegionSlug): readonly TattooStyleSlug[] {
  return tattooStyleSlugsByRegion[region];
}

function homepageFeaturedTattooStyleSlugsForRegion(region: RegionSlug): readonly TattooStyleSlug[] {
  const available = tattooStyleSlugsByRegion[region];
  const featured = homepageFeaturedTattooStyleSlugsByRegion[region];

  return featured
    .filter((slug) => available.includes(slug))
    .slice(0, HOMEPAGE_TATTOO_STYLE_FEATURED_LIMIT);
}

function isTattooStyleAvailableInRegion(slug: TattooStyleSlug, region: RegionSlug): boolean {
  return tattooStyleSlugsByRegion[region].includes(slug);
}

/** @deprecated Prefer {@link bangkokStyleSlugs} / {@link phuketStyleSlugs}. */
const bangkokPhuketStyleSlugs = bangkokStyleSlugs;

export {
  baliStyleSlugs,
  bangkokPhuketStyleSlugs,
  bangkokStyleSlugs,
  globalStyleSlugs,
  HOMEPAGE_TATTOO_STYLE_FEATURED_LIMIT,
  homepageFeaturedTattooStyleSlugsForRegion,
  isTattooStyleAvailableInRegion,
  phuketStyleSlugs,
  tattooStyleSlugsForRegion,
};
