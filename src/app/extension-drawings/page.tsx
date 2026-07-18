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
      headline="Enhance Your Home with Professional Extension Plans & Drawings Tailored To Your Vision And Planning Requirements."
      lede="Complete Done For You Service — From Design To Drawings To Planning Application So You Can Move Forward With Clarity, Confidence & The Highest Chance of Success."
    />
  );
}
