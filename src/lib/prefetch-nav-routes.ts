import type { HeaderNavItem } from "@/config/navigation";
import { normalizeNavPath } from "@/lib/same-route-nav";

const prefetchedNavHrefs = new Set<string>();

function collectNavItemHrefs(items: readonly HeaderNavItem[]): string[] {
  const hrefs: string[] = [];

  for (const item of items) {
    hrefs.push(item.href);

    if (item.children?.length) {
      for (const child of item.children) {
        hrefs.push(child.href);
      }
    }
  }

  return hrefs;
}

function prefetchNavRoutes(prefetch: (href: string) => void, hrefs: readonly string[]): void {
  for (const href of hrefs) {
    const key = normalizeNavPath(href);

    if (prefetchedNavHrefs.has(key)) {
      continue;
    }

    prefetchedNavHrefs.add(key);
    prefetch(href);
  }
}

/** Prefetch a dropdown parent route and its child links once per session. */
function prefetchHeaderNavItemRoutes(prefetch: (href: string) => void, item: HeaderNavItem): void {
  prefetchNavRoutes(prefetch, [item.href, ...(item.children?.map((child) => child.href) ?? [])]);
}

/** Prefetch all header navigation destinations (mobile overlay open). */
function prefetchHeaderNavigationRoutes(
  prefetch: (href: string) => void,
  items: readonly HeaderNavItem[],
): void {
  prefetchNavRoutes(prefetch, collectNavItemHrefs(items));
}

export { prefetchHeaderNavItemRoutes, prefetchHeaderNavigationRoutes, prefetchNavRoutes };
