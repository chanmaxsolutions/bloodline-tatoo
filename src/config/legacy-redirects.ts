/**
 * Legacy URL redirects — old WordPress paths → new App Router paths.
 * Phase 1: real content URLs. Phase 2: junk, probes, and spam paths.
 * @see docs/seo/legacy-url-audit.md
 */

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
  add("/hygiene-tattoos", "/tattoo-styles/healed");
  add("/bamboo-tattoos", "/tattoo-styles/bamboo");

  // — Blog —
  add("/blog", "/tattoo-blog");
  rules.push(
    {
      source: "/blog/:slug",
      destination: "/tattoo-blog/:slug",
      permanent: true,
    },
    {
      source: "/blog/:slug/",
      destination: "/tattoo-blog/:slug",
      permanent: true,
    },
  );

  // — Old portfolio style hubs → tattoo style detail pages —
  add("/portfolio/realistic-tattoos", "/tattoo-styles/realism");
  add("/portfolio/portrait-tattoos", "/tattoo-styles/portrait");
  add("/portfolio/japanese-tattoos", "/tattoo-styles/japanese");
  add("/portfolio/colour-tattoos", "/tattoo-styles/colour");
  add("/portfolio/mandala-tattoos", "/tattoo-styles/mandala");
  add("/portfolio/chicano-tattoos", "/tattoo-styles/chicano");

  // — Gallery + services (Phuket GSC) —
  add("/gallery", "/portfolio");
  rules.push({
    source: "/gallery/:path*",
    destination: "/portfolio/:path*",
    permanent: true,
  });
  rules.push({
    source: "/services/:path*",
    destination: "/about",
    permanent: true,
  });

  // — WordPress archives + junk —
  rules.push({
    source: "/category/:path*",
    destination: "/tattoo-blog",
    permanent: true,
  });
  rules.push({
    source: "/author/:path*",
    destination: "/",
    permanent: true,
  });
  add("/homev1-1", "/");

  rules.push({
    source: "/wp-content/:path*",
    destination: "/",
    permanent: true,
  });
  rules.push({
    source: "/wp-admin/:path*",
    destination: "/",
    permanent: true,
  });
  rules.push({
    source: "/wp-json/:path*",
    destination: "/",
    permanent: true,
  });

  // — Global domain: old top-level blog posts (slugs not in new catalog) —
  add("/authentic-tattoos-inspired-by-balis-energy", "/tattoo-blog");
  add("/lorem-ipsum-dolor-sit-amet-consectetur-suspendisse", "/tattoo-blog");

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
      source: "/contact/:path*",
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

  return rules;
}

export { getLegacyRedirects };
export type { LegacyRedirect };
