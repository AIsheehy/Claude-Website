import { stats } from "@/lib/content";
import styles from "./StatBar.module.css";

export function StatBar() {
  return (
    <dl className={styles.list}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <dt className={styles.value}>{s.value}</dt>
          <dd className={styles.label}>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
