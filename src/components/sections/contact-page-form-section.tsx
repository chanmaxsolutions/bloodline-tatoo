import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { ContactPageWhatsAppForm } from "@/components/sections/contact-page-whatsapp-form";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ContactPageContent } from "@/types/contact-page";

interface ContactPageFormSectionProps {
  whatsappForm: ContactPageContent["whatsappForm"];
  isGlobal: ContactPageContent["isGlobal"];
  regionName: ContactPageContent["regionName"];
  whatsappPhoneDigits: ContactPageContent["whatsappPhoneDigits"];
  whatsappStudioOptions: ContactPageContent["whatsappStudioOptions"];
}

function ContactPageFormSection({
  whatsappForm,
  isGlobal,
  regionName,
  whatsappPhoneDigits,
  whatsappStudioOptions,
}: ContactPageFormSectionProps) {
  return (
    <section
      aria-labelledby="contact-whatsapp-form-heading"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal className="flex w-full flex-col gap-10 md:gap-12 lg:gap-14">
          <div
            className={sectionRevealItemClass("none", "flex items-center gap-4")}
            role="separator"
            aria-label="Alternative booking path"
          >
            <div className="h-px flex-1 bg-border/50" aria-hidden />
            <span className="font-heading text-base font-medium uppercase tracking-normal text-muted-foreground md:text-lg">
              Or
            </span>
            <div className="h-px flex-1 bg-border/50" aria-hidden />
          </div>

          <ContactPageWhatsAppForm
            copy={whatsappForm}
            isGlobal={isGlobal}
            regionName={regionName}
            whatsappPhoneDigits={whatsappPhoneDigits}
            whatsappStudioOptions={whatsappStudioOptions}
            headingId="contact-whatsapp-form-heading"
            className={sectionRevealItemClass("lg")}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { ContactPageFormSection };
