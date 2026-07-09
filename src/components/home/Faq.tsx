import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevronDown } from "@/components/icons";
import { faqs as defaultFaqs, FaqItem } from "@/lib/content";
import styles from "./Faq.module.css";

export function Faq({
  items = defaultFaqs,
  title = "The questions people actually ask us.",
  groupName = "faq",
}: {
  items?: FaqItem[];
  title?: string;
  groupName?: string;
}) {
  return (
    <Section id="faq" className={styles.section}>
      <SectionHead eyebrow="Frequently asked" title={title} align="center" />

      <div className={styles.list}>
        {items.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 4) * 60}>
            <details className={styles.item} name={groupName}>
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
