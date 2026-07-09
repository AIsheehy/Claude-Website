import { IconCheck } from "@/components/icons";
import { inclusions } from "@/lib/content";
import styles from "./Inclusions.module.css";

export function Inclusions() {
  return (
    <ul className={styles.list}>
      {inclusions.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.iconWrap}>
            <IconCheck width={15} height={15} />
          </span>
          <span className={styles.text}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
