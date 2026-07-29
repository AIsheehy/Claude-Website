"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { IconChevronDown, IconPhone } from "@/components/icons";
import { business, navLinks, servicesPages } from "@/lib/content";
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
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className={styles.navItem}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <IconChevronDown width={13} height={13} className={styles.navChevron} />
                  </Link>
                  <div className={styles.dropdown}>
                    {servicesPages.map((service) => (
                      <Link key={service.href} href={service.href} className={styles.dropdownLink}>
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className={styles.actions}>
            <a href={business.phoneHref} className={styles.phone}>
              <IconPhone width={16} height={16} />
              <span>{business.phone}</span>
            </a>
            <Button href="#enquire" variant="primary" className={styles.cta}>
              Get in Touch
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
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.label === "Services" && (
                    <div className={styles.mobileSubNav}>
                      {servicesPages.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={styles.mobileSubNavLink}
                          onClick={() => setOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={business.phoneHref} className={styles.mobilePhone}>
                <IconPhone width={18} height={18} />
                {business.phone}
              </a>
              <Button href="#enquire" variant="primary" className={styles.mobileCta}>
                Get in Touch
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
