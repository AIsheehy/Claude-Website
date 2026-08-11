import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconShield, IconCompass, IconChat } from "@/components/icons";
import { meetMichael } from "@/lib/content";
import styles from "./MeetMichael.module.css";

const credentials = [
  { icon: IconShield, label: "Building Surveyor" },
  { icon: IconCompass, label: "Founder-Led" },
  { icon: IconChat, label: "Direct Point of Contact" },
];

export function MeetMichael() {
  return (
    <Section id="about" className={styles.section}>
      <Reveal className={styles.layout}>
        <div className={styles.visual}>
          <div className={styles.avatar}>
            <span className={styles.initials}>M</span>
          </div>
          <ul className={styles.credentials}>
            {credentials.map((c) => (
              <li key={c.label} className={styles.credential}>
                <span className={styles.credentialIcon}>
                  <c.icon width={16} height={16} />
                </span>
                {c.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copy}>
          <p className="eyebrow">{meetMichael.eyebrow}</p>
          <h2 className={styles.title}>{meetMichael.title}</h2>
          <div className={styles.body}>
            {meetMichael.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
