import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./InlineCta.module.css";

export function InlineCta({
  text = "Ready to find out what's possible for your project?",
  ctaLabel = "Get My Free Assessment",
  tone = "white",
}: {
  text?: string;
  ctaLabel?: string;
  tone?: "white" | "beige";
}) {
  return (
    <div className={[styles.band, tone === "beige" && styles.beige].filter(Boolean).join(" ")}>
      <Container>
        <Reveal className={styles.row}>
          <p className={styles.text}>{text}</p>
          <Button href="#enquire">{ctaLabel}</Button>
        </Reveal>
      </Container>
    </div>
  );
}
