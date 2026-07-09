import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { approvalPrinciples } from "@/lib/content";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <Section id="approach" tight className={styles.section}>
      <SectionHead
        eyebrow="Our approach"
        title="Every successful application comes down to three things."
        lede="Getting these right from the first conversation is how we keep applications out of guesswork."
      />

      <div className={styles.grid}>
        {approvalPrinciples.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className={styles.item}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
