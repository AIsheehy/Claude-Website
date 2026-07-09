import { EnquiryForm } from "./EnquiryForm";
import { Section } from "@/components/ui/Section";
import { IconPhone, IconMail } from "@/components/icons";
import { business } from "@/lib/content";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" dark>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className="eyebrow onDark">Ready when you are</p>
          <h2 className={styles.title}>Let&rsquo;s find out what&rsquo;s possible.</h2>
          <p className={styles.lede}>
            Tell us about your property and what you&rsquo;re hoping to do. We&rsquo;ll give you
            a straight, no-obligation read on what&rsquo;s achievable — then handle everything
            else if you&rsquo;d like us to.
          </p>
          <div className={styles.directList}>
            <a href={business.phoneHref} className={styles.directItem}>
              <IconPhone width={18} height={18} />
              {business.phone}
            </a>
            <a href={`mailto:${business.email}`} className={styles.directItem}>
              <IconMail width={18} height={18} />
              {business.email}
            </a>
          </div>
        </div>

        <div className={styles.formCard}>
          <EnquiryForm compact />
        </div>
      </div>
    </Section>
  );
}
