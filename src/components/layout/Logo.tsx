import styles from "./Logo.module.css";

// Flat geometric "F" mark — a stepped block plus a detached small square,
// traced from the client's brand mark artwork. Solid shapes only, no
// gradients.
function Mark() {
  return (
    <svg className={styles.mark} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M0 0H100V45H44V100H0V0Z" fill="currentColor" />
      <rect x="69" y="70" width="30" height="30" fill="currentColor" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`${styles.logo} ${dark ? styles.dark : ""}`}>
      <Mark />
      <span className={styles.text}>
        Form &amp; Function
        <span className={styles.tag}>London</span>
      </span>
    </span>
  );
}
