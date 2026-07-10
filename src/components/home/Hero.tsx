import { PageHero } from "@/components/ui/PageHero";
import { TrustList } from "@/components/ui/TrustList";

export function Hero() {
  return (
    <PageHero
      eyebrow="Planning permission, done properly"
      headline="Planning permission, handled from enquiry to approval."
      lede={
        <>
          We handle the entire process for you &mdash; removing the stress, delays and guesswork
          of planning permission, so you can move forward with total confidence, from your first
          enquiry through to a granted decision.
        </>
      }
      primaryCtaLabel="Get My Free Assessment"
      trustSlot={<TrustList />}
      image="/images/project-types/house-extensions.jpg"
      imageAlt="A completed rear extension with glass roof lantern and bifold doors"
      imageCaption="A recent rear extension project"
      eyebrowAccent
    />
  );
}
