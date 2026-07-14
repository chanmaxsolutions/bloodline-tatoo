import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";
import type { RegionHomepageTattooStylesConfig } from "@/types/tattoo-style";

export type RegionSlug = "global" | "bangkok" | "bali" | "phuket";

export interface RegionContactConfig {
  whatsappNumber: string;
  instagramUrl: string;
  messengerUrl: string;
  /** Facebook Page or Messenger link for the booking modal “Facebook” action. */
  facebookBookUrl?: string;
}

export interface RegionSeoConfig {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
}

export interface RegionBrandingConfig {
  logoWordmark: string;
  logoMonogram: string;
  logoPath: string;
  faviconPath: string;
}

export interface RegionHeaderCtaConfig {
  label: string;
  href: string;
}

export interface RegionLocationConfig {
  /** Street line as shown on Google Business Profile. */
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 */
  addressCountry: "TH" | "ID";
  /** Public Google listing phone (may match WhatsApp). */
  telephone: string;
  /**
   * Schema.org openingHours strings, e.g. "Mo-Su 09:00-19:00".
   * Sourced from the live Google Business Profile.
   */
  openingHours: readonly string[];
}

export interface RegionConfig {
  slug: RegionSlug;
  domain: string;
  /**
   * Host used by the global-site booking modal studio tiles (e.g. staging subdomain).
   * Falls back to `domain` when omitted.
   */
  studioBookingHost?: string;
  regionName: string;
  heroHeading: string;
  /** Homepage hero subcopy below the main title. */
  heroDescription: string;
  /** Public Google Maps / Business listing for this studio (homepage review “View more”). */
  googleBusinessProfileUrl: string;
  /** Verified studio NAP from Google Business Profile (omit on global hub). */
  location?: RegionLocationConfig;
  branding: RegionBrandingConfig;
  headerCta: RegionHeaderCtaConfig;
  /** Optional urgency line rendered under hero CTAs (config-driven, honest tone). */
  heroCtaUrgencyNote?: string;
  contact: RegionContactConfig;
  seo: RegionSeoConfig;
  homepageAuthority: RegionHomepageAuthorityConfig;
  homepageTattooStyles: RegionHomepageTattooStylesConfig;
  homepageStandardsSplit: RegionHomepageStandardsSplitConfig;
  /** Mirrored split: journey / booking clarity (text left, image right on large screens). */
  homepageSessionPathSplit: RegionHomepageStandardsSplitConfig;
}
