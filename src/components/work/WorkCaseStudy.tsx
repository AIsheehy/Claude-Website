import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ImageZoom } from "@/components/ui/ImageZoom";
import { BeforeAfterSlider } from "@/components/service/BeforeAfterSlider";
import { IconCheck, IconHouse } from "@/components/icons";
import { WorkProject } from "@/lib/content";
import styles from "./WorkCaseStudy.module.css";

export function WorkCaseStudy({ project }: { project: WorkProject }) {
  return (
    <Reveal>
      <div className={styles.card}>
        <div className={styles.intro}>
          <p className="eyebrow">{project.location}</p>
          <h3>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
          <span className={styles.outcome}>
            <IconCheck width={14} height={14} />
            {project.outcome}
          </span>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            {project.hero.type === "beforeAfter" && (
              <>
                <BeforeAfterSlider
                  before={project.hero.before}
                  after={project.hero.after}
                  beforeAlt={project.hero.beforeAlt}
                  afterAlt={project.hero.afterAlt}
                />
                <p className={styles.dragHint}>Drag to compare</p>
              </>
            )}

            {project.hero.type === "image" && (
              <div className={styles.heroImageWrap}>
                <Image
                  src={project.hero.src}
                  alt={project.hero.alt}
                  fill
                  sizes="(min-width: 900px) 880px, 100vw"
                  className={styles.heroImage}
                  priority
                />
              </div>
            )}

            {project.hero.type === "placeholder" && (
              <div className={styles.placeholder}>
                <IconHouse width={28} height={28} />
                <p>Photos coming soon</p>
              </div>
            )}
          </div>

          {project.gallery.map((g, i) => (
            <div key={i} className={styles.item}>
              {g.src ? (
                <ImageZoom
                  src={g.src}
                  alt={g.alt}
                  sizes="(min-width: 720px) 50vw, 100vw"
                  wrapperClassName={styles.proofPhotoWrap}
                  imageClassName={styles.proofPhoto}
                />
              ) : (
                <div className={styles.galleryPlaceholder}>
                  <IconHouse width={22} height={22} />
                </div>
              )}
              <p className={styles.proofCaption}>{g.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
