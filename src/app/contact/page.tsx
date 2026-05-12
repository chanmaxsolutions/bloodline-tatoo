import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { regionConfig } = await getRequestRegionContext();
  return {
    title: `Contact | ${regionConfig.seo.siteName}`,
    description: `Book and reach Bloodline in ${regionConfig.regionName}.`,
  };
}

export default async function ContactPage() {
  const { regionConfig } = await getRequestRegionContext();

  return (
    <div className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-6">
        <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
          Contact
        </p>
        <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">
          Book the studio
        </h1>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
          The dedicated contact flow for {regionConfig.regionName} is being finalized. Use the
          header WhatsApp CTA for immediate booking; this route exists so links and prefetch
          succeed.
        </p>
      </Container>
    </div>
  );
}
