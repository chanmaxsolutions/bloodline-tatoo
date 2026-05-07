# SEO_STRATEGY.md

# Bloodline Tattoo Platform — SEO Strategy

This document defines the official SEO architecture, metadata strategy, schema system, internal linking structure, content philosophy, regional SEO strategy, and technical SEO rules for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- long-term topical authority
- regional SEO scalability
- premium positioning
- high-intent conversion support
- structured content architecture
- technical SEO consistency
- AI-safe content generation

All SEO implementation work must follow this document.

---

# 1. Core SEO Philosophy

Bloodline SEO should feel:

```txt
Premium
Authoritative
Structured
Trustworthy
High-intent
```

The platform must NOT feel like:

- cheap local SEO spam
- AI-generated keyword stuffing
- thin affiliate-style content
- generic travel-blog SEO
- mass-generated doorway pages

The SEO system should reinforce:
- expertise
- trust
- craftsmanship
- professionalism
- international credibility

---

# 2. SEO Objectives

The platform SEO strategy exists to support:

- regional Google dominance
- tattoo style authority
- tattoo service authority
- local SEO visibility
- traveler search intent
- informational search capture
- high-intent conversion traffic
- topical authority growth

---

# 3. Regional SEO Architecture

The platform uses:

```txt
One codebase
Multiple regional domains
```

Each region is treated as an independent SEO entity.

## Regional Domains

```txt
bloodlinetattoobangkok.com
bloodlinetattoobali.com
bloodlinetattoophuket.com
```

Each domain should build:
- local authority
- localized topical relevance
- localized schema
- localized metadata
- localized reviews

---

# 4. Global Domain Strategy

The global domain:

```txt
bloodlinetattoo.com
```

acts primarily as:
- brand hub
- location selector
- authority consolidator

The global domain should NOT aggressively compete for:

```txt
tattoo studio bangkok
tattoo studio bali
tattoo studio phuket
```

Those keywords belong to the regional domains.

---

# 5. Canonical Strategy

Each regional domain canonicalizes to itself.

Correct:

```txt
bloodlinetattoobangkok.com
→ canonical to Bangkok domain

bloodlinetattoobali.com
→ canonical to Bali domain
```

Incorrect:

```txt
All canonicals → global domain
```

This would damage regional SEO authority.

---

# 6. Regional Uniqueness Rules

Multi-region architecture creates duplicate-content risk.

Every regional page should contain:
- region-specific metadata
- region-specific reviews
- region-specific schema
- region-specific copy
- region-specific FAQ variation
- region-specific CTA language

Avoid:
- identical page copy across all regions
- cloned metadata
- duplicated FAQ systems

---

# 7. Topical Authority Philosophy

The platform should build authority around:

```txt
Tattoo styles
Tattoo services
Tattoo aftercare
Tattoo consultation
Tattoo traveler guidance
Tattoo quality/process
```

The goal is:
```txt
depth over breadth
```

---

# 8. Core SEO Clusters

## Tattoo Styles

Examples:

```txt
Realistic Tattoos
Portrait Tattoos
Japanese Tattoos
Colour Tattoos
Mandala Tattoos
Chicano Tattoos
Bamboo Tattoos
Line and Dot Tattoos
```

These pages are:
- SEO pages
- portfolio pages
- conversion pages

simultaneously.

---

# 9. Service SEO Clusters

Examples:

```txt
Custom Tattoos
Cover-Up Tattoos
Tattoo Consultation
Tattoo Aftercare
Hygiene and Safety
```

These pages target:
- practical intent
- service intent
- trust intent

---

# 10. Informational SEO Clusters

Examples:

```txt
Tattoo Aftercare Guides
Tattoo Pain Guides
Tattoo Healing Guides
Travel Tattoo Advice
Tattoo Preparation
Tattoo Placement Advice
```

These pages support:
- informational search capture
- internal linking
- authority building
- conversion nurturing

---

# 11. Metadata Strategy

All metadata must be generated dynamically using centralized SEO utilities.

Do not manually duplicate metadata logic across pages.

---

# 12. Metadata Structure Rules

## Homepage Titles

Pattern:

```txt
Premium Tattoo Studio in {Region} | Bloodline Tattoo
```

---

## Style Page Titles

Pattern:

```txt
{Style} in {Region} | Bloodline Tattoo
```

Example:

```txt
Realistic Tattoos in Bangkok | Bloodline Tattoo
```

---

## Service Page Titles

Pattern:

```txt
{Service} in {Region} | Bloodline Tattoo
```

---

## Blog Titles

Pattern:

```txt
{Article Title} | Bloodline Tattoo
```

---

# 13. Meta Description Rules

Descriptions should:
- feel natural
- support conversion
- include regional context
- reinforce trust

Avoid:
- keyword stuffing
- robotic phrasing
- generic local SEO copy

Descriptions should communicate:
- professionalism
- specialization
- trust
- proof

---

# 14. Open Graph Rules

Every major page should support:
- OG title
- OG description
- OG image
- canonical URL
- regional URL correctness

OG images should feel:
- cinematic
- premium
- tattoo-focused
- high contrast

---

# 15. Schema Strategy

The platform uses structured schema generation.

Schema should be centralized in:

```txt
src/lib/schema.ts
```

---

# 16. Supported Schema Types

## LocalBusiness / TattooParlor

Used for:
- homepage
- contact page
- regional pages

Includes:
- address
- reviews
- contact data
- geo data
- opening hours

---

## FAQPage

