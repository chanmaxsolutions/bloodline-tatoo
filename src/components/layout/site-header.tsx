import { getRegionConfig } from "@/lib/region";
import { desktopNavigationItems, mobileNavigationItems } from "@/config/navigation";
import type { RegionSlug } from "@/types";
import { HeaderClient } from "@/components/layout/header-client";

interface SiteHeaderProps {
  region?: RegionSlug;
}

function SiteHeader({ region = "global" }: SiteHeaderProps) {
  const regionConfig = getRegionConfig(region);

  return (
    <HeaderClient
      logoWordmark={regionConfig.branding.logoWordmark}
      logoMonogram={regionConfig.branding.logoMonogram}
      logoPath={regionConfig.branding.logoPath}
      desktopNavigationItems={desktopNavigationItems}
      mobileNavigationItems={mobileNavigationItems}
      cta={regionConfig.headerCta}
    />
  );
}

export { SiteHeader };
