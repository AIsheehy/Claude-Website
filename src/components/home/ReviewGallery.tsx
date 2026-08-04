"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconArrowRight } from "@/components/icons";
import { TestimonialGalleryImage } from "@/lib/content";
import styles from "./ReviewGallery.module.css";

const ARIA_LABELS = [
  "View existing property",
  "View approved drawings",
  "View artist's visualisation",
];

export function ReviewGallery({
  images,
  overlay,
}: {
  images: TestimonialGalleryImage[];
  /** Rendered over the image box only (e.g. the "Planning Approved" badge). */
  overlay?: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // Images only ever get more visible via user interaction (swipe/arrow/nav),
  // never automatically, so mounting on first visit is a reliable stand-in
  // for "not initially visible" — native loading="lazy" can't be trusted
  // here since the browser ignores the ancestor's overflow:hidden clipping
  // and loads every slide regardless of scroll position.
  const [visited, setVisited] = useState(() => new Set([0]));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!track.clientWidth) return;
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActive(index);
        setVisited((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(images.length - 1, index));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.mediaBox}>
        <div className={styles.track} ref={trackRef}>
          {images.map((image, i) => (
            <div key={image.src} className={styles.slide}>
              {visited.has(i) && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 860px) 33vw, 100vw"
                  className={image.fit === "contain" ? styles.imageContain : styles.imageCover}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              )}
              <span className={styles.caption}>{image.label}</span>
              {image.badge && <span className={styles.visualisationBadge}>{image.badge}</span>}
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="View previous project image"
        >
          <IconArrowRight width={16} height={16} className={styles.arrowIconPrev} />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => goTo(active + 1)}
          disabled={active === images.length - 1}
          aria-label="View next project image"
        >
          <IconArrowRight width={16} height={16} />
        </button>

        {overlay}
      </div>

      <div className={styles.nav}>
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className={`${styles.navButton} ${i === active ? styles.navButtonActive : ""}`}
            onClick={() => goTo(i)}
            aria-current={i === active}
            aria-label={ARIA_LABELS[i] ?? `View image ${i + 1}`}
          >
            {image.label}
          </button>
        ))}
      </div>
    </div>
  );
}
