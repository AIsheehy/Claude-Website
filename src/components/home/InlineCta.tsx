import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./InlineCta.module.css";

export function InlineCta({
  text = "Ready to find out what's possible for your project?",
  ctaLabel = "Get My Free Assessment",
}: {
  text?: string;
  ctaLabel?: string;
}) {
  return (
    <div className={styles.band}>
      <Container>
        <Reveal className={styles.row}>
          <p className={styles.text}>{text}</p>
          <Button href="#enquire">{ctaLabel}</Button>
        </Reveal>
      </Container>
    </div>
  );
}
