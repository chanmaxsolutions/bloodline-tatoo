export interface TrustpilotRegionConfig {
  /**
   * Site-wide floating “Review us on Trustpilot” widget.
   * Kept in codebase (`TrustpilotFloatingWidget`) but off by default —
   * Trustpilot invite now lives on `/reviews`.
   */
  floatingWidgetEnabled: boolean;
  evaluateUrl: string;
}

export interface TrustpilotEvaluateLink {
  region: "bangkok" | "bali" | "phuket";
  studioName: string;
  evaluateUrl: string;
}
