import s from "./Logo.module.css";

/* The shop's own emblem, lifted from their Facebook cover: the winged eagle
   over the ES shield. It is their artwork, not a redraw. */
export function Mark({ size = 24, disc = false, className = "", style }) {
  const m = typeof size === "number" ? `${size}px` : size;
  return (
    <span
      className={`${s.mark} ${disc ? s.disc : ""} ${className}`.trim()}
      style={{ "--m": m, ...style }}
    >
      <img src="/brand/eagle.png" alt="" width="256" height="265" decoding="async" />
    </span>
  );
}

/* `sub` adds the second line under the wordmark, the way their own lockup
   stacks it. The nav leaves it off: a second line there drags the wordmark
   above the centre of the bar and every control next to it reads low. */
export default function Logo({ size = 22, sub = false }) {
  return (
    <span className={s.lockup} style={{ fontSize: size }}>
      <Mark size={size * (sub ? 1.5 : 1.25)} />
      <span className={s.words}>
        <b>EAGLE</b>
        {sub && <em>computer store</em>}
      </span>
    </span>
  );
}
