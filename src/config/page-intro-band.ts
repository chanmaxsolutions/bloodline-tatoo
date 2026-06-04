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
    src: `${pageIntroImageRoot}/tattoo-styles.jpg`,
    alt: "Premium tattoo work at Bloodline Tattoo",
  },
  portfolio: {
    src: `${pageIntroImageRoot}/portfolio.jpg`,
    alt: "Curated tattoo portfolio at Bloodline Tattoo",
  },
  reviews: {
    src: `${pageIntroImageRoot}/reviews.jpg`,
    alt: "Client reviews for Bloodline Tattoo studios",
  },
  about: {
    src: `${pageIntroImageRoot}/about.jpg`,
    alt: "Inside a Bloodline Tattoo studio",
  },
  blog: {
    src: `${pageIntroImageRoot}/blog.jpg`,
    alt: "Tattoo guides and studio advice from Bloodline Tattoo",
  },
  contact: {
    src: `${pageIntroImageRoot}/contact.jpg`,
    alt: "Book a tattoo session at Bloodline Tattoo",
  },
} as const satisfies Record<PageIntroBandSlug, PageIntroBandBackgroundImage>;

function pageIntroBackgroundFor(page: PageIntroBandSlug): PageIntroBandBackgroundImage {
  return pageIntroBackgroundByPage[page];
}

/** Portfolio index intro — same clip on every regional domain. */
const portfolioIntroVideoPath = "/videos/hero/portfolio-header.mp4" as const;
const portfolioIntroVideoVersion = "20250604-realistic" as const;

function portfolioPageIntroVideoSrc(): string {
  return `${portfolioIntroVideoPath}?v=${portfolioIntroVideoVersion}`;
}

export { pageIntroBackgroundByPage, pageIntroBackgroundFor, portfolioPageIntroVideoSrc };
