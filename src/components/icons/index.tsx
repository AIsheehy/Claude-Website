import { SVGProps } from "react";

// A small, consistent set of hand-drawn line icons in a drafting-pen style —
// 1.5px stroke, no fill, rounded joins. Deliberately not an icon-library font.
const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function IconDrawing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3.5" width="16" height="17" rx="1" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function IconRuler(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15.5 15.5 4l4.5 4.5L8.5 20 4 15.5Z" />
      <path d="M12 8l2 2M9 11l2 2M15 5l2 2" />
    </svg>
  );
}

export function IconCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" />
    </svg>
  );
}

export function IconHouse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5h12V10" />
      <path d="M10 19.5v-6h4v6" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6.5v5c0 5-3 8.2-7 9.9-4-1.7-7-4.9-7-9.9v-5L12 3.5Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4.5h3.5L10 8.5 8 10a9 9 0 0 0 6 6l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 4.5 6.1 1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.2" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 8.5 12 15l6.5-6.5" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 1 0 5.5 10c0 4.9 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconLayers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 4 8.5 12 13l8-4.5L12 4Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function IconScale(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v17M7 6.5h10" />
      <path d="M7 6.5 4 12.5a3.2 3.2 0 0 0 6 0L7 6.5ZM17 6.5l-3 6a3.2 3.2 0 0 0 6 0l-3-6Z" />
    </svg>
  );
}
