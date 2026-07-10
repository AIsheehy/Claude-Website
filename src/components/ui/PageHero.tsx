import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/home/EnquiryForm";
import { GridTexture } from "@/components/blueprint/GridTexture";
import { HouseElevation } from "@/components/blueprint/HouseElevation";
import { IconPhone } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./PageHero.module.css";

export function PageHero({
  eyebrow,
  headline,
  lede,
  primaryCtaLabel = "Get My Free Assessment",
  trustSlot,
  formEyebrow = "Free, no-obligation assessment",
  formTitle = "Tell us about your project",
  formLede = "We’ll give you an honest read on what’s achievable before you spend a pound on drawings.",
  image,
  imageAlt = "A completed extension project",
  imageCaption,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  primaryCtaLabel?: string;
  trustSlot?: ReactNode;
  formEyebrow?: string;
  formTitle?: string;
  formLede?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}) {
  return (
    <section className={styles.hero}>
      <GridTexture className={styles.grid} />
      {!image && <HouseElevation className={styles.houseArt} />}

      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.content}>
            <p className="eyebrow">{eyebrow}</p>
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

            {image && (
              <div className={styles.photoCard}>
                <div className={styles.photoFrame}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 960px) 420px, 100vw"
                    className={styles.photoFrameImg}
                  />
                </div>
                {imageCaption && <p className={styles.photoCaption}>{imageCaption}</p>}
              </div>
            )}

            {trustSlot}
          </Reveal>

          <Reveal className={styles.formPanel} delay={120}>
            <div id="enquire" className={styles.formCard}>
              <p className={styles.formEyebrow}>{formEyebrow}</p>
              <h2 className={styles.formTitle}>{formTitle}</h2>
              <p className={styles.formLede}>{formLede}</p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
