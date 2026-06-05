import type { TattooStyleSlug } from "@/types/tattoo-style";

const tattooStyleHeroVideoRoot = "/videos/tattoo-styles" as const;

/** One header clip per style slug (shared across all regional domains). */
const tattooStyleHeroVideoBySlug = {
  realism: `${tattooStyleHeroVideoRoot}/realism-header.mp4`,
  portrait: `${tattooStyleHeroVideoRoot}/portrait-header.mp4`,
  japanese: `${tattooStyleHeroVideoRoot}/japanese-header.mp4`,
  colour: `${tattooStyleHeroVideoRoot}/colour-header.mp4`,
  mandala: `${tattooStyleHeroVideoRoot}/mandala-header.mp4`,
  chicano: `${tattooStyleHeroVideoRoot}/chicano-header.mp4`,
  bamboo: `${tattooStyleHeroVideoRoot}/bamboo-header.mp4`,
  /** Placeholder until a dedicated healed clip is supplied (currently portrait). */
  healed: `${tattooStyleHeroVideoRoot}/healed-header.mp4`,
} as const satisfies Record<TattooStyleSlug, string>;

const tattooStyleHeroVideoVersion = "20250605" as const;

function tattooStyleHeroVideoSrc(slug: TattooStyleSlug): string {
  return `${tattooStyleHeroVideoBySlug[slug]}?v=${tattooStyleHeroVideoVersion}`;
}

/**
 * Clips used for the tattoo-styles index hero rotation.
 * Healed is omitted — it is a portrait placeholder until a dedicated file exists.
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

/** Picks a style header clip at request time (tattoo-styles index, portfolio intro, etc.). */
function pickRandomTattooStyleHeroVideoSrc(): string {
  const slugs = tattooStylesIndexHeroVideoSlugs;
  const index = Math.floor(Math.random() * slugs.length);
  const slug = slugs[index] ?? slugs[0];
  return tattooStyleHeroVideoSrc(slug);
}

export {
  pickRandomTattooStyleHeroVideoSrc,
  tattooStyleHeroVideoBySlug,
  tattooStyleHeroVideoSrc,
  tattooStylesIndexHeroVideoSlugs,
};
