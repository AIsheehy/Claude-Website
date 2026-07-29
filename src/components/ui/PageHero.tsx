import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconPhone } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./PageHero.module.css";

export function PageHero({
  eyebrow,
  headline,
  lede,
  primaryCtaLabel = "Get in Touch",
  trustSlot,
  eyebrowAccent = false,
  graphic = false,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  primaryCtaLabel?: string;
  trustSlot?: ReactNode;
  eyebrowAccent?: boolean;
  graphic?: boolean;
}) {
  return (
    <section className={styles.hero}>
      <Container size={graphic ? "wide" : "default"}>
        <div className={[styles.layout, graphic && styles.layoutGraphic].filter(Boolean).join(" ")}>
          <div className={styles.content}>
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
          </div>

          {graphic && (
            <div className={styles.graphicCol}>
              <Image
                src="/images/hero/hero-illustration.jpg"
                alt="Illustration of a house extension in cross-section, with proposed floor plan and rear elevation drawings"
                width={1200}
                height={1156}
                className={styles.graphicSvg}
                priority
              />
            </div>
          )}
        </div>

        {trustSlot}
      </Container>
    </section>
  );
}
