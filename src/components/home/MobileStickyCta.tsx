import { Button } from "@/components/ui/Button";
import styles from "./MobileStickyCta.module.css";

export function MobileStickyCta({ label = "Get My Free Planning Assessment" }: { label?: string }) {
  return (
    <>
      {/* Reserves the layout space the fixed bar below occupies, so it
          never covers the footer/contact details at the bottom of the
          page. */}
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.bar}>
        <Button href="#enquire" size="lg" className={styles.cta}>
          {label}
        </Button>
      </div>
    </>
  );
}
