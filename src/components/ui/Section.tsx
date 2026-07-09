import { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

export function Section({
  children,
  id,
  dark = false,
  tight = false,
  className,
}: {
  children: ReactNode;
  id?: string;
  dark?: boolean;
  tight?: boolean;
  className?: string;
}) {
  const classes = [styles.section, dark && styles.dark, tight && styles.tight, className]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={id} className={classes}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={`${styles.head} ${align === "center" ? styles.headCenter : ""}`}>
      {eyebrow && <p className={`eyebrow ${onDark ? "onDark" : ""}`}>{eyebrow}</p>}
      <h2 className={onDark ? styles.titleOnDark : undefined}>{title}</h2>
      {lede && <p className={`${styles.lede} ${onDark ? styles.ledeOnDark : ""}`}>{lede}</p>}
    </div>
  );
}
