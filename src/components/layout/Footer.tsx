import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { IconPhone, IconMail, IconPin } from "@/components/icons";
import { business, services, boroughs } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo dark />
            <p className={styles.tagline}>
              End-to-end planning permission for London and Home Counties homeowners, landlords
              and property investors.
            </p>
            <ul className={styles.contactList}>
              <li>
                <a href={business.phoneHref}>
                  <IconPhone width={16} height={16} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>
                  <IconMail width={16} height={16} />
                  {business.email}
                </a>
              </li>
              <li>
                <IconPin width={16} height={16} />
                {business.addressFull}
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Services</p>
            <ul className={styles.linkList}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Areas we cover</p>
            <ul className={styles.linkList}>
              {boroughs.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colHeading}>Hours</p>
            <ul className={styles.linkList}>
              {business.hours.map((h) => (
                <li key={h.days}>
                  {h.days}
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className={styles.legalNote}>Founder-led &middot; Professional indemnity insured</p>
        </div>
      </Container>
    </footer>
  );
}
