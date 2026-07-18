import styles from "./Logo.module.css";

// Flat geometric "F" mark — a stepped block plus a detached small square,
// matching the client's brand mark. Solid shapes only, no gradients.
function Mark() {
  return (
    <svg className={styles.mark} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M0 0H24V10H10V18H21V28H10V40H0V0Z" fill="currentColor" />
      <rect x="27" y="30" width="10" height="10" fill="currentColor" />
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
