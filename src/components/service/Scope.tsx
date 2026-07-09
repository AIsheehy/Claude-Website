import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectTypes } from "./ProjectTypes";
import { Inclusions } from "./Inclusions";
import styles from "./Scope.module.css";

export function Scope() {
  return (
    <Section id="scope" className={styles.section}>
      <SectionHead
        eyebrow="What's covered"
        title="Everything you need for planning approval, at one fixed price."
      />

      <Reveal>
        <h3 className={styles.heading}>Types of project we handle</h3>
        <ProjectTypes />
      </Reveal>

      <Reveal delay={80} className={styles.inclusionsBlock}>
        <h3 className={styles.heading}>What&rsquo;s included</h3>
        <Inclusions />
      </Reveal>
    </Section>
  );
}
