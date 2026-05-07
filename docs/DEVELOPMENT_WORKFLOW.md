# DEVELOPMENT_WORKFLOW.md

# Bloodline Tattoo Platform — Development Workflow

This document defines the official development workflow, Git strategy, AI-assisted implementation process, commit standards, environment management, deployment flow, review process, testing philosophy, and operational engineering standards for the Bloodline Tattoo platform.

The purpose of this document is to ensure:

- scalable development operations
- AI-safe implementation workflows
- architecture consistency
- predictable deployments
- stable collaboration
- clean Git history
- production reliability

All development work must follow this workflow.

---

# 1. Core Development Philosophy

The Bloodline platform is built using:

```txt
AI-assisted engineering workflows
```

The project is intentionally structured for:
- Cursor
- AI agents
- architecture-aware implementation
- modular development
- scalable frontend systems

This is NOT:
```txt
traditional chaotic prompt-based coding
```

---

# 2. Workflow Philosophy

The workflow prioritizes:

```txt
Consistency
Architecture integrity
Controlled generation
Incremental stability
```

Avoid:
- giant uncontrolled AI generations
- architecture drift
- large unreviewed commits
- random dependency additions
- inconsistent patterns

---

# 3. Development Stack

## Core Environment

```txt
Node.js 22 LTS
npm
Next.js 16
React 19
TypeScript
```

---

## Development Tools

```txt
Cursor
GitHub
Vercel
ESLint
Prettier
Husky
lint-staged
Playwright
Sentry
```

---

# 4. AI-Native Workflow Philosophy

AI should behave as:

```txt
an architecture-aware implementation agent
```

NOT:
```txt
a random code generator
```

This is achieved through:
- project memory files
- Cursor rules
- master implementation prompt
- scoped generation tasks
- architectural constraints

---

# 5. Implementation Order

Development should follow this sequence.

---

# Phase 1 — Foundation

Build:
- project structure
- Tailwind token system
- fonts
- theme architecture
- utility systems
- config system
- SEO utilities
- schema utilities
- providers

---

# Phase 2 — Shared Systems

Build:
- UI primitives
- buttons
- cards
- typography components
- layout wrappers
- motion wrappers
- CTA systems

---

# Phase 3 — Section System

Build:
- reusable page sections
- section variants
- proof systems
- trust systems
- gallery systems

---

# Phase 4 — Route Implementation

Build:
- homepage
- style pages
- service pages
- gallery
- reviews
- blog
- FAQ
- contact

---

# Phase 5 — Data Systems

Integrate:
- Airtable
- review cache
- MDX
- metadata generation
- schema generation

---

# Phase 6 — Hardening

Finalize:
- accessibility
- Lighthouse
- SEO validation
- performance optimization
- error handling
- responsive testing

---

# 6. AI Task Execution Rules

AI implementation should use:

```txt
small scoped generation tasks
```

Avoid:
```txt
build entire website
```

Preferred:

```txt
Build the HeroSection component using the locked design system and architecture constraints.
```

This massively improves:
- consistency
- stability
- code quality

---

# 7. Master Prompt Philosophy

The platform uses:
- one centralized master implementation prompt
- persistent memory files
- Cursor rules

The master prompt should:
- orchestrate
- constrain
- guide

It should NOT:
- replace architecture memory
- contain unstable ad-hoc instructions

---

# 8. Git Workflow

## Main Branches

Recommended:

```txt
main
develop
feature/*
```

---

# Main Branch

```txt
main
```

Represents:
- production-ready code
- deploy-safe state

---

# Develop Branch

```txt
develop
```

Represents:
- active integration branch
- staging-ready state

---

# Feature Branches

Examples:

```txt
feature/hero-system
feature/review-architecture
feature/gallery-filtering
```

Feature branches should remain:
- focused
- scoped
- reviewable

---

# 9. Commit Philosophy

Commits should be:
- small
- meaningful
- atomic
- reviewable

Avoid:
- giant mixed commits
- vague commit messages

---

# 10. Commit Message Style

Recommended style:

```txt
feat:
fix:
refactor:
docs:
style:
perf:
build:
```

Examples:

```txt
feat: implement region-aware metadata system
fix: resolve mobile gallery overflow issue
refactor: extract review normalization utility
```

---

# 11. AI Commit Rules

Never commit:
- unreviewed AI output
- broken builds
- temporary experiments
- architecture violations

All AI-generated code should be:
- reviewed
- validated
- tested

before merging.

---

# 12. Package Installation Rules

Do not install packages casually.

Before adding a dependency:
- verify necessity
- verify maintenance quality
- verify bundle impact
- verify compatibility

