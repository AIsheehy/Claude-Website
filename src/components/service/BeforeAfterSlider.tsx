"use client";

import Image from "next/image";
import { PointerEvent as ReactPointerEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconExpand } from "@/components/icons";
import lightbox from "@/components/ui/Lightbox.module.css";
import styles from "./BeforeAfterSlider.module.css";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [zoomOpen, setZoomOpen] = useState(false);
  const draggingRef = useRef(false);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomOpen]);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    containerRef.current?.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (containerRef.current?.hasPointerCapture(event.pointerId)) {
      containerRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - 4));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + 4));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  return (
    <>
    <div
      ref={containerRef}
      className={styles.container}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <div className={styles.imageLayer}>
        <Image
          src={after}
          alt={afterAlt}
          fill
          sizes="(min-width: 720px) 90vw, 100vw"
          className={styles.image}
          draggable={false}
          priority
        />
        <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
      </div>

      <div className={styles.imageLayer} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(min-width: 720px) 90vw, 100vw"
          className={styles.image}
          draggable={false}
        />
        <span className={`${styles.badge} ${styles.badgeBefore}`}>Before</span>
      </div>

      <div className={styles.divider} style={{ left: `${position}%` }} aria-hidden="true" />

      <div
        className={styles.handle}
        style={{ left: `${position}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M5.5 4 2 8l3.5 4M10.5 4 14 8l-3.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <button
        type="button"
        className={styles.expand}
        aria-label="Enlarge the after photo"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          setZoomOpen(true);
        }}
      >
        <IconExpand width={16} height={16} />
      </button>
    </div>

    {zoomOpen &&
      createPortal(
        <div
          className={lightbox.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={afterAlt}
          onClick={() => setZoomOpen(false)}
        >
          <button
            type="button"
            className={lightbox.close}
            aria-label="Close enlarged image"
            onClick={() => setZoomOpen(false)}
          >
            <IconClose width={20} height={20} />
          </button>
          <div className={lightbox.imageWrap} onClick={(event) => event.stopPropagation()}>
            <Image src={after} alt={afterAlt} fill sizes="92vw" className={lightbox.enlarged} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
