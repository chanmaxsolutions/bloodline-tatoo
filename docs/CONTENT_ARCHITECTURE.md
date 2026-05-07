# CONTENT_ARCHITECTURE.md

# Bloodline Tattoo Platform — Content Architecture

This document defines the official content ownership model, MDX architecture, Airtable responsibilities, review content system, regional content strategy, and content retrieval philosophy for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- single-source content ownership
- scalable content management
- SEO-safe content structure
- AI-safe content generation
- regional content consistency
- operational clarity
- long-term maintainability

All content implementation work must follow this document.

---

# 1. Core Content Philosophy

The Bloodline platform uses a:

```txt
Multi-source structured content architecture
```

The platform intentionally separates:
- stable business truth
- SEO content
- operational content
- proof content
- dynamic content

This prevents:
- duplicated truth
- CMS chaos
- inconsistent rendering
- SEO corruption
- AI content drift

---

# 2. Content Ownership Model

Every content type has one primary source of truth.

## Official Ownership Table

| Content Type | Primary Source |
|---|---|
| Regional business truth | Config |
| SEO articles | MDX |
| Blog articles | MDX |
| Tattoo guides | MDX |
| Service content | Config + MDX |
| Style content | Config + MDX |
| Gallery items | Airtable |
| Google reviews | Cached JSON |
| CTA links | Config/lib |
| Metadata defaults | Config |
| Schema defaults | Config |
| Static trust blocks | Config |
| Dynamic operational content | Airtable |

No content should exist in multiple competing sources unless explicitly required.

---

# 3. Content Layer Philosophy

The platform uses four core content layers.

---

# Layer 1 — Config

## Purpose

Stable structured truth.

Used for:
- regional business data
- CTA data
- metadata defaults
- service availability
- social links
- maps
- operating hours
- schema defaults
- FAQ defaults

---

# Layer 2 — MDX

## Purpose

Long-form SEO authority.

Used for:
- blog content
- tattoo guides
- educational content
- long-form style/service depth
- topical authority content

---

# Layer 3 — Airtable

## Purpose

Operational and media-driven content.

Used for:
- gallery items
- portfolio entries
- operational content
- lead records
- supporting dynamic systems

Airtable is NOT the primary SEO CMS.

---

# Layer 4 — Cached JSON

## Purpose

External proof systems.

Used for:
- Google reviews
- generated static datasets
- normalized external content

---

# 4. Regional Content Architecture

The platform supports:
- global content
- region-specific content

through centralized architecture.

---

# 5. Regional Content Rules

Every region should contain:
- unique metadata
- localized CTA copy
- localized review systems
- localized schema
- localized FAQ variation
- localized SEO support copy

Avoid:
- fully duplicated regional pages
- cloned SEO copy
- identical FAQs across all regions

---

# 6. Regional Config Structure

Recommended structure:

```txt
src/config/regions/
  global.ts
  bangkok.ts
  bali.ts
  phuket.ts
```

Each region should export structured typed data.

---

# 7. Config Content Responsibilities

Regional config controls:

- business name
- region name
- hero copy
- contact data
- WhatsApp number
- social links
- maps
- opening hours
- metadata defaults
- schema data
- CTA defaults
- trust blocks
- supported services
- supported styles

Components should consume config data through props and helpers.

---

# 8. Forbidden Config Patterns

Do NOT:
- hardcode region text inside components
- duplicate config values across files
- store long-form SEO articles inside config
- store operational gallery content inside config

Config should remain:
```txt
structured
stable
predictable
typed
```

---

# 9. MDX Philosophy

MDX is the platform’s:
```txt
SEO authority engine
```

MDX should power:
- blog articles
- tattoo education
- style depth
- traveler guidance
- informational SEO
- conversion-supporting authority content

---

# 10. MDX Folder Structure

Recommended structure:

```txt
src/content/
  blog/
  guides/
  styles/
  services/
```

---

# 11. MDX Frontmatter Rules

Every MDX file requires validated frontmatter.

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

Optional fields:

```yaml
faq:
relatedStyles:
relatedServices:
featured:
seoKeywords:
```

All frontmatter must be validated using Zod.

---

# 12. MDX Content Rules

All MDX content should:
- support internal linking
- maintain heading hierarchy
- support SEO naturally
- remain readable
- maintain premium tone
- reinforce trust

Avoid:
- AI filler
- keyword stuffing
- repetitive sentence patterns
- low-information content

---

# 13. MDX SEO Structure

Recommended structure:

```txt
Hero Intro
Primary Topic
Supporting Sections
FAQ
Related Content
CTA
```

Articles should support:
- discovery
- education
- conversion nurturing

---

# 14. MDX Internal Linking Rules

MDX content should internally link to:
- style pages
- service pages
- related articles
- gallery pages
- contact/consultation pages

Links should feel:
- contextual
- natural
- useful

Avoid:
- spammy exact-match anchor repetition

---

# 15. Airtable Philosophy

Airtable is:
```txt
an operational content layer
```

NOT:
```txt
the primary website CMS
```

