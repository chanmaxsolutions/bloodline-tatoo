import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

export interface AboutPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface AboutPageTrustStat {
  label: string;
  value: string;
}

export type AboutPageClosing = PageClosingCtaContent;

export interface AboutPageVideo {
  eyebrow: string;
  heading: string;
  description: string;
  youtubeVideoId: string;
  embedTitle: string;
}

/** One philosophy band: optional uppercase heading + body paragraphs. */
export interface AboutPageStoryBlock {
  heading?: string;
  paragraphs: readonly string[];
}

export interface AboutPageContent {
  intro: AboutPageIntro;
  introBackgroundImage: PageIntroBandBackgroundImage;
  trustStats: readonly AboutPageTrustStat[];
  storyBlocks: readonly AboutPageStoryBlock[];
  video: AboutPageVideo;
  closing: AboutPageClosing;
  headerCtaLabel: string;
}
