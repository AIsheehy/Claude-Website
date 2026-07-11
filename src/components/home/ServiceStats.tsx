"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useReveal } from "@/hooks/useReveal";
import { IconCheck, IconClock, IconStar } from "@/components/icons";
import styles from "./ServiceStats.module.css";

const items = [
  { icon: IconCheck, value: 98, suffix: "%", label: "Application approval rate" },
  { icon: IconClock, value: 14, suffix: " Days", label: "From survey to submission" },
  { icon: IconStar, value: 5, suffix: "★", label: "Rating on Google" },
];

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
}: {
  icon: typeof IconCheck;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const count = useCountUp(value, isVisible);

  return (
    <div
      ref={ref}
      className={["reveal", isVisible ? "isVisible" : "", styles.item].filter(Boolean).join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={styles.iconWrap}>
        <Icon width={22} height={22} />
      </span>
      <span className={styles.value}>
        {count}
        {suffix}
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
