"use client";

import { siNvidia, siAmd, siIntel, siMsi, siAsus } from "simple-icons";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Marquee.module.css";

/* The official marks, drawn in the hero's own ink rather than in five brand
   colours — this is a chain of names, not a sponsor wall. Named imports, not
   a lookup off the namespace: `import * as` defeats tree shaking and drags all
   three thousand icons into the bundle. */
const MARKS = [siNvidia, siAmd, siIntel, siMsi, siAsus];
// doubled once so a single group is wider than any monitor, then the group
// itself is rendered twice — that pair is what makes -100% loop with no seam
const GROUP = [...MARKS, ...MARKS, ...MARKS];

export default function Marquee() {
  const { lang } = useStore();

  return (
    <div className={s.wrap}>
      <p className={s.label}>{t(T.hero.chain, lang)}</p>
      <div className={s.track}>
        {[0, 1].map((g) => (
          <div className={s.group} key={g} aria-hidden={g === 1}>
            {GROUP.map((b, i) => (
              <svg key={i} viewBox="0 0 24 24" role="img" aria-label={b.title}>
                <path d={b.path} fill="currentColor" />
              </svg>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
