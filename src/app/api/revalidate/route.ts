import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CONTENT_CACHE_TAGS, isContentCacheTag } from "@/lib/content-cache-tags";
import { env } from "@/lib/env";

interface RevalidateRequestBody {
  tag?: string;
  secret?: string;
}

export async function POST(request: Request) {
  if (!env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: "Revalidation is not configured on this deployment." },
      { status: 503 },
    );
  }

  let body: RevalidateRequestBody = {};
  try {
    body = (await request.json()) as RevalidateRequestBody;
  } catch {
    body = {};
  }

  const headerSecret = request.headers.get("x-revalidate-secret");
  const secret = headerSecret ?? body.secret;

  if (secret !== env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const tag = body.tag?.trim();

  if (tag) {
    if (!isContentCacheTag(tag)) {
      return NextResponse.json({ ok: false, message: `Unknown tag: ${tag}` }, { status: 400 });
    }

    revalidateTag(tag, "max");
    return NextResponse.json({ ok: true, revalidated: [tag] });
  }

  for (const cacheTag of CONTENT_CACHE_TAGS) {
    revalidateTag(cacheTag, "max");
  }

  return NextResponse.json({ ok: true, revalidated: CONTENT_CACHE_TAGS });
}
