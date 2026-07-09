import styles from "./Logo.module.css";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`${styles.logo} ${dark ? styles.dark : ""}`}>
      <span className={styles.mark} aria-hidden="true" />
      <span className={styles.text}>
        Form &amp; Function
        <span className={styles.tag}>London</span>
      </span>
    </span>
  );
}
