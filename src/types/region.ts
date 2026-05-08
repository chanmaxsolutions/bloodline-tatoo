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
  branding: RegionBrandingConfig;
  headerCta: RegionHeaderCtaConfig;
  contact: RegionContactConfig;
  seo: RegionSeoConfig;
}
