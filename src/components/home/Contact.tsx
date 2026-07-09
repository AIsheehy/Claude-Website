import { EnquiryForm } from "./EnquiryForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconPhone, IconMail, IconCheck, IconClock, IconShield } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./Contact.module.css";

const closingStats = [
  { icon: IconCheck, value: "98%", label: "Application approval rate" },
  { icon: IconClock, value: "14 Days", label: "To submission from instruction" },
  { icon: IconShield, value: "Founder-Led", label: "You deal with Michael directly" },
];

export function Contact() {
  return (
    <Section id="contact" dark>
      <Reveal className={styles.layout}>
        <div className={styles.copy}>
          <p className="eyebrow onDark">Ready when you are</p>
          <h2 className={styles.title}>Let&rsquo;s get your project moving.</h2>
          <p className={styles.lede}>
            No obligation, no jargon and no pressure &mdash; just a straight, honest answer on
            what&rsquo;s achievable, usually within hours, direct from the person who&rsquo;ll
            actually handle your application.
          </p>

          <ul className={styles.statRow}>
            {closingStats.map((s) => (
              <li key={s.label} className={styles.statItem}>
                <s.icon width={18} height={18} />
                <div>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.directList}>
            <a href={business.phoneHref} className={styles.directItem}>
              <IconPhone width={18} height={18} />
              {business.phone}
            </a>
            <a href={`mailto:${business.email}`} className={styles.directItem}>
              <IconMail width={18} height={18} />
              {business.email}
            </a>
          </div>
        </div>

        <div className={styles.formCard}>
          <p className={styles.formEyebrow}>No obligation &middot; no pressure</p>
          <h3 className={styles.formTitle}>Get your free assessment</h3>
          <EnquiryForm compact />
        </div>
      </Reveal>
    </Section>
  );
}
