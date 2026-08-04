import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import styles from "./GuidanceSection.module.css";

export function GuidanceSection({
  eyebrow,
  heading,
  paragraphs,
  ctaLabel,
}: {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  ctaLabel: string;
}) {
  return (
    <Section tight>
      <SectionHead eyebrow={eyebrow} title={heading} align="center" />
      <Reveal className={styles.body} delay={80}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        <Button href="#enquire" size="lg" className={styles.cta}>
          {ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
