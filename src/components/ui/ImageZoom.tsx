"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "@/components/icons";
import lightbox from "./Lightbox.module.css";
import styles from "./ImageZoom.module.css";

export function ImageZoom({
  src,
  alt,
  sizes,
  wrapperClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  sizes?: string;
  wrapperClassName?: string;
  imageClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className={wrapperClassName}>
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setOpen(true)}
          aria-label={`Enlarge image: ${alt}`}
        >
          <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className={lightbox.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className={lightbox.close}
              aria-label="Close enlarged image"
              onClick={() => setOpen(false)}
            >
              <IconClose width={20} height={20} />
            </button>
            <div className={lightbox.imageWrap} onClick={(event) => event.stopPropagation()}>
              <Image src={src} alt={alt} fill sizes="92vw" className={lightbox.enlarged} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
