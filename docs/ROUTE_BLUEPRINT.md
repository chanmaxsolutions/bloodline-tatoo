# ROUTE_BLUEPRINT.md

# Bloodline Tattoo Platform — Route Blueprint

This document defines the official routing architecture, sitemap structure, route hierarchy, URL conventions, dynamic route behavior, canonical strategy, redirect system, and route scalability rules for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- scalable route architecture
- SEO-safe URL structure
- regional consistency
- predictable App Router behavior
- AI-safe route generation
- migration stability
- future expansion support

All routing implementation must follow this document.

---

# 1. Core Routing Philosophy

The Bloodline platform uses:

```txt
One codebase
Multiple domains
Shared route architecture
Region-driven rendering
```

The route system must remain:

- predictable
- scalable
- SEO-safe
- minimal
- intentional

Avoid:
- bloated route trees
- unnecessary nesting
- duplicate route intent
- artist-driven route systems

---

# 2. Domain Architecture

## Global Domain

```txt
bloodlinetattoo.com
```

Purpose:
- master brand hub
- location routing
- authority consolidation
- international positioning

---

## Regional Domains

```txt
bloodlinetattoobangkok.com
bloodlinetattoobali.com
bloodlinetattoophuket.com
```

Purpose:
- regional SEO
- local authority
- conversion
- localized trust systems

---

# 3. Route Ownership Philosophy

Each route must have:
- one clear purpose
- one clear SEO role
- one clear conversion role

Avoid:
- duplicate-intent routes
- thin SEO doorway routes
- unnecessary microsite structures

---

# 4. Official Global Sitemap

The global domain uses:

```txt
/
├── locations
├── gallery
├── tattoo-styles
├── tattoo-services
├── tattoo-blog
├── faq
└── contact
```

The global domain should primarily:
- route users into regions
- reinforce brand authority
- support broad discovery

---

# 5. Official Regional Sitemap

Each regional domain uses:

```txt
/
├── tattoo-styles
│   ├── realistic-tattoos
│   ├── portrait-tattoos
│   ├── japanese-tattoos
│   ├── colour-tattoos
│   ├── mandala-tattoos
│   ├── chicano-tattoos
│   ├── bamboo-tattoos
│   └── line-and-dot-tattoos
│
├── tattoo-services
│   ├── custom-tattoos
│   ├── cover-up-tattoos
│   ├── tattoo-consultation
│   ├── tattoo-aftercare
│   └── hygiene-and-safety
│
├── gallery
├── reviews
├── tattoo-blog
│   └── [slug]
├── faq
└── contact
```

---

# 6. Route Intent Definitions

Every route has a primary responsibility.

| Route | Purpose |
|---|---|
| `/` | Conversion + authority |
| `/tattoo-styles` | Style discovery |
| `/tattoo-styles/[slug]` | SEO + proof + conversion |
| `/tattoo-services` | Service discovery |
| `/tattoo-services/[slug]` | Service SEO + trust |
| `/gallery` | Visual proof engine |
| `/reviews` | Trust engine |
| `/tattoo-blog` | SEO authority hub |
| `/tattoo-blog/[slug]` | Long-form SEO content |
| `/faq` | Objection handling |
| `/contact` | Conversational conversion |

No route should exist without a defined strategic role.

---

# 7. Homepage Route Rules

## Route

```txt
/
```

## Purpose

The homepage must:
- establish authority quickly
- reinforce premium positioning
- create trust momentum
- drive WhatsApp conversion
- support SEO naturally

---

# Homepage Section Rhythm

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

---

# 8. Tattoo Style Route Rules

## Parent Route

```txt
/tattoo-styles
```

Purpose:
- style discovery
- internal linking hub
- topical authority support

---

## Dynamic Routes

```txt
/tattoo-styles/[slug]
```

Examples:

```txt
/tattoo-styles/realistic-tattoos
/tattoo-styles/japanese-tattoos
/tattoo-styles/portrait-tattoos
```

---

# Style Route Responsibilities

Style pages must simultaneously support:

- SEO
- portfolio proof
- conversion
- education
- internal linking

---

# Style Page Anatomy

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

---

# 9. Tattoo Service Route Rules

## Parent Route

```txt
/tattoo-services
```

Purpose:
- service discovery
- trust building
- internal linking support

---

## Dynamic Routes

```txt
/tattoo-services/[slug]
```

Examples:

```txt
/custom-tattoos
/cover-up-tattoos
/tattoo-aftercare
```

---

# Service Route Responsibilities

Service pages should:
- reduce uncertainty
- explain process
- support trust
- convert high-intent users

---

# Service Page Anatomy

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

# 10. Gallery Route Rules

## Route

```txt
/gallery
```

Purpose:
- visual proof engine
- craftsmanship showcase
- style discovery
- trust reinforcement

---

# Gallery Rules

The gallery should:
- support filtering
- support style categories
- support internal linking
- support SEO through structure and alt text

The gallery is NOT:
```txt
a random media dump
```

---

# 11. Reviews Route Rules

## Route

```txt
/reviews
```

Purpose:
- trust reinforcement
- social proof concentration
- review authority

---

# Reviews Page Anatomy

```txt
Hero
Review Stats
Featured Reviews
Region Reviews
Trust CTA
```

