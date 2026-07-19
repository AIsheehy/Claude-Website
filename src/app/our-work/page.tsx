import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/ui/Section";
import { WorkCaseStudy } from "@/components/work/WorkCaseStudy";
import { InlineCta } from "@/components/home/InlineCta";
import { Contact } from "@/components/home/Contact";
import { workProjects } from "@/lib/content";
import styles from "./our-work.module.css";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real planning permission projects we've prepared and submitted for clients across London and the Home Counties — from rear extensions to balcony designs.",
};

export default function OurWorkPage() {
  return (
    <>
      <Section tightBottom>
        <SectionHead
          eyebrow="Our work"
          title="Real projects, real outcomes."
          lede="A closer look at planning applications we've prepared and submitted for clients across London and the Home Counties — from initial advice through to a council decision."
        />
      </Section>

      <Section tight tightBottom>
        <div className={styles.list}>
          {workProjects.map((project) => (
            <WorkCaseStudy key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <InlineCta text="Ready to start your own project? Get your free assessment today." tone="dark" />
      <Contact tone="beige" />
    </>
  );
}
