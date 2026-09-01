import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons";
import { testimonials } from "@/lib/content";
import { ReviewGallery } from "./ReviewGallery";
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

export function Reviews({ tightBottom = false }: { tightBottom?: boolean }) {
  return (
    <Section id="reviews" tightBottom={tightBottom}>
      <SectionHead
        eyebrow="Reviews"
        title="What it's actually like to work with us."
        lede="Real projects, genuine feedback and the drawings that helped move them forward."
      />

      <div className={styles.grid}>
        {testimonials.map((t, i) => {
          const approvedBadge = (
            <span className={styles.approvedBadge}>
              <IconCheck width={13} height={13} />
              {t.statusBadge ?? "Planning Approved"}
            </span>
          );
          return (
            <Reveal key={t.name} delay={i * 90} className={styles.revealCard}>
              <article className={styles.card}>
                <div className={styles.textTop}>
                  <Stars />
                  <blockquote
                    className={[styles.quote, t.gallery && styles.quoteCompact].filter(Boolean).join(" ")}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                {t.gallery ? (
                  <ReviewGallery images={t.gallery} overlay={approvedBadge} />
                ) : (
                  <div className={styles.imageWrap}>
                    <Image
                      src={t.image}
                      alt={`Completed project for ${t.name}, ${t.context}`}
                      fill
                      sizes="(min-width: 860px) 33vw, 100vw"
                      className={styles.image}
                    />
                    {approvedBadge}
                  </div>
                )}
                <footer className={styles.footer}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.context}>{t.context}</span>
                </footer>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
