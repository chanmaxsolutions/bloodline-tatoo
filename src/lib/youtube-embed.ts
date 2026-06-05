interface YoutubeEmbedOptions {
  autoplay?: boolean;
}

/** Privacy-enhanced YouTube embed with minimal player chrome. */
function buildYoutubeNoCookieEmbedUrl(videoId: string, options?: YoutubeEmbedOptions): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    controls: "1",
    iv_load_policy: "3",
    color: "white",
  });

  if (options?.autoplay) {
    params.set("autoplay", "1");
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function buildYoutubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.webp`;
}

export { buildYoutubeNoCookieEmbedUrl, buildYoutubeThumbnailUrl };
export type { YoutubeEmbedOptions };
