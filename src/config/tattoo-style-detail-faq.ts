import type { TattooStyleFaqItem } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";

const tattooStyleFaqBySlug: Record<TattooStyleSlug, readonly TattooStyleFaqItem[]> = {
  realism: [
    {
      id: "realism-healing-sessions",
      question: "How many sessions does realistic work usually need?",
      answer:
        "Scale and detail decide the plan. Smaller realism can finish in one sitting; portraits, large scenes, and heavy greywash often need multiple sessions with heal time between passes so contrast stays clean.",
    },
    {
      id: "realism-references",
      question: "What references should I bring for a realism tattoo?",
      answer:
        "Bring high-resolution photos with clear light and shadow—not filters or heavy blur. We review likeness, placement, and how the image will read on skin before any stencil is approved.",
    },
    {
      id: "realism-longevity",
      question: "Will fine detail in realism hold after healing?",
      answer:
        "We plan tonal structure and contrast for long-term readability, not only fresh photos. Dense micro-detail in very small placements can soften over years; consultation covers honest expectations for your size and placement.",
    },
    {
      id: "realism-placement",
      question: "Which placements work best for black and grey realism?",
      answer:
        "Flat or gently curved areas with stable skin tend to carry tone best. We map flow around muscle and joint movement so the piece ages with the body rather than fighting it.",
    },
    {
      id: "realism-booking",
      question: "How do I book a realism consultation?",
      answer:
        "Message us on WhatsApp through your studio site. Share placement, approximate size, and reference images. We respond with next steps, timing, and whether the project suits a single session or a paced series.",
    },
  ],
  portrait: [
    {
      id: "portrait-likeness",
      question: "How do you protect likeness in portrait tattoos?",
      answer:
        "We prioritise bone structure, expression, and tonal restraint before micro-detail. References are checked for how they translate on skin, not only how they look on a screen.",
    },
    {
      id: "portrait-memorial",
      question: "Can you tattoo a memorial or family portrait?",
      answer:
        "Yes, when references and scale support a clear result. We discuss emotional intent, placement, and realistic outcomes in consultation so the piece stays respectful and readable long term.",
    },
    {
      id: "portrait-sessions",
      question: "Are portrait tattoos completed in one session?",
      answer:
        "Smaller portraits may finish once; larger likeness work is usually layered across sessions with healing gaps so softness and detail survive settle.",
    },
    {
      id: "portrait-aging",
      question: "How will a portrait tattoo age on skin?",
      answer:
        "Faces are planned with movement, contrast control, and placement in mind. We avoid brittle grey that washes out quickly and explain how tone will read after full healing.",
    },
    {
      id: "portrait-booking",
      question: "What should I send before booking portrait work?",
      answer:
        "Clear photos from multiple angles if possible, intended placement, and approximate size. WhatsApp is the fastest way to start—we confirm feasibility before scheduling studio time.",
    },
  ],
  japanese: [
    {
      id: "japanese-scale",
      question: "Do I need a full sleeve or bodysuit to start Japanese work?",
      answer:
        "No. Many clients begin with a panel, half sleeve, or focused motif. We still plan composition and future flow so later work can connect without rework.",
    },
    {
      id: "japanese-background",
      question: "How important is background in Japanese tattooing?",
      answer:
        "Background wind bars, waves, and filler balance the subject and guide movement. They are part of the storytelling—not optional decoration added at the end.",
    },
    {
      id: "japanese-timeline",
      question: "How long do large Japanese projects take?",
      answer:
        "Large irezumi-style work is built over months or years with heal windows between sessions. Pacing protects saturation, line clarity, and your skin’s recovery.",
    },
    {
      id: "japanese-motifs",
      question: "Can I choose traditional motifs like koi, dragon, or samurai?",
      answer:
        "Yes. We align motif, symbolism, and body flow in consultation so the composition reads clearly at scale and stays true to disciplined Japanese structure.",
    },
    {
      id: "japanese-booking",
      question: "How do I start a Japanese tattoo consultation?",
      answer:
        "Contact the studio on WhatsApp with placement ideas, rough scale, and any reference imagery. We outline composition direction before booking the first serious session.",
    },
  ],
  colour: [
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
        "We adjust palette and value structure during consultation. Some tones read stronger on certain undertones; we explain what will hold clearly for you before ink goes in.",
    },
    {
      id: "colour-cover",
      question: "Can colour cover older or dark tattoos?",
      answer:
        "Sometimes, with honest assessment. Cover-ups need the right scale, palette, and often additional sessions. We review existing work in consultation before committing to a plan.",
    },
    {
      id: "colour-aftercare",
      question: "Is aftercare different for colour work?",
      answer:
        "Healing principles are similar, but sun protection and aftercare timing are critical for colour retention. Studio guidance is matched to density and placement.",
    },
    {
      id: "colour-booking",
      question: "How do I book colour tattoo work?",
      answer:
        "Message on WhatsApp with design direction, size, and placement. We confirm palette approach and session pacing before you travel or reserve studio time.",
    },
  ],
  mandala: [
    {
      id: "mandala-placement",
      question: "Which body areas suit mandala tattoos best?",
      answer:
        "Chest, back, shoulder, elbow, knee, and spine-centered placements are common. We map symmetry against bone and joint lines so geometry stays stable when you move.",
    },
    {
      id: "mandala-size",
      question: "Do mandala designs need to be large?",
      answer:
        "Very small mandalas can lose precision; we recommend scale that supports clean line work and readable repetition. Consultation defines minimum size for your placement.",
    },
    {
      id: "mandala-symmetry",
      question: "How do you ensure symmetry on curved skin?",
      answer:
        "Centre points and stencil alignment are checked on the body before linework. We engineer symmetry for your anatomy—not only for flat paper drawings.",
    },
    {
      id: "mandala-healing",
      question: "Will fine lines in mandala work blur over time?",
      answer:
        "Line weight and spacing are planned for long-term readability. Extremely tight dotwork in high-movement areas may soften; we explain trade-offs during planning.",
    },
    {
      id: "mandala-booking",
      question: "How do I book a mandala consultation?",
      answer:
        "Reach out on WhatsApp with placement photos, approximate size, and style references. We confirm symmetry approach and session length before scheduling.",
    },
  ],
  chicano: [
    {
      id: "chicano-script",
      question: "Can you tattoo script and lettering in Chicano style?",
      answer:
        "Yes. Lettering is drafted for legibility on skin with stroke weight and spacing tested at true placement—not only on paper.",
    },
    {
      id: "chicano-greywash",
      question: "How do you keep greywash from turning muddy?",
      answer:
        "Tonal layers are paced with heal windows and restraint. Contrast and negative space are planned so the piece keeps atmosphere after settle.",
    },
    {
      id: "chicano-narrative",
      question: "Can Chicano work combine portraits and symbolism?",
      answer:
        "Often. We balance imagery, script, and open space so the composition reads as one narrative rather than crowded elements.",
    },
    {
      id: "chicano-scale",
      question: "What size works best for Chicano black and grey?",
      answer:
        "Scale depends on detail and readability. Consultation covers how much space is needed for script, portraits, or full scenes to hold long term.",
    },
    {
      id: "chicano-booking",
      question: "How do I book Chicano-style work?",
      answer:
        "WhatsApp us with references, placement, and story direction. We confirm layout and tonal plan before the first session is booked.",
    },
  ],
  bamboo: [
    {
      id: "bamboo-difference",
      question: "How is bamboo tattooing different from machine work?",
      answer:
        "Bamboo uses hand-tap rhythm and traditional pacing rather than a coil or rotary machine. Depth and spacing are controlled manually, which creates distinctive texture and character.",
    },
    {
      id: "bamboo-location",
      question: "Where is bamboo tattooing available?",
      answer:
        "Bamboo sessions are offered at Bloodline Bangkok and Bloodline Phuket. Message the studio you plan to visit so we confirm availability and design fit.",
    },
    {
      id: "bamboo-pain-healing",
      question: "Does bamboo healing differ from machine tattoos?",
      answer:
        "Healing can feel different person to person. We provide aftercare guidance specific to hand-tap work and your placement’s density.",
    },
    {
      id: "bamboo-design",
      question: "What designs suit bamboo application?",
      answer:
        "Traditional Asian-inspired motifs and symbolic work often suit the method. Consultation aligns design, scale, and cultural intent with what bamboo does best.",
    },
    {
      id: "bamboo-booking",
      question: "How do I book a bamboo session?",
      answer:
        "Contact Bangkok or Phuket on WhatsApp with your travel dates, design ideas, and placement. We confirm session length and hand-tap pacing before you arrive.",
    },
  ],
  healed: [
    {
      id: "healed-why",
      question: "Why does Bloodline show healed tattoo photos?",
      answer:
        "Fresh tattoos can look impressive under studio light. Healed documentation shows line integrity, tone stability, and how craft reads after skin has fully settled.",
    },
    {
      id: "healed-timing",
      question: "How long after a tattoo is it considered healed?",
      answer:
        "Surface healing and full settle differ. We document work once tone and line quality have stabilised enough to judge long-term craft—not only at two weeks.",
    },
    {
      id: "healed-styles",
      question: "Which styles appear in healed documentation?",
      answer:
        "Black and grey, realism, colour, and high-detail work across placements. The focus is retention and readability, not style trends alone.",
    },
    {
      id: "healed-bali",
      question: "Is healed documentation specific to Bali?",
      answer:
        "Healed proof is central to how we present standards at Bloodline Bali. The same discipline guides execution at every Bloodline studio.",
    },
    {
      id: "healed-booking",
      question: "How do I book after reviewing healed work?",
      answer:
        "Message Bloodline Bali—or your regional studio—on WhatsApp with placement, scale, and references. We align expectations on healing and long-term quality before scheduling.",
    },
  ],
};

export { tattooStyleFaqBySlug };
