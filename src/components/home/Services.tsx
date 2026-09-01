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
  IconGarage,
  IconConservatory,
  IconClock,
  IconTag,
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
  garage: IconGarage,
  conservatory: IconConservatory,
};

const defaultLedeParagraphs: ReactNode[] = [
  "We provide professional planning and architectural design services to help take your project from initial idea to approval.",
];

const trustItems = [
  { icon: IconClock, label: "5+ Years Experience" },
  { icon: IconShield, label: "Fully PI Insured" },
  { icon: IconTag, label: "Fixed Price Packages" },
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
    <Section id="services" className={styles.section}>
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
                  <Icon width={14} height={14} />
                </span>
                <span className={styles.cardTitle}>{service.shortName}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className={styles.trustRow}>
        {trustItems.map((item) => (
          <div key={item.label} className={styles.trustItem}>
            <item.icon width={20} height={20} />
            {item.label}
          </div>
        ))}
      </div>
    </Section>
  );
}
