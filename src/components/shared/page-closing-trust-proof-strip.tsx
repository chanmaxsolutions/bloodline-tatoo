import { HeroTrustProofStrip } from "@/components/shared/hero-trust-proof-strip";
import { resolveGoogleBusinessProofPresentation } from "@/lib/google-business-proof";
import { getRequestRegionContext } from "@/lib/request-region";

/** Google rating line for every closing / conversion band (homepage, about, styles, detail). */
async function PageClosingTrustProofStrip() {
  const { region } = await getRequestRegionContext();
  const presentation = resolveGoogleBusinessProofPresentation(region);

  return (
    <HeroTrustProofStrip
      variant="compact"
      chipsScope="google-only"
      presentation={presentation}
      analyticsComponentName="PageClosingTrustProofStrip"
      className="w-full max-w-full"
    />
  );
}

export { PageClosingTrustProofStrip };
