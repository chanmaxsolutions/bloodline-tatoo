export interface RegionHomepageStandardsSplitConfig {
  /** LTR: image column first (default) vs second (text left, image right). */
  mediaSide?: "start" | "end";
  /** Slight band separation when two split sections stack. */
  bandSurface?: "default" | "surface";
  /** Display title (uppercase display stack). */
  heading: string;
  /** Short proof lines (rendered with checkmarks). */
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
