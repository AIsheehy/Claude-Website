import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "./EnquiryForm";
import { GridTexture } from "@/components/blueprint/GridTexture";
import { HouseElevation } from "@/components/blueprint/HouseElevation";
import { IconPhone, IconShield, IconLayers, IconPin, IconScale } from "@/components/icons";
import { business, trustMarkers } from "@/lib/content";
import styles from "./Hero.module.css";

const iconMap = { shield: IconShield, layers: IconLayers, pin: IconPin, scale: IconScale };

export function Hero() {
  return (
    <section className={styles.hero}>
      <GridTexture className={styles.grid} />
      <HouseElevation className={styles.houseArt} />

      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className="eyebrow">Planning permission, done properly</p>
            <h1 className={styles.headline}>
              Planning permission, handled from first sketch to final decision.
            </h1>
            <p className={styles.lede}>
              We manage the entire process for London homeowners, landlords and property
              investors — advice, survey, drawings, submission and every council query in
              between. You don&rsquo;t have to understand planning permission. That&rsquo;s our
              job.
            </p>

            <div className={styles.ctaRow}>
              <Button href="#enquire" size="lg">
                Get my free feasibility check
              </Button>
              <a href={business.phoneHref} className={styles.phoneLink}>
                <IconPhone width={18} height={18} />
                {business.phone}
              </a>
            </div>

            <ul className={styles.trustList}>
              {trustMarkers.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <li key={item.label} className={styles.trustItem}>
                    <Icon width={18} height={18} />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.formPanel} id="enquire">
            <div className={styles.formCard}>
              <p className={styles.formEyebrow}>Free, no-obligation assessment</p>
              <h2 className={styles.formTitle}>Tell us about your project</h2>
              <p className={styles.formLede}>
                We&rsquo;ll give you an honest read on what&rsquo;s achievable before you spend a
                pound on drawings.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
