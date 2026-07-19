export type HomepageAuthorityProofOverlay = "accent" | "light";

export interface HomepageAuthorityProofImagePanel {
  kind: "image";
  src: string;
  alt: string;
  tag: string;
  /** Short supporting line under the panel title. */
  line: string;
  overlay: HomepageAuthorityProofOverlay;
}

export interface HomepageAuthorityProofVideoPanel {
  kind: "video";
  videoSrc: string;
  posterSrc: string;
  alt: string;
}

export type HomepageAuthorityProofPanel =
  | HomepageAuthorityProofImagePanel
  | HomepageAuthorityProofVideoPanel;

export interface RegionHomepageAuthorityConfig {
  eyebrow: string;
  heading: string;
  /**
   * Institutional body copy (left column). Use a blank line (`\n\n`) between blocks for
   * multiple paragraphs. Wrap key phrases in `**double asterisks**` for emphasis.
   */
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /** Two proof panels (30% + 30%) — image cards with captions, or video-only (Bali / Phuket). */
  proofPanels: readonly [HomepageAuthorityProofPanel, HomepageAuthorityProofPanel];
}
