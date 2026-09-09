"use client";

import {
  siNvidia, siAmd, siIntel, siMsi, siAsus, siCorsair,
  siKingstontechnology, siSamsung, siSeagate, siHyperx, siLg, siCoolermaster,
} from "simple-icons";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Marquee.module.css";

/* The official marks, drawn in the hero's own ink rather than in twelve brand
   colours — this is a chain of names, not a sponsor wall. Cards, chips and
   boards first, then memory, storage and screens. Named imports, not a lookup
   off the namespace: `import * as` defeats tree shaking and drags all three
   thousand icons into the bundle. */
const MARKS = [
  siNvidia, siAmd, siIntel, siMsi, siAsus, siCorsair,
  siKingstontechnology, siSamsung, siSeagate, siHyperx, siLg, siCoolermaster,
];
// The group is rendered twice and each copy is wider than any monitor, which
// is what makes -100% land on an identical frame with no seam.
const GROUP = [...MARKS, ...MARKS];

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
