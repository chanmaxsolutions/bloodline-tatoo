# MOTION_GUIDELINES.md

# Bloodline Tattoo Platform — Motion Guidelines

This document defines the official motion philosophy, animation behavior, interaction rules, transition timing, cinematic pacing, accessibility motion standards, and implementation constraints for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- cohesive motion identity
- premium cinematic behavior
- performance-safe interactions
- scalable animation architecture
- AI-safe motion implementation
- controlled interaction rhythm
- consistent emotional tone

All motion implementation must follow this document.

---

# 1. Core Motion Philosophy

Motion should feel:

```txt
Fast
Sharp
Cinematic
Controlled
Confident
Tactical
```

The motion system should reinforce:
- energy
- authority
- professionalism
- premium positioning
- conversion momentum

---

# 2. Motion Identity

Bloodline motion should feel like:

```txt
Aggressive premium tattoo culture
```

NOT:
- luxury fashion editorial
- playful startup animation
- futuristic WebGL spectacle
- gaming UI
- floating abstract motion
- hyper-minimal luxury pacing

---

# 3. Emotional Motion Goals

Motion should create:

- confidence
- immersion
- polish
- depth
- responsiveness
- momentum

Motion should NOT create:
- distraction
- confusion
- fatigue
- gimmick-heavy interaction

---

# 4. Motion Philosophy by Layer

## Hero Motion

Feel:
- cinematic
- immersive
- atmospheric

Use:
- subtle background scaling
- fade reveals
- layered entrance timing

Avoid:
- dramatic parallax
- excessive scroll effects
- heavy WebGL scenes

---

## Section Motion

Feel:
- structured
- responsive
- polished

Use:
- fade-up reveals
- stagger reveals
- image depth transitions

---

## Interaction Motion

Feel:
- tactical
- responsive
- direct

Use:
- hover scale
- border transitions
- glow transitions
- CTA feedback

---

# 5. Motion Timing Philosophy

Motion should generally feel:

```txt
Quick but intentional
```

Recommended duration range:

```txt
0.2s → 0.7s
```

---

# 6. Recommended Timing Standards

## Hover Interactions

```txt
0.2s → 0.3s
```

---

## Section Reveals

```txt
0.45s → 0.7s
```

---

## Modal Transitions

```txt
0.3s → 0.5s
```

---

## Page Transition Elements

```txt
0.4s → 0.7s
```

---

# 7. Easing Rules

Preferred easing:

```txt
cubic-bezier(0.16, 1, 0.3, 1)
```

Motion should feel:
- smooth
- decisive
- premium

Avoid:
- bounce easing
- elastic easing
- cartoon-like transitions

---

# 8. Allowed Motion Types

Allowed:

- fade reveals
- fade-up transitions
- stagger reveals
- subtle scale
- hover zoom
- overlay transitions
- image depth shifts
- modal fades
- CTA interaction feedback
- subtle cinematic media motion

---

# 9. Forbidden Motion Types

Forbidden:

- bounce
- spin
- floating blobs
- scroll hijacking
- chaotic particle systems
- excessive 3D motion
- exaggerated parallax
- constant looping distraction
- over-designed transition sequences

The platform should never feel:
```txt
gimmicky
```

---

# 10. Motion Density Rules

Motion should support:
- hierarchy
- focus
- polish

Avoid:
- animating everything
- competing animations
- constant movement
- attention overload

Motion should be:
```txt
selective
```

---

# 11. Hero Motion Rules

Hero motion may include:
- subtle video movement
- image scaling
- staggered text reveals
- CTA reveal timing
- overlay fades

Avoid:
- rapid animated typography
- excessive motion layering
- distracting looping effects

The hero should remain:
```txt
premium and readable
```

---

# 12. Scroll Animation Philosophy

Scroll motion should feel:
- subtle
- responsive
- intentional

Use:
- reveal-on-scroll
- stagger systems
- section fade-ups

Avoid:
- dramatic scroll choreography
- scroll hijacking
- cinematic overproduction

---

# 13. Hover Interaction Rules

Hover interactions should feel:
- tactical
- responsive
- premium

Allowed:
- subtle image zoom
- border highlight
- accent glow
- overlay fade
- slight elevation

Avoid:
- exaggerated scaling
- playful wobble effects
- flashy hover gimmicks

---

# 14. CTA Motion Rules

