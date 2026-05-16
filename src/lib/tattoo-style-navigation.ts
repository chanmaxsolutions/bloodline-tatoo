import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import type { HeaderNavItem } from "@/config/navigation";
import { desktopNavigationItems } from "@/config/navigation";
import type { RegionSlug } from "@/types/region";

function tattooStyleNavChildrenForRegion(region: RegionSlug): HeaderNavItem[] {
  return tattooStyleSlugsForRegion(region).map((slug) => {
    const style = getTattooStyleBySlug(slug);
    return {
      label: style.title,
      href: `/tattoo-styles/${slug}`,
    };
  });
}

function navigationItemsForRegion(region: RegionSlug): HeaderNavItem[] {
  return desktopNavigationItems.map((item) => {
    if (item.href !== "/tattoo-styles") {
      return item;
    }

    return {
      ...item,
      children: tattooStyleNavChildrenForRegion(region),
    };
  });
}

export { navigationItemsForRegion, tattooStyleNavChildrenForRegion };
