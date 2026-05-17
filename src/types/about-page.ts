import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";

export interface AboutPageIntro {
  eyebrow: string;
  heading: string;
  /** Use double newlines for paragraph breaks. Supports `**emphasis**`. */
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface AboutPageExploreLink {
  label: string;
  href: string;
}

export interface AboutPageClosing {
  heading: string;
  description: string;
  exploreLinks: readonly AboutPageExploreLink[];
}

export interface AboutPageContent {
  intro: AboutPageIntro;
  standardsSplit: RegionHomepageStandardsSplitConfig;
  closing: AboutPageClosing;
  headerCtaLabel: string;
}
