# Homepage regional images

One folder per **site** (domain). Each folder holds the image slots used on the homepage bands below.

## Folders

```txt
public/images/homepage/
  README.md
  global/          ← bloodlinetattoo.com (house)
  bangkok/
  bali/
  phuket/
```

## Slots (required files per region)

| File                   | Homepage section                           | DOM / section id               |
| ---------------------- | ------------------------------------------ | ------------------------------ |
| `standards-split.jpg`  | Studio standard split (text + large image) | `#homepage-standards-split`    |
| `authority-craft.jpg`  | Craft discipline — first proof panel       | `#homepage-authority` (craft)  |
| `authority-studio.jpg` | Craft discipline — second proof panel      | `#homepage-authority` (studio) |
| `session-path.jpg`     | Session path split (image left)            | `#homepage-session-path`       |
| `hero-poster.jpg`      | Hero video poster / fallback               | Hero (`HeroSection`)           |

Config paths are resolved in `src/config/homepage-media.ts`.

## Export specs

### `standards-split.jpg` & `session-path.jpg`

Same frame as the approach split band (`layout="approach"`).

|         | Mobile                        | Desktop (lg+)                                              |
| ------- | ----------------------------- | ---------------------------------------------------------- |
| Frame   | **5:4**, max height **280px** | min height **520px**, ~**60%** of `max-w-7xl` (~700×520px) |
| `sizes` | 92vw                          | 60vw                                                       |

**Master:** **4:3** at **2400×1800 px** (JPEG ~80–85). Keep subject **centered** (`object-cover`).

### `authority-craft.jpg` & `authority-studio.jpg`

Authority proof columns (narrower on desktop).

|         | Mobile                      | Desktop (lg+)                              |
| ------- | --------------------------- | ------------------------------------------ |
| Frame   | **5:4**, max **280px** tall | min **520px** tall, ~**30vw** (~300×516px) |
| `sizes` | 100vw                       | 30vw (sm: 45vw)                            |

**Master:** **4:5** or **3:4** portrait at **1600×2000 px** (or **4:3** **2000×1500** with center-weighted crop).

### `hero-poster.jpg`

Full-width hero fallback (pairs with `/videos/hero/hero-{region}.mp4`).

**Master:** **16:9** at **2400×1350 px** (or match your hero video frame).

## Workflow

1. Export five files per region into `public/images/homepage/{region}/`.
2. Use unique alt text in `src/config/homepage-authority.ts` and `src/config/homepage-standards-split.ts` (per region).
3. Hard-refresh each domain (global, `bangkok.localhost`, etc.).

Replace seeded placeholders when final art is ready — filenames stay the same.
