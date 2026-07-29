import { getRegionConfig } from "@/lib/region";
import { navigationItemsForRegion } from "@/lib/tattoo-style-navigation";
import type { RegionSlug } from "@/types";
import { HeaderClient } from "@/components/layout/header-client";

interface SiteHeaderProps {
  region?: RegionSlug;
}

function SiteHeader({ region = "global" }: SiteHeaderProps) {
  const regionConfig = getRegionConfig(region);
  const navigationItems = navigationItemsForRegion(region);
  /** Global hub has no studio WhatsApp — booking lives on regional domains. */
  const cta = region === "global" ? null : regionConfig.headerCta;

  return (
    <HeaderClient
      logoWordmark={regionConfig.branding.logoWordmark}
      logoMonogram={regionConfig.branding.logoMonogram}
      logoPath={regionConfig.branding.logoPath}
      desktopNavigationItems={navigationItems}
      mobileNavigationItems={navigationItems}
      cta={cta}
    />
  );
}

export { SiteHeader };
