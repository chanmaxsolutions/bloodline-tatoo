import type { GalleryCategorySlug } from "@/types/gallery";

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategorySlug, string> = {
  realistic: "Realistic",
  portrait: "Portrait",
  japanese: "Japanese",
  colour: "Colour",
  mandala: "Mandala",
  chicano: "Chicano",
  bamboo: "Bamboo",
  "line-and-dot": "Line & dot",
  "cover-up": "Cover-up",
  healed: "Healed",
};

export const GALLERY_CATEGORY_ORDER: readonly GalleryCategorySlug[] = [
  "realistic",
  "portrait",
  "japanese",
  "colour",
  "mandala",
  "chicano",
  "bamboo",
  "line-and-dot",
  "cover-up",
  "healed",
];
