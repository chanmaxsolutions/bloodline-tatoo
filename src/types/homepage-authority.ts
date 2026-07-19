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
  /** Optional caption overlay (Phuket restores title + line on both cards). */
  tag?: string;
  line?: string;
  overlay?: HomepageAuthorityProofOverlay;
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
  /** Two proof panels (30% + 30%) — video clips across all regional sites. */
  proofPanels: readonly [HomepageAuthorityProofPanel, HomepageAuthorityProofPanel];
  /**
   * When true, both proof panels render on mobile.
   * Default: first panel stays `hidden` below `sm` (studio/second panel only).
   */
  showBothProofPanelsOnMobile?: boolean;
}
