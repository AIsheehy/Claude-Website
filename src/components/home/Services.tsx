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
  "We provide professional planning and architectural design services to help take your project from initial idea to approval.",
];

export function Services({
  emphasis = "Planning Applications",
  ledeParagraphs = defaultLedeParagraphs,
}: {
  emphasis?: string;
  ledeParagraphs?: ReactNode[];
}) {
  const headline = (
    <>
      We take the stress out of <em className={styles.emphasis}>{emphasis}</em>
    </>
  );

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

      {/* Desktop: flat grid */}
      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 60}>
              <div className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon width={22} height={22} />
                </span>
                <span className={styles.cardTitle}>{service.shortName}</span>
                <span className={styles.cardDescription}>{service.description}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Mobile: swipeable carousel (no Reveal wrapper — see Reviews/WhyUs
          for why: it re-triggers via IntersectionObserver as cards scroll
          into the horizontally clipped viewport, making them visibly
          lift/fade mid-swipe). */}
      <div className={styles.mobileCarousel}>
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div key={service.slug} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon width={22} height={22} />
              </span>
              <span className={styles.cardTitle}>{service.shortName}</span>
              <span className={styles.cardDescription}>{service.description}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
