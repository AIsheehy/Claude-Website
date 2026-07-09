import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { IconCheck, IconPin } from "@/components/icons";
import { caseStudies } from "@/lib/content";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  return (
    <Section id="case-studies" className={styles.section}>
      <SectionHead
        eyebrow="Case studies"
        title="Real applications, real outcomes."
        lede="A snapshot of the kind of projects we take from advice through to decision."
      />

      <div className={styles.featured}>
        <FeaturedCaseStudy />
      </div>

      <div className={styles.grid}>
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 90}>
            <article className={styles.card}>
              {cs.image && (
                <div className={styles.imageWrap}>
                  <Image
                    src={cs.image}
                    alt={cs.imageCaption || cs.title}
                    fill
                    sizes="(min-width: 860px) 50vw, 100vw"
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.body}>
                <p className={styles.location}>
                  <IconPin width={14} height={14} />
                  {cs.location}
                </p>
                <h3 className={styles.title}>{cs.title}</h3>
                <p className={styles.summary}>{cs.summary}</p>
                {cs.imageCaption && <p className={styles.imageCaption}>{cs.imageCaption}</p>}
                <p className={styles.outcome}>
                  <IconCheck width={15} height={15} />
                  {cs.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
