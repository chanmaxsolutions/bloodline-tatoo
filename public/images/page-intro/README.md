# Page intro backgrounds (all sites)

**One image per page** — the **same file** on global, Bangkok, Bali, and Phuket.

## Files

```txt
public/images/page-intro/
  tattoo-styles.jpg   ← /tattoo-styles
  portfolio.jpg       ← /portfolio
  reviews.jpg         ← /reviews
  about.jpg           ← /about
  blog.jpg            ← /tattoo-blog (+ category hubs)
  contact.jpg         ← /contact
  README.md
```

Config: `src/config/page-intro-band.ts` → `pageIntroBackgroundFor("portfolio")`, etc.

## Export spec (each file)

|                  | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| **Aspect ratio** | **3:1** — e.g. **2400×800 px**                                  |
| **Format**       | JPEG ~80                                                        |
| **Composition**  | Interest in the **upper third** (bottom is gradient + headline) |

## Workflow

1. Export six images with the filenames above.
2. Drop into `public/images/page-intro/`.
3. Update matching `alt` strings in `page-intro-band.ts`.
4. Refresh any domain — no regional variants needed.