Used where:
- meaningful FAQ content exists

Do not inject fake FAQ schema.

---

## Article

Used for:
- MDX blog content

Includes:
- author
- published date
- updated date
- image
- headline
- description

---

## BreadcrumbList

Used for:
- style pages
- service pages
- blog pages

---

## Review Schema

Used carefully for:
- review-rich pages

Must reflect real reviews.

Do not fabricate review schema.

---

# 17. Internal Linking Strategy

Internal linking is a core authority system.

The platform should heavily interlink:

```txt
Styles ↔ Services
Blogs ↔ Styles
Blogs ↔ Services
FAQs ↔ Services
Gallery ↔ Styles
```

---

# 18. Internal Link Rules

Internal links should:
- feel contextual
- help discovery
- support topical relevance

Avoid:
- spammy link blocks
- repetitive anchor abuse

Preferred:
- natural sentence-level links
- related content grids
- tactical contextual linking

---

# 19. Anchor Text Rules

Anchor text should:
- be descriptive
- support intent
- feel natural

Avoid:
- exact-match spam repetition
- repetitive keyword anchors

---

# 20. Heading Hierarchy Rules

Every page must maintain proper hierarchy.

Required:

```txt
One H1 only
Logical H2 progression
Logical H3 structure
```

Avoid:
- multiple H1s
- broken hierarchy
- decorative heading misuse

---

# 21. Content Density Rules

SEO depth matters heavily.

The platform intentionally supports:
- rich content
- FAQs
- long-form structure
- educational depth

BUT:

Content must remain:
- readable
- layered
- visually interrupted
- scannable

Avoid:
- giant text walls
- keyword spam blocks
- filler AI content

---

# 22. Blog Strategy

The blog system supports:
- topical authority
- informational traffic
- traveler intent
- trust building
- internal linking
- conversion nurturing

The blog is NOT:
```txt
generic content marketing
```

---

# 23. Blog Categories

Recommended categories:

```txt
Tattoo Styles
Tattoo Guides
Tattoo Aftercare
Travel Tattoos
Tattoo Preparation
Studio Advice
```

---

# 24. Blog Conversion Rules

Blog content should:
- educate
- reinforce trust
- support discovery
- naturally introduce services

Avoid:
- hard-selling
- lead-generation spam
- excessive CTA interruption

---

# 25. MDX Frontmatter Rules

Every MDX article requires:

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

All frontmatter must be validated using Zod.

---

# 26. MDX Content Rules

All MDX articles should include:

- proper heading structure
- internal links
- image support
- FAQ integration where relevant
- related content CTA
- region-aware references when needed

---

# 27. FAQ SEO Strategy

FAQ content supports:
- long-tail search
- conversion confidence
- objection handling

FAQ answers should:
- be concise
- meaningful
- natural
- keyword-aware

Avoid:
- bloated AI-generated answers
- repetitive phrasing

---

# 28. Image SEO Rules

All images require:
- descriptive alt text
- optimized filenames
- responsive sizing
- compressed output

Avoid:
- generic alt text
- keyword stuffing
- decorative meaningless alt content

---

# 29. Gallery SEO Strategy

Gallery is a:
```txt
visual authority system
```

Gallery pages should support:
- style categorization
- alt-rich imagery
- style discovery
- internal links

The gallery should contribute to topical relevance.

---

# 30. Review SEO Strategy

Reviews are:
- trust assets
- local authority assets
- conversion assets

Review rendering should:
- remain crawlable
- support authenticity
- reinforce regional trust

Avoid:
- fake testimonials
- duplicated review content across regions

---

# 31. Technical SEO Rules

Required:
- canonical URLs
- XML sitemap
- robots.txt
- metadata generation
- semantic structure
- fast rendering
- optimized media
- structured schema

---

# 32. Performance SEO Philosophy

Performance is part of SEO.

The platform must prioritize:
- Server Components
- ISR
- optimized images
- minimal client-side JS
- fast LCP
- stable CLS

Avoid:
- excessive client rendering
- oversized animations
- unoptimized gallery loading

---

# 33. Sitemap Rules

The sitemap must include:

- homepage
- style pages
- service pages
- gallery
- blog index
- blog articles
- FAQ
- contact

Each regional domain should generate its own correct sitemap.

---

# 34. Robots Rules

The platform should:
- allow indexing of SEO pages
- block irrelevant internal endpoints
- avoid accidental noindex usage

Never noindex major SEO pages unintentionally.

---

# 35. URL Structure Rules

Use:
- clean URLs
- kebab-case
- descriptive slugs

Correct:

```txt
/tattoo-styles/realistic-tattoos
```

Avoid:
- IDs
- query-heavy URLs
- nested unnecessary structures

---

# 36. AI Content Rules

AI-assisted content must still feel:
- human
- trustworthy
- premium
- intentional

Avoid:
- generic AI tone
- repeated sentence patterns
- bloated filler
- keyword repetition loops

All content should support:
```txt
real topical authority
```

---

# 37. Conversion SEO Philosophy

SEO exists to support:
- trust
- discovery
- conversion confidence

The goal is not:
```txt
traffic for traffic’s sake
```

The ideal visitor is:
- high-intent
- trust-oriented
- quality-focused
- ready to engage conversationally

---

# 38. Final SEO Principle

Every SEO decision should reinforce:

```txt
Authority
Trust
Craftsmanship
Regional relevance
Conversion quality
Long-term scalability
```

If an SEO tactic weakens premium positioning or user trust, it should not be implemented.
