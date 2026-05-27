import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type ColourStudioRegion = "bangkok" | "bali" | "phuket";

const colourImageRoot = "/images/tattoo-styles/colour";

function isColourStudioRegion(studio: TattooStyleStudioRegion): studio is ColourStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function colourProofSrc(studio: ColourStudioRegion, filename: string): string {
  return `${colourImageRoot}/${studio}/proof/${filename}`;
}

const colourStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Japanese colour full-back samurai tattoo with saturated reds and greens in a Bloodline Tattoo Bangkok studio hero image",
    approachAlt:
      "Japanese colour leg tattoo with red Tengu mask, blue tassels, and wind bars at Bloodline Tattoo Bangkok",
    cardAlt:
      "Japanese colour leg sleeve with samurai helmet, tiger, and orange cloud swirls at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Japanese colour chest and arm tattoo with green dragon, red Hannya mask, and cherry blossoms at Bloodline Tattoo Bali",
    approachAlt:
      "Full-leg colour tattoo with Greek god portrait, snake, and red lightning accents at Bloodline Tattoo Bali",
    cardAlt:
      "Colour realism fox sleeve with blue eyes, magenta peonies, and diagonal skin breaks at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Japanese colour leg sleeve with orange Hannya mask and black-and-grey waves at Bloodline Tattoo Phuket",
    approachAlt:
      "Colour leg tattoo with twin red Japanese masks and ornamental black-and-grey shading at Bloodline Tattoo Phuket",
    cardAlt:
      "Japanese colour leg sleeve with geisha in blue kimono, chrysanthemums, and wind bars at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  ColourStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const colourProofPoolsByStudio: Record<ColourStudioRegion, readonly TattooStyleDetailProofImage[]> =
  {
    bangkok: [
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-japanese-pagoda-tiger-cherry-blossoms-full-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A full leg sleeve in black and grey with vivid red cherry blossoms, a Japanese pagoda, and a realistic tiger with a magnified eye detail, finished in a bold colour-accent style at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-owl-eye-skull-gothic-tower-thigh-bloodline-bangkok.jpg",
        ),
        alt: "A vibrant colour realism thigh piece with a large owl eye, feathers, a human skull, and a gothic tower against warm flame-like tones, inked at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-day-of-dead-portrait-gun-rose-devil-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A saturated full arm sleeve pairing a Dia de los Muertos style portrait with a handgun, a colour rose, and a bold devil face plus sunburst background, crafted at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-woman-profile-sun-quote-forearm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A high-impact colour tattoo on the arm featuring a woman's profile beside a blazing sun motif and typography about fear versus courage in an illustrative palette, done at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-dragon-ball-anime-cast-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "An anime-inspired full arm sleeve layering multiple Dragon Ball characters in punchy saturated colour and clean line work at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-dragon-ball-trunks-sword-dragon-ball-inner-forearm-bloodline-bangkok.jpg",
        ),
        alt: "A manga-style inner forearm colour tattoo of Future Trunks with his sword and a four-star Dragon Ball amid lightning and aura effects, healed and photographed at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-cracked-marble-face-demon-fire-mandala-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A dark surreal full sleeve mixing a cracked statue-like face, a snarling creature, swirling red-orange energy and a geometric mandala shoulder cap in cinematic colour realism at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-traditional-japanese-koi-peony-full-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A classic irezumi full leg sleeve with bold outlines, saturated orange chrysanthemums or peonies and a vivid red koi against black-grey cloud filler, tattooed at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-zeus-lightning-snake-smiling-portrait-full-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A dramatic full leg tattoo with glowing red lightning, a bearded deity portrait, coiled snake and sinister female face in black-and-grey with intense red colour pops at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-japanese-glowing-hannya-snake-sword-grasp-full-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A neo-Japanese colour leg sleeve centring an orange-lit Hannya mask with a descending snake and a realistically shaded hand gripping a sword hilt, completed at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-red-hannya-tiger-peony-rope-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A cohesive full arm sleeve marrying deep purple blooms, rope accents, a fierce red Hannya or oni motif and a snarling tiger near the wrist in punchy japanese-inspired colour work at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-cracked-noh-mask-rising-sun-disks-full-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A full leg tattoo of twin cracked porcelain-inspired masks accented by stark red circular rising-sun motifs and orange cloud flourishes over heavy black swirl filler, tattooed at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-hannya-katana-calm-mask-orange-cloud-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A Japanese narrative leg sleeve with a dominant Hannya, an upright katana held in hand and flowing orange clouds plus a quieter mask near the ankle, executed in saturated colour contrasts at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-armoured-japanese-samurai-waves-full-back-bloodline-bangkok.jpg",
        ),
        alt: "A large full-back japanese armour piece bursting with reds, greens and metallics depicting a roaring samurai over stylised clouds and swirling waves below the waist, done at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-woman-portrait-sunburst-mandala-red-orbit-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A realism-led full leg tattoo with soft greyscale portraiture, honeycomb geometry, a radiating knee mandala and vivid red illustrative wings or energy arcs in a standout colour-accent style at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-egyptian-queen-collar-anubis-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A narrative full sleeve from ornate Egyptian royalty with jewelled collar and hieroglyphic motifs down to a detailed Anubis on the inner forearm, rendered with rich tonal colour at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-traditional-japanese-tiger-peony-wave-full-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A bold irezumi full sleeve with a roaring striped tiger intertwined with saturated red blossoms and smoky wave filler showcasing classic colour japanese tattooing at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-dragon-foo-dog-orange-cloud-wave-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A black-and-grey sleeve accented by luminous orange clouds, pairing an open-jaw dragon at the shoulder with a guardian lion or foo dog focal point on the forearm, inked at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-samurai-kabuto-woman-skull-oni-red-swirl-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A twin-angle showcase of a full leg narrative melding ornate kabuto armour, expressive female portrait anatomy, skull study and fiery oni-mask energy in saturated red monochrome colour at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-surreal-woman-circular-eye-ribbon-stripes-arm-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "An atmospheric surrealist full sleeve layering a woman's face with warm red highlights, a luminous circular eye motif and winding ribbon negatives for depth, healed at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-biomech-skull-luminous-orange-hex-leg-sleeve-bloodline-bangkok.jpg",
        ),
        alt: "A dark biomechanical-inspired full leg tattoo with anatomical skull, recessed realistic eye peeking from shadow skeletal forms and glowing orange honeycomb framing, finished at Bloodline Tattoo Bangkok.",
      },
    ],
    bali: [
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-myth-warrior-greek-key-glowing-accents-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Dark realism colour tattoo sleeve with roaring warrior faces, a red Greek key band, and glowing orange-red energy sweeping from shoulder to hand at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-realism-boy-portrait-burning-house-eye-full-leg-bloodline-bali.jpg",
        ),
        alt: "High-contrast colour realism leg piece with a shushing child portrait, a vivid red eye, and a house in flames from thigh to ankle at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-dragon-hannya-mask-waves-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Bold Japanese colour sleeve pairing a blue dragon with a green Hannya mask, waves, and floral accents in saturated blues, greens, and reds at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-blue-dragon-purple-peony-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Traditional Japanese colour tattoo sleeve with a bright blue scaled dragon, purple peony, and wind-and-wave background on the outer arm at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-phoenix-sun-maple-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Vibrant Japanese-style phoenix in teals, oranges, and reds wrapping a full leg from hip to ankle with cloud shading and maple touches at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-death-row-records-portraits-red-type-full-leg-bloodline-bali.jpg",
        ),
        alt: "Full-leg black-and-grey portrait work with bold red Death Row lettering and stacked hip-hop portraits from thigh to ankle at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-samurai-warrior-hannya-red-clouds-full-leg-bloodline-bali.jpg",
        ),
        alt: "Japanese leg sleeve with a detailed samurai bust, a lower Hannya mask, and saturated red cloud fill against black-and-grey realism at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-snake-hannya-peony-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Colour Japanese leg sleeve with a blue serpent, red Hannya mask, and peony blooms framed by black-and-grey wind bars at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-split-portrait-circuit-lines-japanese-seal-full-arm-bloodline-bali.jpg",
        ),
        alt: "Colour realism arm sleeve with a dual-tone woman’s portrait, teal circuit-style lines, and a red seal with script on a solid black field at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-biomech-robot-face-red-plating-teal-circuits-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Biomechanical colour sleeve mixing a robotic skull, glossy red panels, and glowing teal circuit trails from shoulder to wrist at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-tengu-mask-tassels-calf-piece-bloodline-bali.jpg",
        ),
        alt: "Bold Japanese colour tattoo on the lower leg featuring a vivid red long-nose Tengu mask with blue accents and classic background shading at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-egyptian-anubis-blue-energy-tear-full-leg-bloodline-bali.jpg",
        ),
        alt: "Black-and-grey Egyptian realism leg sleeve with Anubis, a ripped blue-energy reveal, and mythic detailing from thigh to ankle at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-woman-warrior-headdress-blue-feathers-full-leg-bloodline-bali.jpg",
        ),
        alt: "Colour realism full leg with an armoured portrait, striking blue helmet-metal highlights, and flowing feather motifs at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-classical-bearded-god-column-red-lightning-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Mythological leg sleeve blending classical statue portraiture, column architecture, Greek key bands, and hot red lightning accents at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-dual-portrait-teal-data-lines-red-disk-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Futuristic colour sleeve contrasting a luminous red portrait with greyscale realism, mint data lines, and a red medallion motif at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-realistic-tiger-female-eyes-orange-ribbon-lotus-sleeve-bloodline-bali.jpg",
        ),
        alt: "Dynamic colour realism arm sleeve with an orange tiger head, haunting greyscale eyes on repeat, swirling orange ribbons, and a lotus at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-biomech-leg-sleeve-red-coil-springs-three-views-bloodline-bali.jpg",
        ),
        alt: "Biomechanical lower-leg sleeve shown from multiple angles, with chrome machinery and vivid red coil springs for a 3D mechanical look at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-surreal-woman-skull-red-leaf-fragment-eyes-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Surreal black-and-grey sleeve with a detailed woman’s face, skull, red foliage, and fragmented eye portraits for a trash-polka feel at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-pennywise-clown-playing-cards-dice-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Horror colour realism full sleeve with a detailed evil clown portrait above falling aces, dice, and smoky filler on the forearm at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-cobra-peony-red-clouds-full-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Neo-Japanese colour sleeve with a striking hooded snake, large peony, and fiery red-orange cloud patterns from shoulder to wrist at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc(
          "bali",
          "colour-tattoo-japanese-teal-snake-geisha-face-red-patterns-full-leg-bloodline-bali.jpg",
        ),
        alt: "Full-leg Japanese colour piece mixing a teal serpent, dramatic geisha-style portrait, and bold red patterning on deep black at Bloodline Tattoo Bali.",
      },
    ],
    phuket: [
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-statue-faces-glowing-eyes-red-ornament-full-arm-hand-bloodline-phuket.jpg",
        ),
        alt: "Full arm and hand colour tattoo with stone-like faces, glowing orange eyes and deep red ornamental filigree in a high-contrast illustrative style, healed work from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-shark-sea-turtle-clownfish-scuba-diver-ocean-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Full arm ocean colour realism sleeve with a shark, sea turtle, clownfish on coral, and a scuba diver in saturated blues, finished at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-jellyfish-clownfish-shipwreck-underwater-forearm-bloodline-phuket.jpg",
        ),
        alt: "Colour realism forearm tattoo of an underwater scene with a pink jellyfish, clownfish, and detailed shipwreck in rich blues, crafted at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-green-tree-python-monstera-palm-upper-arm-bloodline-phuket.jpg",
        ),
        alt: "Vibrant colour tattoo of a realistic green snake coiled among tropical palm and monstera leaves across the outer upper arm, by Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-hooded-reaper-eclipse-oni-mask-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Dark fantasy full sleeve colour tattoo with a hooded skeletal figure, glowing eclipse-like centre, and a horned oni-style mask with saturated red-orange highlights at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-rainbow-lorikeets-bottlebrush-wattle-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Full arm colour realism sleeve pairing two lorikeets with bottlebrush blooms, wattle, and teal foliage on a cohesive dark green backdrop, tattooed at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-cracked-stone-face-glowing-orange-red-forearm-bloodline-phuket.jpg",
        ),
        alt: "Forearm tattoo mixing grey cracked stone realism with luminous orange and red abstract light, a bold colour-accented piece from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-zeus-lightning-spartan-warrior-mask-hand-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Greek mythology full sleeve extending onto the hand: Zeus with red lightning, Greek key band, armoured warrior, and a cracked mask with warm accents, in black, grey and colour pops at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-red-fox-magenta-flowers-scratch-marks-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Full arm colour realism of a fox with vivid blue eyes, magenta florals and stylised claw marks slicing the composition, healed results from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-samurai-helmet-tiger-geisha-orange-ribbons-full-leg-bloodline-phuket.jpg",
        ),
        alt: "Full leg tattoo blending a samurai kabuto, a colour tiger portrait, layered female faces and sweeping orange ribbons in a dramatic colour-heavy leg sleeve at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-zeus-serpent-snake-eye-greek-pattern-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Composite view of a full arm Greek mythology tattoo with thunder, serpentine forms, figurative portrait work and saturated red accents in a cinematic colour-realism mix at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-egyptian-crown-sobek-crocodile-hieroglyphs-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Full sleeve Egyptian-inspired colour realism with ornate headdress details, deity-like imagery, crocodilian forms and engraved stone texture, accented in electric blues at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-surreal-double-woman-portrait-red-flowers-full-arm-bloodline-phuket.jpg",
        ),
        alt: "Surreal full arm piece layering black-and-grey and full-colour sections of a woman’s portrait with crimson florals and ribbon-like whites, standout colour tattooing at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-little-mermaid-ariel-flounder-sebastian-calf-leg-bloodline-phuket.jpg",
        ),
        alt: "Bright illustrative colour tattoo on the lower leg of Ariel underwater with Flounder, Sebastian and trident motifs, bubbly saturated animation-style ink from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-realistic-tiger-face-jungle-forearm-bloodline-phuket.jpg",
        ),
        alt: "Detailed colour realism tiger portrait wrapping the forearm, with vivid orange stripes, soft pink accents and leafy greens, showcased work from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-geisha-fan-cherry-blossom-chrysanthemum-full-leg-japanese-bloodline-phuket.jpg",
        ),
        alt: "Japanese-style full leg colour tattoo with a kimono-clad woman, folding fan and dense sakura and kiku blooms amid wind bars and clouds, executed at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-glitch-woman-face-red-flowers-black-hand-full-leg-bloodline-phuket.jpg",
        ),
        alt: "Full leg surreal colour tattoo slicing a woman’s portrait into graphic planes with fiery oranges, red botanicals and a stylised clawed hand descending the shin, booked at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-woman-portrait-pink-lotus-hannya-orange-swirls-full-leg-bloodline-phuket.jpg",
        ),
        alt: "Full leg composition pairing a soft portrait and lotus-like florals with a dramatic Hannya mask and sweeping orange graphic lines in refined colour realism at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-tiger-helmet-women-faces-lotus-orange-swirls-arm-bloodline-phuket.jpg",
        ),
        alt: "Full sleeve colour tattoo centred on a helmeted tiger, multiple feminine portraits, a white lotus and energetic orange flourishes on a deep black field, from Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-red-hannya-woman-portrait-japanese-full-leg-bloodline-phuket.jpg",
        ),
        alt: "Bold red-and-black Japanese leg sleeve with a fierce Hannya mask, a realistic woman’s face and traditional cloud and pattern fills, saturated colour work at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc(
          "phuket",
          "colour-tattoo-volcano-hooded-figure-wizard-portrait-full-leg-bloodline-phuket.jpg",
        ),
        alt: "Epic fantasy full leg colour tattoo with molten landscape, a silhouetted hooded figure before a glowing ring, and a long-bearded wizard portrait plus geometric ankle banding, done at Bloodline Tattoo Phuket.",
      },
    ],
  };

function getColourStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof colourStudioMediaByRegion)["bangkok"],
): string {
  if (!isColourStudioRegion(studio)) {
    return colourStudioMediaByRegion.bangkok[slot];
  }

  return colourStudioMediaByRegion[studio][slot];
}

function getColourProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isColourStudioRegion(studio)) {
    return [];
  }

  return colourProofPoolsByStudio[studio];
}

export {
  colourProofPoolsByStudio,
  colourStudioMediaByRegion,
  getColourProofPoolForStudio,
  getColourStudioMediaAlt,
};
