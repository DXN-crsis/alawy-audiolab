// Traced off his profile mark: three identical triangles stacked with a
// one-third-height offset. The top two are outlines, the bottom one is solid
// and sits over them.
export function Mark({ size = 24, style }) {
  return (
    <svg
      width={size * 0.88}
      height={size}
      viewBox="0 0 88 100"
      fill="none"
      aria-hidden="true"
      style={{ flex: "none", display: "block", ...style }}
    >
      <path d="M44 2 L86 60 L2 60 Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M44 21 L86 79 L2 79 Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M44 40 L86 98 L2 98 Z" fill="currentColor" />
    </svg>
  );
}

/* `sub` adds the audiolab line under the wordmark, the way his own lockup
   stacks it. The nav leaves it off: a second line there drags the wordmark
   above the centre of the bar and every control next to it reads low. */
export default function Logo({ size = 22, sub = false }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.4 }}>
      <Mark size={size * (sub ? 1.5 : 1.2)} />
      <span style={{ display: "grid", gap: 2, lineHeight: 1 }}>
        <b style={{ fontWeight: 800, fontSize: size * 0.82, letterSpacing: "0.03em" }}>ALAWY</b>
        {sub && (
          <em
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: size * 0.42,
              letterSpacing: "0.16em",
              opacity: 0.5,
            }}
          >
            audiolab
          </em>
        )}
      </span>
    </span>
  );
}
