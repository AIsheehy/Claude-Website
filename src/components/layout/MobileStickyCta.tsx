import { IconPhone } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./MobileStickyCta.module.css";

export function MobileStickyCta() {
  return (
    <div className={styles.bar}>
      <a href={business.phoneHref} className={styles.call}>
        <IconPhone width={18} height={18} />
        Call
      </a>
      <a href="#enquire" className={styles.enquire}>
        Get My Free Assessment
      </a>
    </div>
  );
}
