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
    <Section id="services" tightBottom className={styles.section}>
      <SectionHead
        eyebrow="What we do"
        title="Most homeowners start the process without knowing one critical thing: Will this actually get approved?"
      />
      <div className={styles.intro}>
        <p className={styles.lede}>
          Planning permission shouldn&rsquo;t feel like a gamble. Every successful application
          comes down to three things:
        </p>
        <ul className={styles.ledeList}>
          <li>A clear planning strategy from day one</li>
          <li>A design that aligns with policy (not fights against it)</li>
          <li>A proposal that is actually viable in the real world</li>
        </ul>
        <p className={styles.lede}>
          We help you from whatever stage you are at and work to these principles. So when you
          submit, it&rsquo;s not a guess &mdash; it&rsquo;s a calculated step toward approval.
        </p>
      </div>

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
                        <Link href="#enquire" className={styles.row}>
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
