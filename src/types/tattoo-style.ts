export type TattooStyleSlug =
  | "realism"
  | "portrait"
  | "japanese"
  | "colour"
  | "mandala"
  | "chicano"
  | "bamboo"
  | "healed";

export interface TattooStyleCatalogEntry {
  slug: TattooStyleSlug;
  title: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  /** Catalog-level flag for curated sets (e.g. editorial picks). */
  featured?: boolean;
}

/** Resolved row for homepage tiles (href is absolute path on this site). */
export interface TattooStyleHomepageTile {
  slug: TattooStyleSlug;
  title: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface RegionHomepageTattooStylesIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface RegionHomepageTattooStylesConfig {
  intro: RegionHomepageTattooStylesIntro;
  /**
   * Homepage teaser grid (max 4). Subset of regional availability; full list on `/tattoo-styles`.
   */
  featuredSlugs: readonly TattooStyleSlug[];
  /** Under-grid link to the full styles index (SEO + discovery). */
  catalogCta: {
    label: string;
    href: string;
  };
}
