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
        "japanese-tattoo-photo-15-11-2025-6-29-38-pm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Shishi lion-dog side tattoo with cherry blossoms, peonies, bamboo, and traditional coins at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-15-11-2025-7-49-50-pm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Foo Dog forearm tattoo framed by geometric mandala patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-17-11-2025-5-36-07-pm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese chest tattoo of three fierce Hannya masks with sakura clouds and zodiac accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-1-06-10-pm-2-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese samurai kabuto and menpo tattoo beside a multi-tiered pagoda under a full moon at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-37-54-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese torso tattoo of a stone Hannya mask pierced by a katana above a snarling Fu Dog with sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese chest and stomach tattoo with Tengu mask, samurai in kabuto, and upward dragon among clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese forearm tattoo of a Hannya mask coiled by a snake with cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-3-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese realism sleeve tattoos with samurai armor, Hannya masks, coiled snakes, and female portraits at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-34-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese arm tattoo of a snarling dragon above a woman's masked face in swirling smoke at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-42-53-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve tattoos with Hannya masks, dragon head, surreal multi-eyed woman, and reaching hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-10-51-14-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeve with tiger, Hannya mask, dragon head, and sakura among wind bars at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese realism sleeves with Hannya masks, dragon head, and surreal four-eyed woman portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-10-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve tattoo of a Hannya mask above a multi-tiered pagoda in swirling clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-11-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with woman in kabuto helmet, Hannya mask, dragon head, and wave motifs at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-12-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with Hannya mask, coiled snake, crane, cherry blossoms, and clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-13-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve tattoos with dragon head, samurai skull in kabuto, pagoda, and female warrior portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-14-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve tattoos of a samurai with katana and Oni mask above a pagoda landscape at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-16-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Irezumi sleeve with coiled dragon, Hannya mask, peonies, and dark mikiri background at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-17-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese arm tattoo of samurai in kabuto beneath a roaring dragon with kanji and pagoda at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-18-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve design with fierce dragon and snarling tiger with red eyes among waves at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-18-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese side tattoo of a woman portrait with Hannya and dragon headpiece, lotus, and mandala at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full back tattoo with woman portrait, Hannya mask, katana, samurai, and torii gate at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-20-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full back Hannya mask tattoo with glowing eyes, clouds, and kikkō pattern at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-23-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese realism sleeve with woman portrait, coiled snake, human skull, and cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-24-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese arm tattoo of a Hannya mask beneath a Shishi lion-dog holding a ring in clouds at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-25-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeve with Oni face, waves, and torn-paper reveal effect at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-3-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with woman in kabuto, skull, clouds, lotus, and Roman numeral date at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-3-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeves with Foo Dog, samurai skull in kabuto, cobra, and Hannya mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-34-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese forearm tattoos of a Hannya mask with striking snake and a samurai with katana before a torii at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-36-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with Hannya mask, snake, koi fish, pink sakura, and red lotus at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-4-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Irezumi sleeves with phoenix, named koi fish, dragon serpent, and red cherry blossoms at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-40-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese forearm tattoo of a Hannya mask below a bonsai tree, full moon, and waterfall at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-5-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve tattoos with dragon head, woman in kabuto, Hannya masks, skull, and katana at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-6-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with samurai mempo, phoenix, and vibrant red and orange maple leaves at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-7-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeve with dragon, Shishi lion-dog, Hannya mask, and geisha with Kitsune mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-8-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with glowing samurai menpo and Hannya mask amid radiant energy lines at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-9-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeves with Foo Dog heads, samurai skull in kabuto, and hooded cobra at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-9-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeve with dragon head, cherry blossoms, and serene woman portrait with facial markings at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-38-30-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full sleeve with scaled dragon, sakura blossoms, and woman portrait with ornate cheek patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-15-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Irezumi sleeve with Hannya mask, koi fish, snake, dragon, waves, and sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese realism sleeve with woman portrait, ornate facial filigree, and cherry blossom branch at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-29-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese full back Hannya mask tattoo with tusks, cracked stone texture, and ornate scrollwork at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-7-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese sleeve with Oni mask, armored samurai in mempo, scaled dragon, and sakura at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-photo-19-5-2026-11-58-32-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Japanese Irezumi dragon wrap tattoo with detailed scales, whiskers, and traditional cloud background at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-14-bloodline-bali.jpg"),
      alt: "Full back black and grey Japanese tattoo with a woman in samurai kabuto and armor, a held Hannya mask, and cherry blossoms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-19-bloodline-bali.jpg"),
      alt: "Japanese full back tattoo with foo dog, ornate kabuto, central Hannya mask, and a samurai before a torii gate at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-23-bloodline-bali.jpg"),
      alt: "Black and grey Japanese irezumi full sleeve with flowing wind bars, water swirls, and a moon motif at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-28-bloodline-bali.jpg"),
      alt: "Full back Japanese tattoo with layered Hannya and oni masks, swirling clouds, and geometric asanoha patterns at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-30-bloodline-bali.jpg"),
      alt: "Japanese full sleeve with Hannya mask, katana grip, cracked oni mask, and orange cloud accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-29-58-bloodline-bali.jpg"),
      alt: "Japanese full sleeve with dual Hannya masks, a realistic woman's portrait, dragon scales, and coin beads at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-30-03-bloodline-bali.jpg"),
      alt: "Full back black and grey Hannya mask tattoo with jagged shattered negative space and irezumi cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-12-30-07-bloodline-bali.jpg"),
      alt: "Japanese full sleeve with layered woman's portrait, ghostly upper face, red reaching hand, and stylized red floral motifs at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-27-46-bloodline-bali.jpg"),
      alt: "Full back Japanese tattoo with Hannya face, skull-embellished kabuto, coiled snake, and porcelain crack lines at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-27-54-bloodline-bali.jpg"),
      alt: "Full back black and grey Hannya mask tattoo with a coiled snake across the forehead and irezumi wind filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-28-03-bloodline-bali.jpg"),
      alt: "Matching Japanese full sleeves with woman's portrait, Hannya mask, snake mandala, and stacked oni masks at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-28-10-bloodline-bali.jpg"),
      alt: "Japanese front torso tattoo with central Hannya mask, striking snakes, and mikiri cloud wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-28-18-bloodline-bali.jpg"),
      alt: "Japanese arm tattoo with red-crowned crane, cherry blossoms, stylized waves, and irezumi wind bars at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-28-32-bloodline-bali.jpg"),
      alt: "Full back Japanese tattoo with roaring dragon head, twin Hannya masks, and a samurai silhouette before a pagoda at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-tiger-hanuman-foo-dog-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese-inspired full sleeve with snarling tiger, Hanuman deity, and foo dog in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-dragon-pagoda-landscape-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back tattoo with a fierce dragon head above a pagoda landscape and boat on water at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-dragon-clouds-full-sleeve-bloodline-bali.jpg"),
      alt: "Classic Japanese dragon full sleeve with scaled body, claws, and traditional cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-hannya-red-flames-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full sleeve with armoured samurai, Hannya mask, and red flame accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-woman-hannya-floral-orange-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Neo-Japanese arm sleeve with woman's portrait, dark Hannya mask, and orange-outlined floral motifs at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-four-eyed-woman-dragon-noh-katana-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese surreal arm sleeve with four-eyed woman, dragon headpiece, Noh mask, and katana grip at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-tiger-oni-kabuto-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full back with snarling tiger, ornate kabuto armour, and a large oni mask with braided ropes at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-34-13-bloodline-bali.jpg"),
      alt: "Full back Japanese tattoo with armoured samurai and katana, flanking dragon heads, pagoda, and moon at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-34-23-bloodline-bali.jpg"),
      alt: "Japanese full sleeve with Raijin thunder deity, mitsudomoe drums, and traditional wind and cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-45-49-bloodline-bali.jpg"),
      alt: "Japanese side body tattoo with foo dog on the thigh, peonies across the ribs and hip, and wind bar background at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc("bali", "japanese-tattoo-photo-21-04-25-13-56-23-bloodline-bali.jpg"),
      alt: "Japanese full sleeve with fierce dragon head, foo dog on the forearm, and orange-red cloud accents at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0158-2-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back tattoo with samurai menpo and kabuto, flanking dragon heads with red eyes, and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0339-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back Hannya mask with glowing eyes, sharp fangs, and stylized cloud wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0518-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with snarling dragon head on the upper arm, woman in kabuto on the forearm, and Hannya mask with cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0644-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with fierce samurai menpo gripping a katana and Komainu lion-dog on the forearm amid clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-0813-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back tattoo with shishi head at the neck, ornate samurai menpo and kabuto, and bold geometric fill on the lower back at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1059-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back samurai menpo with kabuto crest, braided ropes, and stylized clouds on a solid black ground at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1223-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back piece with armored samurai, pagoda under a full moon, Hannya mask, and kanji at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1307-bloodline-phuket.jpg"),
      alt: "Japanese chest piece with samurai menpo, gold-accent kabuto, red agemaki knot, and vivid red chrysanthemums at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1555-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back samurai mask with shishi crest, cherry blossoms, and roman numerals at the neckline at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-1638-bloodline-phuket.jpg"),
      alt: "Japanese full-back tattoo with fierce samurai, glowing katana, snarling dragon with red eyes, and red maple leaves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2681-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with samurai biting a katana blade and snarling shishi amid cherry blossoms and clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2837-bloodline-phuket.jpg"),
      alt: "Japanese full leg sleeve with armored samurai holding a katana on the thigh and Hannya mask on the calf amid vibrant red clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2840-bloodline-phuket.jpg"),
      alt: "Japanese full leg sleeve with pagoda, red cherry blossoms, tiger head on the shin, and bold kanji at the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2985-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve blending a woman's portrait with Hannya mask, chrysanthemums, and wind-wave mikiri at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-2986-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with pagoda in the clouds, bold chrysanthemum, and fierce foo dog on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3050-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back with armored samurai, Hannya mask, pagoda in mist, kneeling swordsman, and flowing wind lines at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3216-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with samurai in kabuto and menpo above a fierce Hannya mask amid stylized waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3519-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg tattoo with woman's face through a cracked Hannya mask on the thigh and dragon head on the shin at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3527-bloodline-phuket.jpg"),
      alt: "Japanese black and grey leg sleeve with fierce samurai menpo and kabuto, pagoda, cherry blossoms, and dark sun disc at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3733-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg tattoo with stern samurai portrait in kabuto on the thigh and armored samurai on horseback with pagoda below at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3980-bloodline-phuket.jpg"),
      alt: "Japanese black and grey leg sleeve with dragon head on the thigh and Hannya mask on the shin amid swirling clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3983-bloodline-phuket.jpg"),
      alt: "Japanese black and grey leg sleeve with samurai kabuto and menpo, woman's portrait on the calf, and dragon scales at the ankle amid clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-3993-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back with samurai kabuto and menpo, flanking Hannya masks, dragon head, and cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-4779-bloodline-phuket.jpg"),
      alt: "Japanese full-back Hannya mask with glowing red eyes, horned creature crest, and stylized clouds in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-4919-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with tiger in kabuto on the upper arm, coiled snake on the forearm, and crashing waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5120-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with fierce samurai menpo on the upper arm and detailed dragon head on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5127-bloodline-phuket.jpg"),
      alt: "Japanese black and grey sleeve blending a four-eyed woman's portrait with Hannya horns and a hand gripping the mask's snarling jaw at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-5960-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back Hannya mask with horns, tusks, and ornamental scroll filigree at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6400-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back samurai in mempo and kabuto with dragon crest, flanking dragon heads, and central agemaki rope knot at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6552-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg tattoo with bearded elder in kabuto on the thigh and dragon head with glowing eyes amid bold white wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6554-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg sleeve with snarling foo dog on the thigh and coiled snake on the calf amid clouds and waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6570-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg tattoo with woman's portrait, pagoda, folding fan, Hannya mask, and lightning-like highlights at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6878-bloodline-phuket.jpg"),
      alt: "Japanese full sleeve with fierce phoenix in orange and yellow feathers, glowing red eye, and bold white negative-space bands at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-6884-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with armored samurai in kabuto and horse head accented by orange and yellow feather motifs at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-7831-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back samurai menpo and kabuto with horned Hannya crest framed by high-contrast stylized clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8015-bloodline-phuket.jpg"),
      alt: "Japanese full leg sleeve with snarling tiger, horned oni mask, red lightning bolts, and dragon with glowing red eyes at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8021-bloodline-phuket.jpg"),
      alt: "Japanese black and grey leg sleeve with dragon over the knee, peony on the shin, red lightning streaks, and shrine detail amid wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8025-bloodline-phuket.jpg"),
      alt: "Japanese lower leg tattoo with Hannya mask, red eye accent, blooming peony, and jagged red lightning slashes at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-8211-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full-back with ronin in straw hat and mempo, torii gate and temple stairs, and large kabuto with mounted samurai at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9198-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with dragon head and menpo on the upper arm, scaled body on the forearm, and crashing waves at the wrist at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9201-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full sleeve with Hannya mask, woman's portrait, floral blooms, and dragon head at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc("phuket", "japanese-tattoo-img-9659-bloodline-phuket.jpg"),
      alt: "Japanese black and grey full leg sleeve with kabuto and mempo on the thigh and foo dog amid swirling clouds and water to the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-hannya-clouds-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese black and grey full leg sleeve with a dragon on the thigh and Hannya mask on the shin amid clouds and waves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-mask-foo-dog-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with samurai menpo, dragon head, and foo dog surrounded by wind bars and clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-tiger-peony-lantern-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back irezumi with dragon, tiger, peony, paper lantern, and cherry blossoms in black and grey with red accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-buddha-dragon-pagoda-samurai-kanji-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back piece with Buddha, dragon, Hannya, pagoda, samurai kanji, and diagonal light rays at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-warrior-kabuto-torii-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with kabuto and menpo, torii gate, and armoured samurai warrior in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-buddha-woman-mask-cherry-blossom-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve blending kabuto, serene Buddha head, woman in menpo, and cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-mask-dragon-claw-katana-red-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with samurai menpo, glowing red eyes, dragon claw, katana grip, and Hannya near the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-snake-skull-red-accents-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with Hannya mask, coiled snake, skull on the shin, and vivid red accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-red-eyes-samurai-oni-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with dragon head, glowing red eyes, samurai menpo, and oni mask in neo-irezumi black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-geometric-asanoha-mandala-blackwork-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Geometric blackwork full sleeve with asanoha star, mandala circles, and stippled bands on the arm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-geometric-mandala-dotwork-blackwork-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Geometric mandala and dotwork blackwork full sleeve with bold negative-space bands on the arm at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-horror-faces-spider-hand-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Dark horror realism full sleeve with distorted faces, melting tongue, and spider on the hand in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-realism-rosary-cross-candles-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Dark realism full sleeve with haunted portrait, melting candles, and rosary cross at the wrist in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-snakes-red-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back Hannya mask flanked by snakes with fangs and deep red accents in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-woman-hannya-red-eyes-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with dragon, woman portrait, Hannya with glowing red eyes, and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-pagoda-shishi-cherry-blossom-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with pagoda, arched bridge, shishi lion-dog, and scattered red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dark-occult-goat-woman-graveyard-full-back-bloodline-phuket.jpg",
      ),
      alt: "Dark occult full-back tattoo with Baphomet-style goat, horned woman, and graveyard silhouette framed in flames at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-female-samurai-warrior-red-flowers-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with female samurai in kabuto and menpo above a full-armoured warrior and red floral accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-samurai-cherry-blossom-red-eyes-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with snarling dragon and samurai portrait, both with glowing red eyes and red cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-tiger-hannya-dragon-glowing-eyes-leg-sleeve-bloodline-phuket.jpg",
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
