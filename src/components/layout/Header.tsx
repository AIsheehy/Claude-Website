"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { IconPhone } from "@/components/icons";
import { business, navLinks } from "@/lib/content";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={business.phoneHref} className={styles.phone}>
              <IconPhone width={16} height={16} />
              <span>{business.phone}</span>
            </a>
            <Button href="/#enquire" variant="primary" className={styles.cta}>
              Free Assessment
            </Button>
          </div>

          <button
            className={styles.burger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.burgerOpen : ""} />
          </button>
        </div>
      </Container>

      {open && (
        <div className={styles.mobileMenu}>
          <Container>
            <nav className={styles.mobileNav} aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href={business.phoneHref} className={styles.mobilePhone}>
                <IconPhone width={18} height={18} />
                {business.phone}
              </a>
              <Button href="/#enquire" variant="primary" className={styles.mobileCta}>
                Get a Free Assessment
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