CTA interactions should:
- reinforce confidence
- feel responsive
- feel energetic

Allowed:
- subtle scale
- glow enhancement
- border transition
- opacity transitions

Avoid:
- excessive pulse loops
- constant CTA animation
- distracting motion spam

---

# 15. Gallery Motion Rules

Gallery systems may use:
- image hover depth
- overlay reveal
- stagger loading
- category transition polish

Avoid:
- heavy masonry animation
- over-dramatic zooming
- unstable layout shifting

The gallery should feel:
```txt
smooth and premium
```

---

# 16. Modal Motion Rules

Modals should:
- appear quickly
- feel intentional
- maintain focus

Recommended:
- fade + scale combination
- overlay fade
- controlled timing

Avoid:
- sliding chaos
- exaggerated transitions
- delayed responsiveness

---

# 17. Mobile Motion Rules

Mobile motion should remain:
- lightweight
- performant
- subtle

Avoid:
- large mobile animation payloads
- scroll-heavy interactions
- CPU-intensive effects

Mobile performance takes priority over cinematic complexity.

---

# 18. Motion Accessibility Rules

The platform must support:
- reduced motion preferences
- motion-safe fallbacks
- accessibility-safe interaction timing

Required:
- `prefers-reduced-motion` support
- meaningful motion reduction
- non-essential animation disabling

---

# 19. Performance Motion Philosophy

Motion must remain:
```txt
performance-safe
```

Avoid:
- excessive client-side animation systems
- large animation libraries
- unnecessary browser repaint triggers
- layout-thrashing animations

Preferred:
- transform animations
- opacity animations
- GPU-safe transitions

---

# 20. Motion Technology Stack

Approved motion stack:

```txt
Motion
CSS transitions
CSS animations
Tailwind animation utilities
```

Avoid introducing:
- unnecessary animation frameworks
- experimental rendering engines
- heavy 3D libraries

---

# 21. Motion Component Architecture

Motion wrappers should remain:
- reusable
- composable
- lightweight

Recommended structure:

```txt
src/components/motion/
```

Examples:

```txt
FadeUp.tsx
StaggerGroup.tsx
HoverScale.tsx
RevealSection.tsx
```

---

# 22. AI Motion Safety Rules

AI-generated motion must:
- follow timing standards
- respect accessibility
- avoid gimmicks
- avoid animation overload
- preserve performance

AI should not invent:
- random animation styles
- inconsistent motion behavior
- decorative motion clutter

---

# 23. Motion Hierarchy Rules

High-priority motion:
- hero reveals
- CTA interactions
- gallery hover states
- modal transitions

Low-priority motion:
- decorative micro-motion
- background movement

Motion should support:
```txt
clarity and focus
```

NOT:
```txt
visual chaos
```

---

# 24. Motion + SEO Philosophy

Motion should never:
- block rendering
- delay meaningful content
- damage Core Web Vitals
- hide critical SEO content

SEO-critical content should remain:
- server-rendered
- visible
- crawlable

---

# 25. Motion + Brand Philosophy

Motion should reinforce:

```txt
Authority
Craftsmanship
Energy
Trust
Premium positioning
Confidence
```

The platform should feel:
```txt
alive
```

but never:
```txt
over-animated
```

---

# 26. Cinematic Philosophy

The platform should achieve:
```txt
controlled cinematic energy
```

NOT:
```txt
movie trailer overproduction
```

Subtle atmosphere is preferred over spectacle.

---

# 27. Loading State Philosophy

Loading states should feel:
- minimal
- fast
- premium

Avoid:
- excessive skeleton choreography
- playful loaders
- distracting preload animations

Loading should prioritize:
```txt
clarity and speed perception
```

---

# 28. Transition Consistency Rules

Motion patterns should remain:
- predictable
- reusable
- systemized

Avoid:
- unique motion for every section
- inconsistent easing
- inconsistent timing

Motion consistency reinforces:
```txt
premium perception
```

---

# 29. Future Motion Scalability

Future additions should:
- extend existing motion systems
- reuse timing standards
- reuse easing standards
- maintain performance discipline

Avoid:
- introducing disconnected animation languages

---

# Final Motion Principle

Every motion decision should reinforce:

```txt
Confidence
Energy
Polish
Authority
Responsiveness
Premium positioning
```

If motion weakens readability, trust, performance, or clarity, it should not be implemented.
