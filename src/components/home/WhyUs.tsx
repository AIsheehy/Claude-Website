import { ReactNode } from "react";
import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Differentiator, differentiators as defaultDifferentiators } from "@/lib/differentiators";
import { IconCompass, IconChat, IconDrawing, IconShield } from "@/components/icons";
import { meetMichael } from "@/lib/content";
import styles from "./WhyUs.module.css";

const iconMap = {
  compass: IconCompass,
  chat: IconChat,
  drawing: IconDrawing,
  shield: IconShield,
};

const credentials = [{ icon: IconShield, label: "BSc Building Surveyor" }];

export function WhyUs({
  title = "Why Homeowners Choose Us",
  lede = "A professional, founder-led planning service designed to make the process as straightforward as possible.",
  items = defaultDifferentiators,
}: {
  title?: ReactNode;
  lede?: ReactNode;
  items?: Differentiator[];
}) {
  return (
    <Section id="why-us">
      <SectionHead eyebrow="Why us" title={title} lede={lede} />

      <Reveal className={styles.founderRow}>
        <div className={styles.avatar}>
          <Image
            src="/images/team/michael.jpg"
            alt="Michael, founder of Form & Function London"
            fill
            sizes="84px"
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.founderInfo}>
          <p className={styles.founderName}>{meetMichael.name}</p>
          <p className={styles.founderTitle}>{meetMichael.title}</p>
          <ul className={styles.credentials}>
            {credentials.map((c) => (
              <li key={c.label} className={styles.credential}>
                <span className={styles.credentialIcon}>
                  <c.icon width={13} height={13} />
                </span>
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delay={i * 80} className={styles.revealCard}>
              <div className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon width={24} height={24} />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
