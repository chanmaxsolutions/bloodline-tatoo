export interface RegionHomepageAuthorityConfig {
  eyebrow: string;
  heading: string;
  /**
   * Institutional body copy (centered in the Authority band). Use a blank line (`\\n\\n`)
   * between blocks to render multiple paragraphs. Wrap key phrases in `**double asterisks**`
   * for accent emphasis.
   */
  description: string;
  ctaLabel: string;
  ctaHref: string;
}
