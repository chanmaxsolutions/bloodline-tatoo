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
        "japanese-tattoo-samurai-kabuto-geisha-dragon-full-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese black and grey full leg sleeve with samurai helmet, menpo, geisha portrait, and dragon at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-hannya-dragon-sakura-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back piece with samurai kabuto, twin Hannya masks, dragon head, and cherry blossoms in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-oni-hannya-red-eyes-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese-inspired full-back tattoo with layered oni or Hannya faces and striking red eyes at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-tiger-kabuto-snake-waves-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with tiger in kabuto, coiled snake, and wave filler in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-kabuto-dragon-forearm-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with samurai kabuto and roaring dragon head to the wrist at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-multi-eye-hand-forearm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Neo-Japanese forearm sleeve blending Hannya mask, multi-eye portrait, and realistic hand in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-mask-scrollwork-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Large Hannya mask full-back tattoo with symmetrical scroll filigree in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-kabuto-dragon-bushido-kanji-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back samurai kabuto with dragon crest, menpo, armour plates, and bushido kanji on the arm at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-portrait-dragon-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with elder samurai portrait, energy swirls, and dragon head toward the ankle at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-foo-dog-snake-wind-bars-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with foo dog, coiled snake, and traditional wind and cloud filler at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-geisha-pagoda-hannya-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese black and grey leg sleeve with geisha portrait, pagoda, and Hannya mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-phoenix-orange-negative-space-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese phoenix arm sleeve with warm orange and red plumage and bold negative-space stripes at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-horse-feather-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese-inspired arm sleeve with samurai in kabuto, horse portrait, and warm feather accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-mempo-oni-clouds-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back tattoo with layered samurai menpo, oni mask, and cloud bands in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-tiger-mask-red-lightning-dragon-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Neo-Japanese leg sleeve with tiger, horned mask, red lightning, and scaled dragon at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-peony-kabuto-red-lightning-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with dragon head, peony bloom, kabuto armour, and red energy streaks at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-chrysanthemum-red-slash-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg tattoo with Hannya mask, chrysanthemums, and vertical red slash accents on blackwork at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-torii-stairs-mempo-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back scene with torii gate, stone stairs, armoured samurai, and menpo on the shoulder at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-mempo-scales-waves-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with dragon head, samurai menpo, scaled body, and wave base at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-peony-woman-hannya-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with dragon, peony blooms, woman portrait, and Hannya toward the wrist at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-kabuto-mempo-foo-dragon-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with kabuto, menpo, foo dog or dragon head, and cloud filler at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-oni-mask-dragon-hex-orange-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Neo-Japanese arm sleeve with oni mask, dragon, and orange geometric honeycomb accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-mempo-oni-masks-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese black and grey leg sleeve with samurai kabuto, stacked oni or Hannya masks, and armour details at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-kabuto-komainu-red-flowers-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with samurai menpo, kabuto, komainu, and red floral accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-mask-peony-woman-shush-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese neo leg sleeve with stylised mask, peony over the knee, and portrait with shushing hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-warrior-scales-hannya-waves-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with warrior portrait, scale patterns, Hannya or oni face, and white-outlined waves at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-orange-dragon-clouds-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese dragon full arm sleeve in saturated orange and black with cloud filler at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-geisha-dragon-katana-waves-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese black and grey leg sleeve with geisha portrait, small dragon, diagonal katana, and wave bands at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-tiger-kabuto-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back composition with dragon head, tiger face, and ornate kabuto in high-contrast black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-shishi-red-flames-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with dragon, shishi, lotus near the ankle, and red flame accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-red-crowned-crane-peony-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with red-crowned crane, deep red peonies, and classic wind and cloud background at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-monkey-king-armour-clouds-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese-inspired leg sleeve with Monkey King portrait, ornate armour, and swirling cloud filler at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-tiger-paws-waves-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with roaring tiger, paws, and traditional wave and wind background at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-koi-red-peony-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with Hannya mask, koi, saturated red peonies, and geometric borders at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-abstract-waves-mask-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese blackwork arm sleeve with swirling waves, mask fragments, and high-contrast negative space at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-geisha-fan-hawk-feathers-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese black and grey leg sleeve with geisha portrait, folding fan, and large hawk wrapping the shin at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-mempo-hannya-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese leg sleeve with samurai in hachimaki and menpo transitioning into Hannya or oni mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-twin-hannya-skull-kali-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Dark Japanese full-back with twin Hannya, skull in kabuto, and multi-arm wrathful figure over skulls at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-layered-faces-red-maple-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Neo-Japanese arm sleeve with layered colour and black-and-grey portraits, red maple accents, and reaching hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-oni-skull-snake-lightning-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back with central oni face, skull crest, coiled snake, and jagged lightning negative space at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-snake-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back Hannya mask with coiled snake and rib-like shading in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-twin-hannya-snake-arm-sleeves-bloodline-bangkok.jpg",
      ),
      alt: "Pair of Japanese black and grey arm sleeves with Hannya, snakes, and mandala accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-hannya-snake-clouds-chest-panel-bloodline-bangkok.jpg",
      ),
      alt: "Japanese chest panel with large Hannya, multiple snakes, and stippled cloud borders at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-red-crowned-crane-sakura-waves-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Japanese forearm piece with red-crowned crane, cherry blossoms, and wave accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-dragon-twin-hannya-pagoda-samurai-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back with dragon head, twin Hannya, pagoda, samurai silhouette, and pine sleeve detail at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-samurai-katana-twin-dragons-moon-full-back-bloodline-bangkok.jpg",
      ),
      alt: "Japanese full-back samurai in armour with katana, twin dragon shoulders, pagoda, and moon at Bloodline Tattoo Bangkok.",
    },
    {
      src: japaneseProofSrc(
        "bangkok",
        "japanese-tattoo-nio-guardian-tomoe-lotus-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Japanese arm sleeve with fierce guardian faces, tomoe crests, and lotus flow in black and grey at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-mask-dragon-cherry-blossoms-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese black and grey full-back irezumi with a central samurai menpo, dragon crest, and red cherry blossoms at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-mask-clouds-hex-pattern-full-back-bloodline-bali.jpg",
      ),
      alt: "Large Hannya mask full-back tattoo framed by swirling clouds and a kikkou hex pattern in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-dragon-samurai-woman-hannya-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full arm sleeve with a roaring dragon, samurai woman in kabuto, and Hannya mask toward the wrist at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-foo-dog-katana-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese black and grey full sleeve with armoured samurai gripping a katana and a snarling foo dog on the forearm at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-kabuto-mempo-geometric-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back piece with ornate kabuto, fierce samurai menpo, and bold geometric lower pattern at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-demon-mempo-ropes-waves-full-back-bloodline-bali.jpg",
      ),
      alt: "High-contrast Japanese full-back tattoo of a demonic samurai menpo with braided ropes and wave bands at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-pagoda-hannya-kanji-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese irezumi full back with armoured samurai, pagoda under a full moon, Hannya mask, and bushido kanji at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-kabuto-chrysanthemum-chest-piece-bloodline-bali.jpg",
      ),
      alt: "Japanese chest piece with samurai kabuto and menpo, red chrysanthemums, and tied sageo rope at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-mempo-shishi-cherry-blossoms-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back tattoo of a samurai menpo with shishi crest, cherry blossoms, and rope detail at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-dragon-maple-leaves-full-back-bloodline-bali.jpg",
      ),
      alt: "Neo-Japanese full back with armoured samurai, snarling dragon head, and red maple leaf accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-sword-mouth-shishi-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese black and grey full sleeve with samurai biting a katana blade and a shishi lion on the forearm at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-hannya-katana-red-clouds-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with samurai portrait, Hannya mask, katana, and red cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-pagoda-cherry-blossoms-tiger-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with pagoda, red cherry blossoms, and a realistic tiger head on the shin at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-geisha-hannya-chrysanthemum-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full sleeve blending a geisha portrait with Hannya mask and chrysanthemum blooms in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-pagoda-chrysanthemum-hannya-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese arm sleeve with pagoda, bold chrysanthemum, and Hannya mask toward the wrist at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-hannya-temple-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back scene with armoured samurai, Hannya mask, temple pagoda, and kneeling warrior at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-hannya-waves-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full sleeve with samurai in kabuto, stacked Hannya masks, and swirling wave filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-woman-portrait-dragon-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with a woman's portrait framed by a Hannya mask and a dragon head on the lower leg at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-mempo-pagoda-cherry-blossom-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with samurai menpo and kabuto, pagoda, and cherry blossom accents at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-portrait-horseback-pagoda-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full leg tattoo with samurai portrait on the thigh and a mounted warrior before a pagoda below at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-dragon-hannya-chrysanthemum-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese black and grey leg sleeve with roaring dragon head, Hannya mask, and chrysanthemum cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-katana-pagoda-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with samurai holding a vertical katana and a pagoda scene on the lower leg at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-dragon-hannya-samurai-pagoda-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full back with central dragon head, twin Hannya masks, and a samurai before a pagoda at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-snake-skull-shattered-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back tattoo with a cracked Hannya mask, coiled snake, and skull crest in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-onna-musha-hannya-cherry-blossoms-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full back featuring an onna-musha in kabuto holding a Hannya mask with cherry blossoms at Bloodline Tattoo Bali.",
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
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-mempo-kabuto-katana-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full sleeve with samurai menpo, kabuto helmet, knotted rope, and katana hilt at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-noh-tengu-masks-cherry-blossoms-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full leg sleeve with Noh and Tengu masks woven through cherry blossoms and cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-masks-asanoha-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full back with layered Hannya masks and asanoha geometric patterns in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-woman-oni-coins-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with Hannya mask, woman's portrait, oni face, and traditional coin motifs at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-tiger-snake-chrysanthemum-full-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full sleeve with roaring tiger, coiled snake, and chrysanthemum blooms in black and grey at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-woman-red-black-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Neo-Japanese full leg sleeve with red-toned woman's face merging into a Hannya mask and bold black wave bands at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-four-eyed-geisha-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese leg sleeve with samurai kabuto and menpo above a surreal four-eyed geisha portrait at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-dragon-hannya-scales-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Japanese full leg tattoo with detailed dragon head and Hannya mask connected by scaled cloud filler at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-mempo-skull-red-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Neo-Japanese leg sleeve with red and black samurai menpo, kabuto, and stylised skull at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-samurai-kabuto-torii-gate-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full back with komainu crest, samurai kabuto and menpo, and a torii gate scene at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-snake-coiled-full-back-bloodline-bali.jpg",
      ),
      alt: "Japanese full-back irezumi with a large Hannya mask and a snake coiled across the shoulders at Bloodline Tattoo Bali.",
    },
    {
      src: japaneseProofSrc(
        "bali",
        "japanese-tattoo-hannya-snakes-full-torso-front-bloodline-bali.jpg",
      ),
      alt: "Japanese front torso tattoo with a central Hannya mask intertwined with multiple snakes from chest to stomach at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
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
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-tiger-diagonal-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back tattoo with large Hannya mask, snarling tiger head, and sharp diagonal architectural lines at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-cherry-blossom-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with winding dragon and vibrant red cherry blossoms against dark mikiri clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-mask-katana-cherry-blossom-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with samurai menpo in kabuto, hand on katana hilt, and cherry blossoms in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-four-eyed-woman-serpent-headdress-skull-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese leg sleeve with four-eyed woman in serpent headdress, cracked mask, and skull above the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-dragon-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with Hannya mask above a fierce dragon head and cloud filler to the wrist at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-hannya-glowing-eyes-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve pairing samurai menpo with Hannya mask, scales, and glowing white eyes at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-wind-bars-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese black and grey full leg sleeve with detailed dragon head, scales, and traditional wind bars from thigh to ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-dragon-gorilla-hand-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with samurai menpo, dragon head on the forearm, and roaring gorilla on the hand amid irezumi clouds at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-samurai-pagoda-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back tattoo with dragon head above samurai silhouette and pagoda in high-contrast black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-green-dragon-wind-bars-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese colour full sleeve with vibrant green dragon, red accents, and traditional wind bars at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-noh-mask-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve contrasting fierce Hannya mask with serene Noh woman face amid clouds and sakura at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-kabuto-rope-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with samurai menpo, ornate kabuto, braided rope, and dark irezumi shading to the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-phoenix-red-accents-sleeve-chest-bloodline-phuket.jpg",
      ),
      alt: "Japanese phoenix full sleeve onto the chest with black and grey feathers and striking red flame accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-phoenix-red-accents-sleeve-chest-bloodline-phuket.jpg",
      ),
      alt: "Japanese dragon and phoenix full sleeve extending onto the chest with red accent flames at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-hannya-mikiri-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with dragon on the thigh and Hannya on the shin linked by dark mikiri shading at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-woman-chrysanthemum-hannya-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full leg sleeve with woman portrait in chrysanthemums and Hannya mask on the shin with kanji detail at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-woman-third-eye-red-mask-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Neo-Japanese full sleeve with woman's face, third eye, red Hannya mask, and swirling white ribbon bands at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-female-samurai-hannya-shishi-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back portrait of a female samurai in kabuto holding Hannya mask with shishi crest and cherry blossoms at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-samurai-kabuto-torii-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back piece with shishi crest, kabuto and menpo, and lone figure at a torii gate extending into sleeves at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-skull-wind-bars-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with skull amid stylised wind bars, clouds, and high-contrast negative space at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-oni-masks-asanoha-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back composition with central Hannya, profile oni mask, asanoha patterns, and cloud filler at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-katana-orange-clouds-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with Hannya, cracked mask with red sun, katana grip, Buddha face, and orange cloud accents at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-woman-coins-scale-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese sleeve with Hannya, pierced woman portrait, coin strings, and dragon scale background in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-hannya-geometric-shatter-full-back-bloodline-phuket.jpg",
      ),
      alt: "Japanese full-back Hannya mask with jagged geometric shatter lines and glowing eyes in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-shishi-peony-side-torso-hip-bloodline-phuket.jpg",
      ),
      alt: "Japanese side torso and hip tattoo with shishi lion-dog, peonies, and cloud waves in black and grey at Bloodline Tattoo Phuket.",
    },
    {
      src: japaneseProofSrc(
        "phuket",
        "japanese-tattoo-dragon-foo-dog-lotus-orange-clouds-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Japanese full sleeve with dragon, foo dog head, lotus, and orange-red cloud accents at Bloodline Tattoo Phuket.",
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
