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
      trustSlot={<TrustList />}
      eyebrowAccent
      graphic
    />
  );
}
