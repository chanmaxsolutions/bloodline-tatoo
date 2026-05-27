import { Container } from "@/components/layout/container";
import { BlogPageCategoryNav } from "@/components/sections/blog-page-category-nav";
import type { BlogCategorySlug } from "@/types/blog";

interface BlogPageFiltersSectionProps {
  categories: readonly BlogCategorySlug[];
  activeCategory: BlogCategorySlug | null;
}

function BlogPageFiltersSection({ categories, activeCategory }: BlogPageFiltersSectionProps) {
  return (
    <div className="bg-surface pb-6 md:pb-8">
      <Container size="wide">
        <BlogPageCategoryNav categories={categories} activeCategory={activeCategory} />
      </Container>
    </div>
  );
}

export { BlogPageFiltersSection };
