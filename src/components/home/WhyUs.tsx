import { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Differentiator, differentiators as defaultDifferentiators } from "@/lib/differentiators";
import { IconLayers, IconArrowRight, IconChat, IconPin, IconClock } from "@/components/icons";
import styles from "./WhyUs.module.css";

const iconMap = {
  layers: IconLayers,
  arrow: IconArrowRight,
  chat: IconChat,
  pin: IconPin,
  clock: IconClock,
};

export function WhyUs({
  title = "Planning permission is complicated. Working with us isn't.",
  lede = "Most homeowners only submit a planning application once. You shouldn't have to become planning experts to get it right. That's why we've built a service that removes uncertainty at every stage getting our clients projects off the ground stress free.",
  items = defaultDifferentiators,
  alt = false,
  dark = false,
  tightBottom = false,
}: {
  title?: ReactNode;
  lede?: ReactNode;
  items?: Differentiator[];
  alt?: boolean;
  dark?: boolean;
  tightBottom?: boolean;
}) {
  return (
    <Section
      id="why-us"
      dark={dark}
      tightBottom={tightBottom}
      className={alt ? styles.alt : undefined}
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={["eyebrow", dark && "onDark"].filter(Boolean).join(" ")}>Why us</p>
          <h2 className={[styles.title, dark && styles.titleOnDark].filter(Boolean).join(" ")}>
            {title}
          </h2>
          <p className={[styles.lede, dark && styles.ledeOnDark].filter(Boolean).join(" ")}>
            {lede}
          </p>
        </div>

        <ol className={styles.list}>
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
            <li key={item.title}>
              <Reveal delay={i * 80} className={styles.revealCard}>
                <div className={[styles.row, dark && styles.rowOnDark].filter(Boolean).join(" ")}>
                  <span className={[styles.iconWrap, dark && styles.iconWrapOnDark].filter(Boolean).join(" ")}>
                    <Icon width={24} height={24} />
                  </span>
                  <div>
                    <h3 className={[styles.rowTitle, dark && styles.rowTitleOnDark].filter(Boolean).join(" ")}>
                      {item.title}
                    </h3>
                    <p className={[styles.rowDescription, dark && styles.rowDescriptionOnDark].filter(Boolean).join(" ")}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
