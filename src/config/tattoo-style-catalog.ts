import type {
  TattooStyleCatalogEntry,
  TattooStyleHomepageTile,
  TattooStyleSlug,
} from "@/types/tattoo-style";

const TATTOO_STYLE_SLUGS = [
  "japanese",
  "realism",
  "fine-line",
  "blackwork",
] as const satisfies readonly TattooStyleSlug[];

const tattooStyleCatalog: Record<TattooStyleSlug, TattooStyleCatalogEntry> = {
  japanese: {
    slug: "japanese",
    title: "Japanese",
    shortDescription:
      "Bold irezumi discipline, negative space, and long-form composition held to studio standards.",
    imageSrc: "/images/tattoo-styles/japanese.jpg",
    imageAlt: "Japanese tattoo sleeve with dragon and wave motifs in high contrast",
    featured: true,
  },
  realism: {
    slug: "realism",
    title: "Realism",
    shortDescription:
      "Portrait depth, tonal control, and skin-aware pacing for work that reads at distance and up close.",
    imageSrc: "/images/tattoo-styles/realism.jpg",
    imageAlt: "Realistic black and grey tattoo portrait on skin",
    featured: true,
  },
  "fine-line": {
    slug: "fine-line",
    title: "Fine Line",
    shortDescription:
      "Restrained needle discipline for delicate structure, micro-contrast, and clean healed lines.",
    imageSrc: "/images/tattoo-styles/fine-line.jpg",
    imageAlt: "Fine line botanical tattoo with delicate linework",
    featured: true,
  },
  blackwork: {
    slug: "blackwork",
    title: "Blackwork",
    shortDescription:
      "Solid fields, geometry, and negative space orchestrated for balance, longevity, and edge.",
    imageSrc: "/images/tattoo-styles/blackwork.jpg",
    imageAlt: "Blackwork geometric tattoo with solid black and dotwork",
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
