import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { CaseStudies } from "@/components/home/CaseStudies";
import { WhyUs } from "@/components/home/WhyUs";
import { Faq } from "@/components/home/Faq";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { InlineCta } from "@/components/home/InlineCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <InlineCta
        text="Not sure which service you need? Get a free assessment and we'll tell you."
        tone="beige"
      />
      <Process />
      <Reviews tightBottom />
      <InlineCta text="Ready for the same result? Let's talk about your project." />
      <CaseStudies />
      <WhyUs dark tightBottom />
      <InlineCta
        text="See how straightforward this can be — get your free assessment today."
        tone="dark"
      />
      <About />
      <Contact tone="beige" />
      <Faq />
    </>
  );
}
