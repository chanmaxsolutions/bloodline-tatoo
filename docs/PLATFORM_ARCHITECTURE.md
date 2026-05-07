# ARCHITECTURE_RULES.md

# Bloodline Tattoo Platform — Architecture Rules

This document defines the mandatory architecture rules for the Bloodline Tattoo platform.

These rules exist to prevent:

- architectural drift
- duplicated logic
- inconsistent regional rendering
- SEO degradation
- unnecessary client-side rendering
- AI-generated code chaos
- long-term scalability issues

All implementation work must follow this document.

---

# 1. Core Architecture Model

The platform uses:

```txt
One Next.js codebase
Multiple regional domains
Config-driven regional rendering
Server-first architecture
Reusable component system
```

The same codebase powers:

- global domain
- Bangkok domain
- Bali domain
- Phuket domain

Each domain renders region-specific content using centralized regional configuration.

---

# 2. Locked Tech Stack

Use only the locked stack unless explicitly approved.

```txt
Next.js 16
React 19
TypeScript
Tailwind CSS 4
shadcn/ui
Motion
Node.js 22 LTS
npm
Vercel
MDX
Airtable
Resend
Zod
```

Do not introduce new major dependencies unless there is a clear architectural reason.

---

# 3. Folder Structure Rules

The project must use this structure:

```txt
src/
  app/
  components/
  config/
  content/
  data/
  lib/
  styles/
  types/
```

## Folder Responsibilities

### `src/app/`

Routes only.

Contains:
- pages
- layouts
- route handlers
- loading states
- error states
- sitemap
- robots

Do not place reusable business logic here.

---

### `src/components/`

Visual and interface components only.

Recommended structure:

```txt
components/
  ui/
  layout/
  sections/
  cta/
  seo/
  motion/
  gallery/
  shared/
```

---

### `src/config/`

Stable configuration.

Contains:
- regional configs
- global config
- domain mapping
- service taxonomy
- CTA defaults

Regional business data belongs here.

---

### `src/content/`

MDX content.

Contains:
- blog articles
- tattoo guides
- SEO pages
- long-form style/service content

---

### `src/data/`

Static cached data.

Contains:
- cached Google reviews
- generated JSON data
- static lookup data

---

### `src/lib/`

Reusable logic.

Contains:
- region helpers
- SEO utilities
- schema generators
- Airtable clients
- review utilities
- CTA URL builders
- MDX utilities
- analytics helpers

---

### `src/styles/`

Global styles and design tokens.

Contains:
- globals.css
- Tailwind CSS-first theme tokens

---

### `src/types/`

Shared TypeScript types.

Contains:
- region types
- review types
- SEO types
- content types
- component data contracts

---

# 4. App Router Rules

The project must use the Next.js App Router only.

Allowed:

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/tattoo-styles/[slug]/page.tsx
src/app/tattoo-blog/[slug]/page.tsx
src/app/api/.../route.ts
```

Forbidden:

```txt
pages/
pages/api/
getServerSideProps
getStaticProps
```

---

# 5. Route Architecture Rules

The final route structure is:

```txt
/
tattoo-styles/
tattoo-styles/[slug]/
tattoo-services/
tattoo-services/[slug]/
gallery/
reviews/
tattoo-blog/
tattoo-blog/[slug]/
faq/
contact/
```

No artist routes are allowed.

Forbidden:

```txt
/artists
/artists/[slug]
/team
/our-artists
```

Bloodline is a studio-first brand, not an artist-first marketplace.

---

# 6. Multi-Domain Rules

Domain determines region.

The request hostname must resolve to a region:

```txt
bloodlinetattoo.com → global
bloodlinetattoobangkok.com → bangkok
bloodlinetattoobali.com → bali
bloodlinetattoophuket.com → phuket
```

Region detection must happen through centralized helpers.

Do not duplicate hostname logic across pages or components.

---

# 7. Regional Config Rules

All regional content must come from:

```txt
src/config/regions/
```

Regional config controls:

- domain
- location name
- contact details
- WhatsApp number
- Instagram URL
- Facebook URL
- Google Maps URL
- business address
- opening hours
- SEO defaults
- schema data
- service availability
- hero content
- CTA behavior

Components must not hardcode region-specific business content.

Forbidden:

```tsx
<h1>Premium Tattoo Studio in Bangkok</h1>
```

Preferred:

```tsx
<h1>{region.hero.heading}</h1>
```

---

# 8. Server-First Rendering Rules

Default rule:

```txt
Everything is a Server Component unless interaction requires Client Component behavior.
```

Server Components should be used for:

- pages
- layouts
- static sections
- SEO content
- FAQs
- service pages
- style pages
- blog pages
- schema rendering
- gallery rendering where possible

Client Components are only allowed for:

- modals
- mobile menus
- carousels
- filters
- interactive gallery behavior
- CTA tracking
- animations requiring browser APIs
- form interaction

Do not add `"use client"` at the top of a component unless it is technically required.

---

# 9. Client Component Rules

Client Components must be small and isolated.

Correct:

```txt
Server Section
→ Client CTA Modal
```

Incorrect:

```txt
Entire page marked as client
```

Forbidden:

```tsx
"use client";

