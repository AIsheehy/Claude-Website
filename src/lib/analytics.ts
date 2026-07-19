declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Neither value is a secret, so both are hardcoded here (matching
// Analytics.tsx) rather than left dependent on a Netlify env var — still
// overridable via env var if the conversion action ever changes.
const DEFAULT_GOOGLE_ADS_ID = "AW-17493643073";
const DEFAULT_GOOGLE_ADS_CONVERSION_LABEL = "lolZCMP3l9McEMGez5VB";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || DEFAULT_GOOGLE_ADS_ID;
const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || DEFAULT_GOOGLE_ADS_CONVERSION_LABEL;

// Fires on every successful enquiry-form submission: a GA4 lead event
// (mark "generate_lead" as a key event in GA4 to count it as a conversion
// there), plus a Google Ads "Submit lead form" conversion.
// No-ops quietly if gtag never loaded (ad blockers, cookie consent, etc).
export function trackFormSubmission() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead", {
    event_category: "enquiry_form",
  });

  if (GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    });
  }
}
