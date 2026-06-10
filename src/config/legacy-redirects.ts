/**
 * Legacy URL redirects — old WordPress paths → new App Router paths.
 * Phase 1: real content URLs. Phase 2: junk, probes, and spam paths.
 * Phase 3: portfolio gaps, legal pages, WP feeds, and explicit blog slugs.
 * @see docs/seo/legacy-url-audit.md
 */

import { LEGACY_TOP_LEVEL_BLOG_SLUGS } from "./legacy-blog-slugs";
import { LEGACY_PORTFOLIO_STYLE_SLUGS } from "./legacy-portfolio-styles";

interface LegacyRedirect {
  source: string;
  destination: string;
  permanent: boolean;
}

/** Emit source with and without trailing slash (skip dynamic segments). */
function permanentPathRedirects(source: string, destination: string): LegacyRedirect[] {
  const permanent = true;

  if (source.includes(":")) {
    return [{ source, destination, permanent }];
  }

  const rules: LegacyRedirect[] = [{ source, destination, permanent }];

  if (!source.endsWith("/")) {
    rules.push({ source: `${source}/`, destination, permanent });
  }

  return rules;
}

function getLegacyRedirects(): LegacyRedirect[] {
  const rules: LegacyRedirect[] = [];

  function add(source: string, destination: string) {
    rules.push(...permanentPathRedirects(source, destination));
  }

  // — Core pages (all regional domains) —
  add("/about-us", "/about");
  add("/contact-us", "/contact");
  add("/privacy-policy", "/");
  add("/terms-and-conditions", "/");
  add("/hygiene-tattoos", "/tattoo-styles/healed");
  add("/hygiene", "/tattoo-styles/healed");
  add("/bamboo-tattoos", "/tattoo-styles/bamboo");
  add("/bamboo", "/tattoo-styles/bamboo");

  // — Blog index + old /blog/* posts (catalog empty — send posts to index, not /tattoo-blog/:slug) —
  add("/blog", "/tattoo-blog");
  rules.push(
    {
      source: "/blog/:slug",
      destination: "/tattoo-blog",
      permanent: true,
    },
    {
      source: "/blog/:slug/",
      destination: "/tattoo-blog",
      permanent: true,
    },
  );

  // — Old portfolio style hubs → tattoo style detail pages —
  for (const [legacySlug, styleSlug] of Object.entries(LEGACY_PORTFOLIO_STYLE_SLUGS)) {
    add(`/portfolio/${legacySlug}`, `/tattoo-styles/${styleSlug}`);
  }

  // — Gallery + legacy media paths —
  add("/gallery", "/portfolio");
  add("/galleries", "/portfolio");
  rules.push({
    source: "/gallery/:path*",
    destination: "/portfolio/:path*",
    permanent: true,
  });

  // — Old site sections with no new equivalent —
  add("/guesthouse", "/");
  add("/videos", "/");
  add("/bloodlinetv", "/portfolio");
  add("/bloodline-tv", "/portfolio");
  rules.push({
    source: "/bloodline-tv/:path*",
    destination: "/portfolio",
    permanent: true,
  });

  // — Services (Phuket GSC) —
  rules.push({
    source: "/services/:path*",
    destination: "/about",
    permanent: true,
  });

  // — WordPress archives, tags, feeds —
  rules.push(
    {
      source: "/category/:path*",
      destination: "/tattoo-blog",
      permanent: true,
    },
    {
      source: "/tag/:path*",
      destination: "/tattoo-blog",
      permanent: true,
    },
    {
      source: "/author/:path*",
      destination: "/",
      permanent: true,
    },
  );

  add("/feed", "/");
  add("/feed.xml", "/");
  add("/atom.xml", "/");
  add("/index.xml", "/");
  rules.push({
    source: "/feeds/:path*",
    destination: "/",
    permanent: true,
  });
  rules.push({
    source: "/comments/feed",
    destination: "/",
    permanent: true,
  });

  add("/homev1-1", "/");

  rules.push(
    {
      source: "/wp-content/:path*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/wp-admin/:path*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/wp-json/:path*",
      destination: "/",
      permanent: true,
    },
  );

  // — Explicit top-level WordPress blog slugs (indexed via site: search) —
  for (const slug of LEGACY_TOP_LEVEL_BLOG_SLUGS) {
    add(`/${slug}`, "/tattoo-blog");
  }

  // — Phase 2: locale stubs, plugin feeds, scraper spam, WP probes —
  add("/jp", "/");

  rules.push(
    {
      source: "/e-floating-buttons/:path*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/news/:path*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/milano/:path*",
      destination: "/",
      permanent: true,
    },
    {
      // `:path+` = one or more segments — `:path*` also matched `/contact` itself (redirect loop).
      source: "/contact/:path+",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/wp-includes/:path*",
      destination: "/",
      permanent: true,
    },
    {
      source: "/wp-:file",
      destination: "/",
      permanent: true,
    },
  );

  // — Old per-review WordPress pages → reviews index —
  rules.push({
    source: "/reviews/:slug",
    destination: "/reviews",
    permanent: true,
  });

  // — Pre-regional global site paths —
  rules.push({
    source: "/id/:path*",
    destination: "/",
    permanent: true,
  });

  // — Unmapped portfolio children → portfolio index (safety net for site: leftovers) —
  rules.push({
    source: "/portfolio/:slug",
    destination: "/portfolio",
    permanent: true,
  });

  return rules;
}

export { getLegacyRedirects };
export type { LegacyRedirect };
