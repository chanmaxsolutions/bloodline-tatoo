import type { MouseEvent } from "react";

function normalizeNavPath(path: string): string {
  const withoutHashOrQuery = path.split("#")[0]?.split("?")[0] ?? path;

  if (!withoutHashOrQuery || withoutHashOrQuery === "/") {
    return "/";
  }

  return withoutHashOrQuery.endsWith("/") ? withoutHashOrQuery.slice(0, -1) : withoutHashOrQuery;
}

function isSameNavRoute(pathname: string, href: string): boolean {
  return normalizeNavPath(pathname) === normalizeNavPath(href);
}

function scrollToPageTop(): void {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

/**
 * When the user clicks a nav link for the page they are already on, scroll to top
 * instead of no-op client navigation. Returns true when handled.
 */
function handleSameRouteNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  pathname: string,
  href: string,
): boolean {
  if (!isSameNavRoute(pathname, href)) {
    return false;
  }

  event.preventDefault();
  scrollToPageTop();
  return true;
}

export { handleSameRouteNavClick, isSameNavRoute, normalizeNavPath, scrollToPageTop };
