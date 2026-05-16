"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TattooStyleFaqItem } from "@/types/tattoo-style-detail";

/** Softer than related card titles — dense accordion list needs calmer contrast. */
const faqTriggerClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground/85 text-pretty py-6 hover:text-accent md:py-7 md:text-2xl md:text-foreground/85";

/** Secondary to questions; hierarchy via opacity + body scale. */
const faqAnswerClassName =
  "h-auto pt-1 pb-6 font-sans text-base leading-relaxed text-foreground/55 text-pretty md:pb-7 md:text-lg md:leading-relaxed md:text-foreground/55";

interface TattooStyleDetailFaqAccordionProps {
  items: readonly TattooStyleFaqItem[];
}

function TattooStyleDetailFaqAccordion({ items }: TattooStyleDetailFaqAccordionProps) {
  const defaultOpenId = items[0]?.id;

  return (
    <Card surface="strong" className="mx-auto w-full max-w-3xl">
      <CardContent className="px-6 pt-6 pb-6 md:px-7 md:pt-7 md:pb-7">
        <Accordion {...(defaultOpenId ? { defaultValue: [defaultOpenId] } : {})}>
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className={faqTriggerClassName}>{item.question}</AccordionTrigger>
              <AccordionContent className={faqAnswerClassName}>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

export { TattooStyleDetailFaqAccordion };
