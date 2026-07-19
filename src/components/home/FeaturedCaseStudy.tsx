import { Reveal } from "@/components/ui/Reveal";
import { ImageZoom } from "@/components/ui/ImageZoom";
import { BeforeAfterSlider } from "@/components/service/BeforeAfterSlider";
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

        <div className={styles.items}>
          <div className={styles.item}>
            <BeforeAfterSlider
              before={cs.before}
              after={cs.after}
              beforeAlt="The property before works began"
              afterAlt="The completed extension and refurbishment"
            />
            <p className={styles.dragHint}>Drag to compare</p>
          </div>

          <div className={styles.item}>
            <ImageZoom
              src={cs.drawings}
              alt="Architectural elevation and floor plan drawings prepared for the application"
              sizes="(min-width: 720px) 50vw, 100vw"
              wrapperClassName={styles.proofPhotoWrap}
              imageClassName={styles.proofPhoto}
            />
            <p className={styles.proofCaption}>The drawings prepared for the application. Click to enlarge.</p>
          </div>
          <div className={styles.item}>
            <ImageZoom
              src={cs.approvalLetter}
              alt="The council's decision notice granting full planning permission (applicant details redacted)"
              sizes="(min-width: 720px) 50vw, 100vw"
              wrapperClassName={styles.proofPhotoWrap}
              imageClassName={styles.proofPhoto}
            />
            <p className={styles.proofCaption}>
              The council&rsquo;s decision notice &mdash; applicant details redacted. Click to enlarge.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
