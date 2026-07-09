import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost-dark";
  size?: "default" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], size === "lg" && styles.lg, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternalOrTel = href.startsWith("tel:") || href.startsWith("http");
    if (isExternalOrTel) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
