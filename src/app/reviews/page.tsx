import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getRequestRegionContext } from "@/lib/request-region";

export async function generateMetadata(): Promise<Metadata> {
  const { regionConfig } = await getRequestRegionContext();
  return {
    title: `Reviews | ${regionConfig.seo.siteName}`,
    description: `Google reviews and client proof for Bloodline in ${regionConfig.regionName}.`,
  };
}

export default async function ReviewsPage() {
  const { regionConfig } = await getRequestRegionContext();

  return (
    <div className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-6">
        <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
          Reviews
        </p>
        <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">
          Trust, verified
        </h1>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
          Regional review surfaces for {regionConfig.regionName} are being wired to the live Google
          dataset. Use the homepage carousel for now; this page keeps routing and RSC prefetch
          clean.
        </p>
      </Container>
    </div>
  );
}
