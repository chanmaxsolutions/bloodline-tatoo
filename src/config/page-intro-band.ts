import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

/** Secondary page hero backgrounds — one image per route, shared on all regional domains. */
export type PageIntroBandSlug =
  | "tattoo-styles"
  | "portfolio"
  | "reviews"
  | "about"
  | "blog"
  | "contact";

const pageIntroImageRoot = "/images/page-intro" as const;

const pageIntroBackgroundByPage = {
  "tattoo-styles": {
    src: `${pageIntroImageRoot}/tattoo-styles.webp`,
    alt: "Premium tattoo work at Bloodline Tattoo",
  },
  portfolio: {
    src: `${pageIntroImageRoot}/portfolio.webp`,
    alt: "Curated tattoo portfolio at Bloodline Tattoo",
  },
  reviews: {
    src: `${pageIntroImageRoot}/reviews.webp`,
    alt: "Client reviews for Bloodline Tattoo studios",
  },
  about: {
    src: `${pageIntroImageRoot}/about.webp`,
    alt: "Inside a Bloodline Tattoo studio",
  },
  blog: {
    src: `${pageIntroImageRoot}/blog.webp`,
    alt: "Tattoo guides and studio advice from Bloodline Tattoo",
  },
  contact: {
    src: `${pageIntroImageRoot}/contact.webp`,
    alt: "Book a tattoo session at Bloodline Tattoo",
  },
} as const satisfies Record<PageIntroBandSlug, PageIntroBandBackgroundImage>;

function pageIntroBackgroundFor(page: PageIntroBandSlug): PageIntroBandBackgroundImage {
  return pageIntroBackgroundByPage[page];
}

export { pageIntroBackgroundByPage, pageIntroBackgroundFor };
