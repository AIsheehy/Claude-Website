import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Extension Drawings",
  description:
    "Design, drawings and complete planning application packages for your home extension — from initial feasibility advice through to submission, at one fixed price.",
};

export default function ExtensionDrawingsPage() {
  return (
    <ServicePageContent
      eyebrow="Extension advice, drawings and complete application packages."
      headline="Extensions, Made Simple"
      lede="Whether you're exploring ideas or ready to apply, our extension expertise will help you move forward with confidence. From professional drawings to complete extension submissions, everything is tailored to your project and delivered at one fixed price."
      heroCtaLabel="Get A Free Extension Assessment"
      heroCtaNote={{
        line1: "Do I need an Extension? What is involved? What will it cost? How long will it take?",
        line2: "Find out for free with a no obligation extension assessment.",
      }}
      servicesHeadline="Extension Projects Don't Have to Be Complicated"
      servicesLedeParagraphs={[
        "Red tape, ambiguous rules and complex application requirements. Extension projects can be complicated. But it doesn't have to be.",
        "We use our experience and know how to cut through the noise, taking the stress out of extension projects and getting our clients' projects off the ground from day one. Our services include:",
      ]}
    />
  );
}