export default function HomePage() {
  // Entire SEO page rendered client-side
}
```

---

# 10. Data Ownership Rules

Each data type has one primary home.

| Data Type | Source |
|---|---|
| Regional business truth | Config |
| Long-form SEO content | MDX |
| Blog articles | MDX |
| Gallery content | Airtable |
| Google reviews | Outscraper cached JSON |
| API keys | Environment variables |
| Metadata generation | `lib/seo.ts` |
| Schema generation | `lib/schema.ts` |
| CTA link generation | `lib/cta.ts` |

Do not duplicate the same data across config, MDX, and components unless explicitly required.

---

# 11. API / Server Action Rules

Use a hybrid strategy:

## Server Actions

Use for:
- lead submissions
- CTA popup submissions
- simple Airtable writes
- Resend notifications

## Route Handlers

Use for:
- webhooks
- analytics endpoints
- Outscraper sync endpoints
- external service callbacks
- health checks

User-facing mutations should use Server Actions by default.

External/system endpoints should use Route Handlers.

---

# 12. MDX Rules

Use native MDX.

Do not use Contentlayer.

MDX is used for:

- blog articles
- tattoo guides
- long-form SEO content
- service depth content
- style depth content

Every MDX file must include validated frontmatter.

Required fields:

```yaml
title:
description:
slug:
region:
category:
tags:
publishedAt:
updatedAt:
featuredImage:
author:
canonicalPath:
```

Frontmatter must be validated using Zod.

---

# 13. SEO Architecture Rules

Every major page must support:

- dynamic metadata
- canonical URL
- Open Graph data
- JSON-LD schema where relevant
- internal links
- region-aware titles and descriptions

Use centralized SEO utilities.

Do not hand-write metadata repeatedly across pages when utility functions can generate it.

---

# 14. Schema Rules

Schema must be generated from typed data.

Use centralized schema utilities:

```txt
src/lib/schema.ts
```

Supported schema types:

- TattooParlor
- LocalBusiness
- FAQPage
- BreadcrumbList
- Article
- Review
- ImageObject

Do not create artist/person schema because the platform is studio-first.

---

# 15. Sitemap / Robots Rules

Sitemap must be generated dynamically using App Router conventions.

Each regional domain must generate correct canonical URLs.

Do not canonical all regions to the global domain.

Each region should canonicalize to itself.

---

# 16. Image Rules

Use `next/image` for all meaningful images.

Required:
- descriptive alt text
- responsive sizes
- lazy loading for below-the-fold images
- priority only for hero/LCP images
- optimized dimensions
- WebP/AVIF output where supported

Forbidden:
- raw `<img>` unless technically unavoidable
- unoptimized full-size gallery dumps
- loading all gallery images immediately
- decorative images without proper treatment

---

# 17. Video Rules

Hero videos must be performance-safe.

Required:
- compressed video
- poster image
- mobile fallback image
- muted
- loop
- playsInline
- no blocking LCP

Avoid large background videos.

Do not use autoplay video if it harms performance or mobile experience.

---

# 18. Review System Rules

Reviews are sourced from Google Business Profiles via Outscraper.

Flow:

```txt
Outscraper
→ normalized JSON cache
→ region-specific rendering
```

Reviews must be displayed regionally.

Do not manage testimonials manually in Airtable initially.

Do not fake or rewrite reviews.

Allowed:
- filtering
- truncation
- prioritization
- randomization
- formatting

Forbidden:
- changing review meaning
- fabricating reviews
- mixing regions incorrectly

---

# 19. Airtable Rules

Airtable is used for operational content, not core SEO structure.

Airtable may control:
- gallery items
- portfolio media
- lead records
- CTA events
- location-supporting records

Airtable must NOT control:
- core metadata
- canonical URLs
- primary service taxonomy
- schema fundamentals
- regional business truth

Do not call Airtable directly inside visual components.

Use lib-level fetchers only.

---

# 20. Component Architecture Rules

Components must be composable and typed.

Component taxonomy:

```txt
ui = primitive UI
layout = structure
sections = business sections
cta = conversion system
seo = structured SEO helpers
motion = animation wrappers
gallery = image/proof system
shared = reusable small fragments
```

Components should receive data through props.

Do not fetch data inside low-level UI components.

---

# 21. Section Rules

Pages should follow the rhythm:

```txt
Attention
→ Trust
→ Proof
→ Depth
→ Conversion
```

Core page section patterns:

## Homepage

```txt
Hero
Proof Strip
Featured Portfolio
Tattoo Styles Grid
Studio Standards
Reviews Preview
Tattoo Process
FAQ Preview
Final CTA
```

## Style Page

```txt
Hero
SEO Intro
Featured Work
Style Explanation
Why Bloodline
Related Styles
Reviews
FAQ
CTA
```

## Service Page

```txt
Hero
Problem / Outcome
Process
Before / After
Trust Section
Reviews
FAQ
CTA
```

---

# 22. Design System Rules

The visual identity is:

```txt
Aggressive premium tattoo culture
Dark tactical premium
High-trust
Proof-heavy
Energetic
```

Core colors:

```txt
Background: #0B0B0D
Accent: #C6FF3B
```

Headings:

```txt
Barlow Condensed
Uppercase by default
Tight tracking
Aggressive hierarchy
```

Body:

```txt
Plus Jakarta Sans
```

Do not introduce unrelated visual styles.

---

# 23. Tailwind Rules

Use semantic tokens.

Preferred:

```tsx
className="bg-background text-foreground"
className="text-accent border-border"
```

Avoid:

```tsx
className="bg-[#0B0B0D]"
className="text-[#C6FF3B]"
className="rounded-[17px]"
className="z-[999999]"
```

Arbitrary values are only allowed inside reusable design-system components when necessary.

---

# 24. Motion Rules

Motion should feel:

- fast
- sharp
- cinematic
- controlled
- confident

Allowed:
- fade up
- subtle scale
- stagger reveal
- hover zoom
- modal transition
- image reveal

Forbidden:
- bounce
- spin
- playful blobs
- excessive parallax
- scroll hijacking
- slow fashion-style motion

Respect reduced motion preferences.

---

# 25. CTA Rules

The platform is conversation-first.

Primary CTA:

```txt
WhatsApp
```

Secondary CTAs:

```txt
Instagram
Messenger
```

Do not make heavy forms the primary conversion experience.

CTA tone should feel:
- direct
- confident
- high-trust
- concierge-like
- action-oriented

---

# 26. Accessibility Rules

Required:

- semantic HTML
- keyboard navigation
- aria labels where needed
- accessible buttons and links
- reduced motion support
- readable contrast
- proper heading hierarchy
- meaningful alt text

Do not sacrifice accessibility for visual style.

---

# 27. Performance Rules

Performance must be built into architecture.

Rules:
- Server Components by default
- minimal client JavaScript
- optimized images
- lazy loading
- ISR for stable pages
- no oversized video
- avoid unnecessary dependencies
- no heavy animation libraries beyond locked stack

Do not optimize only after build completion.

---

# 28. Environment Rules

Use:

```txt
local
preview
production
```

Environment variables:

```env
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
RESEND_API_KEY=
OUTSCRAPER_API_KEY=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_SITE_ENV=
```

Only expose browser-safe variables with `NEXT_PUBLIC_`.

Never commit secrets.

---

# 29. Naming Conventions

## Components

Use PascalCase.

```txt
HeroSection.tsx
ReviewsPreview.tsx
TattooStyleGrid.tsx
```

## Utilities

Use camelCase.

```txt
getRegionConfig()
createWhatsAppUrl()
generatePageMetadata()
```

## Slugs

Use kebab-case.

```txt
realistic-tattoos
cover-up-tattoos
tattoo-aftercare
```

## Types

Use PascalCase.

```txt
RegionConfig
TattooStyle
GoogleReview
```

---

# 30. TypeScript Rules

Use strict TypeScript.

Forbidden:
- unnecessary `any`
- untyped config objects
- unvalidated external data
- loose Airtable records
- untyped MDX frontmatter

Required:
- shared interfaces
- Zod validation
- typed regional config
- typed review objects
- typed MDX frontmatter

---

# 31. Forbidden Patterns

Do not use:

```txt
Pages Router
artist profile routes
artist schema
hardcoded regional business copy
untyped config
random arbitrary styling
client-rendered SEO pages
direct Airtable calls inside components
fake testimonials
Contentlayer
large unoptimized videos
uncontrolled animation patterns
duplicate route logic
duplicate metadata logic
```

---

# 32. Scalability Rules

Adding a future region should require:

- new regional config
- new content
- new media
- new review data
- domain mapping

It should NOT require:
- new app architecture
- new component system
- duplicated pages
- duplicated route logic

---

# 33. Build Philosophy

Every implementation decision must support:

```txt
SEO authority
Premium positioning
Fast performance
Conversion quality
Regional scalability
AI-assisted maintainability
```

If a decision weakens one of these without a clear reason, do not implement it.

---

# Final Rule

When unsure, prioritize:

```txt
Server-first
Config-driven
SEO-safe
Performance-conscious
Studio-first
Token-based
Typed
Reusable
```
