# REVIEW_SYSTEM.md

# Bloodline Tattoo Platform — Review System

This document defines the official review architecture, Google review ingestion strategy, review normalization rules, rendering philosophy, trust presentation standards, regional review behavior, and review scalability rules for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- authentic trust systems
- scalable review infrastructure
- regional review relevance
- SEO-safe review rendering
- AI-safe review handling
- premium proof presentation
- long-term operational stability

All review implementation must follow this document.

---

# 1. Core Review Philosophy

For Bloodline Tattoo, reviews are not:

```txt
simple testimonials
```

Reviews are:

```txt
high-value public trust assets
```

The platform already benefits from:
- thousands of Google reviews
- strong local authority
- strong public trust
- international customer credibility

The review system should amplify this advantage.

---

# 2. Review Strategy

The platform intentionally uses:

```txt
Real Google reviews
```

instead of:
- manually written testimonials
- fake testimonials
- generic marketing reviews
- Airtable-managed review content

Authenticity is a major conversion advantage.

---

# 3. Review Source Architecture

Reviews are sourced through:

```txt
Google Business Profiles
→ Outscraper
→ normalization layer
→ cached JSON
→ rendering system
```

---

# 4. Regional Review Sources

Each region maintains independent review authority.

## Bangkok

```txt
Bangkok Google Business Profile
```

---

## Bali

```txt
Bali Google Business Profile
```

---

## Phuket

```txt
Phuket Google Business Profile
```

Reviews should never mix regions incorrectly.

---

# 5. Review Architecture Philosophy

The review system is:

```txt
Cache-first
```

NOT:
```txt
Live-fetch-first
```

This is extremely important.

---

# 6. Why Cached Reviews Are Preferred

Cached reviews provide:

- faster rendering
- SEO-safe rendering
- stable performance
- lower runtime dependency
- better reliability
- ISR compatibility
- lower API usage

Live API fetching on every request is intentionally avoided.

---

# 7. Official Review Flow

```txt
Google Reviews
→ Outscraper sync
→ normalization
→ cached JSON generation
→ region-aware rendering
```

---

# 8. Review Cache Structure

Recommended structure:

```txt
src/data/reviews/
  bangkok.json
  bali.json
  phuket.json
```

Each file should contain:
- normalized review data
- region metadata
- review timestamps

---

# 9. Review Object Structure

Recommended TypeScript structure:

```ts
export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date: string;

  region: "bangkok" | "bali" | "phuket";

  profilePhoto?: string;
  reviewUrl?: string;

  source: "google";
}
```

---

# 10. Review Sync Philosophy

Reviews should update through:
- scheduled syncs
- manual sync commands
- controlled refresh flows

Avoid:
- constant live fetching
- frontend API dependency
- runtime review scraping

---

# 11. Recommended Sync Frequency

Recommended:
- daily sync
or
- weekly sync

depending on operational needs.

Real-time review fetching is unnecessary.

---

# 12. Review Sync Ownership

All review synchronization logic belongs in:

```txt
src/lib/reviews/
```

Recommended structure:

```txt
src/lib/reviews/
  fetch-reviews.ts
  normalize-reviews.ts
  cache-reviews.ts
  get-region-reviews.ts
```

---

# 13. Review Filtering Philosophy

Not all reviews should display equally.

The platform should prioritize:
- meaningful reviews
- trust-rich reviews
- experience-focused reviews
- craftsmanship-focused reviews

---

# 14. Preferred Review Signals

Prioritize reviews mentioning:
- professionalism
- cleanliness
- hygiene
- realism
- consultation quality
- friendliness
- healing quality
- international experience
- trust
- craftsmanship

---

# 15. Low-Value Review Filtering

Avoid prioritizing:
- emoji-only reviews
- ultra-short reviews
- meaningless one-line reviews
- duplicate reviews
- low-information content

These may remain in the dataset but should not dominate rendering.

---

# 16. Review Rendering Philosophy

Reviews should feel:

```txt
Authentic
Premium
Proof-heavy
Trustworthy
```

