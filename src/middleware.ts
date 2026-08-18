import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLegacyTopLevelBlogSlug } from "@/config/legacy-blog-slugs";
import {
  isPreviewRegionOverrideAllowed,
  parseRegionSlug,
  PREVIEW_REGION_COOKIE,
  PREVIEW_REGION_HEADER,
} from "@/lib/preview-region";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";
import type { RegionSlug } from "@/types/region";

interface PreviewRegionResolution {
  region: RegionSlug | null;
  /** Persist cookie when `?region=` is present on this request. */
  persistCookie: boolean;
}

function resolvePreviewRegion(request: NextRequest): PreviewRegionResolution {
  if (!isPreviewRegionOverrideAllowed()) {
    return { region: null, persistCookie: false };
  }

  const fromQuery = parseRegionSlug(request.nextUrl.searchParams.get("region"));
  if (fromQuery) {
    return { region: fromQuery, persistCookie: true };
  }

  const fromCookie = parseRegionSlug(request.cookies.get(PREVIEW_REGION_COOKIE)?.value);
  return { region: fromCookie, persistCookie: false };
}

function withPreviewRegion(
  request: NextRequest,
  response: NextResponse,
  preview: PreviewRegionResolution,
): NextResponse {
  if (!preview.region) return response;

  if (preview.persistCookie) {
    response.cookies.set(PREVIEW_REGION_COOKIE, preview.region, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  return response;
}

function nextWithPreviewRegion(
  request: NextRequest,
  preview: PreviewRegionResolution,
): NextResponse {
  const requestHeaders = new Headers(request.headers);

  if (preview.region) {
    requestHeaders.set(PREVIEW_REGION_HEADER, preview.region);
  } else {
    requestHeaders.delete(PREVIEW_REGION_HEADER);
  }

  return withPreviewRegion(
    request,
    NextResponse.next({ request: { headers: requestHeaders } }),
    preview,
  );
}

/** Global hub (bloodlinetattoo.com) is home + about only. */
function isGlobalHubAllowedPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized === "/" || normalized === "/about";
}

/**
 * Old WordPress spam injection used `?b=blo…` (Italian fashion/affiliate junk).
 * Those URLs still 200 the same page, so Google listed ~1k as duplicates.
 * Permanent-redirect to the clean path; keep `?region=` for preview switching.
 */
function redirectSpamQueryToCleanPath(request: NextRequest): NextResponse | null {
  if (!request.nextUrl.searchParams.has("b")) {
    return null;
  }

  const url = request.nextUrl.clone();
  url.searchParams.delete("b");

  return NextResponse.redirect(url, 301);
}

/**
 * Catch old WordPress blog posts published at top-level slugs (e.g. /guide-to-choosing-...).
 * next.config redirects handle known paths; this covers long-tail indexed URLs from site: search.
 *
 * Also rewrite /favicon.ico to the regional Bloodline mark. Google and browsers request
 * /favicon.ico by default; the create-next-app Vercel icon previously lived at app/favicon.ico.
 *
 * On Vercel Preview / local dev only: `?region=bali|bangkok|phuket|global` overrides the
 * hostname region (and sticks via cookie for in-site navigation). Production/VPS ignores this.
 */
function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const preview = resolvePreviewRegion(request);
  const hostname = request.headers.get("host") ?? "";
  const hostnameRegion = resolveRegionFromHostname(hostname);
  const activeRegion = preview.region ?? hostnameRegion;

  if (pathname === "/favicon.ico") {
    const faviconPath = getRegionConfig(activeRegion).branding.faviconPath;
    const url = request.nextUrl.clone();
    url.pathname = faviconPath;

    const requestHeaders = new Headers(request.headers);
    if (preview.region) {
      requestHeaders.set(PREVIEW_REGION_HEADER, preview.region);
    }

    return withPreviewRegion(
      request,
      NextResponse.rewrite(url, { request: { headers: requestHeaders } }),
      preview,
    );
  }

  const spamQueryRedirect = redirectSpamQueryToCleanPath(request);
  if (spamQueryRedirect) {
    return withPreviewRegion(request, spamQueryRedirect, preview);
  }

  if (activeRegion === "global" && !isGlobalHubAllowedPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return withPreviewRegion(request, NextResponse.redirect(url, 308), preview);
  }

  if (pathname === "/" || pathname.includes(".")) {
    return nextWithPreviewRegion(request, preview);
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length !== 1) {
    return nextWithPreviewRegion(request, preview);
  }

  const slug = segments[0];

  if (!isLegacyTopLevelBlogSlug(slug)) {
    return nextWithPreviewRegion(request, preview);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tattoo-blog";
  return withPreviewRegion(request, NextResponse.redirect(url, 308), preview);
}

export { middleware };

export const config = {
  matcher: ["/", "/favicon.ico", "/((?!_next/static|_next/image|api|images|videos|.*\\..*).*)"],
};
