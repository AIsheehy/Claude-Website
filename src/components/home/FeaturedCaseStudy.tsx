import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons";
import { featuredCaseStudy as cs } from "@/lib/content";
import styles from "./FeaturedCaseStudy.module.css";

export function FeaturedCaseStudy() {
  return (
    <Reveal>
      <div className={styles.card}>
        <div className={styles.intro}>
          <p className="eyebrow">{cs.location} &middot; real result</p>
          <h3>{cs.title}</h3>
          <p className={styles.summary}>{cs.summary}</p>
          <span className={styles.outcome}>
            <IconCheck width={14} height={14} />
            {cs.outcome}
          </span>
        </div>

        <div className={styles.beforeAfter}>
          <div className={styles.photoWrap}>
            <Image
              src={cs.before}
              alt="The property before works began"
              fill
              sizes="(min-width: 720px) 50vw, 100vw"
              className={styles.photo}
            />
            <span className={styles.photoLabel}>Before</span>
          </div>
          <div className={styles.photoWrap}>
            <Image
              src={cs.after}
              alt="The completed extension and refurbishment"
              fill
              sizes="(min-width: 720px) 50vw, 100vw"
              className={styles.photo}
            />
            <span className={styles.photoLabel}>After</span>
          </div>
        </div>

        <div className={styles.proof}>
          <div className={styles.proofItem}>
            <div className={styles.proofPhotoWrap}>
              <Image
                src={cs.drawings}
                alt="Architectural elevation and floor plan drawings prepared for the application"
                fill
                sizes="(min-width: 720px) 50vw, 100vw"
                className={styles.proofPhoto}
              />
            </div>
            <p className={styles.proofCaption}>The drawings prepared for the application.</p>
          </div>
          <div className={styles.proofItem}>
            <div className={styles.proofPhotoWrap}>
              <Image
                src={cs.approvalLetter}
                alt="The council's decision notice granting full planning permission (applicant details redacted)"
                fill
                sizes="(min-width: 720px) 50vw, 100vw"
                className={styles.proofPhoto}
              />
            </div>
            <p className={styles.proofCaption}>
              The council&rsquo;s decision notice &mdash; applicant details redacted.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
