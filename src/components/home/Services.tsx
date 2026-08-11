import { ReactNode } from "react";
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
  IconLayers,
  IconDocument,
} from "@/components/icons";
import { services, Service } from "@/lib/content";
import styles from "./Services.module.css";

const iconMap = {
  compass: IconCompass,
  shield: IconShield,
  scale: IconScale,
  ruler: IconRuler,
  drawing: IconDrawing,
  house: IconHouse,
  roof: IconRoof,
  layers: IconLayers,
  document: IconDocument,
};

const defaultLedeParagraphs: ReactNode[] = [
  "We provide professional planning and architectural design services to help take your project from initial idea to approval.",
];

export function Services({
  headline,
  emphasis = "Planning Applications",
  ledeParagraphs = defaultLedeParagraphs,
}: {
  headline?: ReactNode;
  emphasis?: string;
  ledeParagraphs?: ReactNode[];
}) {
  const resolvedHeadline = headline ?? (
    <>
      We take the stress out of <em className={styles.emphasis}>{emphasis}</em>
    </>
  );

  return (
    <Section id="services" tightBottom className={styles.section}>
      <SectionHead eyebrow="What we do" title={resolvedHeadline} />
      <div className={styles.intro}>
        {ledeParagraphs.map((paragraph, i) => (
          <p key={i} className={styles.lede}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.grid}>
        {services.map((service: Service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 60}>
              <div className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon width={24} height={24} />
                </span>
                <span className={styles.cardTitle}>{service.shortName}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
