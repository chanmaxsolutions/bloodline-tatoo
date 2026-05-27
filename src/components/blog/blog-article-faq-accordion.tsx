"use client";

import { FaqAccordion } from "@/components/shared/faq-accordion";
import type { BlogFaqItem } from "@/types/blog";

interface BlogArticleFaqAccordionProps {
  items: readonly BlogFaqItem[];
}

function BlogArticleFaqAccordion({ items }: BlogArticleFaqAccordionProps) {
  return <FaqAccordion items={items} />;
}

export { BlogArticleFaqAccordion };
