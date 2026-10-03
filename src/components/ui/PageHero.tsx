import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconPhone } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./PageHero.module.css";

export function PageHero({
  eyebrow,
  headline,
  lede,
  primaryCtaLabel = "Get in Touch",
  ctaNote,
  trustSlot,
  formSlot,
  eyebrowAccent = false,
}: {
  eyebrow?: string;
  headline: ReactNode;
  lede: ReactNode;
  primaryCtaLabel?: string;
  ctaNote?: { line1: string; line2?: string };
  trustSlot?: ReactNode;
  /** Renders the enquiry form inline, above the fold — stacked under the
   *  cta note on mobile, and beside the content on desktop. */
  formSlot?: ReactNode;
  eyebrowAccent?: boolean;
}) {
  return (
    <section className={styles.hero}>
      <Container size={formSlot ? "wide" : "default"}>
        <div className={[styles.layout, formSlot && styles.layoutWithForm].filter(Boolean).join(" ")}>
          <Reveal className={styles.content}>
            {eyebrow && (
              <p className={["eyebrow", eyebrowAccent && styles.eyebrowAccent].filter(Boolean).join(" ")}>
                {eyebrow}
              </p>
            )}
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.lede}>{lede}</p>

            <div className={styles.ctaRow}>
              <Button href="#enquire" size="lg">
                {primaryCtaLabel}
              </Button>
              <a href={business.phoneHref} className={styles.phoneLink}>
                <IconPhone width={18} height={18} />
                {business.phone}
              </a>
            </div>

            {/* Mobile-only stand-in for the CTA button above — on a small
                screen the form sits right below, so a full button here would
                just duplicate it; a plain subheading carries the same copy
                without implying a second, different action. */}
            {formSlot && <p className={styles.ctaSubheading}>{primaryCtaLabel}</p>}

            {ctaNote && (
              <div className={styles.ctaNote}>
                <p>{ctaNote.line1}</p>
                {ctaNote.line2 && <p className={styles.ctaNoteMuted}>{ctaNote.line2}</p>}
              </div>
            )}
          </Reveal>

          {formSlot && (
            <Reveal className={styles.formCol} delay={80}>
              {formSlot}
            </Reveal>
          )}
        </div>

        {/* Rendered without Reveal — it's already above the fold on every
            page, so a scroll-triggered fade would just make it visibly pop
            in a beat after the rest of the hero instead of loading with it. */}
        {trustSlot}
      </Container>
    </section>
  );
}
