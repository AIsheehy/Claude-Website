import { SVGProps } from "react";

/**
 * A restrained line-drawing of a London terraced house elevation — the kind
 * of facade this business's applications are drawn against. Decorative only.
 */
export function HouseElevation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* parapet roofline */}
      <path d="M20 70h380M20 70v-14h380v14" />
      {/* facade outline */}
      <path d="M30 70v260h360V70" />
      {/* string course lines between floors */}
      <path d="M30 158h360M30 246h360" opacity="0.6" />

      {/* upper floor sash windows x3 */}
      {[62, 178, 294].map((x) => (
        <g key={`u-${x}`}>
          <rect x={x} y="94" width="64" height="46" />
          <path d={`M${x + 32} 94v46M${x} 117h64`} opacity="0.7" />
        </g>
      ))}

      {/* mid floor sash windows x3 */}
      {[62, 178, 294].map((x) => (
        <g key={`m-${x}`}>
          <rect x={x} y="182" width="64" height="46" />
          <path d={`M${x + 32} 182v46M${x} 205h64`} opacity="0.7" />
        </g>
      ))}

      {/* ground floor: door + two windows */}
      <path d="M182 246v84h56v-84" />
      <path d="M182 264h56" opacity="0.6" />
      <circle cx="228" cy="292" r="1.4" fill="currentColor" stroke="none" />
      <rect x="62" y="270" width="64" height="60" />
      <path d="M94 270v60M62 300h64" opacity="0.7" />
      <rect x="294" y="270" width="64" height="60" />
      <path d="M326 270v60M294 300h64" opacity="0.7" />

      {/* steps to door */}
      <path d="M172 330h96M176 338h88M180 346h80" opacity="0.5" />
    </svg>
  );
}
