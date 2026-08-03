import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Extension Drawings",
  description:
    "Enhance your home with professional extension plans and drawings tailored to your vision and planning requirements. A complete, done-for-you service from design to drawings to planning application.",
};

export default function ExtensionDrawingsPage() {
  return (
    <ServicePageContent
      eyebrow="Extension drawings"
      headline="Professional Home Extension Plans"
      lede="Everything you need to get your extension off the ground, from initial design to complete drawings, at one fixed price."
      servicesEmphasis="Home Extensions"
    />
  );
}
