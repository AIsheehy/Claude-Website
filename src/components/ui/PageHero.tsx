import { ReactNode } from "react";
import Image from "next/image";
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
  eyebrowAccent = false,
  graphic = false,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  primaryCtaLabel?: string;
  ctaNote?: { line1: string; line2: string };
  trustSlot?: ReactNode;
  eyebrowAccent?: boolean;
  graphic?: boolean;
}) {
  return (
    <section className={styles.hero}>
      <Container size={graphic ? "wide" : "default"}>
        <div className={[styles.layout, graphic && styles.layoutGraphic].filter(Boolean).join(" ")}>
          <Reveal className={styles.content}>
            <p className={["eyebrow", eyebrowAccent && styles.eyebrowAccent].filter(Boolean).join(" ")}>
              {eyebrow}
            </p>
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

            {ctaNote && (
              <div className={styles.ctaNote}>
                <p>{ctaNote.line1}</p>
                <p className={styles.ctaNoteMuted}>{ctaNote.line2}</p>
              </div>
            )}
          </Reveal>

          {graphic && (
            <Reveal className={styles.graphicCol} delay={120}>
              <Image
                src="/images/hero/hero-illustration.jpg"
                alt="Illustration of a house extension in cross-section, with proposed floor plan and rear elevation drawings"
                width={1200}
                height={1156}
                className={styles.graphicSvg}
                priority
              />
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
