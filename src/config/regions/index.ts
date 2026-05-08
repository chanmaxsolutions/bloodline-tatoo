import type { RegionConfig, RegionSlug } from "@/types";
import { baliRegionConfig } from "@/config/regions/bali";
import { bangkokRegionConfig } from "@/config/regions/bangkok";
import { globalRegionConfig } from "@/config/regions/global";
import { phuketRegionConfig } from "@/config/regions/phuket";

export const regionsBySlug: Record<RegionSlug, RegionConfig> = {
  global: globalRegionConfig,
  bangkok: bangkokRegionConfig,
  bali: baliRegionConfig,
  phuket: phuketRegionConfig,
};
