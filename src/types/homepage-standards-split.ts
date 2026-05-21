import type { StandardsProofIconId } from "@/lib/standards-proof-icons";

export type StandardsProofVariant = "accent" | "light" | "dark";

export interface RegionHomepageStandardsSplitConfig {
  /** LTR: image column first (default) vs second (text left, image right). */
  mediaSide?: "start" | "end";
  /** Slight band separation when two split sections stack. */
  bandSurface?: "default" | "surface";
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
  media: {
    src: string;
    alt: string;
  };
}
