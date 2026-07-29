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
      headline="Permitted Development, Made Simple"
      lede="Everything you need to get your project off the ground, from initial advice to securing your Lawful Development Certificate, at one fixed price."
    />
  );
}
