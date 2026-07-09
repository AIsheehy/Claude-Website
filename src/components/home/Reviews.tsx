import { Section, SectionHead } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";
import styles from "./Reviews.module.css";

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
          <path d="M10 1.5l2.55 5.4 5.95.62-4.45 4.06 1.2 5.87L10 14.9l-5.25 2.55 1.2-5.87L1.5 7.52l5.95-.62L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews">
      <SectionHead
        eyebrow="Reviews"
        title="What it's actually like to work with us."
        lede="Feedback from clients we've helped get their projects approved."
      />

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <Card className={styles.card}>
              <Stars />
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className={styles.footer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.context}>{t.context}</span>
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
