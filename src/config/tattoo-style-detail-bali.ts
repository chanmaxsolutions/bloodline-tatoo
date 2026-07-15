import type { TattooStyleDetailContent, TattooStyleFaqItem } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";

const BOOKING_FAQ_ANSWER =
  "Drop us a message on WhatsApp, Instagram or Facebook. Our team will get you everything you need and make sure you're in the right hands from day one.";

const FAQ_SECTION_DESCRIPTION =
  "Straight answers to the questions we get asked most, so you're ready before you reach out.";

const RELATED_STYLES_HEADING = "EXPLORE OTHER STYLES";

const APPROACH_COLUMN_LABELS = ["Our Approach", "Ideal for", "Session structure"] as const;

const SHARED_SESSION_BULLETS = [
  "Consultation to understand your vision and present a design that's uniquely yours, approved before anything begins",
  "Stencil applied, design confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
  "Leave with full aftercare guidance and ongoing support through the healing process",
] as const;

function relatedStylesDescription(styleLabel: string): string {
  return `Not sure ${styleLabel} is the one? Browse our other styles and find what speaks to you.`;
}

function proofDescription(styleLabel: string): string {
  return `The work speaks for itself. Browse our recent ${styleLabel} pieces below.`;
}

const realismFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "realism-healing-sessions",
    question: "How many sessions does realistic work usually need?",
    answer:
      "It depends entirely on the size and detail of your piece. Smaller work can often be completed in a single session, while larger, more intricate pieces will require multiple sittings. Whatever the scope, we work at a pace that puts the quality of the result first, never rushed, always done properly. Reach out and we'll give you a clear picture of what your idea will take.",
  },
  {
    id: "realism-references",
    question: "What references should I bring for a realism tattoo?",
    answer:
      "High resolution photos with clear light and shadow work best, avoid heavily filtered or blurred images. Your references are a starting point, not a final brief. During consultation we'll review everything together, offer suggestions and rebuild the concept into something that actually works on skin. If you've been inspired by AI generated designs, bring them in but understand that these are often built around impossible details and don't translate directly to a tattoo. We'll use them as a guide and create something real from the idea behind them.",
  },
  {
    id: "realism-longevity",
    question: "Will fine detail in realism hold after healing?",
    answer:
      "Yes, when it's planned properly. We build every piece with long term readability in mind, not just how it looks fresh. Very small placements with dense micro-detail can soften over time, and we'll be upfront about that during consultation so you go in with the right expectations for your size and placement.",
  },
  {
    id: "realism-placement",
    question: "Which placements work best for black and grey realism?",
    answer:
      "The whole body works well for realism, and we've tattooed all of it. The key is understanding how to use each surface properly. On the arms and legs, we keep the main subjects centered on the flat faces of the limbs, where they're most visible and age the best. For larger pieces, we'll run the design from top to bottom with intention, no fillers, no clutter, just the work flowing through the placement naturally. For full backs, chests and stomachs, you've got a generous flat canvas. We'll always work with you to plan something that makes the most of the space, whether that's one bold centrepiece or a considered composition that fills the surface. Our job is to make sure whatever you choose reads beautifully and holds its impact over time. Most clients come to us for full pieces, full arms, full legs, full backs. We'll always plan the placement so that wherever you are and whatever angle someone sees it from, it looks exactly as it should.",
  },
  {
    id: "realism-booking",
    question: "How do I book a realism consultation?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

const japaneseFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "japanese-scale",
    question: "Do I have to commit to a full sleeve or bodysuit for Japanese work?",
    answer:
      "Not at all. We work at any scale, though most clients who come to us are after something large. Whatever you have in mind, we'll always plan with the bigger picture in mind so everything sits well and leaves room to grow if you want it to. There are no limitations on what we can do.",
  },
  {
    id: "japanese-background",
    question: "How important is background in Japanese tattooing?",
    answer:
      "The background is as important as the subject itself. Wind bars, waves and fill elements aren't decoration, they balance the piece, guide the eye and give the whole composition its flow. We plan the background from the very start as part of the design, not something we figure out once the main subject is done.",
  },
  {
    id: "japanese-timeline",
    question: "How long do large Japanese projects take?",
    answer:
      "It depends entirely on the scale and complexity of your piece. Whatever you're planning, reach out and we'll give you a clear picture of what's involved from the very first conversation.",
  },
  {
    id: "japanese-motifs",
    question: "Can I choose traditional motifs like koi, dragon, or samurai?",
    answer:
      "Absolutely, and the list doesn't stop there. Japanese tattooing is one of the most creative and expansive styles there is, the subject matter is endless. If you have something specific in mind, bring it. If you want something unique, come and talk to our artists and let them create something special for you. And if you love your dragons, there's a reason they're classics.",
  },
  {
    id: "japanese-booking",
    question: "How do I start a Japanese tattoo consultation?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

const colourFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "colour-healing",
    question: "How do you keep colour vibrant after healing?",
    answer:
      "Palette hierarchy, contrast separation, and paced saturation matter more than day-one brightness. We plan passes around how skin in your placement takes pigment.",
  },
  {
    id: "colour-skin-tone",
    question: "Will colour suit my skin tone?",
    answer:
      "Colour works across all skin tones. During consultation we'll advise on what palette will work best for you, what will hold clearly over time and make sure you go in with the right expectations before anything goes on your skin.",
  },
  {
    id: "colour-cover",
    question: "Can colour cover older or dark tattoos?",
    answer:
      "Colour is actually one of the best tools for cover up work. Unlike black and grey which relies on negative space to define detail, colour allows for full coverage, giving us more to work with when building over existing ink. That said, there's a lot to consider, the existing tattoo, the scale, the right imagery and palette. Come and talk to us and we'll give you an honest assessment of what's possible and what will work best for your skin.",
  },
  {
    id: "colour-aftercare",
    question: "Is aftercare different for colour work?",
    answer:
      "The fundamentals are exactly the same as any other tattoo. What you can expect with colour is that the healing process may take a little longer. More coverage means more ink in the skin and more for your body to work through. Everything will settle, it just might take a bit more time than you're used to with black and grey.",
  },
  {
    id: "colour-booking",
    question: "How do I book colour tattoo work?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

const portraitFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "portrait-likeness",
    question: "How do you protect likeness in portrait tattoos?",
    answer:
      "It starts with the reference. The better the image, the better the result. From there it's about understanding facial structure, getting the expression right and building the tonal values that make a face feel real on skin rather than just look like a photo.",
  },
  {
    id: "portrait-memorial",
    question: "Can you tattoo a memorial or family portrait?",
    answer:
      "Absolutely, and we treat these pieces with the weight they deserve. We'll go through your references together in consultation, talk honestly about what will work and make sure the result is something you're proud to carry for life.",
  },
  {
    id: "portrait-sessions",
    question: "Are portrait tattoos completed in one session?",
    answer:
      "It depends entirely on the scale and complexity of the piece. Whatever you're planning, reach out and we'll give you a clear picture of what's involved from the very first conversation.",
  },
  {
    id: "portrait-aging",
    question: "How will a portrait tattoo age on skin?",
    answer:
      "When it's planned and executed properly, a portrait tattoo ages beautifully. We build every piece with the long term in mind, choosing placement, contrast and tonal values that hold their integrity well beyond the healing stage.",
  },
  {
    id: "portrait-booking",
    question: "What should I send before booking portrait work?",
    answer:
      "The best reference photos you have, clear and high resolution from as many angles as possible. Let us know your intended placement and the rough scale you have in mind. Drop us a message on WhatsApp, Instagram or Facebook and our team will take it from there.",
  },
];

const mandalaFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "mandala-placement",
    question: "Which body areas suit mandala and geometric work best?",
    answer:
      "Honestly, this style works across the whole body. We've done full body mandala work and it translates beautifully everywhere. What matters more than placement is scale. A mandala needs room to breathe, the bigger the canvas, the more impact it has. We'll always advise on the right scale for your chosen placement to make sure you get the best possible result.",
  },
  {
    id: "mandala-size",
    question: "Do mandala designs need to be large?",
    answer:
      "Not necessarily, but scale does matter with this style. Smaller pieces can lose the fine detail and precision that makes geometric work special. We'll always be honest with you about what will work at your chosen size and placement so you get a result worth wearing.",
  },
  {
    id: "mandala-symmetry",
    question: "How do you ensure symmetry on curved skin?",
    answer:
      "This is where experience counts. We map centre points and check stencil alignment directly on the body before a single line is drawn. What looks symmetrical on paper doesn't always translate to curved skin, so we engineer the symmetry around your anatomy specifically.",
  },
  {
    id: "mandala-healing",
    question: "Will fine lines in mandala work blur over time?",
    answer:
      "All tattoos change over time, and fine line geometric work is no different. We plan line weight and spacing with longevity in mind and we'll always be upfront during consultation if certain details in high movement areas are likely to soften. No surprises, just honest advice.",
  },
  {
    id: "mandala-booking",
    question: "How do I book a mandala tattoo?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

/**
 * Chicano FAQ slot 2: Word brief labelled CURRENT as greywash but REPLACE WITH
 * answers "How creative can you get with the Chicano style?" — use that Q/A.
 */
const chicanoFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "chicano-script",
    question: "Can you tattoo script and lettering in Chicano style?",
    answer:
      "Absolutely. Script and lettering are a core part of the Chicano tradition. We draft every piece for legibility on skin, testing stroke weight and spacing at the actual placement so it reads cleanly and holds well over time.",
  },
  {
    id: "chicano-creative",
    question: "How creative can you get with the Chicano style?",
    answer:
      "Very. While Chicano has its roots in a specific culture and tradition, the themes and imagery it can incorporate are vast. Religious iconography, portraits, street culture, western influences, animals, lettering, symbolism, it all fits under this umbrella. If you have a concept in mind, bring it to us and we'll find a way to make it work within the style.",
  },
  {
    id: "chicano-narrative",
    question: "Can Chicano work combine portraits and symbolism?",
    answer:
      "Absolutely, and it's one of the things that makes this style so compelling. Portraits, script, symbolic imagery and open space can all coexist in one piece when the composition is planned properly. We make sure everything works together as one unified narrative rather than a collection of separate elements.",
  },
  {
    id: "chicano-scale",
    question: "What size works best for Chicano black and grey?",
    answer:
      "It depends entirely on what you're looking to include. Script, portraits and full narrative scenes all need room to breathe and read clearly. We'll work through the scale with you in consultation and make sure whatever you choose holds its detail and atmosphere over time.",
  },
  {
    id: "chicano-booking",
    question: "How do I book Chicano-style work?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

/**
 * Healed FAQ slot 4: Word brief CURRENT mistakenly showed the Bali-specific Q.
 * REPLACE WITH is "What should I look for when browsing the healed gallery?".
 */
const healedFaqItems: readonly TattooStyleFaqItem[] = [
  {
    id: "healed-why",
    question: "Why does Bloodline show healed tattoo photos?",
    answer:
      "Because we're proud of what our work looks like after time. The healed gallery shows you exactly what you're getting, not just how a piece looks on the day but how it holds once the skin has fully settled. It's also a testament to the clients who trust us enough to come back and share their results.",
  },
  {
    id: "healed-timing",
    question: "How long after a tattoo is it considered healed?",
    answer:
      "Surface healing and full settle are two different things. Skin can look healed within a few weeks but the tattoo continues to settle beneath the surface for months. We document our healed work once enough time has passed to genuinely judge the long term result, not just the initial recovery.",
  },
  {
    id: "healed-styles",
    question: "Which styles appear in the healed gallery?",
    answer:
      "All styles are represented. Realistic, portrait, Japanese, colour, mandala and Chicano, the gallery covers the full range of what we do and how each style holds across different placements over time.",
  },
  {
    id: "healed-look-for",
    question: "What should I look for when browsing the healed gallery?",
    answer:
      "A few things. First, look at the consistency, smooth, even shading with no patchiness where areas should be solid. Second, look at the contrast. A well executed tattoo should still hold strong contrast after healing, not fade into the skin like it's years old within a few months. We intentionally work slightly darker knowing the skin will lighten the result during healing, so what you see in the healed gallery is the target, the contrast and tone you can expect to wear long term. Use it as your benchmark before you book.",
  },
  {
    id: "healed-booking",
    question: "How do I book after reviewing the healed gallery?",
    answer: BOOKING_FAQ_ANSWER,
  },
];

const baliTattooStyleDetailOverrides: Partial<
  Record<TattooStyleSlug, Partial<TattooStyleDetailContent>>
> = {
  realism: {
    metaDescription:
      "Realistic tattoos in Bali at Bloodline. Portrait depth, tonal control and careful consultation for longer-stay visitors and travellers. Appointment only.",
    lead: "Realism is one of the most versatile styles in tattooing and at Bloodline Tattoo Bali, we have a team of specialists built to cover every corner of it. Whatever you want brought to life, we have the artist for it.",
    overview: [
      "Realism covers more ground than most people realise. Animals, portraits, mythology, architecture, the spiritual, the cinematic, any image you've ever wanted permanently on your skin, realism is how you make it breathe.",
      "At Bloodline Tattoo Bali, we have a roster of artists who have dedicated themselves to this style, each with their own speciality, their own strengths and their own body of work that proves it. People fly in from around the world for pieces like this. Large scale, deeply detailed, built to last. The kind of work that stops people in the street.",
      "Tell us what you've always wanted and we'll put you with the artist who was made for it.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "Every piece is planned around your reference, your placement and how it'll sit on your body",
      "Light, depth and tone are all considered before we touch the skin",
      "Every pass is made with the long term result in mind, not just how it looks on the day",
    ],
    idealForBullets: [
      "Any image, scene or subject you want brought to life on skin",
      "Pieces that demand depth, dimension and fine detail",
      "Large scale pieces where placement and flow across the body matters",
    ],
    sessionBullets: [
      "Consultation to understand your vision and present a design that's uniquely yours, approved before anything begins",
      "Stencil applied, design confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
      "Leave with full aftercare guidance and ongoing support through the healing process",
    ],
    approachHeadline: "WHY REALISM",
    approachIntro:
      "There's a reason realism is one of the most sought after styles in tattooing. It's personal. It's the closest you can get to wearing something that truly means something, a person, a place, a moment, an image that lives with you permanently. No abstraction, no interpretation. Just the real thing, on your skin, executed at the highest level. Browse the portfolio and see what our artists are capable of. Then come and let us make yours.",
    proofDescription: proofDescription("realism"),
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("realism"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: realismFaqItems,
  },

  japanese: {
    metaDescription:
      "Japanese tattoos in Bali at Bloodline. Bold compositions, strong flow and work built to wear beautifully for life. Appointment only.",
    lead: "Japanese tattooing is one of the most iconic and timeless styles in the world, and at Bloodline Tattoo Bali we do it properly. Bold compositions, strong flow and work built to wear beautifully for life.",
    overview: [
      "Japanese tattooing has a language of its own. Dragons, koi, samurai, masks, mythological scenes, every element carries meaning and every composition is built around the body it lives on. Flow, balance and negative space aren't afterthoughts here, they're where the design starts.",
      "At Bloodline Tattoo Bali we have artists dedicated to this style who understand the discipline behind it. Whether you're starting a sleeve, building a bodysuit or adding a standalone piece, we'll plan it properly from the first conversation.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "Every composition is planned around the body it sits on, flow and movement considered from the start",
      "Background and negative space are treated as part of the design, not filled in after the fact",
      "Built for long term readability, bold where it needs to be, balanced where it counts",
    ],
    idealForBullets: [
      "Sleeves, bodysuits and large scale narrative pieces",
      "Any theme within the Japanese tradition, dragons, koi, samurai, masks, mythology and beyond",
      "Anyone who wants bold, timeless work with strong flow across the body",
    ],
    sessionBullets: [
      "Consultation to understand your vision and present a composition that's uniquely yours, approved before anything begins",
      "Stencil applied, layout confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
      "Leave with full aftercare guidance and ongoing support through the healing process",
    ],
    approachHeadline: "WHY JAPANESE",
    approachIntro:
      "Japanese tattooing is one of the most visually striking styles in the world, and for good reason. Bold compositions, iconic subject matter and a flow across the body that no other style matches. Whether you're drawn to the traditional or a more realistic take on Japanese imagery, the result is always something that commands attention. Browse the portfolio and see what our artists are capable of. Then come and let us build yours.",
    proofDescription: proofDescription("Japanese"),
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("Japanese"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: japaneseFaqItems,
  },

  colour: {
    metaDescription:
      "Colour tattoos in Bali at Bloodline. Bold, vibrant work built to hold its impact long after it heals. Appointment only.",
    lead: "Colour tattooing done properly is one of the most striking things you can wear. At Bloodline Tattoo Bali we have artists who specialise in bold, vibrant work built to hold its impact long after it heals.",
    overview: [
      "Colour is for those who want something more vibrant, more expressive and with an added dimension that black and grey alone can't give you. Whether you're starting fresh or looking to bring more life to existing work, colour opens up a whole new way to approach the canvas.",
      "At Bloodline Tattoo Bali we approach every colour piece with the same discipline. Palette, contrast and saturation are all planned before we touch the skin, so what you walk out with looks as good in five years as it does on day one.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "Every palette is planned before we begin, colour hierarchy and contrast mapped from the start",
      "Saturation is applied with intention, bold where it needs to be, considered where longevity depends on it",
      "Skin tone is factored into every colour decision so the work reads clearly and holds over time",
    ],
    idealForBullets: [
      "Anyone who wants something vibrant, expressive and full of life",
      "Those looking to add colour to existing work or build something entirely new",
      "Anyone who wants their tattoo to be seen from across the room",
    ],
    sessionBullets: [
      "Consultation to understand your vision and present a palette direction that's uniquely yours, approved before anything begins",
      "Stencil applied, design confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
      "Leave with full aftercare guidance and ongoing support through the healing process",
    ],
    approachHeadline: "A DIFFERENT DIMENSION",
    approachIntro:
      "Colour tattooing is one of the most expressive things you can put on your skin. The vibrancy, the depth, the way a great colour piece commands attention, there's nothing quite like it. Done properly, it's a completely different dimension of tattooing. Browse the portfolio and see what our artists are capable of. Then come and let us build yours.",
    proofDescription: proofDescription("colour"),
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("colour"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: colourFaqItems,
  },

  portrait: {
    metaDescription:
      "Portrait tattoos in Bali at Bloodline. Meaningful likeness work with structure, tonal restraint and long-term care. Appointment only.",
    lead: "A portrait tattoo is one of the most meaningful pieces you can get. A person, a face, a moment preserved permanently on your skin. Done right, it's breathtaking. Done wrong, it's obvious.",
    overview: [
      "Portrait tattoos carry more personal weight than almost any other style. A family member, someone you've lost, a face that means everything to you, the stakes are high and the margin for error is small.",
      "At Bloodline Tattoo Bali our portrait artists understand that. Every piece starts with a proper consultation, a thorough review of your references and an honest conversation about what will work and what will last. We don't rush portrait work and we don't cut corners on it. The result needs to look like them, feel like them and hold that way for life.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "The better the reference, the better the result. We work from the highest quality image available to capture every detail accurately",
      "Contrast is carefully controlled to preserve softness and keep the likeness true to life",
      "Placement is chosen to work with the body's natural movement so the piece ages well",
    ],
    idealForBullets: [
      "Anyone wanting to immortalise a person, a face or a moment that means everything to them",
      "Memorial pieces, family portraits, celebrities, cultural figures, anyone worth wearing for life",
    ],
    sessionBullets: [
      "Consultation to understand your vision and review your references together, approved before anything begins",
      "Stencil applied, placement confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
      "Leave with full aftercare guidance and ongoing support through the healing process",
    ],
    approachHeadline: "IT EITHER LOOKS LIKE THEM OR IT DOESN'T",
    approachIntro:
      "Portrait tattooing demands more time, more care and more precision than almost any other style. It's not something that can be rushed and we never try to. The likeness, the expression, the detail that makes it feel like the person, that's what we're here for. Browse the portfolio and see what that level of care produces.",
    proofDescription: proofDescription("portrait"),
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("portrait"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: portraitFaqItems,
  },

  mandala: {
    metaDescription:
      "Mandala and geometric tattoos in Bali at Bloodline. Precision, symmetry and ornamental work built around the body. Appointment only.",
    lead: "Mandala tattooing is where precision meets artistry. Intricate, symmetrical and deeply satisfying to wear, it's a style that rewards patience in the planning and expertise in the execution.",
    overview: [
      "When most people say mandala, they mean something in the world of geometric and ornamental tattooing. It's a broad term that covers a lot of ground, from radial symmetry and dotwork to ornamental florals and sacred geometry. Whatever you have in mind, we know what you're after.",
      "At Bloodline Tattoo Bali our artists understand how to make this style work with your anatomy. Where each element sits, where negative space begins, how lines and dots shape and define the body. The planning matters as much as the execution here and we treat it that way.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "Symmetry and spacing are mapped on the body before anything is placed",
      "Every line and dot is intentional, precision over density every time",
      "The design is built to work with your anatomy, not just look good on paper",
    ],
    idealForBullets: [
      "Anyone drawn to geometric, ornamental or dotwork styles",
      "Chest, back, knee, elbow and spine placements where symmetry can truly shine",
      "Those who want something precise, considered and built around the body",
    ],
    sessionBullets: [
      "Consultation to understand your vision and map the symmetry to your body, approved before anything begins",
      "Stencil placed and alignment confirmed on the body, then we get to work with dedicated staff looking after you throughout every session",
      "Leave with full aftercare guidance and ongoing support through the healing process",
    ],
    approachHeadline: "PRECISION IS EVERYTHING",
    approachIntro:
      "There is no hiding a mistake in geometric and ornamental work. Every line, every dot, every transition is visible and intentional. It's one of the most unforgiving styles to execute, which is exactly why you want an artist who has dedicated themselves to it. Browse the portfolio and see the standard we hold ourselves to.",
    proofDescription:
      "The work speaks for itself. Browse our recent mandala and geometric pieces below.",
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("mandala"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: mandalaFaqItems,
  },

  chicano: {
    metaDescription:
      "Chicano tattoos in Bali at Bloodline. Black and grey narrative, script and atmosphere with cultural depth. Appointment only.",
    lead: "Originating from Mexican culture and adopted worldwide, Chicano tattooing has developed an identity entirely its own. Portraits, script, symbolism, religious imagery, street culture, all executed in black and grey with an attitude and atmosphere that no other style quite captures. It's one of the most requested styles among tattoo collectors who visit Bali, and our artists deliver it to the standard it deserves.",
    overview: [
      "Chicano tattooing is as much about mood and atmosphere as it is about the imagery itself. The fine greywash, the script, the symbolism, the way light and shadow are used to tell a story, it all comes together into something that feels alive on skin.",
      "At Bloodline Tattoo Bali we treat every Chicano piece as a complete composition. Lettering, portraiture and symbolic imagery are planned together so the whole piece reads as one unified statement, not a collection of separate elements thrown together.",
    ],
    approachColumnLabels: APPROACH_COLUMN_LABELS,
    philosophyBullets: [
      "Every piece is built around mood and atmosphere, tonal depth planned before anything goes on skin",
      "Negative space is treated as part of the design, used to preserve clarity and let the piece breathe",
      "Lettering and imagery are balanced together so the composition reads as one unified piece",
    ],
    idealForBullets: [
      "Anyone drawn to the culture, the attitude and the storytelling that Chicano brings",
      "Portraits, script, religious imagery, street culture and everything in between",
      "Those who want black and grey work with depth, mood and a strong visual identity",
    ],
    sessionBullets: [...SHARED_SESSION_BULLETS],
    approachHeadline: "THE ATTITUDE IS PART OF THE ART",
    approachIntro:
      "Chicano tattooing isn't just a style, it's a culture. The imagery, the script, the greywash, the mood, it all carries meaning. Done properly it's some of the most striking black and grey work you'll ever see. Browse the portfolio and see what our artists bring to it.",
    proofDescription: proofDescription("Chicano"),
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: relatedStylesDescription("Chicano"),
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: chicanoFaqItems,
  },

  healed: {
    metaDescription:
      "Healed tattoo documentation from Bloodline Bali. Line integrity, tonal stability and craft that holds once skin has fully settled.",
    lead: "Anyone can make a tattoo look good fresh out of the studio. What it looks like six months later is where the real standard shows.",
    overview: [
      "The healed portfolio exists for one reason, to show you exactly what you're getting before you commit. Not just how our work looks on the day, but how it holds over time. Line integrity, tonal stability, contrast that still reads once the skin has fully settled.",
      "There's a lot of talk in the tattoo world about waiting until a piece is healed before judging it. This is us taking that seriously. Every image in this gallery was photographed after a proper healing period, and every client who appears here came back to us to make that possible.",
      "When you browse the gallery, look at the contrast. A well executed tattoo should still hold strong contrast after healing, not fade within months. We intentionally work slightly darker knowing the skin will lighten the result during healing, what you see here is the target. The contrast and tone you can expect to wear long term.",
      "If you want to know the standard we hold ourselves to, this is where you find out.",
    ],
    showApproachSpecStrip: false,
    approachHeadline: "THE PROOF IS IN THE HEALING",
    approachIntro:
      "The healed gallery takes time and it takes clients who trust you enough to come back. Browse what's here and see what our standard looks like once the skin has done its job.",
    proofDescription: "The work speaks for itself. Browse our healed pieces below.",
    relatedStylesHeading: RELATED_STYLES_HEADING,
    relatedStylesDescription: "Browse our styles and find what speaks to you.",
    faqSectionDescription: FAQ_SECTION_DESCRIPTION,
    faqItems: healedFaqItems,
    relatedBlogLinks: [
      {
        label: "Tattoo in Bali — booking guide",
        href: "/tattoo-blog/tattoo-in-bali-guide-for-australian-travellers",
      },
      {
        label: "Tattoo prices in Bali",
        href: "/tattoo-blog/tattoo-prices-in-bali-guide-for-australians",
      },
    ],
  },
};

export { baliTattooStyleDetailOverrides };
