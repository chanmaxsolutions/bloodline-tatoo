export type GlobalHeroTrustProofBrand = "google" | "instagram" | "youtube" | "facebook";

export interface GlobalHeroTrustProofChip {
  id: string;
  brand: GlobalHeroTrustProofBrand;
  /** Lead metric (foreground). */
  accent: string;
  /** Optional glyph after accent (e.g. star for Google). */
  rest: string;
  /** Muted suffix (include leading space or “ · ” as needed). */
  suffix: string;
}