This distinction is critical.

---

# 16. Airtable Responsibilities

Airtable may control:

- gallery entries
- portfolio media
- portfolio categories
- operational records
- lead records
- dynamic support systems

Airtable should NOT control:
- primary SEO architecture
- route structure
- canonical logic
- metadata system
- schema generation
- core regional business truth

---

# 17. Airtable Gallery Architecture

Recommended gallery structure:

| Field | Purpose |
|---|---|
| title | Gallery item title |
| slug | Unique identifier |
| region | Bangkok/Bali/Phuket |
| category | Style category |
| image | Main image |
| thumbnail | Optional optimized thumbnail |
| altText | SEO alt text |
| featured | Featured flag |
| published | Visibility control |
| createdAt | Ordering |
| tags | Search/filter support |

---

# 18. Gallery Category System

Recommended categories:

```txt
realistic
portrait
japanese
colour
mandala
chicano
bamboo
line-and-dot
cover-up
healed
```

Gallery categorization supports:
- filtering
- SEO relevance
- topical association

---

# 19. Gallery Rendering Rules

Gallery data should:
- be fetched centrally
- be normalized
- support ISR
- support optimized image rendering

Avoid:
- direct Airtable fetching inside components
- uncontrolled image loading
- huge unoptimized payloads

---

# 20. Review Content Architecture

Reviews are sourced through:

```txt
Google Business Profiles
→ Outscraper
→ normalized JSON cache
→ rendering layer
```

Reviews are NOT manually managed.

---

# 21. Review Cache Structure

Recommended structure:

```txt
src/data/reviews/
  bangkok.json
  bali.json
  phuket.json
```

Each review object should include:

```ts
author
rating
text
date
region
profilePhoto
reviewUrl
```

---

# 22. Review Filtering Rules

Reviews should prioritize:
- detailed experiences
- professionalism mentions
- hygiene mentions
- international visitor mentions
- craftsmanship mentions

Avoid:
- empty reviews
- emoji-only reviews
- ultra-short meaningless reviews

---

# 23. Review Rendering Rules

Review systems should:
- feel authentic
- support trust
- support crawlability
- support regional relevance

Avoid:
- fake testimonial rewriting
- duplicated cross-region reviews
- fabricated review systems

---

# 24. FAQ Content Architecture

FAQ content exists at multiple levels.

---

# Global FAQs

Used for:
- broad tattoo questions
- process questions
- payment questions

---

# Regional FAQs

Used for:
- location-specific information
- traveler concerns
- local operational differences

---

# Style FAQs

Used for:
- style-specific concerns
- healing questions
- placement advice

---

# Service FAQs

Used for:
- cover-ups
- consultation process
- aftercare
- hygiene

---

# 25. CTA Content Architecture

CTA systems are config-driven.

CTA content should support:
- WhatsApp-first conversion
- trust reinforcement
- region-aware behavior

CTA logic should remain centralized.

Avoid:
- hardcoded CTA URLs
- duplicated CTA generation logic

---

# 26. Static vs Dynamic Content Rules

## Static Content

Preferred for:
- SEO pages
- trust sections
- style pages
- service pages
- FAQs

---

## Dynamic Content

Used carefully for:
- gallery systems
- reviews
- operational content

The platform should remain:
```txt
SEO-safe and performance-safe
```

---

# 27. Future CMS Philosophy

The architecture intentionally avoids:
```txt
over-centralized CMS dependency
```

The system prioritizes:
- structured ownership
- stable rendering
- AI-safe architecture
- scalable retrieval

This is more important than:
```txt
“everything editable”
```

---

# 28. AI Content Safety Rules

AI-generated content must:
- remain human-readable
- support trust
- maintain premium tone
- avoid repetitive structures
- avoid filler content
- avoid regional duplication

AI should support:
```txt
real topical authority
```

NOT:
```txt
mass content generation
```

---

# 29. Content Retrieval Philosophy

Components should receive:
- prepared data
- normalized data
- typed data

Components should NOT:
- perform raw Airtable calls
- parse MDX directly
- contain business logic
- normalize external content

All retrieval and normalization belongs in:
```txt
src/lib/
```

---

# 30. ISR Content Strategy

The platform should use ISR for:
- gallery systems
- review systems
- blog systems
- content-heavy pages

This supports:
- freshness
- SEO
- performance
- scalability

---

# 31. Content Scalability Rules

Adding future regions should require:
- new config
- new content
- new reviews
- new gallery data

It should NOT require:
- new architecture
- duplicated systems
- duplicated component logic

---

# 32. Content Tone Rules

All content should feel:

```txt
Premium
Confident
Professional
Trustworthy
Human
Energetic
```

Avoid:
- generic AI tone
- exaggerated luxury language
- corporate jargon
- low-trust marketing copy

---

# 33. Final Content Principle

All content systems should reinforce:

```txt
Authority
Trust
Craftsmanship
Regional relevance
SEO depth
Conversion confidence
Long-term scalability
```

If a content decision weakens those goals, it should not be implemented.
