import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLegacyTopLevelBlogSlug } from "@/config/legacy-blog-slugs";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";

/**
 * Catch old WordPress blog posts published at top-level slugs (e.g. /guide-to-choosing-...).
 * next.config redirects handle known paths; this covers long-tail indexed URLs from site: search.
 *
 * Also rewrite /favicon.ico to the regional Bloodline mark. Google and browsers request
 * /favicon.ico by default; the create-next-app Vercel icon previously lived at app/favicon.ico.
 */
function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/favicon.ico") {
    const hostname = request.headers.get("host") ?? "";
    const region = resolveRegionFromHostname(hostname);
    const faviconPath = getRegionConfig(region).branding.faviconPath;
    const url = request.nextUrl.clone();
    url.pathname = faviconPath;
    return NextResponse.rewrite(url);
  }

  if (pathname === "/" || pathname.includes(".")) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length !== 1) {
    return NextResponse.next();
  }

  const slug = segments[0];

  if (!isLegacyTopLevelBlogSlug(slug)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tattoo-blog";
  return NextResponse.redirect(url, 308);
}

export { middleware };

export const config = {
  matcher: ["/favicon.ico", "/((?!_next/static|_next/image|api|images|videos|.*\\..*).*)"],
};
