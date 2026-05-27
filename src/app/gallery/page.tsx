import { redirect } from "next/navigation";

interface GalleryRedirectPageProps {
  searchParams: Promise<{ category?: string }>;
}

/** Legacy route — portfolio lives at `/portfolio`. */
export default async function GalleryRedirectPage({ searchParams }: GalleryRedirectPageProps) {
  const { category } = await searchParams;
  const query = category ? `?category=${encodeURIComponent(category)}` : "";
  redirect(`/portfolio${query}`);
}
