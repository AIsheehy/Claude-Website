import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./InlineCta.module.css";

export function InlineCta({
  heading,
  text = "Ready to find out what's possible for your project?",
  ctaLabel = "Get in Touch",
  tone = "white",
}: {
  heading?: ReactNode;
  text?: string;
  ctaLabel?: string;
  tone?: "white" | "beige" | "dark";
}) {
  return (
    <div
      className={[
        styles.band,
        tone === "beige" && styles.beige,
        tone === "dark" && styles.dark,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>
        <Reveal className={styles.row}>
          <div className={styles.copy}>
            {heading && (
              <p className={[styles.heading, tone === "dark" && styles.headingOnDark].filter(Boolean).join(" ")}>
                {heading}
              </p>
            )}
            <p
              className={[
                heading ? styles.textSecondary : styles.text,
                tone === "dark" && (heading ? styles.textSecondaryOnDark : styles.textOnDark),
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {text}
            </p>
          </div>
          <Button href="#enquire">{ctaLabel}</Button>
        </Reveal>
      </Container>
    </div>
  );
}
