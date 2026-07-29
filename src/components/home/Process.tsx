import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconCompass, IconDrawing, IconSend, IconCheck } from "@/components/icons";
import { processSteps } from "@/lib/content";
import styles from "./Process.module.css";

const iconMap = {
  compass: IconCompass,
  drawing: IconDrawing,
  send: IconSend,
  check: IconCheck,
};

export function Process({ tightBottom = false }: { tightBottom?: boolean }) {
  return (
    <Section id="process" dark tight tightBottom={tightBottom}>
      <Reveal className={styles.head}>
        <p className={styles.eyebrow}>How it works</p>
        <h2 className={styles.title}>A simple four-step process from enquiry to approval.</h2>
      </Reveal>

      <div className={styles.roadmap}>
        {processSteps.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.step} delay={i * 90} className={styles.step}>
              <span className={styles.stepLine} />
              <span className={styles.iconWrap}>
                <Icon width={25} height={25} />
              </span>
              <div className={styles.stepContent}>
                <div className={styles.stepHead}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                </div>
                <p className={styles.stepDescription}>{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
