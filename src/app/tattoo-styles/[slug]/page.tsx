import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import {
  getTattooStyleBySlug,
  isTattooStyleSlug,
  TATTOO_STYLE_SLUGS,
} from "@/config/tattoo-style-catalog";

interface TattooStylePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return TATTOO_STYLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TattooStylePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isTattooStyleSlug(slug)) {
    return { title: "Tattoo style | Bloodline Tattoo" };
  }
  const style = getTattooStyleBySlug(slug);
  return {
    title: `${style.title} tattoos | Bloodline Tattoo`,
    description: style.shortDescription,
  };
}

export default async function TattooStylePage({ params }: TattooStylePageProps) {
  const { slug } = await params;
  if (!isTattooStyleSlug(slug)) {
    notFound();
  }

  const style = getTattooStyleBySlug(slug);

  return (
    <main className="bg-background section-space">
      <Container size="narrow" className="flex flex-col gap-6">
        <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
          Tattoo style
        </p>
        <h1 className="text-heading-display text-4xl text-foreground md:text-5xl">{style.title}</h1>
        <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug">
          {style.shortDescription}
        </p>
        <p className="font-sans text-base leading-relaxed text-muted-foreground">
          Dedicated editorial for{" "}
          <span className="font-semibold text-foreground">{style.title}</span> is in progress—this
          route is wired for SEO and internal linking from the homepage style gateway.
        </p>
      </Container>
    </main>
  );
}
