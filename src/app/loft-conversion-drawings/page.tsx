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
      headline="Professionally Designed Loft Conversion Plans Tailored To Your Vision And Planning Requirements."
      lede="Complete Done For You Service — From Design and Drawings To Planning Approval So You Can Move Forward With Clarity, Confidence & The Highest Chance of Success."
    />
  );
}
