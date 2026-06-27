# Tattoo blog (MDX)

Articles live as `.mdx` files in this folder. The filename becomes the URL slug:

```txt
src/content/tattoo-blog/your-article-slug.mdx
→ /tattoo-blog/your-article-slug
```

Files starting with `_` are ignored (use `_template.mdx` for drafts).

## Frontmatter template

Copy this block to the top of every new post:

```yaml
---
title: "Your article title"
metaTitle: "Optional shorter SERP title when the H1 is long"
description: "Meta description for SEO (under 160 characters)."
category: tattoo-guides
publishedAt: "2026-06-17"
featuredImage:
  src: /images/blog/your-image.webp
  alt: "Descriptive alt text"
regions:
  - bangkok
  - bali
  - phuket
  - global
featured: false
quickAnswer: "40–80 word direct answer for search and AI snippets."
faq:
  - question: "First FAQ question?"
    answer: "Clear, human answer."
relatedStyles:
  - label: "Realism"
    href: /tattoo-styles/realism
---
```

### Optional fields

| Field                | Notes                                                       |
| -------------------- | ----------------------------------------------------------- |
| `metaTitle`          | Shorter title for search/social when the on-page H1 is long |
| `readingTimeMinutes` | Auto-calculated from body if omitted                        |
| `featured`           | `true` for homepage-style featured band (max 3)             |
| `relatedServices`    | Same shape as `relatedStyles`                               |

### Categories

Use exactly one of:

- `tattoo-guides`
- `tattoo-styles`
- `aftercare`
- `travel-tattoos`
- `preparation`
- `studio-advice`

### Regions

List the **regional studio** where the post belongs (one region per article):

- `bangkok` — bloodlinetattoobangkok.com
- `bali` — bloodlinetattoobali.com
- `phuket` — bloodlinetattoophuket.com

Do **not** add `global` to frontmatter. The global hub (`bloodlinetattoo.com`) automatically lists **all** published posts on `/tattoo-blog`. Each regional domain only shows posts whose `regions` array includes that studio.

Each domain canonicalizes to itself — the same slug may be reachable on global and on its regional domain with separate canonical URLs.

## Writing the body

Standard Markdown below the frontmatter. Supported styling:

- `##` and `###` headings (styled to match the site)
- Paragraphs, bullet lists, numbered lists
- `[internal links](/tattoo-styles/realism)` and external links
- Images: `![alt text](/images/blog/example.webp "Optional caption")` — use **WebP**, **1400×875 px**, **16:10**

## After adding a post

1. Place images in `public/images/blog/`
2. Run `npm run build` locally to validate frontmatter (Zod)
3. Deploy — sitemap and static routes update automatically
