import { regionsBySlug } from "@/config/regions";
import { regionPublicUrl } from "@/lib/region-public-url";
import type { FooterRegionSwitcherOption } from "@/types/footer-region-switcher";
import type { RegionFlagKind } from "@/types/footer-region-switcher";
import type { RegionSlug } from "@/types/region";

const footerRegionSwitcherOrder = [
  "global",
  "bangkok",
  "bali",
  "phuket",
] as const satisfies readonly RegionSlug[];

const regionFlagBySlug: Record<RegionSlug, RegionFlagKind> = {
  global: "earth",
  bangkok: "thailand",
  bali: "indonesia",
  phuket: "thailand",
};

function footerRegionSwitcherLabel(slug: RegionSlug): string {
  return regionsBySlug[slug].regionName;
}

function footerRegionSwitcherTitle(): string {
  return "Other regional sites";
}

function buildFooterRegionSwitcherOptions(
  pathname: string,
  currentRegion: RegionSlug,
): FooterRegionSwitcherOption[] {
  return footerRegionSwitcherOrder
    .filter((slug) => slug !== currentRegion)
    .map((slug) => ({
      slug,
      label: footerRegionSwitcherLabel(slug),
      flag: regionFlagBySlug[slug],
      href: regionPublicUrl(slug, pathname),
    }));
}

export { buildFooterRegionSwitcherOptions, footerRegionSwitcherOrder, footerRegionSwitcherTitle };
