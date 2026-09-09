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
                onClick={() => setCat(c.key)}
              >
                {t(c, lang)}
                <em>{n}</em>
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
