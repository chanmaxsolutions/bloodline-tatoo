import type { RegionSlug } from "@/types/region";

export type RegionFlagKind = "earth" | "thailand" | "indonesia";

export interface FooterRegionSwitcherOption {
  slug: RegionSlug;
  label: string;
  flag: RegionFlagKind;
  href: string;
}
