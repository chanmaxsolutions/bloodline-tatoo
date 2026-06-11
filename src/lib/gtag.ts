interface GtagConfig {
  page_path?: string;
  send_page_view?: boolean;
}

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, targetId: string | Date, config?: GtagConfig) => void;
  }
}

function sendGaPageView(measurementId: string, pagePath: string): void {
  window.gtag?.("config", measurementId, {
    page_path: pagePath,
  });
}

export { sendGaPageView };
