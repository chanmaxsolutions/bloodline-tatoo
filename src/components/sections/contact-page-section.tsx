import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ContactPageActions } from "@/components/sections/contact-page-actions";
import { ContactPageWhatsAppForm } from "@/components/sections/contact-page-whatsapp-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ContactPageContent } from "@/types/contact-page";

const contactHeroEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const contactHeroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const contactHeroDescriptionClassName =
  "mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty sm:max-w-2xl md:text-xl md:leading-snug";

interface ContactPageSectionProps {
  content: ContactPageContent;
}

function ContactPageSection({ content }: ContactPageSectionProps) {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 pb-(--homepage-section-band-padding-y-mobile) md:pt-36",
        "lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,color-mix(in_oklab,var(--surface-elevated)_55%,transparent),transparent_72%)]"
      />

      <Container size="wide" className="relative">
        <SectionReveal className="flex w-full flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={content.intro.eyebrow}
            heading={content.intro.heading}
            description={content.intro.description}
            headingId="contact-page-heading"
            className="mx-auto w-full max-w-5xl"
            eyebrowClassName={sectionRevealItemClass("none", contactHeroEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", contactHeroTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", contactHeroDescriptionClassName)}
          />

          <div className={sectionRevealItemClass("lg", "w-full")}>
            <ContactPageActions
              isGlobal={content.isGlobal}
              channels={content.channels}
              studios={content.studios}
            />
          </div>

          <ContactPageWhatsAppForm
            copy={content.whatsappForm}
            isGlobal={content.isGlobal}
            regionName={content.regionName}
            whatsappPhoneDigits={content.whatsappPhoneDigits}
            whatsappStudioOptions={content.whatsappStudioOptions}
            className={sectionRevealItemClass("lg")}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ContactPageSection };
