import type {
  TattooStyleCatalogEntry,
  TattooStyleHomepageTile,
  TattooStyleSlug,
} from "@/types/tattoo-style";

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
    imageSrc: "/images/tattoo-styles/realism.jpg",
    imageAlt: "Realistic black and grey tattoo portrait on skin",
    featured: true,
  },
  portrait: {
    slug: "portrait",
    title: "Portrait Tattoos",
    shortDescription:
      "Likeness, expression, and tonal structure built with restraint so faces stay true on skin.",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    imageAlt: "Portrait tattoo with refined black and grey tonal work",
    featured: true,
  },
  japanese: {
    slug: "japanese",
    title: "Japanese Tattoos",
    shortDescription:
      "Bold irezumi discipline, negative space, and long-form composition held to studio standards.",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    imageAlt: "Japanese tattoo sleeve with dragon and wave motifs in high contrast",
    featured: true,
  },
  colour: {
    slug: "colour",
    title: "Colour Tattoos",
    shortDescription:
      "Saturated palettes, clean packing, and healed clarity for colour that holds over time.",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    imageAlt: "Colour tattoo work with saturated pigment and clean healed tones",
    featured: true,
  },
  mandala: {
    slug: "mandala",
    title: "Mandala Tattoos",
    shortDescription:
      "Radial symmetry, precise geometry, and balance engineered for flow on arms, backs, and chest.",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    imageAlt: "Mandala tattoo with precise geometric symmetry and dotwork",
    featured: true,
  },
  chicano: {
    slug: "chicano",
    title: "Chicano Tattoos",
    shortDescription:
      "Lettering, script, and black-and-grey narrative built with classic West Coast discipline.",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    imageAlt: "Chicano style black and grey tattoo with script and fine greywash",
    featured: true,
  },
  bamboo: {
    slug: "bamboo",
    title: "Bamboo Tattoos",
    shortDescription:
      "Traditional hand-tap rhythm and cultural line weight for clients seeking an authentic ritual pace.",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    imageAlt: "Bamboo hand-tap tattoo session with traditional line work",
    featured: true,
  },
  healed: {
    slug: "healed",
    title: "Healed Tattoos",
    shortDescription:
      "Work documented after settle: line integrity, tone stability, and how craft reads once skin has healed.",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    imageAlt: "Healed fine tattoo work showing clean settled lines on skin",
    featured: true,
  },
};

function isTattooStyleSlug(value: string): value is TattooStyleSlug {
  return (TATTOO_STYLE_SLUGS as readonly string[]).includes(value);
}

function getTattooStyleBySlug(slug: TattooStyleSlug): TattooStyleCatalogEntry {
  return tattooStyleCatalog[slug];
}

function resolveHomepageTattooStyleTiles(
  slugs: readonly TattooStyleSlug[],
): TattooStyleHomepageTile[] {
  return slugs.map((slug) => {
    const entry = getTattooStyleBySlug(slug);
    return {
      slug: entry.slug,
      title: entry.title,
      shortDescription: entry.shortDescription,
      imageSrc: entry.imageSrc,
      imageAlt: entry.imageAlt,
      href: `/tattoo-styles/${entry.slug}`,
    };
  });
}

export {
  getTattooStyleBySlug,
  isTattooStyleSlug,
  resolveHomepageTattooStyleTiles,
  TATTOO_STYLE_SLUGS,
  tattooStyleCatalog,
};
