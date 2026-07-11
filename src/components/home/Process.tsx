import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCompass,
  IconRuler,
  IconDrawing,
  IconDocument,
  IconSend,
  IconChat,
  IconCheck,
} from "@/components/icons";
import { processSteps } from "@/lib/content";
import styles from "./Process.module.css";

const iconMap = {
  compass: IconCompass,
  ruler: IconRuler,
  drawing: IconDrawing,
  document: IconDocument,
  send: IconSend,
  chat: IconChat,
  check: IconCheck,
};

export function Process({ tightBottom = false }: { tightBottom?: boolean }) {
  return (
    <Section id="process" dark tight tightBottom={tightBottom}>
      <SectionHead
        eyebrow="How it works"
        onDark
        title="One team. Seven steps. Nothing left for you to manage."
        lede="The same team handles every stage below, start to finish."
      />

      <div className={styles.grid}>
        {processSteps.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.step} delay={Math.min(i, 5) * 60}>
              <div className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon width={20} height={20} />
                </span>
                <div>
                  <div className={styles.cardHead}>
                    <span className={styles.step}>{item.step}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                  </div>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
