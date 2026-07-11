import { SVGProps } from "react";

/**
 * Custom brand illustration for the homepage hero: a house elevation under
 * review, with a blueprint sheet, a set-square, a magnifying glass and an
 * approval seal — the visual shorthand for what this business actually does.
 * Flat shapes + line strokes in the site's own sage/terracotta/ink palette,
 * echoing the client-supplied reference composition without copying its
 * colours or figures.
 */
export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 480" fill="none" {...props}>
      {/* soft backdrop */}
      <circle cx="245" cy="250" r="205" fill="var(--paper-dim)" />

      {/* ground shadow */}
      <ellipse cx="270" cy="432" rx="150" ry="14" fill="var(--ink)" opacity="0.06" />

      {/* blueprint sheet, tilted, peeking behind the house */}
      <g transform="translate(48,64) rotate(-9)">
        <rect x="0" y="0" width="176" height="128" rx="6" fill="var(--white)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M18 26h140M18 50h112M18 74h140M18 98h84" stroke="var(--moss)" strokeWidth="2.5" opacity="0.55" strokeLinecap="round" />
      </g>

      {/* set-square drafting triangle */}
      <g transform="translate(26,246) rotate(10)">
        <polygon points="0,150 0,6 168,150" fill="var(--accent-warm)" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
        <path
          d="M14 132 h10 M14 116 h10 M14 100 h10 M14 84 h10 M14 68 h10 M14 52 h10 M14 36 h10"
          stroke="var(--paper)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* small sun / flourish */}
      <g transform="translate(84,52)">
        <circle cx="0" cy="0" r="13" fill="var(--sand)" />
        <path d="M17 4a13 13 0 0 1-9 12" stroke="var(--sand-deep)" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* accent dashes */}
      <g stroke="var(--accent-warm)" strokeWidth="3.5" strokeLinecap="round">
        <line x1="318" y1="58" x2="352" y2="58" />
        <line x1="318" y1="70" x2="340" y2="70" />
      </g>

      {/* left foliage doodle */}
      <g transform="translate(56,168)">
        <circle cx="0" cy="0" r="21" fill="var(--moss-tint)" stroke="var(--moss)" strokeWidth="2.25" />
        <circle cx="20" cy="-8" r="15" fill="var(--moss-tint)" stroke="var(--moss)" strokeWidth="2.25" />
        <line x1="8" y1="18" x2="8" y2="46" stroke="var(--moss)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* right foliage doodle */}
      <g transform="translate(432,318)">
        <circle cx="0" cy="0" r="17" fill="var(--moss-tint)" stroke="var(--moss)" strokeWidth="2.25" />
        <line x1="0" y1="15" x2="0" y2="38" stroke="var(--moss)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* house elevation — the centrepiece */}
      <g transform="translate(168,112)">
        {/* chimney */}
        <rect x="150" y="14" width="16" height="42" fill="var(--terracotta-deep)" stroke="var(--ink)" strokeWidth="2.5" />
        {/* roof */}
        <polygon points="0,84 100,0 200,84" fill="var(--terracotta-deep)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
        {/* body */}
        <rect x="15" y="84" width="170" height="152" fill="var(--white)" stroke="var(--ink)" strokeWidth="3" />
        {/* left window */}
        <rect x="35" y="114" width="36" height="36" fill="var(--moss-tint)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M53 114v36M35 132h36" stroke="var(--ink)" strokeWidth="2" opacity="0.8" />
        {/* right window */}
        <rect x="134" y="114" width="36" height="36" fill="var(--moss-tint)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M152 114v36M134 132h36" stroke="var(--ink)" strokeWidth="2" opacity="0.8" />
        {/* door */}
        <rect x="84" y="172" width="36" height="64" rx="2" fill="var(--ink)" opacity="0.88" />
        <circle cx="112" cy="206" r="1.8" fill="var(--paper)" />
      </g>

      {/* magnifying glass, inspecting the elevation */}
      <g transform="translate(228,206)">
        <g className="hi-float">
          <circle cx="0" cy="0" r="27" fill="var(--paper)" fillOpacity="0.55" stroke="var(--ink)" strokeWidth="3" />
          <line x1="19" y1="19" x2="42" y2="42" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      </g>

      {/* approval seal */}
      <g transform="translate(382,104)">
        <g className="hi-float" style={{ animationDelay: "-2.2s" }}>
          <circle cx="0" cy="0" r="35" fill="var(--ink)" />
          <circle cx="0" cy="0" r="35" fill="none" stroke="var(--sand)" strokeWidth="2" strokeDasharray="4 5" />
          <path d="M-15 0 L-4 11 L17 -13" fill="none" stroke="var(--paper)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}
