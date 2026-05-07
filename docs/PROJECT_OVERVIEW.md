# PROJECT_OVERVIEW.md

# Bloodline Tattoo Platform

## Project Summary

Bloodline Tattoo is a premium international tattoo studio brand operating across multiple locations including:

- Bangkok
- Bali
- Phuket

The platform is being rebuilt from the ground up using a modern AI-native frontend architecture focused on:

- premium positioning
- SEO authority
- high-performance rendering
- conversion optimization
- scalability
- long-term maintainability
- AI-assisted development workflows

This is not a traditional marketing website rebuild.

The project is being architected as a scalable multi-region frontend platform with centralized configuration, reusable systems, and AI-operable development infrastructure.

---

# Brand Positioning

Bloodline Tattoo is positioned as:

```txt
A premium high-performing international tattoo studio brand
with aggressive cinematic energy,
high trust,
heavy proof systems,
and conversion-focused luxury positioning.
```

The brand identity is:

- dark
- energetic
- masculine
- tactical
- cinematic
- proof-driven
- international
- studio-first

The platform should feel like:

```txt
Aggressive premium tattoo culture
```

NOT:

- quiet luxury
- fashion editorial minimalism
- soft artistic branding
- experimental art collective
- generic agency-style premium

---

# Core Business Goals

The platform must support:

## 1. Premium Brand Positioning

The website should elevate Bloodline beyond a standard tattoo studio website and reinforce:

- trust
- authority
- professionalism
- hygiene standards
- craftsmanship
- international recognition

---

## 2. SEO Growth

SEO is a primary business objective.

The platform must support:

- regional SEO
- topical authority
- tattoo style SEO
- tattoo service SEO
- informational content
- local SEO optimization
- internal linking systems
- schema generation
- scalable content publishing

---

## 3. High-Intent Conversion

The business already generates significant traffic and leads.

The goal is not just lead quantity.

The goal is:

- better lead quality
- faster trust building
- stronger conversion confidence
- better conversational conversion flow

The platform uses:

- WhatsApp-first conversion
- Instagram support
- Messenger support

Heavy form-based conversion funnels are intentionally avoided.

---

## 4. Scalability

The architecture must support:

- future regions
- future domains
- future SEO expansion
- future content systems
- future integrations

without rebuilding the platform architecture.

---

# Technical Philosophy

The platform follows these principles:

```txt
Server-first
SEO-first
Performance-first
Config-driven
Composable
Reusable
AI-operable
```

---

# Platform Architecture

## Core Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Motion
- Node.js 22 LTS
- npm
- Vercel

---

## Content Stack

- Native MDX
- gray-matter
- Zod validation

No Contentlayer is used.

---

## Operational Services

- Airtable
- Resend
- Outscraper
- Google Business Profiles

---

# Multi-Domain Architecture

The platform uses:

```txt
One Next.js codebase
Multiple regional domains
```

Domains include:

- bloodlinetattoo.com
- bloodlinetattoobangkok.com
- bloodlinetattoobali.com
- bloodlinetattoophuket.com

Each domain shares:

- components
- layouts
- infrastructure
- SEO systems
- design system
- token system

while rendering region-specific:

- metadata
- schema
- reviews
- CTAs
- maps
- content
- services
- FAQs

through centralized regional configuration files.

---

# Regional Configuration System

Regional data is controlled through:

```txt
src/config/regions/
```

Each region contains:

- business information
- contact data
- metadata
- schema data
- service availability
- maps
- social links
- CTA behavior
- SEO defaults

No regional content should ever be hardcoded directly into components.

---

# Content Architecture

## Config

Used for:

- stable regional truth
- business information
- CTA behavior
- metadata
- schema defaults

---

## MDX

Used for:

- blog content
- tattoo guides
- SEO pages
- educational content
- long-form content

---

## Airtable

Used for:

- gallery content
- operational content
- dynamic content management

Airtable is NOT the primary CMS of the platform.

---

# Review System

The platform uses real Google reviews.

Architecture:

```txt
Google Business Profiles
→ Outscraper
→ normalized JSON cache
→ region-specific rendering
```

No fake testimonials or manually managed testimonial systems are used initially.

The review system is a core trust mechanism of the platform.

---

# Design Philosophy

The visual system should feel:

```txt
Dark
Aggressive
Premium
Cinematic
Energetic
High-trust
```

The design direction is:

```txt
Aggressive premium tattoo culture
```

NOT:

- quiet luxury
- ultra-minimal editorial
- soft luxury aesthetics
- over-designed WebGL experiences

---

# Color System

## Primary Background

```txt
#0B0B0D
```

## Accent Color

```txt
#C6FF3B
```

The green accent is a core part of the brand identity and should remain consistent across the platform.

---

# Typography System

## Headings

```txt
Barlow Condensed
```

## Body

```txt
Plus Jakarta Sans
```

All major headings and titles should default to:

- uppercase
- aggressive hierarchy
- tight tracking
- condensed structure

---

# Motion Philosophy

Motion should feel:

- sharp
- fast
- tactical
- cinematic
- controlled

Avoid:

- playful motion
- floating motion
- excessive parallax
- gimmicky interactions
- overly slow luxury transitions

---

# Conversion Philosophy

The platform is:

```txt
Conversation-first
```

NOT:

```txt
Form-first
```

Primary conversion actions:

- WhatsApp
- Instagram
- Messenger

The platform should maintain constant trust momentum through:

- reviews
- portfolio proof
- process clarity
- hygiene trust
- visual craftsmanship

---

# SEO Philosophy

The platform follows:

```txt
Topical authority
Regional SEO
Structured content density
Internal linking
Schema-rich architecture
```

Content should support SEO strongly while remaining visually readable and emotionally scannable.

The platform must avoid:

- keyword stuffing
- AI spam content
- thin content
- duplicate regional content

---

# Studio-First Strategy

Bloodline is a:

```txt
Studio-first brand
```

NOT:

```txt
Artist-first marketplace
```

The platform intentionally avoids:

- artist profile pages
- artist-centered routing
- artist branding architecture

The focus remains on:

- studio quality
- craftsmanship
- process
- trust
- portfolio proof

---

# Performance Philosophy

The platform should feel:

```txt
Fast by architecture
```

Performance is not treated as a post-build optimization phase.

The platform prioritizes:

- server rendering
- optimized images
- controlled motion
- minimal client-side JavaScript
- ISR
- semantic structure

---

# Accessibility Philosophy

The platform must maintain:

- semantic HTML
- keyboard navigation
- aria support
- reduced motion support
- accessible contrast ratios

Luxury presentation should never compromise accessibility.

---

# AI-Native Development Philosophy

The project is designed for:

```txt
AI-assisted development workflows
```

using:

- Cursor
- AI agents
- structured project memory
- architecture rules
- design system rules
- operational documentation

The platform architecture is intentionally designed to minimize:

- AI drift
- inconsistent generation
- duplicated logic
- architectural corruption

through strict documentation and system-level constraints.

---

# Final Platform Vision

The final platform should feel like:

```txt
A world-class high-performance tattoo studio platform
that combines aggressive cinematic branding,
strong SEO architecture,
heavy proof systems,
and premium conversion-focused experience design.
```

The platform should establish Bloodline as one of the strongest premium tattoo studio brands across its operating regions while remaining scalable for future international growth.
