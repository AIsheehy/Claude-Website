import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
  primaryCtaLabel = "Get My Free Assessment Or Project Quote",
  trustSlot,
  formEyebrow = "Free, no-obligation assessment",
  formTitle = "Tell us about your project",
  formLede = "We’ll give you an honest read on what’s achievable before you spend a pound on drawings.",
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  primaryCtaLabel?: string;
  trustSlot?: ReactNode;
  formEyebrow?: string;
  formTitle?: string;
  formLede?: string;
}) {
  return (
    <section className={styles.hero}>
      <GridTexture className={styles.grid} />
      <HouseElevation className={styles.houseArt} />

      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
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

            {trustSlot}
          </div>

          <div className={styles.formPanel} id="enquire">
            <div className={styles.formCard}>
              <p className={styles.formEyebrow}>{formEyebrow}</p>
              <h2 className={styles.formTitle}>{formTitle}</h2>
              <p className={styles.formLede}>{formLede}</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
