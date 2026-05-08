export interface HeaderNavItem {
  label: string;
  href: string;
  hasFutureDropdown?: boolean;
  children?: HeaderNavItem[];
}

export const desktopNavigationItems: HeaderNavItem[] = [
  {
    label: "Tattoo Styles",
    href: "/tattoo-styles",
    hasFutureDropdown: true,
    children: [
      { label: "Japanese", href: "/tattoo-styles/japanese" },
      { label: "Realism", href: "/tattoo-styles/realism" },
      { label: "Fine Line", href: "/tattoo-styles/fine-line" },
      { label: "Blackwork", href: "/tattoo-styles/blackwork" },
      { label: "Geometric", href: "/tattoo-styles/geometric" },
    ],
  },
  { label: "Portfolio", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/tattoo-blog" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavigationItems: HeaderNavItem[] = [...desktopNavigationItems];
