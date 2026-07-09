import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { CaseStudies } from "@/components/home/CaseStudies";
import { WhyUs } from "@/components/home/WhyUs";
import { Faq } from "@/components/home/Faq";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Reviews />
      <CaseStudies />
      <WhyUs />
      <About />
      <Contact />
      <Faq />
    </>
  );
}
