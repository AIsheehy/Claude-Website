import { ReactNode } from "react";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCompass,
  IconShield,
  IconScale,
  IconRuler,
  IconDrawing,
  IconHouse,
  IconRoof,
} from "@/components/icons";
import { services } from "@/lib/content";
import styles from "./Services.module.css";

const iconMap = {
  compass: IconCompass,
  shield: IconShield,
  scale: IconScale,
  ruler: IconRuler,
  drawing: IconDrawing,
  house: IconHouse,
  roof: IconRoof,
};

const defaultLedeParagraphs: ReactNode[] = [
  <>
    And that is what we aim to establish from the very start. We don&rsquo;t think planning
    permission should ever feel like a gamble.
  </>,
  <>
    We build out every client&rsquo;s application around three principles: a clear planning
    strategy from day one, a design that aligns with policy (not fights against it), and a
    proposal that is actually viable in the real world. So whatever stage your project is at,
    we&rsquo;re here to help get it started.
  </>,
];

export function Services({
  headline = "Most homeowners start the process without knowing one critical thing: Will this actually get approved?",
  ledeParagraphs = defaultLedeParagraphs,
}: {
  headline?: ReactNode;
  ledeParagraphs?: ReactNode[];
}) {
  return (
    <Section id="services" tightBottom className={styles.section}>
      <SectionHead eyebrow="What we do" title={headline} />
      <div className={styles.intro}>
        {ledeParagraphs.map((paragraph, i) => (
          <p key={i} className={styles.lede}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 60}>
              <Link href="#enquire" className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon width={22} height={22} />
                </span>
                <span className={styles.cardTitle}>{service.shortName}</span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
