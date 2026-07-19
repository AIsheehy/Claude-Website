import { EnquiryForm } from "./EnquiryForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconPhone, IconMail, IconCheck, IconClock, IconShield } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./Contact.module.css";

const closingStats = [
  { icon: IconCheck, value: "100%", label: "PI Insurance Coverage" },
  { icon: IconClock, value: "14 Days", label: "To submission from instruction" },
  { icon: IconShield, value: "Founder-Led", label: "You deal with Michael directly" },
];

export function Contact({ tone = "dark" }: { tone?: "dark" | "beige" }) {
  const beige = tone === "beige";
  return (
    <Section id="contact" dark={!beige} className={beige ? styles.beige : undefined}>
      <Reveal className={styles.layout}>
        <div className={styles.copy}>
          <p className={beige ? "eyebrow" : "eyebrow onDark"}>Ready when you are</p>
          <h2 className={[styles.title, beige && styles.titleBeige].filter(Boolean).join(" ")}>
            Let&rsquo;s get your project moving.
          </h2>
          <p className={[styles.lede, beige && styles.ledeBeige].filter(Boolean).join(" ")}>
            No obligation, no jargon and no pressure &mdash; just a straight, honest answer on
            what&rsquo;s achievable, usually within hours, direct from the person who&rsquo;ll
            actually handle your application.
          </p>

          <ul className={[styles.statRow, beige && styles.statRowBeige].filter(Boolean).join(" ")}>
            {closingStats.map((s) => (
              <li key={s.label} className={styles.statItem}>
                <s.icon width={18} height={18} className={beige ? styles.statIconBeige : undefined} />
                <div>
                  <div className={[styles.statValue, beige && styles.statValueBeige].filter(Boolean).join(" ")}>
                    {s.value}
                  </div>
                  <div className={[styles.statLabel, beige && styles.statLabelBeige].filter(Boolean).join(" ")}>
                    {s.label}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="enquire" className={styles.formCard}>
          <p className={styles.formEyebrow}>No obligation &middot; no pressure</p>
          <h3 className={styles.formTitle}>Get your free assessment</h3>
          <EnquiryForm compact />
        </div>

        <div className={[styles.directList, beige && styles.directListBeige].filter(Boolean).join(" ")}>
          <a
            href={business.phoneHref}
            className={[styles.directItem, beige && styles.directItemBeige].filter(Boolean).join(" ")}
          >
            <IconPhone width={18} height={18} />
            {business.phone}
          </a>
          <a
            href={`mailto:${business.email}`}
            className={[styles.directItem, beige && styles.directItemBeige].filter(Boolean).join(" ")}
          >
            <IconMail width={18} height={18} />
            {business.email}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
