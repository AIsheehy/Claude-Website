"use client";

import { Container } from "@/components/ui/Container";
import { useReveal } from "@/hooks/useReveal";
import { IconClock, IconShield, IconStar } from "@/components/icons";
import styles from "./ServiceStats.module.css";

const items = [
  { icon: IconStar, label: "5-Star Rated On Google" },
  { icon: IconShield, label: "From £995.00" },
  { icon: IconClock, label: "Drawings Ready Within 7 Days" },
];

function StatItem({
  icon: Icon,
  label,
  delay,
}: {
  icon: typeof IconStar;
  label: string;
  delay: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={["reveal", isVisible ? "isVisible" : "", styles.item].filter(Boolean).join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={styles.iconWrap}>
        <Icon width={22} height={22} />
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export function ServiceStats() {
  return (
    <div className={styles.band}>
      <Container>
        <div className={styles.row}>
          {items.map((item, i) => (
            <StatItem key={item.label} {...item} delay={i * 130} />
          ))}
        </div>
      </Container>
    </div>
  );
}
