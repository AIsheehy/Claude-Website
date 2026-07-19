declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

// Fires on every successful enquiry-form submission: a GA4 lead event
// (mark "generate_lead" as a key event in GA4 to count it as a conversion
// there), plus a Google Ads conversion if those two env vars are set.
// No-ops quietly if gtag never loaded (ad blockers, cookie consent, or the
// env vars simply aren't configured yet).
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
