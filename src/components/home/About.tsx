import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { aboutCopy } from "@/lib/content";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" tight className={styles.section}>
      <Reveal>
        <div className={styles.layout}>
          <div className={styles.heading}>
            <p className="eyebrow">{aboutCopy.eyebrow}</p>
            <h2 className={styles.title}>{aboutCopy.title}</h2>
          </div>
          <div className={styles.body}>
            {aboutCopy.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
