# Homepage Section Architecture Blueprint (Phase 5 + 5.5)

## Scope and Guardrails

- This document is planning-only for homepage architecture.
- No production homepage sections are implemented in this phase.
- Locked homepage order is preserved:
  1. Hero
  2. Trust / Proof Bar
  3. Featured Portfolio Preview
  4. Tattoo Styles Preview
  5. Why Bloodline / Studio Authority
  6. Reviews
  7. Experience / Process
  8. FAQ Preview
  9. Final CTA
  10. Footer
- Visual and narrative direction must remain: cinematic, tactical, proof-heavy, immersive, conversion-focused, emotionally controlled.
- Explicitly avoid: SaaS patterns, repetitive card-grids, generic template layouts, over-animation.

## Homepage Experience Strategy

- Narrative arc: Attention -> Trust -> Proof -> Depth -> Conversion.
- Pacing objective:
  - Fast confidence at top (Hero + Trust strip)
  - Early craftsmanship evidence (Portfolio)
  - Mid-page authority and reassurance (Authority + Reviews + Process)
  - Late-page objection handling and conversion close (FAQ + Final CTA)
- CTA intensity curve:
  - High in Hero
  - Medium/Low in middle sections
  - Highest in Final CTA

## Visual Rhythm and Density System

- Rhythm types:
  - Immersive blocks: Hero, Portfolio, Final CTA
  - Compressed strip: Trust / Proof
  - Structured narrative stacks: Styles, Authority, Process, FAQ
- Density strategy:
  - Visually dense: Portfolio, Hero (controlled)
  - Breathing sections: Final CTA transition zones, Footer
  - Proof-priority: Trust strip, Portfolio, Reviews
  - Immersion-priority: Hero, Portfolio, Final CTA

## Reusable Section Systems

### 1. SectionShell

- Purpose: canonical wrapper for spacing/surface/rhythm.
- Composition: section -> container -> optional surface layer.
- Expected props:
  - id?: string
  - spacing: "tight" | "default" | "cinematic"
  - surface?: "transparent" | "base" | "elevated" | "strong"
  - children: ReactNode
- Responsive behavior: spacing compresses by tier on mobile.
- Visual restrictions: no business logic, no section-specific styling leakage.

### 2. SectionHeading

- Purpose: unified eyebrow/title/description hierarchy.
- Composition: eyebrow -> title -> supporting copy.
- Expected props:
  - eyebrow?: string
  - title: string
  - description?: string
  - align?: "left" | "center"
  - maxWidth?: "narrow" | "default" | "wide"
- Responsive behavior: preserve hierarchy, reduce copy width first.
- Visual restrictions: avoid standalone decorative variants.

### 3. ProofStrip

- Purpose: compact trust signal band.
- Composition: horizontal list of proof tokens/metrics.
- Expected props:
  - items: Array<{ label: string; value?: string }>
  - variant?: "compact" | "default"
- Responsive behavior: wrap/stack while preserving scan order.
- Visual restrictions: short factual snippets only.

### 4. PortfolioPreview

- Purpose: curated craftsmanship proof.
- Composition: featured item + supporting items (capped).
- Expected props:
  - items: PortfolioItem[]
  - maxItems: number
  - viewAllHref: string
- Responsive behavior: fewer visible items on mobile.
- Visual restrictions: never becomes a media dump.

### 5. StudioAuthorityBlock

- Purpose: communicate standards and studio discipline.
- Composition: authority pillars + short support proof.
- Expected props:
  - pillars: Array<{ title: string; description: string }>
  - supportingProof?: Array<{ label: string }>
- Responsive behavior: stacked pillars.
- Visual restrictions: no SaaS feature-card repetition.

### 6. ProcessSteps

- Purpose: reduce uncertainty through clear flow.
- Composition: ordered steps list/timeline.
- Expected props:
  - steps: Array<{ title: string; description: string }>
  - cta?: { label: string; href: string }
