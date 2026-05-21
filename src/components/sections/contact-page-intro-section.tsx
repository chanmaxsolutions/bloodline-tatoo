import Image from "next/image";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ContactPageActions } from "@/components/sections/contact-page-actions";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ContactPageContent } from "@/types/contact-page";

const contactHeroEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const contactHeroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const contactHeroDescriptionClassName =
  "mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty sm:max-w-2xl md:text-xl md:leading-snug";

/** Matches reviews intro → grid spacing between bands. */
const contactIntroBottomSpacingClassName = "pb-10 md:pb-12 lg:pb-14";

interface ContactPageIntroSectionProps {
  intro: ContactPageContent["intro"];
  introBackgroundImage: ContactPageContent["introBackgroundImage"];
  isGlobal: ContactPageContent["isGlobal"];
  channels: ContactPageContent["channels"];
  studios: ContactPageContent["studios"];
}

function ContactPageIntroSection({
  intro,
  introBackgroundImage,
  isGlobal,
  channels,
  studios,
}: ContactPageIntroSectionProps) {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className={cn(
        "relative isolate overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 md:pt-36",
        contactIntroBottomSpacingClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={introBackgroundImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={72}
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className={pageIntroBandSurfaceGradientClassName} />

      <Container size="wide" className="relative z-10">
        <SectionReveal className="flex w-full flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={intro.eyebrow}
            heading={intro.heading}
            description={intro.description}
            headingId="contact-page-heading"
            className="mx-auto w-full max-w-5xl"
            eyebrowClassName={sectionRevealItemClass("none", contactHeroEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", contactHeroTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", contactHeroDescriptionClassName)}
          />

          <div className={sectionRevealItemClass("lg", "w-full")}>
            <ContactPageActions isGlobal={isGlobal} channels={channels} studios={studios} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ContactPageIntroSection };
