import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost-dark";
  className?: string;
};

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

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

  return <button className={classes}>{children}</button>;
}
