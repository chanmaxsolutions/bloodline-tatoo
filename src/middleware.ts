import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isLegacyTopLevelBlogSlug } from "@/config/legacy-blog-slugs";

/**
 * Catch old WordPress blog posts published at top-level slugs (e.g. /guide-to-choosing-...).
 * next.config redirects handle known paths; this covers long-tail indexed URLs from site: search.
 */
function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
  matcher: ["/((?!_next/static|_next/image|api|images|videos|favicon.ico|.*\\..*).*)"],
};
