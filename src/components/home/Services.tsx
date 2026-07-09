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
  IconArrowRight,
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

const groups = Array.from(new Set(services.map((s) => s.group)));

export function Services() {
  return (
    <Section id="services" className={styles.section}>
      <SectionHead
        eyebrow="What we do"
        title="Every stage of a planning application, under one roof."
        lede="From a five-minute question to full council submission — pick where you're starting from."
      />

      <div className={styles.groups}>
        {groups.map((group, gi) => (
          <Reveal key={group} delay={gi * 80}>
            <div className={styles.group}>
              <p className={styles.groupTitle}>{group}</p>
              <ul className={styles.list}>
                {services
                  .filter((s) => s.group === group)
                  .map((service) => {
                    const Icon = iconMap[service.icon];
                    return (
                      <li key={service.slug}>
                        <Link href={`/${service.slug}`} className={styles.row}>
                          <span className={styles.iconWrap}>
                            <Icon width={18} height={18} />
                          </span>
                          <span className={styles.rowText}>
                            <span className={styles.rowTitle}>{service.shortName}</span>
                            <span className={styles.rowSummary}>{service.summary}</span>
                          </span>
                          <IconArrowRight width={16} height={16} className={styles.rowArrow} />
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
