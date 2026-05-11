export type TattooStyleSlug = "japanese" | "realism" | "fine-line" | "blackwork";

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
  /** Ordered list; each slug must exist in the global catalog. */
  featuredSlugs: readonly TattooStyleSlug[];
}