- Responsive behavior: vertical sequence/accordion.
- Visual restrictions: concise step content only.

### 7. FaqPreview

- Purpose: objection handling + long-tail SEO preview.
- Composition: capped accordion + route-out to full FAQ.
- Expected props:
  - items: Array<{ question: string; answer: string }>
  - viewAllHref: string
- Responsive behavior: accordion-first.
- Visual restrictions: preview cap enforced.

### 8. FinalCtaBand

- Purpose: terminal conversion push.
- Composition: short headline + support line + single primary CTA.
- Expected props:
  - title: string
  - supportingLine?: string
  - cta: { label: string; href: string }
- Responsive behavior: single-column, centered emphasis.
- Visual restrictions: one dominant action only.

## Section-by-Section Blueprint

### 1) HeroSection

- Purpose: first-impact authority and intent framing.
- Emotional role: controlled cinematic impact.
- Density: medium-high.
- Visual rhythm: immersive.
- Reusable primitives: SectionShell(cinematic), SectionHeading, hero media slot, primary CTA.
- Media behavior: single dominant proof media anchor.
- Mobile simplification: flatten layers, preserve headline + CTA priority.
- CTA intensity: high.
- Spacing tier: cinematic.
- SEO responsibility: page H1 + core intent context.
- Motion restraint: subtle.

### 2) TrustProofBarSection

- Purpose: immediate confidence compression.
- Emotional role: reassurance.
- Density: high (compact).
- Visual rhythm: strip.
- Reusable primitives: SectionShell(tight), ProofStrip.
- Media behavior: minimal/non-critical.
- Mobile simplification: stacked/wrapped proof tokens.
- CTA intensity: low.
- Spacing tier: tight.
- SEO responsibility: crawlable trust context.
- Motion restraint: minimal.

### 3) FeaturedPortfolioPreviewSection

- Purpose: craftsmanship proof.
- Emotional role: confidence via evidence.
- Density: visually high.
- Visual rhythm: showcase.
- Reusable primitives: SectionShell(cinematic), SectionHeading, PortfolioPreview.
- Media behavior: curated media with hard cap.
- Mobile simplification: reduced item count + clear ordering.
- CTA intensity: medium.
- Spacing tier: cinematic.
- SEO responsibility: style/service contextual text around media.
- Motion restraint: subtle.

### 4) TattooStylesPreviewSection

- Purpose: relevance matching + discovery path.
- Emotional role: orientation.
- Density: medium.
- Visual rhythm: structured stack/split.
- Reusable primitives: SectionShell(default), SectionHeading, style preview list/grid.
- Media behavior: optional thumbnails.
- Mobile simplification: stack into concise rows.
- CTA intensity: medium.
- Spacing tier: default.
- SEO responsibility: internal links to style pages.
- Motion restraint: minimal.

### 5) StudioAuthoritySection

- Purpose: standards and authority narrative.
- Emotional role: trust depth.
- Density: medium-high.
- Visual rhythm: structured split.
- Reusable primitives: SectionShell(default), SectionHeading, StudioAuthorityBlock.
- Media behavior: optional environmental proof.
- Mobile simplification: stacked pillars.
- CTA intensity: low.
- Spacing tier: default.
- SEO responsibility: expertise and quality signal content.
- Motion restraint: minimal.

### 6) ReviewsSection

- Purpose: social proof reinforcement.
- Emotional role: validation.
- Density: medium.
- Visual rhythm: proof block.
- Reusable primitives: SectionShell(default), SectionHeading, reviews preview component.
- Media behavior: optional authentic reviewer proof.
- Mobile simplification: concise stacked review cards/quotes.
- CTA intensity: low-medium.
- Spacing tier: default.
- SEO responsibility: authentic crawlable review text excerpts.
- Motion restraint: minimal.

### 7) ExperienceProcessSection

