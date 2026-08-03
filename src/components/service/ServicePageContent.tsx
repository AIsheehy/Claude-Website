import { ReactNode } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ServiceStats } from "@/components/home/ServiceStats";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { WhyUs } from "@/components/home/WhyUs";
import { Faq } from "@/components/home/Faq";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { InlineCta } from "@/components/home/InlineCta";

// Shared body for every dedicated service landing page (Planning
// Applications, Permitted Development, Loft Conversion Drawings, Extension
// Drawings) — identical to the homepage below the hero. Only the hero
// eyebrow/headline/lede differ page to page.
export function ServicePageContent({
  eyebrow,
  headline,
  lede,
  servicesEmphasis,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  servicesEmphasis: string;
}) {
  return (
    <>
      <Hero eyebrow={eyebrow} headline={headline} lede={lede} />
      <Services emphasis={servicesEmphasis} />
      <ServiceStats />
      <Process tightBottom />
      <InlineCta
        text="Not sure which service you need? Get a free assessment and we'll tell you."
        tone="dark"
      />
      <Reviews tightBottom />
      <InlineCta text="Ready for the same result? Let's talk about your project." />
      <WhyUs dark tightBottom />
      <InlineCta
        text="See how straightforward your project can be by reaching out today."
        tone="dark"
      />
      <Contact tone="beige" />
      <Faq />
      <About />
    </>
  );
}
