import { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { TrustList } from "@/components/ui/TrustList";

export function Hero({
  eyebrow = "Planning permission, handled from enquiry to approval.",
  headline = "Planning permission shouldn’t feel like a gamble.",
  lede = (
    <>
      We structure your entire application around what planners are actually looking for
      &mdash; so when you submit, it&rsquo;s not a guess. It&rsquo;s a calculated step toward
      approval.
    </>
  ),
  primaryCtaLabel,
  ctaNote,
}: {
  eyebrow?: string;
  headline?: ReactNode;
  lede?: ReactNode;
  primaryCtaLabel?: string;
  ctaNote?: { line1: string; line2: string };
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      headline={headline}
      lede={lede}
      primaryCtaLabel={primaryCtaLabel}
      ctaNote={ctaNote}
      trustSlot={<TrustList />}
      eyebrowAccent
      graphic
    />
  );
}
