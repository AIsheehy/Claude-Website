"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { IconChevronDown, IconPhone } from "@/components/icons";
import { business, navLinks, servicesPages } from "@/lib/content";
import styles from "./Header.module.css";

// Pages that render the full shared section set (Services, How it works,
// Reviews, Contact) via ServicePageContent — everywhere else (currently
// just /our-work) doesn't have those sections to jump to, so anchor links
// there still route to the homepage instead.
const pagesWithSharedSections = ["/", ...servicesPages.map((s) => s.href)];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onSharedSectionsPage = pagesWithSharedSections.includes(pathname);

  const resolvedNavLinks = navLinks.map((link) => ({
    ...link,
    href: onSharedSectionsPage && link.href.startsWith("/#") ? link.href.slice(1) : link.href,
  }));

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {resolvedNavLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.label} className={styles.navItem}>
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
                <Link key={link.label} href={link.href} className={styles.navLink}>
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
              {resolvedNavLinks.map((link) => (
                <div key={link.label}>
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
