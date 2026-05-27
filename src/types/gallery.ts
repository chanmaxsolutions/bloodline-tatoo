import type { RegionSlug } from "@/types/region";
import type { TattooStyleSlug } from "@/types/tattoo-style";

export type GalleryCategorySlug =
  | "realistic"
  | "portrait"
  | "japanese"
  | "colour"
  | "mandala"
  | "chicano"
  | "bamboo"
  | "line-and-dot"
  | "cover-up"
  | "healed";

export type GalleryItemLayout = "default" | "tall" | "wide";

export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  imageSrc: string;
  category: GalleryCategorySlug;
  regions: readonly RegionSlug[];
  styleSlug?: TattooStyleSlug;
  featured?: boolean;
  layout?: GalleryItemLayout;
}

export interface GalleryPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface GalleryPageContent {
  intro: GalleryPageIntro;
  items: readonly GalleryItem[];
  activeCategory: GalleryCategorySlug | null;
}