- Purpose: reduce friction with clear process.
- Emotional role: confidence through clarity.
- Density: medium.
- Visual rhythm: sequential stack.
- Reusable primitives: SectionShell(default), SectionHeading, ProcessSteps.
- Media behavior: optional lightweight support visuals.
- Mobile simplification: vertical sequence/accordion.
- CTA intensity: medium.
- Spacing tier: default.
- SEO responsibility: process explanation supports intent.
- Motion restraint: minimal.

### 8) FaqPreviewSection

- Purpose: objection handling and intent expansion.
- Emotional role: reassurance.
- Density: medium-high (compressed).
- Visual rhythm: structured stack.
- Reusable primitives: SectionShell(default), SectionHeading, FaqPreview.
- Media behavior: none.
- Mobile simplification: accordion-first.
- CTA intensity: medium.
- Spacing tier: default.
- SEO responsibility: long-tail FAQ visibility.
- Motion restraint: minimal.

### 9) FinalCtaBandSection

- Purpose: strongest conversion close.
- Emotional role: decisive commitment.
- Density: low-medium.
- Visual rhythm: terminal.
- Reusable primitives: SectionShell(cinematic), FinalCtaBand.
- Media behavior: optional subtle background layer only.
- Mobile simplification: single-column emphasis.
- CTA intensity: high.
- Spacing tier: cinematic.
- SEO responsibility: concise conversion intent reinforcement.
- Motion restraint: subtle.

### 10) Footer

- Purpose: utility + trust continuity.
- Emotional role: stable close.
- Density: medium-low.
- Visual rhythm: compressed utility.
- Reusable primitives: existing SiteFooter.
- Media behavior: none.
- Mobile simplification: compact grouped links.
- CTA intensity: low.
- Spacing tier: tight.
- SEO responsibility: internal crawl path continuity.
- Motion restraint: none/minimal.

## Responsive Philosophy

- Maintain identical section order across breakpoints.
- Simplify by reducing simultaneous density, not by removing narrative intent.
- Keep proof visible early on mobile.
- Preserve strong heading hierarchy; shorten body copy blocks for scanability.
- Keep one dominant conversion action in key moments (Hero, Final CTA).

## Media Strategy

- Hero + Portfolio are primary visual anchors.
- Reviews media is optional and authenticity-driven.
- Other sections prioritize textual structure over decorative visuals.
- All media must be optimized (`next/image`, responsive sizing, lazy load below fold).
- Enforce media caps and curated selection to preserve premium rhythm.

## CTA Pacing Logic

- Hero: High intensity.
- Mid sections: Low-to-medium contextual actions.
- Final CTA: Highest intensity.
- Avoid repeated high-intensity CTA blocks in consecutive sections.

## Region and Data Ownership Strategy

### Region-override capable sections (later)

- HeroSection
- TrustProofBarSection
- FeaturedPortfolioPreviewSection
- TattooStylesPreviewSection
- StudioAuthoritySection
- ReviewsSection
- ExperienceProcessSection
- FaqPreviewSection
- FinalCtaBandSection

### Globally shared systems

- Section layout structures
- Spacing tiers
- Motion restraint rules
- Primitive component contracts

### Airtable-eligible later

- FeaturedPortfolioPreviewSection (operational media curation)
- ReviewsSection (normalized review ingestion)
- Optional style thumbnails for TattooStylesPreviewSection

### Static/config-driven by default

- Hero scaffold
- Trust strip structure
- Studio authority framework
- Process steps framework
- FAQ preview framework
- Final CTA framework

## Section Implementation Boundaries (for next phase)

- No Airtable fetch inside section UI components.
- No region detection logic inside sections.
- No duplicated metadata logic inside sections.
- Route/server layer prepares typed content; sections remain presentation-focused.
- Keep component system reusable and composable; avoid one-off homepage-only hacks.

## Next Step (After Approval)

- Implement homepage sections using the above architecture and reusable systems without deviating from locked sequence and pacing strategy.
