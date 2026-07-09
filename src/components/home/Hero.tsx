import { PageHero } from "@/components/ui/PageHero";
import { TrustList } from "@/components/ui/TrustList";

export function Hero() {
  return (
    <PageHero
      eyebrow="Planning permission, done properly"
      headline="Planning permission, handled from first sketch to final decision."
      lede={
        <>
          We manage the entire process for London homeowners, landlords and property investors —
          advice, survey, drawings, submission and every council query in between. You
          don&rsquo;t have to understand planning permission. That&rsquo;s our job.
        </>
      }
      trustSlot={<TrustList />}
    />
  );
}
