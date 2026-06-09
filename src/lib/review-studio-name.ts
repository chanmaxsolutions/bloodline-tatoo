import type { HomepageTestimonial } from "@/types/homepage-testimonial";

function reviewStudioName(item: HomepageTestimonial): string | undefined {
  if ("studioName" in item && typeof item.studioName === "string") {
    return item.studioName;
  }
  return undefined;
}

export { reviewStudioName };
