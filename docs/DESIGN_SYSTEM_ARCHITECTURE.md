# DESIGN_SYSTEM.md

# Bloodline Tattoo Platform — Design System

This document defines the official visual system, interaction philosophy, motion behavior, token rules, typography standards, and UI language for the Bloodline Tattoo platform.

The purpose of this document is to maintain:

- visual consistency
- scalable UI architecture
- predictable AI-generated design behavior
- premium brand cohesion
- conversion-focused presentation
- tactical motion discipline

All design and frontend implementation work must follow this system.

---

# 1. Core Visual Identity

Bloodline is positioned as:

```txt
Aggressive premium tattoo culture
```

The platform should feel:

- dark
- tactical
- energetic
- cinematic
- masculine
- premium
- proof-driven
- high-trust

The platform should NOT feel:

- quiet luxury
- fashion editorial minimalism
- soft wellness branding
- artistic over-stylization
- experimental creative agency
- futuristic WebGL-heavy experience

---

# 2. Visual Philosophy

The design philosophy is:

```txt
Premium performance energy
```

The website should communicate:

- confidence
- authority
- craftsmanship
- professionalism
- hygiene standards
- international trust
- tattoo culture authenticity

The visual system must balance:

```txt
Brand positioning
+
Conversion momentum
+
SEO readability
```

---

# 3. Color System

## Primary Background

```txt
#0B0B0D
```

Used for:
- main backgrounds
- hero sections
- core surfaces
- immersive sections

---

## Accent Color

```txt
#C6FF3B
```

This is a locked brand color.

Used for:
- CTAs
- highlights
- active states
- trust markers
- labels
- tactical visual emphasis

The accent should feel:
- sharp
- aggressive
- energetic
- tactical

Avoid overusing the accent.

---

# 4. Semantic Color Tokens

Use semantic tokens only.

## Core Tokens

```txt
background
foreground
accent
accent-foreground
surface
surface-elevated
surface-strong
muted
muted-foreground
border
border-strong
border-accent
```

Do not use random arbitrary color values directly in components.

Preferred:

```tsx
className="bg-background text-foreground"
```

Avoid:

```tsx
className="bg-[#0B0B0D]"
```

---

# 5. Surface System

Use controlled dark elevation.

## Surface Hierarchy

### Background

```txt
#0B0B0D
```

### Surface

```txt
#0F0F12
```

### Surface Elevated

```txt
#151518
```

### Surface Strong

```txt
#1B1B20
```

The UI should feel layered through:
- subtle elevation
- borders
- contrast
- spacing

NOT through excessive shadows.

---

# 6. Typography System

## Heading Font

```txt
Barlow Condensed
```

---

## Body Font

```txt
Plus Jakarta Sans
```

No additional primary fonts should be introduced without approval.

---

# 7. Heading Rules

All major headings should default to:

- uppercase
- aggressive hierarchy
- tight tracking
- condensed structure
- bold weight

The heading system is part of the brand identity.

---

# 8. Typography Hierarchy

## Hero Heading

Characteristics:

- massive
- condensed
- aggressive
- high-impact
- cinematic

Recommended:
- uppercase
- tight line-height
- negative tracking

---

## Section Heading

Characteristics:

- bold
- tactical
- confident
- high readability

---

## Eyebrow Labels

Characteristics:

- uppercase
- wide tracking
- accent color
- small but bold

Used for:
- category labels
- section intros
- tactical emphasis

---

## Body Copy

Characteristics:

- clean
- readable
- slightly relaxed line-height
- muted foreground color

Body text should support:
- SEO readability
- scanning
- content density
- trust

---

# 9. Typography Behavior

The typography system should feel:

```txt
Aggressive but controlled
```

NOT:
- chaotic
- decorative
- artistic
- luxury-editorial soft

Avoid:
- excessive serif usage
- playful typography
- oversized paragraph spacing
- inconsistent text alignment

---

# 10. Spacing Philosophy

Bloodline should feel:

```txt
Dense with proof
Light with readability
```

The platform should not feel:
- cramped
- compressed
- overly spacious
- empty luxury minimalism

---

# 11. Section Spacing

Use large cinematic section spacing.

Recommended:
- generous vertical rhythm
- strong breathing room
- controlled density

Hero sections may use:
- full viewport height
- near-full viewport height
- immersive media treatment

---

# 12. Layout Philosophy

The platform uses:

```txt
Strong structural rhythm
```

Core layout characteristics:

- large imagery
- controlled grid systems
- aggressive heading placement
- proof-heavy composition
- tactical spacing

Avoid:
- Pinterest chaos
- asymmetrical randomness
- overly experimental layouts

---

# 13. Shape Language

Bloodline uses:

```txt
Sharp tactical geometry
```

Buttons, cards, and UI structures should feel:

- sharp
- structured
- confident
- tactical

Avoid:
- soft pill buttons
- overly rounded SaaS aesthetics
- playful card systems

---

# 14. Border System

Borders should be subtle and tactical.

Use:
- low-opacity borders
- dark separators
- accent borders sparingly

Borders help create:
- structure
- rhythm
- separation
- elevation

without making the interface feel busy.

---

# 15. Glow System

Glow usage must be restrained.

Accent glow should only appear for:

