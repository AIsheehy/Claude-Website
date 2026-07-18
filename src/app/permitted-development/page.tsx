import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Permitted Development Applications",
  description:
    "Secure permitted development approval without the fear of refusal, delays or costly mistakes. A complete, done-for-you service from design to drawings to Lawful Development Certificate.",
};

export default function PermittedDevelopmentPage() {
  return (
    <ServicePageContent
      eyebrow="Permitted development applications"
      headline="Secure Permitted Development Approval Without The Fear Of Refusal, Delays Or Costly Mistakes."
      lede="Complete Done For You Service — From Design To Drawings To Lawful Development Certificate So You Can Move Forward With Clarity, Confidence & The Highest Chance of Success."
    />
  );
}
