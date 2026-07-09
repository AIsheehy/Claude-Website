import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";
import styles from "./Process.module.css";

export function Process() {
  return (
    <Section id="process" dark>
      <SectionHead
        eyebrow="How it works"
        onDark
        title="One team. Seven stages. Nothing left for you to manage."
        lede="This is the entire process, start to finish — the same team handles every stage, including every conversation with the council."
      />

      <ol className={styles.timeline}>
        {processSteps.map((item, i) => (
          <li key={item.step} className={styles.item}>
            <Reveal delay={Math.min(i, 5) * 60}>
              <div className={styles.itemInner}>
                <span className={styles.marker}>{item.step}</span>
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