NOT:
```txt
Corporate SaaS testimonials
```

---

# 17. Review UI Philosophy

Review presentation should emphasize:
- authenticity
- clarity
- trust
- emotional reassurance

The review system should visually reinforce:
- quality
- legitimacy
- professionalism

---

# 18. Review Card Characteristics

Review cards should feel:
- dark
- premium
- structured
- tactical

Recommended:
- star visibility
- reviewer identity
- subtle accent use
- strong typography hierarchy

Avoid:
- playful testimonial layouts
- excessive decoration
- fake “case study” styling

---

# 19. Review Density Rules

Homepage:
- curated reviews only

Reviews page:
- broader review display

Avoid:
- review overload
- giant testimonial walls
- repetitive review rendering

---

# 20. Homepage Review Rules

Homepage should typically display:

```txt
6–12 curated reviews
```

Selected intelligently.

The homepage review section should:
- build confidence quickly
- support conversion
- reinforce trust momentum

---

# 21. Reviews Page Philosophy

The reviews page is a:

```txt
Trust engine
```

NOT:
```txt
a dump of every review
```

The page should:
- showcase quality experiences
- reinforce authority
- support regional confidence

---

# 22. Review Randomization Rules

Review rendering may support:
- randomized selection
- weighted prioritization
- rotating featured reviews

Avoid:
- fully chaotic randomization
- low-quality review dominance

---

# 23. Review Weighting Strategy

The system should prioritize:
- longer reviews
- high-trust keywords
- professionalism mentions
- detailed experiences

Suggested weighting examples:

```txt
professional
clean
amazing
recommend
best
experience
realism
friendly
```

---

# 24. Region-Aware Rendering Rules

Regional domains should primarily render:
- regional reviews
- regional review stats
- regional trust signals

Example:

```txt
Bangkok site
→ Bangkok reviews
```

Avoid:
- heavy cross-region review mixing

---

# 25. Review SEO Philosophy

Reviews support:
- trust
- local authority
- conversion confidence
- regional legitimacy

Review content should remain:
- crawlable
- semantic
- structured

Avoid:
- rendering all reviews client-side unnecessarily

---

# 26. Review Schema Rules

Review schema must:
- reflect real reviews
- remain accurate
- avoid fabricated aggregate data

Use:
- Review schema
- AggregateRating schema

only when accurate and valid.

---

# 27. Review Authenticity Rules

Forbidden:
- fake testimonials
- AI-generated reviews
- edited review meaning
- fabricated ratings
- synthetic trust systems

Allowed:
- truncation
- formatting
- prioritization
- filtering
- lightweight summarization

The original meaning must remain intact.

---

# 28. Review Performance Rules

Review systems should:
- use cached JSON
- support ISR
- avoid runtime-heavy rendering
- minimize client-side JS

Avoid:
- fetching large review datasets on page load
- unnecessary review hydration

---

# 29. Review Accessibility Rules

Review systems must support:
- semantic structure
- readable typography
- keyboard accessibility
- screen-reader readability
- sufficient contrast

---

# 30. Review Future Scalability

Future regions should support:
- independent review datasets
- independent sync flows
- independent rendering
- independent schema

without requiring architectural rewrites.

---

# 31. Review Failure Handling

If review syncing fails:
- existing cached reviews should remain usable
- rendering should not break
- pages should remain functional

The review system must fail gracefully.

---

# 32. Review Operational Philosophy

The review system should prioritize:

```txt
Stability
Trust
Authenticity
Performance
Scalability
```

NOT:
```txt
real-time complexity
```

---

# 33. Review AI Safety Rules

AI-generated implementation must:
- preserve review authenticity
- avoid inventing reviews
- avoid modifying review meaning
- avoid fake review systems

The review architecture exists to reinforce:
```txt
real public trust
```

---

# Final Review Principle

The review system should continuously reinforce:

```txt
Authenticity
Trust
Craftsmanship
Professionalism
Regional authority
Conversion confidence
```

If a review-related decision weakens those goals, it should not be implemented.
