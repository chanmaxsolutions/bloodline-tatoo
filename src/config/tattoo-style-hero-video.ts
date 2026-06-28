import { baliStyleSlugs } from "@/config/region-tattoo-style-availability";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const tattooStyleHeroVideoRoot = "/videos/tattoo-styles" as const;
const baliTattooStyleHeroVideoRoot = `${tattooStyleHeroVideoRoot}/bali` as const;

/** One header clip per style slug (Bangkok, Phuket, global). */
const tattooStyleHeroVideoBySlug = {
  realism: `${tattooStyleHeroVideoRoot}/realism-header.mp4`,
  portrait: `${tattooStyleHeroVideoRoot}/portrait-header.mp4`,
  japanese: `${tattooStyleHeroVideoRoot}/japanese-header.mp4`,
  colour: `${tattooStyleHeroVideoRoot}/colour-header.mp4`,
  mandala: `${tattooStyleHeroVideoRoot}/mandala-header.mp4`,
  chicano: `${tattooStyleHeroVideoRoot}/chicano-header.mp4`,
  bamboo: `${tattooStyleHeroVideoRoot}/bamboo-header.mp4`,
  healed: `${tattooStyleHeroVideoRoot}/healed-header.mp4`,
} as const satisfies Record<TattooStyleSlug, string>;

/** Bali studio clips (client-supplied, one per regional style page). */
const baliTattooStyleHeroVideoBySlug = {
  realism: `${baliTattooStyleHeroVideoRoot}/realism-header.mp4`,
  portrait: `${baliTattooStyleHeroVideoRoot}/portrait-header.mp4`,
  japanese: `${baliTattooStyleHeroVideoRoot}/japanese-header.mp4`,
  colour: `${baliTattooStyleHeroVideoRoot}/colour-header.mp4`,
  mandala: `${baliTattooStyleHeroVideoRoot}/mandala-header.mp4`,
  chicano: `${baliTattooStyleHeroVideoRoot}/chicano-header.mp4`,
  healed: `${baliTattooStyleHeroVideoRoot}/healed-header.mp4`,
} as const satisfies Record<(typeof baliStyleSlugs)[number], string>;

const tattooStyleHeroVideoVersion = "20250605" as const;
const baliTattooStyleHeroVideoVersion = "20250628" as const;

function tattooStyleHeroVideoPath(slug: TattooStyleSlug, region: RegionSlug): string {
  if (region === "bali" && slug in baliTattooStyleHeroVideoBySlug) {
    return baliTattooStyleHeroVideoBySlug[slug as keyof typeof baliTattooStyleHeroVideoBySlug];
  }

  return tattooStyleHeroVideoBySlug[slug];
}

function tattooStyleHeroVideoSrc(slug: TattooStyleSlug, region: RegionSlug = "global"): string {
  const version = region === "bali" ? baliTattooStyleHeroVideoVersion : tattooStyleHeroVideoVersion;
  return `${tattooStyleHeroVideoPath(slug, region)}?v=${version}`;
}

/**
 * Clips used for the tattoo-styles index hero rotation.
 * Healed is omitted on shared domains until a dedicated non-placeholder clip exists.
 */
const tattooStylesIndexHeroVideoSlugs = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
] as const satisfies readonly TattooStyleSlug[];

const baliTattooStylesIndexHeroVideoSlugs = baliStyleSlugs;

function tattooStylesIndexHeroVideoSlugsForRegion(region: RegionSlug): readonly TattooStyleSlug[] {
  return region === "bali" ? baliTattooStylesIndexHeroVideoSlugs : tattooStylesIndexHeroVideoSlugs;
}

/** Picks a style header clip at request time (tattoo-styles index, portfolio intro, etc.). */
function pickRandomTattooStyleHeroVideoSrc(region: RegionSlug = "global"): string {
  const slugs = tattooStylesIndexHeroVideoSlugsForRegion(region);
  const index = Math.floor(Math.random() * slugs.length);
  const slug = slugs[index] ?? slugs[0];
  return tattooStyleHeroVideoSrc(slug, region);
}

export {
  baliTattooStyleHeroVideoBySlug,
  pickRandomTattooStyleHeroVideoSrc,
  tattooStyleHeroVideoBySlug,
  tattooStyleHeroVideoSrc,
  tattooStylesIndexHeroVideoSlugs,
  tattooStylesIndexHeroVideoSlugsForRegion,
};
