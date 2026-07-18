import { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { TrustList } from "@/components/ui/TrustList";

export function Hero({
  eyebrow = "Planning permission, done properly",
  headline = "Planning permission, handled from enquiry to approval.",
  lede = (
    <>
      We handle the entire process for you &mdash; removing the stress, delays and guesswork
      of planning permission, so you can move forward with total confidence, from your first
      enquiry through to a granted decision.
    </>
  ),
}: {
  eyebrow?: string;
  headline?: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      headline={headline}
      lede={lede}
      primaryCtaLabel="Get My Free Assessment"
      trustSlot={<TrustList />}
      eyebrowAccent
      graphic
    />
  );
}
