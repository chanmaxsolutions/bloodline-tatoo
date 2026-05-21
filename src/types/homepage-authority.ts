export type HomepageAuthorityProofOverlay = "accent" | "light";

export interface HomepageAuthorityProofPanel {
  src: string;
  alt: string;
  tag: string;
  /** Short supporting line under the panel title. */
  line: string;
  overlay: HomepageAuthorityProofOverlay;
}

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
  /** Two proof images (30% + 30%) with a single tactical tag each. */
  proofPanels: readonly [HomepageAuthorityProofPanel, HomepageAuthorityProofPanel];
}
