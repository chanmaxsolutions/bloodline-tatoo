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

import type { PageClosingCtaContent } from "@/types/page-closing-cta";

export type AboutPageClosing = PageClosingCtaContent;

export interface AboutPageVideo {
  eyebrow: string;
  heading: string;
  description: string;
  youtubeVideoId: string;
  embedTitle: string;
}

export interface AboutPageContent {
  intro: AboutPageIntro;
  introBackgroundImage: PageIntroBandBackgroundImage;
  trustStats: readonly AboutPageTrustStat[];
  storyParagraphs: readonly string[];
  video: AboutPageVideo;
  closing: AboutPageClosing;
  headerCtaLabel: string;
}
