export interface HeaderNavItem {
  label: string;
  href: string;
  hasFutureDropdown?: boolean;
  children?: HeaderNavItem[];
}

export const desktopNavigationItems: HeaderNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tattoo Styles",
    href: "/tattoo-styles",
    hasFutureDropdown: true,
    /** Populated per region in `navigationItemsForRegion`. */
    children: [],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/tattoo-blog" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavigationItems: HeaderNavItem[] = [...desktopNavigationItems];
