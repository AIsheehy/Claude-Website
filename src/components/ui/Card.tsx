import { ReactNode } from "react";
import styles from "./Card.module.css";

export function Card({
  children,
  className,
  hoverable = false,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: "div" | "article" | "li";
}) {
  const classes = [styles.card, hoverable && styles.hoverable, className]
    .filter(Boolean)
    .join(" ");
  return <As className={classes}>{children}</As>;
}
