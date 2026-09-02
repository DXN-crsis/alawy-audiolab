"use client";

import { PRODUCTS } from "@/data/products";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Marquee.module.css";

// the brands he actually stocks, read off the catalogue
const BRANDS = [...new Set(PRODUCTS.map((p) => p.brand))];
// doubled once so a single group is wider than any monitor, then the group
// itself is rendered twice — that pair is what makes -50% loop with no seam
const GROUP = [...BRANDS, ...BRANDS];

export default function Marquee() {
  const { lang } = useStore();

  return (
    <div className={s.wrap}>
      <p className={s.label}>{t(T.hero.brands, lang)}</p>
      <div className={s.track}>
        {[0, 1].map((g) => (
          <div className={s.group} key={g} aria-hidden={g === 1}>
            {GROUP.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
