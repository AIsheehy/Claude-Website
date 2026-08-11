import { ReactNode } from "react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Differentiator, differentiators as defaultDifferentiators } from "@/lib/differentiators";
import { IconCompass, IconChat, IconDrawing, IconShield, IconScale } from "@/components/icons";
import styles from "./WhyUs.module.css";

const iconMap = {
  compass: IconCompass,
  chat: IconChat,
  drawing: IconDrawing,
  shield: IconShield,
  scale: IconScale,
};

export function WhyUs({
  title = "Why Homeowners Choose Us",
  lede = "A professional, fixed-price planning service designed to make the process as straightforward as possible.",
  items = defaultDifferentiators,
  dark = false,
}: {
  title?: ReactNode;
  lede?: ReactNode;
  items?: Differentiator[];
  dark?: boolean;
}) {
  return (
    <Section id="why-us" dark={dark}>
      <SectionHead eyebrow="Why us" title={title} lede={lede} onDark={dark} />

      <div className={styles.grid}>
        {items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delay={i * 80} className={styles.revealCard}>
              <div className={[styles.card, dark && styles.cardOnDark].filter(Boolean).join(" ")}>
                <span className={[styles.iconWrap, dark && styles.iconWrapOnDark].filter(Boolean).join(" ")}>
                  <Icon width={24} height={24} />
                </span>
                <h3 className={[styles.cardTitle, dark && styles.cardTitleOnDark].filter(Boolean).join(" ")}>
                  {item.title}
                </h3>
                <p
                  className={[styles.cardDescription, dark && styles.cardDescriptionOnDark]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
