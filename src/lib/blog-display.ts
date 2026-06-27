import type { BlogPost, ResolvedBlogPost } from "@/types/blog";

const QUICK_ANSWER_MAX_WORDS = 80;

function deriveQuickAnswerFromDescription(description: string): string {
  const words = description.trim().split(/\s+/);

  if (words.length <= QUICK_ANSWER_MAX_WORDS) {
    return description.trim();
  }

  return `${words.slice(0, QUICK_ANSWER_MAX_WORDS).join(" ")}…`;
}

function resolveBlogPost(post: BlogPost): ResolvedBlogPost {
  const quickAnswer =
    post.quickAnswer?.trim() || deriveQuickAnswerFromDescription(post.description);

  return {
    ...post,
    quickAnswer,
  };
}

export { deriveQuickAnswerFromDescription, resolveBlogPost };
