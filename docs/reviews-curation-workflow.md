# Reviews Curation Workflow (No Google API)

Homepage testimonial cards load from **validated JSON** in the repo (not MDX). MDX stays for long-form SEO content; structured reviews belong in `src/data/reviews/`.

## Goal

- Regional domains show only their own GMB reviews:
  - Bangkok domain → `bangkok.json`
  - Bali domain → `bali.json`
  - Phuket domain → `phuket.json`
- Global domain shows a **mixed** stream (Bangkok → Bali → Phuket round-robin per index).

## Where the data lives

- `src/data/reviews/bangkok.json`
- `src/data/reviews/bali.json`
- `src/data/reviews/phuket.json`

Each file is `{ "reviews": [ ... ] }` and each item matches `googleReviewRecordSchema` in `src/lib/schemas/google-review.ts` (validated at build time).

## Outscraper → JSON (recommended)

1. Export Google Maps reviews to XLSX from Outscraper (one sheet, all locations).
2. Run:

```bash
python3 scripts/generate-homepage-reviews-json.py /path/to/Outscraper-....xlsx
```

3. Commit the updated JSON under `src/data/reviews/`.

The script maps listing `name` → region:

- `Bloodline Tattoo Bangkok` → `bangkok`
- `Bloodline Tattoo Bali - Kuta` → `bali`
- `Bloodline Tattoo Patong Phuket` → `phuket`

## JSON fields (per review)

- `id` — stable id (script uses `{region}-{review_id}`)
- `author` — reviewer display name (`author_title` in Outscraper)
- `rating` — 1–5 (`review_rating`)
- `text` — review body (`review_text`; empty → placeholder for photo-only reviews)
- `date` — ISO UTC from `review_timestamp` when present
- `region` — `bangkok` | `bali` | `phuket`
- `source` — always `"google"`
- `profilePhoto` — optional URL (`author_image`)
- `reviewUrl` — optional URL (`review_link`)

## Editorial guardrails

- Use only real posted reviews.
- Do not fabricate names, dates, or ratings.
- Prefer a mix of first-timer and repeat-client experiences.
- Re-export when you want to refresh the carousel; keep JSON committed so builds stay reproducible.
