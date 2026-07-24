import type { StandardsProofIconId } from "@/lib/standards-proof-icons";

export type StandardsProofVariant = "accent" | "light" | "dark";

/** Still image media for standards / session-path split bands. */
export interface HomepageStandardsSplitImageMedia {
  kind?: "image";
  src: string;
  alt: string;
}

/** Branded click-to-play YouTube media (Phuket homepage bands). */
export interface HomepageStandardsSplitYoutubeMedia {
  kind: "youtube";
  youtubeVideoId: string;
  embedTitle: string;
  /** Local poster still shown before play (preferred over YouTube thumb). */
  posterSrc: string;
  alt: string;
}

export type HomepageStandardsSplitMedia =
  | HomepageStandardsSplitImageMedia
  | HomepageStandardsSplitYoutubeMedia;

export interface RegionHomepageStandardsSplitConfig {
  /** LTR: image column first (default) vs second (text left, image right). */
  mediaSide?: "start" | "end";
  /** Solid band background when two split sections stack (see `homepage-section-surfaces`). */
  bandSurface?: "default" | "surface" | "elevated" | "charcoal" | "strong";
  /** Eyebrow for `approach` layout (left-aligned `SectionHeading`). */
  eyebrow?: string;
  /** Display title (uppercase display stack). */
  heading: string;
  /** Supporting line under the title in `approach` layout. */
  intro?: string;
  /** Card titles for `approach` layout — one label per bullet. */
  pointerLabels?: readonly [string, string, string];
  /** Lucide icon per proof column (same order as `pointerLabels`). */
  pointerIcons?: readonly [StandardsProofIconId, StandardsProofIconId, StandardsProofIconId];
  /** Proof card surfaces for `approach` layout (defaults accent · light · dark). */
  proofVariants?: readonly [StandardsProofVariant, StandardsProofVariant, StandardsProofVariant];
  /** Short proof lines (checkmark list or approach cards). */
  bullets: readonly string[];
  cta: {
    label: string;
    href: string;
  };
  media: HomepageStandardsSplitMedia;
}
