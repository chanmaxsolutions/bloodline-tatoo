import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionHomepageTattooStylesConfig } from "@/types/tattoo-style";

export type RegionSlug = "global" | "bangkok" | "bali" | "phuket";

export interface RegionContactConfig {
  whatsappNumber: string;
  instagramUrl: string;
  messengerUrl: string;
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

export interface RegionConfig {
  slug: RegionSlug;
  domain: string;
  regionName: string;
  heroHeading: string;
  /** Public Google Maps / Business listing for this studio (homepage review “View more”). */
  googleBusinessProfileUrl: string;
  branding: RegionBrandingConfig;
  headerCta: RegionHeaderCtaConfig;
  contact: RegionContactConfig;
  seo: RegionSeoConfig;
  homepageAuthority: RegionHomepageAuthorityConfig;
  homepageTattooStyles: RegionHomepageTattooStylesConfig;
}
