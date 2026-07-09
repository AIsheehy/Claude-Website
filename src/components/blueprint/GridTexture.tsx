export function GridTexture({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id="ffl-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ffl-grid)" />
    </svg>
  );
}
