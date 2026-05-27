"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FaqAccordionItem {
  id?: string;
  question: string;
  answer: string;
}

const faqShellClassName = cn("rounded-xl border border-border/40 bg-surface-elevated/90");

const faqItemClassName = cn(
  "relative border-border/40 border-b transition-colors last:border-b-0",
  "[&:has([aria-expanded=true])]:z-10 [&:has([aria-expanded=true])]:bg-surface-strong/35",
);

const faqTriggerClassName = cn(
  "group/accordion-trigger w-full items-center gap-4 px-5 py-6 text-left md:px-6 md:py-7",
  "hover:[&_.faq-question]:text-accent focus-visible:[&_.faq-question]:text-accent",
  "group-aria-expanded/accordion-trigger:[&_.faq-question]:text-foreground",
);

const faqQuestionClassName = cn(
  "faq-question min-w-0 flex-1 text-pretty",
  "font-heading text-2xl font-semibold uppercase leading-tight tracking-tight text-foreground/70",
  "transition-colors md:text-2xl md:text-foreground/70",
);

const faqToggleButtonClassName = cn(
  "flex size-9 shrink-0 items-center justify-center rounded-full",
  "border border-border/60 bg-surface-strong text-foreground motion-fast",
  "group-hover/accordion-trigger:border-border group-hover/accordion-trigger:bg-surface-elevated",
  "group-aria-expanded/accordion-trigger:border-accent/35 group-aria-expanded/accordion-trigger:bg-surface-elevated",
);

const faqAnswerPanelClassName = "data-closed:pointer-events-none";

const faqAnswerInnerClassName = cn(
  "h-auto px-5 pt-1 pb-6 font-sans text-base leading-relaxed text-foreground/55 text-pretty",
  "md:px-6 md:pb-7 md:text-lg md:leading-relaxed md:text-foreground/55",
);

interface FaqAccordionProps {
  items: readonly FaqAccordionItem[];
}

function getFaqItemValue(item: FaqAccordionItem, index: number): string {
  return item.id ?? `faq-${index}`;
}

function FaqToggleIcon() {
  return (
    <span className={faqToggleButtonClassName} aria-hidden>
      <PlusIcon
        strokeWidth={1.75}
        className="size-4 motion-fast group-aria-expanded/accordion-trigger:hidden"
      />
      <MinusIcon
        strokeWidth={1.75}
        className="hidden size-4 motion-fast group-aria-expanded/accordion-trigger:block"
      />
    </span>
  );
}

function FaqAccordion({ items }: FaqAccordionProps) {
  if (items.length === 0) {
    return null;
  }

  const defaultOpenValue = getFaqItemValue(items[0], 0);

  return (
    <div className={faqShellClassName}>
      <Accordion className="w-full" defaultValue={[defaultOpenValue]}>
        {items.map((item, index) => {
          const value = getFaqItemValue(item, index);

          return (
            <AccordionItem key={value} value={value} className={faqItemClassName}>
              <AccordionTrigger hideIndicator className={faqTriggerClassName}>
                <span className={faqQuestionClassName}>{item.question}</span>
                <FaqToggleIcon />
              </AccordionTrigger>
              <AccordionContent
                className={faqAnswerPanelClassName}
                innerClassName={faqAnswerInnerClassName}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export { FaqAccordion };
