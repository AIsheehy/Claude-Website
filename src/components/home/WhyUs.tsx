import { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Differentiator, differentiators as defaultDifferentiators } from "@/lib/differentiators";
import styles from "./WhyUs.module.css";

export function WhyUs({
  title = "Built to remove the risk, not just the paperwork.",
  lede = "Most of what people fear about planning permission comes from not knowing who's actually handling their case, or whether the advice they're getting is honest. Here's how we deal with both.",
  items = defaultDifferentiators,
  alt = false,
}: {
  title?: ReactNode;
  lede?: ReactNode;
  items?: Differentiator[];
  alt?: boolean;
}) {
  return (
    <Section id="why-us" className={alt ? styles.alt : undefined}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className="eyebrow">Why us</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.lede}>{lede}</p>
        </div>

        <ol className={styles.list}>
          {items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 80}>
                <div className={styles.row}>
                  <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                    <p className={styles.rowDescription}>{item.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
