import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevronDown } from "@/components/icons";
import { faqs } from "@/lib/content";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <Section id="faq" className={styles.section}>
      <SectionHead
        eyebrow="Frequently asked"
        title="The questions people actually ask us."
        align="center"
      />

      <div className={styles.list}>
        {faqs.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 4) * 60}>
            <details className={styles.item} name="faq">
              <summary className={styles.summary}>
                <span>{item.question}</span>
                <IconChevronDown width={18} height={18} className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
