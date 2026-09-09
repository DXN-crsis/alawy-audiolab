"use client";

import { useState } from "react";
import Shot from "./Shot";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { PARTS, PART_CATEGORIES, usedIn } from "@/data/parts";
import { T, t } from "@/data/copy";
import s from "./Parts.module.css";

/* Arabic counts one, two, a few and many differently, so the label is picked
   rather than templated. */
const builds = (n, lang) => {
  const key = n === 1 ? T.parts.inOne : n === 2 ? T.parts.inTwo : n <= 10 ? T.parts.inBuilds : T.parts.inMany;
  return t(key, lang).replace("{n}", n);
};

/* One mark per category, so the selector reads as a parts counter rather than
   a row of word-chips. Drawn here, not in the data file: they are markup. */
const ICONS = {
  gpu: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.5" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="10" width="4" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 3.2v3.3M14.5 3.2v3.3M9.5 17.5v3.3M14.5 17.5v3.3M3.2 9.5h3.3M3.2 14.5h3.3M17.5 9.5h3.3M17.5 14.5h3.3"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  mb: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="6.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 6.5v6M18 6.5v6M6.5 16.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  ram: (
    <>
      <rect x="2.5" y="7" width="19" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10.5v2M9.5 10.5v2M13 10.5v2M16.5 10.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 16v1.6M16 16v1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  ssd: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.6" cy="12" r="1.15" fill="currentColor" />
      <path d="M5.5 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  psu: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 9.5h3M16 12h3M16 14.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  cool: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3.5c2.6 2 2.6 4.4 0 6.4M20.5 12c-2 2.6-4.4 2.6-6.4 0M12 20.5c-2.6-2-2.6-4.4 0-6.4M3.5 12c2-2.6 4.4-2.6 6.4 0"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
};

const ask = (lang, what) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
    lang === "ar" ? `سلام، اريد اسأل عن سعر ${what}` : `Hi — what's the price on ${what}?`
  )}`;

export default function Parts() {
  const { lang } = useStore();
  const [cat, setCat] = useState(PART_CATEGORIES[0].key);
  const list = PARTS.filter((p) => p.cat === cat);

  return (
    <section className="section" id="parts" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className={s.head}>
          <div>
            <p className="eyebrow">{t(T.parts.eyebrow, lang)}</p>
            <h2 className="h-lg">{t(T.parts.title, lang)}</h2>
          </div>
          <div className={s.aside}>
            <p className="lede">{t(T.parts.lede, lang)}</p>
            <a
              className="btn btn-ghost"
              href={ask(lang, lang === "ar" ? "قطعة" : "a part")}
              target="_blank"
              rel="noopener"
            >
              {t(T.parts.ask, lang)}
            </a>
          </div>
        </Reveal>

        <Reveal className={s.tabs}>
          {PART_CATEGORIES.map((c) => {
            const n = PARTS.filter((p) => p.cat === c.key).length;
            return (
              <button
                key={c.key}
                type="button"
                className={s.tab}
                data-on={cat === c.key}
                aria-pressed={cat === c.key}
                onClick={() => setCat(c.key)}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {ICONS[c.key]}
                </svg>
                <span>
                  <b>{t(c, lang)}</b>
                  <em>{n}</em>
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* keyed on the tab so the cards replay their entrance on a switch */}
        <div className={s.grid} key={cat}>
          {list.map((p, i) => {
            const n = usedIn(p);
            return (
              <article className={s.card} key={p.name} style={{ "--i": Math.min(i, 9) }}>
                <div className={s.top}>
                  <span className={s.thumb}>
                    <Shot
                      src={`/parts/${p.shot}.jpg`}
                      alt={p.name}
                      width={900}
                      height={675}
                      quality={80}
                      loading={i < 4 ? undefined : "lazy"}
                      sizes="96px"
                    />
                  </span>

                  <div className={s.text}>
                    <p className={s.brand}>{p.brand}</p>
                    <h3 className={s.name}><bdi>{p.name}</bdi></h3>
                    <ul className={s.specs}>
                      {p.specs.map((x, k) => (
                        <li key={k}><bdi>{typeof x === "string" ? x : t(x, lang)}</bdi></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={s.foot}>
                  <span className={s.used}>{builds(n, lang)}</span>
                  <span className={s.noPrice}>{t(T.parts.noPrice, lang)}</span>
                  <a className={s.ask} href={ask(lang, p.name)} target="_blank" rel="noopener">
                    {t(T.parts.askOne, lang)}
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
                      <path d="M5 12h13m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <Reveal className={s.also}>
          <span>{t(T.parts.alsoLabel, lang)}</span>
          {T.parts.also.map((x, i) => (
            <i key={i}>{t(x, lang)}</i>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
