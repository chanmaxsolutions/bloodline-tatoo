import { resolveTattooStyleCardImage } from "@/lib/tattoo-style-media";
import type {
  TattooStyleCatalogEntry,
  TattooStyleHomepageTile,
  TattooStyleSlug,
} from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const TATTOO_STYLE_SLUGS = [
  "realism",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
  "healed",
] as const satisfies readonly TattooStyleSlug[];

const tattooStyleCatalog: Record<TattooStyleSlug, TattooStyleCatalogEntry> = {
  realism: {
    slug: "realism",
    title: "Realistic Tattoos",
    shortDescription:
      "Portrait depth, tonal control, and skin-aware pacing for work that reads at distance and up close.",
    imageSrc: "/images/tattoo-styles/realism/bangkok/hero.webp",
    imageAlt:
      "Black and grey realism back tattoo with Greek god, angel, and temple at Bloodline Tattoo",
    featured: true,
  },
  portrait: {
    slug: "portrait",
    title: "Portrait Tattoos",
    shortDescription:
      "Likeness, expression, and tonal structure built with restraint so faces stay true on skin.",
    imageSrc: "/images/tattoo-styles/portrait/bangkok/hero.webp",
    imageAlt:
      "Memorial black and grey portrait tattoo of children Jackson and Olivia on the chest at Bloodline Tattoo Bangkok",
    featured: true,
  },
  japanese: {
    slug: "japanese",
    title: "Japanese Tattoos",
    shortDescription:
      "Bold irezumi discipline, negative space, and long-form composition held to studio standards.",
    imageSrc: "/images/tattoo-styles/japanese/bangkok/hero.webp",
    imageAlt:
      "Japanese black and grey full-back tattoo with samurai, Hannya mask, and pagoda at Bloodline Tattoo Bangkok",
    featured: true,
  },
  colour: {
    slug: "colour",
    title: "Colour Tattoos",
    shortDescription:
      "Saturated palettes, clean packing, and healed clarity for colour that holds over time.",
    imageSrc: "/images/tattoo-styles/colour/bangkok/hero.webp",
    imageAlt:
      "Japanese colour full-back samurai tattoo with saturated pigment at Bloodline Tattoo Bangkok",
    featured: true,
  },
  mandala: {
    slug: "mandala",
    title: "Mandala Tattoos",
    shortDescription:
      "Radial symmetry, precise geometry, and balance engineered for flow on arms, backs, and chest.",
    imageSrc: "/images/tattoo-styles/mandala/bangkok/hero.webp",
    imageAlt:
      "Full-back sacred geometry tattoo with all-seeing eye and radial mandala structure at Bloodline Tattoo Bangkok",
    featured: true,
  },
  chicano: {
    slug: "chicano",
    title: "Chicano Tattoos",
    shortDescription:
      "Lettering, script, and black-and-grey narrative built with classic West Coast discipline.",
    imageSrc: "/images/tattoo-styles/chicano/bangkok/hero.webp",
    imageAlt:
      "Chicano black and grey Familia script back tattoo with payasa and lowrider at Bloodline Tattoo",
    featured: true,
  },
  bamboo: {
    slug: "bamboo",
    title: "Bamboo Tattoos",
    shortDescription:
      "Traditional hand-tap rhythm and cultural line weight for clients seeking an authentic ritual pace.",
    imageSrc: "/images/tattoo-styles/bamboo/bangkok/hero.webp",
    imageAlt: "Traditional bamboo hand-tap Sak Yant tattoo at Bloodline Tattoo",
    featured: true,
  },
  healed: {
    slug: "healed",
    title: "Healed Tattoos",
    shortDescription:
      "Work documented after settle: line integrity, tone stability, and how craft reads once skin has healed.",
    imageSrc: "/images/tattoo-styles/healed/bali/hero.webp",
    imageAlt:
      "Healed black and grey full-back tattoo with woman portrait and motorcycle at Bloodline Tattoo Bali",
    featured: true,
  },
};

function isTattooStyleSlug(value: string): value is TattooStyleSlug {
  return (TATTOO_STYLE_SLUGS as readonly string[]).includes(value);
}

function getTattooStyleBySlug(slug: TattooStyleSlug): TattooStyleCatalogEntry {
  return tattooStyleCatalog[slug];
}

/** Bali card copy overrides — used on related style links and homepage tiles. */
const tattooStyleShortDescriptionByRegion: Partial<
  Record<RegionSlug, Partial<Record<TattooStyleSlug, string>>>
> = {
  bali: {
    realism: "Any image, scene or subject brought to life on skin. Realism at its finest.",
    portrait:
      "The most personal style in tattooing. Faces, figures and likenesses captured with the detail they deserve.",
    japanese: "Bold, timeless and built to age beautifully. Japanese tattooing at its finest.",
    colour:
      "Vivid, saturated and built to hold. Colour work that turns heads for all the right reasons.",
  },
};

function tattooStyleShortDescriptionForRegion(slug: TattooStyleSlug, region: RegionSlug): string {
  return (
    tattooStyleShortDescriptionByRegion[region]?.[slug] ??
    getTattooStyleBySlug(slug).shortDescription
  );
}

function resolveHomepageTattooStyleTiles(
  slugs: readonly TattooStyleSlug[],
  region: RegionSlug,
): TattooStyleHomepageTile[] {
  return slugs.map((slug) => {
    const entry = getTattooStyleBySlug(slug);
    const card = resolveTattooStyleCardImage(slug, region, entry.imageAlt);

    return {
      slug: entry.slug,
      title: entry.title,
      shortDescription: tattooStyleShortDescriptionForRegion(slug, region),
      imageSrc: card.src,
      imageAlt: card.alt,
      href: `/tattoo-styles/${entry.slug}`,
    };
  });
}

export {
  getTattooStyleBySlug,
  isTattooStyleSlug,
  resolveHomepageTattooStyleTiles,
  tattooStyleShortDescriptionForRegion,
  TATTOO_STYLE_SLUGS,
  tattooStyleCatalog,
};
