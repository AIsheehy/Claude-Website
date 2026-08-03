import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Planning Permission Applications",
  description:
    "Secure planning permission without the fear of refusal, delays or costly mistakes. A complete, done-for-you service from initial advice to council submission.",
};

export default function PlanningPermissionPage() {
  return (
    <ServicePageContent
      eyebrow="Planning Applications handled from enquiry to approval."
      headline="Planning Permission, Made Simple"
      lede="Everything you need to get your project off the ground, from initial advice to full planning submission, at one fixed price."
      servicesEmphasis="Planning Applications"
    />
  );
}