- CTA hover states
- active states
- tactical highlights
- selected interactions

Avoid:
- neon overload
- constant glowing UI
- cyberpunk aesthetic

The platform should feel premium, not futuristic.

---

# 16. Motion Philosophy

Motion should feel:

- fast
- sharp
- cinematic
- tactical
- confident
- controlled

NOT:
- playful
- floaty
- dreamy
- fashion-editorial slow

---

# 17. Motion Timing

Motion should generally use:

```txt
0.2s → 0.7s
```

Preferred easing:

```txt
cubic-bezier(0.16, 1, 0.3, 1)
```

Motion should create:
- energy
- polish
- momentum

without becoming distracting.

---

# 18. Allowed Motion

Allowed:

- fade reveals
- stagger reveals
- subtle scale
- hover zoom
- cinematic image transitions
- modal transitions
- tactical CTA interaction
- subtle background movement

---

# 19. Forbidden Motion

Forbidden:

- bounce
- spin
- floating blobs
- excessive parallax
- scroll hijacking
- flashy WebGL scenes
- exaggerated 3D effects
- chaotic layered motion

The website should remain:
- fast
- clean
- controlled

---

# 20. Image Philosophy

Images are:

```txt
Proof systems
```

NOT decoration.

Tattoo imagery carries:
- trust
- craftsmanship
- authority
- emotional confidence

---

# 21. Image Treatment

All tattoo imagery should feel:

- high contrast
- cinematic
- sharp
- immersive
- premium
- real

Avoid:
- stock-photo aesthetics
- washed-out imagery
- inconsistent filters
- low-quality compression

---

# 22. Portfolio Presentation

Portfolio sections should feel:

```txt
Curated craftsmanship showcase
```

NOT:
```txt
generic image dump
```

Use:
- strong crops
- tactical overlays
- aggressive grid structure
- hover depth
- category systems

---

# 23. Content Density Rules

SEO matters heavily.

The platform must support:
- long-form SEO
- FAQs
- informational depth
- topical authority

BUT:

Content must remain:
- structured
- scannable
- layered
- visually interrupted
- readable

Avoid:
- giant text walls
- SEO spam blocks
- repeated keyword stuffing

---

# 24. Section Philosophy

All pages should follow:

```txt
Attention
→ Trust
→ Proof
→ Depth
→ Conversion
```

Every section should serve a clear purpose.

No filler sections.

---

# 25. Trust System Philosophy

Tattoo businesses are:

```txt
Trust-heavy conversion industries
```

The platform should continuously reinforce:
- review proof
- portfolio proof
- hygiene confidence
- professionalism
- consultation clarity
- international trust

The user should never feel uncertain.

---

# 26. CTA Philosophy

The platform is:

```txt
Conversation-first
```

NOT:
```txt
Form-first
```

Primary CTA:
- WhatsApp

Secondary:
- Instagram
- Messenger

CTA language should feel:
- direct
- confident
- premium
- high-trust
- concierge-like

Avoid:
- corporate marketing language
- desperate lead-gen language
- generic SaaS CTA wording

---

# 27. Review Presentation

Reviews are a core trust system.

Reviews should feel:
- authentic
- premium
- believable
- proof-heavy

Do not style reviews like:
- SaaS testimonials
- corporate case studies

Use:
- strong stars
- dark cards
- tactical accents
- authentic review tone

---

# 28. Accessibility Rules

The visual system must maintain:

- semantic hierarchy
- readable contrast
- keyboard accessibility
- focus visibility
- reduced motion support
- responsive readability

Luxury presentation must never reduce usability.

---

# 29. Responsive Philosophy

The mobile experience is critical.

The mobile design should feel:

```txt
Dense but tactical
```

NOT:
- bloated
- over-compressed
- content-starved

Important:
- sticky mobile CTA
- aggressive mobile typography
- optimized media loading
- tactical section pacing

---

# 30. Tailwind Usage Philosophy

Tailwind should be used through:
- semantic utilities
- reusable variants
- token-driven styling

Avoid:
- uncontrolled arbitrary values
- duplicated styling
- inconsistent spacing
- one-off visual hacks

The design system must remain:
- scalable
- reusable
- AI-operable

---

# 31. Component Variant Philosophy

Reusable variants are required.

Recommended variant systems:

- button variants
- section spacing variants
- card variants
- heading variants
- surface variants

Avoid:
- unique styling per component
- duplicated visual logic

---

# 32. Visual Density Philosophy

The platform should visually balance:

```txt
40% proof/media
30% typography/brand
20% SEO depth
10% CTA
```

This balance supports:
- trust
- conversion
- readability
- premium positioning

---

# 33. Forbidden Visual Patterns

Do not introduce:

- soft pastel aesthetics
- luxury beige minimalism
- futuristic cyberpunk overload
- overly artistic typography
- random gradients
- glassmorphism overload
- pill-heavy SaaS styling
- playful startup visuals

The platform must remain:

```txt
Aggressive
Premium
Controlled
Tactical
```

---

# 34. Final Design Principle

Every visual decision should reinforce:

```txt
Trust
Craftsmanship
Energy
Authority
Premium positioning
Conversion confidence
```

If a design choice weakens those goals, it should not be implemented.
