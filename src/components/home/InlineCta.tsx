import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./InlineCta.module.css";

export function InlineCta({
  text = "Ready to find out what's possible for your project?",
  ctaLabel = "Get in Touch",
  tone = "white",
}: {
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
          <p className={[styles.text, tone === "dark" && styles.textOnDark].filter(Boolean).join(" ")}>
            {text}
          </p>
          <Button href="#enquire">{ctaLabel}</Button>
        </Reveal>
      </Container>
    </div>
  );
}
