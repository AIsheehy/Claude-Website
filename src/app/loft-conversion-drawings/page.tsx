import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Loft Conversion Drawings",
  description:
    "Professionally designed loft conversion plans tailored to your vision and planning requirements. A complete, done-for-you service from design and drawings to planning approval.",
};

export default function LoftConversionDrawingsPage() {
  return (
    <ServicePageContent
      eyebrow="Loft conversion drawings"
      headline="Professional Loft Conversion Plans"
      lede="Everything you need to get your loft conversion off the ground, from initial design to complete drawings, at one fixed price."
    />
  );
}
