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
          And that is what we aim to establish from the very start. We don&rsquo;t think
          planning permission should ever feel like a gamble.
        </p>
        <p className={styles.lede}>
          We build out every client&rsquo;s application around three principles: a clear
          planning strategy from day one, a design that aligns with policy (not fights against
          it), and a proposal that is actually viable in the real world. So whatever stage your
          project is at, we&rsquo;re here to help get it started.
        </p>
      </div>

      {/* Desktop: services grouped into 3 columns */}
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

      {/* Mobile: every service as its own card in a swipeable carousel,
          same pattern as the Reviews carousel. */}
      <div className={styles.mobileCarousel}>
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Link key={service.slug} href="#enquire" className={styles.mobileCard}>
              <span className={styles.iconWrap}>
                <Icon width={18} height={18} />
              </span>
              <span className={styles.rowTitle}>{service.shortName}</span>
              <span className={styles.rowSummary}>{service.summary}</span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
