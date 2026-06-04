# Tattoo style images (regional)

One folder per **style slug**, then **studio** subfolders. There is **no `global/` folder** — the global site pools images from every studio folder for that style.

## Layout

```txt
public/images/tattoo-styles/
  realism/
    bangkok/   hero.jpg  approach.jpg  card.jpg?  proof/
    bali/      …
    phuket/    …
  bamboo/
    bangkok/   …          ← Bangkok + Phuket only
    phuket/    …
  healed/
    bali/      …          ← Bali only
```

## Which studios per style

| Style                                                 | Folders                     |
| ----------------------------------------------------- | --------------------------- |
| realism, portrait, japanese, colour, mandala, chicano | `bangkok`, `bali`, `phuket` |
| bamboo                                                | `bangkok`, `phuket`         |
| healed                                                | `bali`                      |

Matches which styles each regional **site** offers.

## Page roles

| File           | Use                                                                         |
| -------------- | --------------------------------------------------------------------------- |
| `hero.jpg`     | Style **detail** page header only (`/tattoo-styles/realism`)                |
| `approach.jpg` | Approach statement band background on the style page                        |
| `card.jpg`     | Homepage + `/tattoo-styles` grid tiles (regional `card.jpg` per studio)     |
| `proof/*`      | Proof grid on style pages + `/portfolio` (registered in style media config) |

### Export ratios (from UI code)

| File           | Ratio                                       | Suggested pixels       | Shown in                                                                                  |
| -------------- | ------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| `hero.jpg`     | **3:1** (best) or **16:9**                  | 2400×800 or 2400×1350  | Full-width band, ~52–58vh tall, `object-cover`                                            |
| `approach.jpg` | **16:9** (fixed in code)                    | 1920×1080 or 2400×1350 | Cover background; mobile frame **5:4**, desktop ~60vh × full width                        |
| `card.jpg`     | **2:3** portrait (md+) / **16:10** (mobile) | 1200×1800 or 1600×1000 | Only if you add a tile-specific crop later; **skip for now** if you only want two masters |

## Regional domains

- `bloodlinetattoobangkok.com` → uses `bangkok/` first, then falls back to `bali` / `phuket` for the same style if Bangkok is empty.
- `bloodlinetattoobali.com` → `bali/` first, then siblings.
- `bloodlinetattoophuket.com` → `phuket/` proof only (falls back to siblings **only if** Phuket proof is empty). Same for Bangkok and Bali.
- Global → merges proof from **all** studio folders for that style; hero/approach/card use the primary studio for that domain.

## After upload

1. Drop files into the correct `{style}/{studio}/` paths.
2. We rename for SEO + write alt text.
3. We register proof paths in `src/config/tattoo-style-proof-pools.ts` or style-specific media modules (e.g. `tattoo-style-bamboo-media.ts`, `tattoo-style-realism-media.ts`).
4. Register proof paths in style media modules (e.g. `tattoo-style-realism-media.ts`), then run `npm run generate:gallery-catalog` so `/portfolio` stays in sync.

## First batch

Start with **`realism/bangkok/`** (or whichever studio pack you have first).
