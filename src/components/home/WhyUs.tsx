import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/differentiators";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <Section id="why-us">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className="eyebrow">Why us</p>
          <h2 className={styles.title}>Built to remove the risk, not just the paperwork.</h2>
          <p className={styles.lede}>
            Most of what people fear about planning permission comes from not knowing who&rsquo;s
            actually handling their case, or whether the advice they&rsquo;re getting is honest.
            Here&rsquo;s how we deal with both.
          </p>
        </div>

        <ol className={styles.list}>
          {differentiators.map((item, i) => (
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
