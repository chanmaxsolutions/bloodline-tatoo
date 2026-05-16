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

  return (
    <HeaderClient
      logoWordmark={regionConfig.branding.logoWordmark}
      logoMonogram={regionConfig.branding.logoMonogram}
      logoPath={regionConfig.branding.logoPath}
      desktopNavigationItems={navigationItems}
      mobileNavigationItems={navigationItems}
      cta={regionConfig.headerCta}
    />
  );
}

export { SiteHeader };
