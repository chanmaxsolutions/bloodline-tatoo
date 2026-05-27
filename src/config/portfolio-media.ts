/**
 * Placeholder portfolio media — swap for studio photography when assets are ready.
 * Local paths first; Picsum seeds give distinct placeholders until real uploads land.
 */

interface PortfolioMediaAsset {
  src: string;
  alt: string;
}

function picsumPortfolioSrc(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/bloodline-portfolio-${seed}/${width}/${height}`;
}

const portfolioMediaAssets: readonly PortfolioMediaAsset[] = [
  {
    src: "/images/tattoo-styles/realism.jpg",
    alt: "Black and grey realism tattoo with soft gradients and portrait depth",
  },
  {
    src: "/images/tattoo-styles/fine-line.jpg",
    alt: "Fine line tattoo with delicate single-needle structure on skin",
  },
  {
    src: "/images/tattoo-styles/japanese.jpg",
    alt: "Japanese tattoo sleeve with bold contrast and flowing negative space",
  },
  {
    src: "/images/tattoo-styles/blackwork.jpg",
    alt: "Blackwork tattoo with solid saturation and controlled negative space",
  },
  {
    src: "/images/homepage-authority/institution-craft.jpg",
    alt: "Tattoo artist working inside a Bloodline studio session",
  },
  {
    src: picsumPortfolioSrc("realism-healed", 900, 1200),
    alt: "Healed realism tattoo with smooth greywash transitions",
  },
  {
    src: picsumPortfolioSrc("portrait-profile", 1000, 1250),
    alt: "Portrait tattoo study with controlled facial contrast",
  },
  {
    src: picsumPortfolioSrc("japanese-sleeve", 1200, 900),
    alt: "Japanese-inspired sleeve composition with strong negative space",
  },
  {
    src: picsumPortfolioSrc("colour-panel", 900, 1100),
    alt: "Saturated colour tattoo panel with clean healed edges",
  },
  {
    src: picsumPortfolioSrc("mandala-back", 1000, 1300),
    alt: "Mandala tattoo with radial symmetry and precise dotwork",
  },
  {
    src: picsumPortfolioSrc("chicano-script", 1100, 1000),
    alt: "Chicano lettering tattoo with soft greywash shading",
  },
  {
    src: picsumPortfolioSrc("bamboo-session", 900, 1150),
    alt: "Hand-tap bamboo tattoo session with authentic line rhythm",
  },
  {
    src: picsumPortfolioSrc("fine-line-forearm", 800, 1000),
    alt: "Fine line forearm tattoo with airy negative space",
  },
  {
    src: picsumPortfolioSrc("cover-up-rework", 1000, 1200),
    alt: "Cover-up tattoo rework with darker floral structure",
  },
  {
    src: picsumPortfolioSrc("healed-settle", 950, 1180),
    alt: "Healed tattoo lines after full recovery and settle",
  },
  {
    src: picsumPortfolioSrc("bangkok-session", 1200, 800),
    alt: "Bangkok studio session atmosphere during lining pass",
  },
  {
    src: picsumPortfolioSrc("bali-travel", 900, 1080),
    alt: "Bali travel tattoo documentation with natural light",
  },
  {
    src: picsumPortfolioSrc("phuket-sleeve", 1100, 1250),
    alt: "Phuket sleeve tattoo in progress with bold saturation",
  },
] as const;

function portfolioMediaForIndex(index: number): PortfolioMediaAsset {
  return portfolioMediaAssets[index % portfolioMediaAssets.length];
}

export { portfolioMediaAssets, portfolioMediaForIndex };
export type { PortfolioMediaAsset };
