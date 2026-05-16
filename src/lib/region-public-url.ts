import { regionsBySlug } from "@/config/regions";
import type { RegionSlug } from "@/types/region";

const DEFAULT_DEV_PORT = "3000";

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Public site origin for cross-domain region links (footer switcher, etc.). */
function regionPublicUrl(region: RegionSlug, path = "/"): string {
  const { domain, studioBookingHost } = regionsBySlug[region];
  const host = studioBookingHost ?? domain;
  const normalizedPath = normalizePath(path);

  if (host.includes("localhost")) {
    const port = process.env.PORT ?? DEFAULT_DEV_PORT;
    return `http://${host}:${port}${normalizedPath}`;
  }

  return `https://${host}${normalizedPath}`;
}

export { regionPublicUrl };
