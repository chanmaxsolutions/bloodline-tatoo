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
  imageWidth: number;
  imageHeight: number;
  category: GalleryCategorySlug;
  regions: readonly RegionSlug[];
  styleSlug?: TattooStyleSlug;
  featured?: boolean;
  /** Lower values surface first (after featured). */
  sortOrder: number;
  /** ISO-8601; newer dates sort earlier when sortOrder ties. */
  uploadedAt: string;
  /** Legacy masonry hint; portfolio uses intrinsic image dimensions instead. */
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