Reviews should remain:
- authentic
- region-aware
- crawlable
- proof-oriented

---

# 12. Blog Route Rules

## Blog Index

```txt
/tattoo-blog
```

Purpose:
- topical authority
- informational SEO
- internal linking hub

---

## Blog Article Route

```txt
/tattoo-blog/[slug]
```

Purpose:
- long-form authority
- educational SEO
- conversion nurturing

---

# Blog Route Rules

All blog content should:
- internally link to styles/services
- support traveler intent
- support tattoo education
- maintain premium tone

Avoid:
- generic SEO blog spam
- thin articles
- AI filler content

---

# 13. FAQ Route Rules

## Route

```txt
/faq
```

Purpose:
- objection handling
- long-tail SEO support
- trust reinforcement

---

# FAQ Rules

FAQ structure should support:
- grouped categories
- semantic structure
- crawlability
- conversion support

---

# 14. Contact Route Rules

## Route

```txt
/contact
```

Purpose:
- conversational conversion
- regional contact clarity
- trust support

The contact page should NOT feel:
```txt
corporate
```

The contact experience should feel:
```txt
premium and approachable
```

---

# 15. Route Naming Rules

Use:
- lowercase
- kebab-case
- descriptive slugs

Correct:

```txt
realistic-tattoos
cover-up-tattoos
tattoo-aftercare
```

Avoid:
- IDs
- camelCase URLs
- underscored URLs
- unnecessary nesting

---

# 16. Dynamic Route Rules

Use dynamic routes for:
- style pages
- service pages
- blog pages

Examples:

```txt
/tattoo-styles/[slug]
/tattoo-services/[slug]
/tattoo-blog/[slug]
```

---

# 17. Static Params Rules

Use static generation wherever practical.

Preferred:
- generateStaticParams
- ISR
- stable route generation

Avoid:
- unnecessary dynamic rendering
- runtime-heavy SEO pages

---

# 18. Route Rendering Philosophy

The platform is:
```txt
Server-first
```

Routes should prioritize:
- Server Components
- ISR
- fast metadata generation
- static SEO rendering

Avoid:
- client-rendered SEO pages
- unnecessary browser-side rendering

---

# 19. Canonical Rules

Each regional domain canonicalizes to itself.

Correct:

```txt
Bangkok pages
→ Bangkok canonical

Bali pages
→ Bali canonical
```

Avoid:
- cross-region canonical confusion
- global-domain forced canonicals

---

# 20. Regional Route Variation Rules

Regional pages should include:
- localized metadata
- localized schema
- localized FAQs
- localized reviews
- localized CTA behavior

Avoid:
- cloned regional SEO pages

---

# 21. Breadcrumb Rules

All nested routes should support breadcrumbs.

Required for:
- style pages
- service pages
- blog pages

Example:

```txt
Home
→ Tattoo Styles
→ Realistic Tattoos
```

---

# 22. Internal Linking Rules

Routes should internally support:
- style ↔ style
- style ↔ service
- blog ↔ style
- blog ↔ service
- gallery ↔ styles

This supports:
- topical authority
- crawlability
- discovery

---

# 23. Redirect Strategy

Migration from WordPress requires redirect preservation.

All important legacy URLs should:
- permanently redirect (301)
- preserve SEO equity
- preserve backlinks

---

# 24. Legacy Redirect Examples

Example:

```txt
/portfolio/realistic-tattoos
→ /tattoo-styles/realistic-tattoos

/portfolio/japanese-tattoos
→ /tattoo-styles/japanese-tattoos
```

---

# 25. Forbidden Routes

The platform intentionally forbids:

```txt
/artists
/artists/[slug]
/team
/team/[slug]
/our-artists
```

Bloodline is:
```txt
studio-first
```

NOT:
```txt
artist-first
```

---

# 26. Thin Route Rules

Do not create:
- empty SEO pages
- low-content city pages
- doorway pages
- duplicate-intent routes

Every route must:
- provide value
- support authority
- support conversion
- support trust

---

# 27. Future Region Scalability Rules

Adding future regions should require:
- new regional config
- new domain mapping
- new content
- new reviews

It should NOT require:
- new route architecture
- duplicated pages
- duplicated layouts

---

# 28. Sitemap Rules

Each regional domain must generate:
- region-specific sitemap
- correct canonical URLs
- crawl-safe route indexing

Include:
- styles
- services
- blogs
- gallery
- FAQ
- contact

---

# 29. Robots Rules

Robots should:
- allow crawlable SEO pages
- block unnecessary internal endpoints
- avoid accidental noindex behavior

---

# 30. AI Route Safety Rules

AI-generated implementation must:
- follow official route structure
- avoid inventing new route categories
- avoid inconsistent nesting
- avoid duplicate slugs

Routes should remain:
```txt
minimal
intentional
scalable
predictable
```

---

# 31. Future Expansion Philosophy

Future route expansion should prioritize:
- topical depth
- SEO clarity
- conversion support
- trust systems

Avoid:
- route bloat
- SEO spam expansion
- unnecessary microsites

---

# Final Routing Principle

Every route should reinforce:

```txt
Authority
Trust
Proof
SEO clarity
Regional relevance
Conversion momentum
Scalable architecture
```

If a route does not contribute meaningfully to those goals, it should not exist.
