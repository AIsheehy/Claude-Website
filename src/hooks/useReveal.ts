"use client";

import { useEffect, useRef, useState } from "react";

/** Adds a class once an element scrolls into view. Fires once, then disconnects. */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  // Always start hidden. Starting "visible" whenever IntersectionObserver is
  // undefined (true during SSR, since Node has no such global) baked
  // isVisible=true into every server-rendered reveal element, causing a
  // hydration mismatch that React leaves unpatched — so the reveal-on-scroll
  // effect silently never played for real visitors on any page.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
