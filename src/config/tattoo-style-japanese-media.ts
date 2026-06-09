import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type JapaneseStudioRegion = "bangkok" | "bali" | "phuket";

const japaneseImageRoot = "/images/tattoo-styles/japanese";

function isJapaneseStudioRegion(studio: TattooStyleStudioRegion): studio is JapaneseStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function japaneseProofSrc(studio: JapaneseStudioRegion, filename: string): string {
  return `${japaneseImageRoot}/${studio}/proof/${filename}`;
}

const japaneseStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Japanese black and grey full-back tattoo with samurai, Hannya mask, pagoda, and dragon in a cinematic studio hero at Bloodline Tattoo Bangkok",
    approachAlt:
      "Japanese black and grey leg tattoo with Hannya mask, pagoda, and cherry blossom wind bars at Bloodline Tattoo Bangkok",
    cardAlt:
      "Japanese full-back oni or Hannya tattoo with glowing red eyes and cloud swirls at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Japanese full-back tattoo with armoured samurai, dragon, and red maple accents in a traditional studio setting at Bloodline Tattoo Bali",
    approachAlt:
      "Japanese leg sleeve with tiger, pagoda, cherry blossoms, and red accents on stone steps at Bloodline Tattoo Bali",
    cardAlt:
      "Japanese black and grey leg tattoo with samurai kabuto portrait and mounted samurai scene at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Japanese full-back samurai tattoo with pagoda, swirling clouds, and kanji in dramatic lighting at Bloodline Tattoo Phuket",
    approachAlt:
      "Japanese samurai and dragon arm sleeve against misty temple and pagoda backdrop at Bloodline Tattoo Phuket",
    cardAlt:
      "Japanese full-back kabuto with dragon crest, menpo, bushido kanji, and shoulder dragons at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  JapaneseStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const japaneseProofPoolsByStudio: Record<
  JapaneseStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
  bangkok: [
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-15-11-2025-6-29-38-pm-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Shishi lion-dog side tattoo with cherry blossoms, peonies, bamboo, and traditional coins at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-15-11-2025-7-49-50-pm-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Foo Dog forearm tattoo framed by geometric mandala patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-17-11-2025-5-36-07-pm-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese chest tattoo of three fierce Hannya masks with sakura clouds and zodiac accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-1-06-10-pm-2-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese samurai kabuto and menpo tattoo beside a multi-tiered pagoda under a full moon at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-37-54-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese torso tattoo of a stone Hannya mask pierced by a katana above a snarling Fu Dog with sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese chest and stomach tattoo with Tengu mask, samurai in kabuto, and upward dragon among clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-2-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese forearm tattoo of a Hannya mask coiled by a snake with cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-3-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese realism sleeve tattoos with samurai armor, Hannya masks, coiled snakes, and female portraits at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese arm tattoo of a snarling dragon above a woman's masked face in swirling smoke at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-53-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve tattoos with Hannya masks, dragon head, surreal multi-eyed woman, and reaching hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-51-14-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeve with tiger, Hannya mask, dragon head, and sakura among wind bars at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese realism sleeves with Hannya masks, dragon head, and surreal four-eyed woman portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-10-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve tattoo of a Hannya mask above a multi-tiered pagoda in swirling clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-11-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with woman in kabuto helmet, Hannya mask, dragon head, and wave motifs at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-12-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with Hannya mask, coiled snake, crane, cherry blossoms, and clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-13-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve tattoos with dragon head, samurai skull in kabuto, pagoda, and female warrior portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-14-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve tattoos of a samurai with katana and Oni mask above a pagoda landscape at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-16-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Irezumi sleeve with coiled dragon, Hannya mask, peonies, and dark mikiri background at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-17-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese arm tattoo of samurai in kabuto beneath a roaring dragon with kanji and pagoda at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-18-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve design with fierce dragon and snarling tiger with red eyes among waves at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-18-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese side tattoo of a woman portrait with Hannya and dragon headpiece, lotus, and mandala at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-2-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full back tattoo with woman portrait, Hannya mask, katana, samurai, and torii gate at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-20-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full back Hannya mask tattoo with glowing eyes, clouds, and kikkō pattern at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-23-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese realism sleeve with woman portrait, coiled snake, human skull, and cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-24-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese arm tattoo of a Hannya mask beneath a Shishi lion-dog holding a ring in clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-25-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeve with Oni face, waves, and torn-paper reveal effect at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-3-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with woman in kabuto, skull, clouds, lotus, and Roman numeral date at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-3-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeves with Foo Dog, samurai skull in kabuto, cobra, and Hannya mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-34-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese forearm tattoos of a Hannya mask with striking snake and a samurai with katana before a torii at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-36-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with Hannya mask, snake, koi fish, pink sakura, and red lotus at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-4-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Irezumi sleeves with phoenix, named koi fish, dragon serpent, and red cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-40-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese forearm tattoo of a Hannya mask below a bonsai tree, full moon, and waterfall at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-5-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve tattoos with dragon head, woman in kabuto, Hannya masks, skull, and katana at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-6-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with samurai mempo, phoenix, and vibrant red and orange maple leaves at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-7-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeve with dragon, Shishi lion-dog, Hannya mask, and geisha with Kitsune mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-8-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with glowing samurai menpo and Hannya mask amid radiant energy lines at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-9-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeves with Foo Dog heads, samurai skull in kabuto, and hooded cobra at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-9-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeve with dragon head, cherry blossoms, and serene woman portrait with facial markings at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full sleeve with scaled dragon, sakura blossoms, and woman portrait with ornate cheek patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-15-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Irezumi sleeve with Hannya mask, koi fish, snake, dragon, waves, and sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-2-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese realism sleeve with woman portrait, ornate facial filigree, and cherry blossom branch at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-29-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese full back Hannya mask tattoo with tusks, cracked stone texture, and ornate scrollwork at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-7-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese sleeve with Oni mask, armored samurai in mempo, scaled dragon, and sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Japanese Irezumi dragon wrap tattoo with detailed scales, whiskers, and traditional cloud background at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-02-01-24-23-49-50-bloodline-bali.webp"),
      alt: "Black and grey Japanese-inspired full sleeve with a samurai helmet, oni mask, dragon head, and orange geometric accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-03-08-24-23-55-14-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a samurai kabuto, snarling oni mask, and swirling smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-05-03-23-00-26-18-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a samurai kabuto, armor details, cloud shading, and red flower accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-05-10-23-22-57-08-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a snarling yokai beast, warrior armor, and dark fur textures at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-06-09-24-12-41-56-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with dragon scales, skull details, flowing wind bars, and red cherry blossoms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-06-11-23-13-05-55-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a samurai mask, katana, and cherry blossoms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-07-05-24-20-35-07-bloodline-bali.webp"),
      alt: "Black and grey Japanese lower leg tattoo with a kitsune mask, female portrait, clasped hands, and skull shading at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-08-07-25-18-50-21-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a Hannya mask, wind bars, wave details, and koi imagery at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-08-08-23-01-02-53-bloodline-bali.webp"),
      alt: "Black and grey Japanese half sleeve with a Hannya mask, snake, hanging lantern, and wave smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-08-11-22-20-46-31-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a coiled dragon, wind bars, and crashing wave motifs at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-09-08-23-22-54-27-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a samurai kabuto, dragon head, cloud bars, and a snarling hand mask at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-09-08-25-21-16-07-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a dragon face, pagoda, and lone samurai silhouette at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-09-09-25-11-25-32-bloodline-bali.webp"),
      alt: "Japanese colour full sleeve with a bright green dragon, brown cloud bars, and red accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-11-11-22-20-30-24-bloodline-bali.webp"),
      alt: "Black and grey Japanese arm tattoo with Hannya and Noh masks, cloud bars, and dotwork shading at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-11-11-22-23-30-47-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg tattoo with a Hannya mask, samurai helmet, and flowing smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-photo-12-01-23-22-42-50-1-bloodline-bali.webp",
      ),
      alt: "Black and grey Japanese chest-to-hand sleeve with a phoenix, tiger, and red wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-12-01-23-22-42-50-bloodline-bali.webp"),
      alt: "Black and grey Japanese chest and full sleeve with a phoenix, tiger, and red wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-photo-13-02-24-15-31-44-1-bloodline-bali.webp",
      ),
      alt: "Black and grey Japanese thigh-to-ankle leg sleeve with a snarling Shishi lion, lotus petals, and cloud bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-13-02-24-15-31-44-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a geisha portrait, flowing chrysanthemum petals, and an oni mask at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-13-06-24-21-35-24-bloodline-bali.webp"),
      alt: "Japanese-inspired colour full sleeve with a bandaged female face, all-seeing eye, and red-black abstract ribbons at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-photo-14-03-23-16-41-23-1-bloodline-bali.webp",
      ),
      alt: "Black and grey Japanese leg sleeve with kitsune masks, peony blooms, and swirling wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-14-03-23-16-41-23-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a fierce warrior face, scale patterns, and wave bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-16-03-23-20-06-23-bloodline-bali.webp"),
      alt: "Japanese colour full sleeve with an orange dragon, black background, and crashing waves at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-16-08-23-22-35-19-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg tattoo with a geisha portrait, fan, waves, and a floral hair ornament at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-16-08-25-23-24-53-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a roaring Shishi lion, snarling dragon beast, and clawed details at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-17-04-23-23-11-59-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a dragon head, guardian lion, lotus, and bright red flames at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-17-09-24-23-27-42-bloodline-bali.webp"),
      alt: "Japanese colour full sleeve with a red-crowned crane, peonies, and black wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-photo-18-09-23-23-42-14-1-bloodline-bali.webp",
      ),
      alt: "Black and grey Japanese full leg sleeve with an armored Shishi lion, beads, and cloud background at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-18-09-23-23-42-14-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a guardian beast, muscular figure, and crashing waves at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-18-11-24-21-18-59-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a Hannya mask, koi scales, and red peonies at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-19-02-25-23-23-04-bloodline-bali.webp"),
      alt: "Black and grey Japanese abstract full sleeve with bold wind bars, wave curls, and moon-like circles at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-19-03-24-23-26-14-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a geisha portrait, folding fan, and crane feathers at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-19-03-24-23-26-15-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a masked warrior face, Hannya details, and flowing smoke ribbons at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-19-04-25-21-37-26-bloodline-bali.webp"),
      alt: "Black and grey Japanese-inspired full back piece with samurai skull armor, oni shoulders, and a multi-armed goddess at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-19-12-24-21-24-42-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a samurai warrior, drawn katana, and swirling smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-20-04-24-23-31-08-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with twin Hannya masks, a roaring wolf, pagoda, and dragon scales at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-20-05-24-19-30-16-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a giant oni face, coiled snake, and skull-topped armor at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-03-25-22-55-53-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a samurai woman portrait, oni mask, and cherry blossoms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-11-23-23-46-29-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a samurai menpo mask, braided rope, and cloud bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-23-02-24-22-26-38-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with Noh masks, cherry blossoms, and flowing smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-23-12-24-21-16-03-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a giant oni face, Noh masks, and flowing wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-24-07-24-22-24-23-bloodline-bali.webp"),
      alt: "Black and grey Japanese leg sleeve with a dragon skull, female portrait, and snarling oni mask at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-26-05-25-23-48-47-bloodline-bali.webp"),
      alt: "Black and grey Japanese full sleeve with a tiger, coiled snake, and chrysanthemum blooms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-27-07-23-23-26-19-bloodline-bali.webp"),
      alt: "Japanese red and black full leg tattoo with a samurai mask, female portrait, and swirling smoke at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-photo-29-05-23-21-14-25-1-bloodline-bali.webp",
      ),
      alt: "Black and grey Japanese full leg sleeve with a samurai kabuto, geisha face, and chrysanthemum petals at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-29-05-23-21-14-25-bloodline-bali.webp"),
      alt: "Black and grey Japanese full leg sleeve with a horned yokai skull, snarling beast face, and Hannya mask at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-29-07-23-20-25-58-bloodline-bali.webp"),
      alt: "Japanese red and black full leg tattoo with a samurai mask, skull, and swirling wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-30-12-24-22-21-46-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a samurai helmet, guardian lion, torii gate, and flanking eyes at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-31-05-24-21-19-48-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a giant Hannya mask, coiled snake, and rib-like negative space at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-31-10-22-09-41-16-bloodline-bali.webp"),
      alt: "Black and grey Japanese full back piece with a Hannya mask, coiled snakes, and cloud bars at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-buddha-dragon-pagoda-samurai-kanji-full-back-bloodline-phuket.webp",
      ),
      alt: "Japanese full-back piece with Buddha, dragon, Hannya, pagoda, samurai kanji, and diagonal light rays at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-horror-faces-spider-hand-sleeve-bloodline-phuket.webp",
      ),
      alt: "Dark horror realism full sleeve with distorted faces, melting tongue, and spider on the hand in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-occult-goat-woman-graveyard-full-back-bloodline-phuket.webp",
      ),
      alt: "Dark occult full-back tattoo with Baphomet-style goat, horned woman, and graveyard silhouette framed in flames at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-realism-rosary-cross-candles-sleeve-bloodline-phuket.webp",
      ),
      alt: "Dark realism full sleeve with haunted portrait, melting candles, and rosary cross at the wrist in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-hannya-clouds-full-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese black and grey full leg sleeve with a dragon on the thigh and Hannya mask on the shin amid clouds and waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-red-eyes-samurai-oni-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with dragon head, glowing red eyes, samurai menpo, and oni mask in neo-irezumi black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-samurai-cherry-blossom-red-eyes-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with snarling dragon and samurai portrait, both with glowing red eyes and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-tiger-peony-lantern-full-back-bloodline-phuket.webp",
      ),
      alt: "Japanese full-back irezumi with dragon, tiger, peony, paper lantern, and cherry blossoms in black and grey with red accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-woman-hannya-red-eyes-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with dragon, woman portrait, Hannya with glowing red eyes, and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-female-samurai-warrior-red-flowers-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with female samurai in kabuto and menpo above a full-armoured warrior and red floral accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-geometric-asanoha-mandala-blackwork-sleeve-bloodline-phuket.webp",
      ),
      alt: "Geometric blackwork full sleeve with asanoha star, mandala circles, and stippled bands on the arm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-geometric-mandala-dotwork-blackwork-sleeve-bloodline-phuket.webp",
      ),
      alt: "Geometric mandala and dotwork blackwork full sleeve with bold negative-space bands on the arm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-snake-skull-red-accents-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with Hannya mask, coiled snake, skull on the shin, and vivid red accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-snakes-red-full-back-bloodline-phuket.webp",
      ),
      alt: "Japanese full-back Hannya mask flanked by snakes with fangs and deep red accents in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0158-2-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back tattoo with samurai menpo and kabuto, flanking dragon heads with red eyes, and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0339-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back Hannya mask with glowing eyes, sharp fangs, and stylized cloud wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0518-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with snarling dragon head on the upper arm, woman in kabuto on the forearm, and Hannya mask with cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0644-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with fierce samurai menpo gripping a katana and Komainu lion-dog on the forearm amid clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0813-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back tattoo with shishi head at the neck, ornate samurai menpo and kabuto, and bold geometric fill on the lower back at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1059-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back samurai menpo with kabuto crest, braided ropes, and stylized clouds on a solid black ground at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1223-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back piece with armored samurai, pagoda under a full moon, Hannya mask, and kanji at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1307-bloodline-phuket.webp"),
      alt: "Japanese chest piece with samurai menpo, gold-accent kabuto, red agemaki knot, and vivid red chrysanthemums at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1555-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back samurai mask with shishi crest, cherry blossoms, and roman numerals at the neckline at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1638-bloodline-phuket.webp"),
      alt: "Japanese full-back tattoo with fierce samurai, glowing katana, snarling dragon with red eyes, and red maple leaves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2681-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with samurai biting a katana blade and snarling shishi amid cherry blossoms and clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2837-bloodline-phuket.webp"),
      alt: "Japanese full leg sleeve with armored samurai holding a katana on the thigh and Hannya mask on the calf amid vibrant red clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2840-bloodline-phuket.webp"),
      alt: "Japanese full leg sleeve with pagoda, red cherry blossoms, tiger head on the shin, and bold kanji at the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2985-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve blending a woman's portrait with Hannya mask, chrysanthemums, and wind-wave mikiri at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2986-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with pagoda in the clouds, bold chrysanthemum, and fierce foo dog on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3050-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back with armored samurai, Hannya mask, pagoda in mist, kneeling swordsman, and flowing wind lines at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3216-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with samurai in kabuto and menpo above a fierce Hannya mask amid stylized waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3519-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg tattoo with woman's face through a cracked Hannya mask on the thigh and dragon head on the shin at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3527-bloodline-phuket.webp"),
      alt: "Japanese black and grey leg sleeve with fierce samurai menpo and kabuto, pagoda, cherry blossoms, and dark sun disc at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3733-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg tattoo with stern samurai portrait in kabuto on the thigh and armored samurai on horseback with pagoda below at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3980-bloodline-phuket.webp"),
      alt: "Japanese black and grey leg sleeve with dragon head on the thigh and Hannya mask on the shin amid swirling clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3983-bloodline-phuket.webp"),
      alt: "Japanese black and grey leg sleeve with samurai kabuto and menpo, woman's portrait on the calf, and dragon scales at the ankle amid clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3993-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back with samurai kabuto and menpo, flanking Hannya masks, dragon head, and cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-4779-bloodline-phuket.webp"),
      alt: "Japanese full-back Hannya mask with glowing red eyes, horned creature crest, and stylized clouds in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-4919-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with tiger in kabuto on the upper arm, coiled snake on the forearm, and crashing waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5120-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with fierce samurai menpo on the upper arm and detailed dragon head on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5127-bloodline-phuket.webp"),
      alt: "Japanese black and grey sleeve blending a four-eyed woman's portrait with Hannya horns and a hand gripping the mask's snarling jaw at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5960-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back Hannya mask with horns, tusks, and ornamental scroll filigree at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6400-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back samurai in mempo and kabuto with dragon crest, flanking dragon heads, and central agemaki rope knot at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6552-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg tattoo with bearded elder in kabuto on the thigh and dragon head with glowing eyes amid bold white wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6554-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg sleeve with snarling foo dog on the thigh and coiled snake on the calf amid clouds and waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6570-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg tattoo with woman's portrait, pagoda, folding fan, Hannya mask, and lightning-like highlights at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6878-bloodline-phuket.webp"),
      alt: "Japanese full sleeve with fierce phoenix in orange and yellow feathers, glowing red eye, and bold white negative-space bands at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6884-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with armored samurai in kabuto and horse head accented by orange and yellow feather motifs at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-7831-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back samurai menpo and kabuto with horned Hannya crest framed by high-contrast stylized clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8015-bloodline-phuket.webp"),
      alt: "Japanese full leg sleeve with snarling tiger, horned oni mask, red lightning bolts, and dragon with glowing red eyes at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8021-bloodline-phuket.webp"),
      alt: "Japanese black and grey leg sleeve with dragon over the knee, peony on the shin, red lightning streaks, and shrine detail amid wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8025-bloodline-phuket.webp"),
      alt: "Japanese lower leg tattoo with Hannya mask, red eye accent, blooming peony, and jagged red lightning slashes at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8211-bloodline-phuket.webp"),
      alt: "Japanese black and grey full-back with ronin in straw hat and mempo, torii gate and temple stairs, and large kabuto with mounted samurai at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9198-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with dragon head and menpo on the upper arm, scaled body on the forearm, and crashing waves at the wrist at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9201-bloodline-phuket.webp"),
      alt: "Japanese black and grey full sleeve with Hannya mask, woman's portrait, floral blooms, and dragon head at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9659-bloodline-phuket.webp"),
      alt: "Japanese black and grey full leg sleeve with kabuto and mempo on the thigh and foo dog amid swirling clouds and water to the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-pagoda-shishi-cherry-blossom-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with pagoda, arched bridge, shishi lion-dog, and scattered red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-buddha-woman-mask-cherry-blossom-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full sleeve blending kabuto, serene Buddha head, woman in menpo, and cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-mask-dragon-claw-katana-red-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with samurai menpo, glowing red eyes, dragon claw, katana grip, and Hannya near the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-mask-foo-dog-full-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve with samurai menpo, dragon head, and foo dog surrounded by wind bars and clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-warrior-kabuto-torii-full-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full sleeve with kabuto and menpo, torii gate, and armoured samurai warrior in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-tiger-hannya-dragon-glowing-eyes-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Japanese full leg sleeve stacking tiger, Hannya with blue eyes, and dragon with red eyes amid scales and waves at Bloodline Tattoo Phuket.",
    },
  ],
};

function getJapaneseStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof japaneseStudioMediaByRegion)["bangkok"],
): string {
  if (!isJapaneseStudioRegion(studio)) {
    return japaneseStudioMediaByRegion.bangkok[slot];
  }

  return japaneseStudioMediaByRegion[studio][slot];
}

function getJapaneseProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isJapaneseStudioRegion(studio)) {
    return [];
  }

  return japaneseProofPoolsByStudio[studio];
}

export {
  getJapaneseProofPoolForStudio,
  getJapaneseStudioMediaAlt,
  japaneseProofPoolsByStudio,
  japaneseStudioMediaByRegion,
};
