import { ReactNode } from "react";
import styles from "./Container.module.css";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const classes = [
    styles.container,
    size === "narrow" && styles.narrow,
    size === "wide" && styles.wide,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{children}</div>;
}
