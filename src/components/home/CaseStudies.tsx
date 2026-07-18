import { Section, SectionHead } from "@/components/ui/Section";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  return (
    <Section id="case-studies" className={styles.section}>
      <SectionHead
        eyebrow="Case studies"
        title="Real applications, real outcomes."
        lede="A snapshot of the kind of projects we take from advice through to decision."
      />

      <div className={styles.featured}>
        <FeaturedCaseStudy />
      </div>
    </Section>
  );
}