Avoid:
- dependency bloat
- overlapping libraries
- unstable packages

---

# 13. Environment Strategy

Supported environments:

```txt
local
preview
production
```

---

# 14. Environment Variable Rules

Environment variables must remain:
- centralized
- documented
- secure

Examples:

```env
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
RESEND_API_KEY=
OUTSCRAPER_API_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

---

# 15. Secret Handling Rules

Never:
- commit secrets
- expose private keys
- hardcode tokens
- expose server secrets to client bundles

Only expose browser-safe variables using:
```txt
NEXT_PUBLIC_
```

---

# 16. Local Development Rules

Local development should prioritize:
- fast feedback
- stable hot reload
- architectural consistency

Developers should:
- run lint checks
- validate TypeScript
- review responsive behavior
- validate SEO output

before pushing changes.

---

# 17. ESLint Rules

ESLint is mandatory.

Do not:
- disable linting casually
- ignore warnings repeatedly
- bypass architecture violations

Linting exists to protect:
- consistency
- quality
- scalability

---

# 18. Formatting Rules

Prettier should remain:
- automated
- consistent
- enforced

Avoid:
- manual formatting inconsistencies
- mixed styling conventions

---

# 19. Pre-Commit Workflow

Use:
- Husky
- lint-staged

Pre-commit should validate:
- lint
- formatting
- TypeScript safety

before commits succeed.

---

# 20. Testing Philosophy

The platform prioritizes:
- critical-path reliability
- responsive correctness
- conversion flow stability

Testing should focus on:
- routing
- metadata
- CTA behavior
- mobile rendering
- review rendering
- SEO structure

---

# 21. Playwright Philosophy

Playwright should validate:
- critical routes
- mobile responsiveness
- CTA interactions
- navigation
- major conversion paths

Avoid:
- excessive brittle test suites

---

# 22. Error Monitoring Philosophy

Sentry should monitor:
- runtime failures
- rendering failures
- route failures
- production issues

Error visibility is critical for:
- stability
- SEO safety
- conversion reliability

---

# 23. Vercel Workflow

## Preview Deployments

Every feature branch should support:
- preview deployment
- QA review
- responsive review
- SEO review

---

## Production Deployment

Only production-safe builds should reach:
```txt
main
```

---

# 24. Deployment Rules

Before production deployment:
- lint must pass
- TypeScript must pass
- build must pass
- Lighthouse must remain healthy
- critical routes must validate

---

# 25. Performance Workflow

Performance should be monitored continuously.

Critical metrics:
- LCP
- CLS
- TBT
- bundle size
- hydration cost

Avoid:
- client-side rendering creep
- oversized animation payloads
- uncontrolled dependency growth

---

# 26. SEO Validation Workflow

Before deployment:
- metadata should validate
- canonicals should validate
- schema should validate
- internal links should validate
- sitemap generation should validate

---

# 27. Accessibility Workflow

Validate:
- keyboard navigation
- heading hierarchy
- contrast
- reduced motion support
- semantic structure

Accessibility is mandatory.

---

# 28. AI Review Workflow

All AI-generated implementation should be reviewed for:

- architecture compliance
- token compliance
- performance safety
- SEO safety
- accessibility
- duplication
- unnecessary complexity

AI output should not be blindly trusted.

---

# 29. Refactor Philosophy

Refactors should:
- improve clarity
- improve scalability
- reduce duplication
- preserve architecture integrity

Avoid:
- unnecessary rewrites
- aesthetic-only refactors
- unstable experimentation

---

# 30. Documentation Philosophy

Documentation is:
```txt
part of the architecture
```

NOT:
```txt
optional afterthought
```

All major architectural changes should update:
- memory files
- Cursor rules
- operational docs

---

# 31. Future Scalability Philosophy

All development decisions should support:
- future regions
- future services
- future content growth
- future integrations
- future SEO scaling

Avoid:
- region-specific hacks
- hardcoded assumptions
- temporary architecture shortcuts

---

# 32. AI Safety Philosophy

The project is intentionally designed to reduce:
- AI hallucination
- architecture drift
- duplicated systems
- inconsistent generation

This is achieved through:
- strict rules
- structured memory
- scoped execution
- reusable systems

---

# 33. Engineering Quality Philosophy

The platform should feel:
```txt
intentional
stable
scalable
premium
well-engineered
```

NOT:
```txt
AI-generated chaos
```

---

# Final Workflow Principle

Every development decision should reinforce:

```txt
Architecture integrity
Performance
SEO safety
Scalability
Trust
Consistency
Premium quality
```

If a workflow decision weakens those goals, it should not be implemented.
