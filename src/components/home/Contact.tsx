import { EnquiryForm } from "./EnquiryForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconPhone, IconMail, IconChat, IconClock, IconShield } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./Contact.module.css";

const closingStats = [
  { icon: IconClock, label: "Response Within Hours" },
  { icon: IconChat, label: "Advice From Professionals" },
  { icon: IconShield, label: "No Obligation or Marketing Emails" },
];

const explainPoints = [
  "The type of permission you require (if any)",
  "The process of getting there",
  "Any specific local rules in your area",
  "What the likely timeline will be",
  "What the likely costs will be",
  "How to get started",
];

export function Contact({ tone = "dark" }: { tone?: "dark" | "beige" }) {
  const beige = tone === "beige";
  return (
    <Section id="contact" dark={!beige} className={beige ? styles.beige : undefined}>
      <Reveal className={styles.layout}>
        <div className={styles.copy}>
          <p className={beige ? "eyebrow" : "eyebrow onDark"}>Ready when you are</p>
          <h2 className={[styles.title, beige && styles.titleBeige].filter(Boolean).join(" ")}>
            Get Your Free Planning Assessment
          </h2>
          <p className={[styles.lede, beige && styles.ledeBeige].filter(Boolean).join(" ")}>
            Tell us a little about your project and we will explain:
          </p>
          <ul className={[styles.explainList, beige && styles.explainListBeige].filter(Boolean).join(" ")}>
            {explainPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className={[styles.lede, beige && styles.ledeBeige].filter(Boolean).join(" ")}>
            You&rsquo;ll receive clear, honest advice and a fixed quotation directly from the
            person who&rsquo;ll manage your project from start to finish.
          </p>

          <ul className={[styles.statRow, beige && styles.statRowBeige].filter(Boolean).join(" ")}>
            {closingStats.map((s) => (
              <li key={s.label} className={styles.statItem}>
                <s.icon width={18} height={18} className={beige ? styles.statIconBeige : undefined} />
                <span className={[styles.statLabel, beige && styles.statLabelBeige].filter(Boolean).join(" ")}>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div id="enquire" className={styles.formCard}>
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
