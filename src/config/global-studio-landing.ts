import { regionFlagBySlug } from "@/config/footer-region-switcher";
import type { RegionFlagKind } from "@/types/footer-region-switcher";
import type { RegionSlug } from "@/types/region";

export interface GlobalStudioLandingDestination {
  slug: Exclude<RegionSlug, "global">;
  label: string;
  line: string;
  flag: RegionFlagKind;
}

const globalStudioLandingBrand = "BLOODLINE" as const;

const globalStudioLandingHeadline = "One family. Three studios." as const;

const globalStudioLandingSupport =
  "Since 2015 Bloodline has grown as one family of artists, staff and clients. What started in Phuket is now three studios across Bangkok, Bali and Phuket, still run with the same care. Choose where you want to continue." as const;

const globalStudioLandingNote =
  "Appointment only · Message on Instagram, Facebook, or WhatsApp after you pick a studio";

const globalStudioLandingDestinations: readonly GlobalStudioLandingDestination[] = [
  {
    slug: "bangkok",
    label: "Bangkok",
    line: "The same family standard in the city",
    flag: regionFlagBySlug.bangkok,
  },
  {
    slug: "bali",
    label: "Bali",
    line: "Family feel on an organised floor",
    flag: regionFlagBySlug.bali,
  },
  {
    slug: "phuket",
    label: "Phuket",
    line: "Where the Bloodline family began",
    flag: regionFlagBySlug.phuket,
  },
] as const;

export {
  globalStudioLandingBrand,
  globalStudioLandingDestinations,
  globalStudioLandingHeadline,
  globalStudioLandingNote,
  globalStudioLandingSupport,
};
