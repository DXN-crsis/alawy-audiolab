"use client";

import Shot from "./Shot";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { PART_GROUPS, partOptions, SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Parts.module.css";

const ask = (lang, what) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
    lang === "ar" ? `سلام، اريد اسأل عن سعر ${what}` : `Hi — what's the price on ${what}?`
  )}`;

export default function Parts() {
  const { lang } = useStore();

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
            <a className="btn btn-ghost" href={ask(lang, lang === "ar" ? "قطعة" : "a part")} target="_blank" rel="noopener">
              {t(T.parts.ask, lang)}
            </a>
          </div>
        </Reveal>

        <Reveal stagger className={s.grid}>
          {PART_GROUPS.map((g, i) => {
            const options = partOptions(g, lang);
            return (
              <article className={s.card} key={g.key}>
                <div className={s.shot}>
                  <Shot
                    src={`/parts/${g.key}.jpg`}
                    alt={`${t(g, lang)} — ${g.brand}`}
                    width={900}
                    height={675}
                    quality={84}
                    loading={i < 2 ? undefined : "lazy"}
                    sizes="(max-width: 620px) 92vw, (max-width: 1100px) 44vw, 290px"
                  />
                </div>

                <div className={s.body}>
                  <h3 className={s.name}>{t(g, lang)}</h3>
                  <p className={s.brand}>{g.brand}</p>

                  <p className={s.label}>{t(T.parts.inBuilds, lang)}</p>
                  <ul className={s.opts}>
                    {options.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>

                  <div className={s.foot}>
                    <span className={s.noPrice}>{t(T.parts.noPrice, lang)}</span>
                    <a className={s.ask} href={ask(lang, g.brand)} target="_blank" rel="noopener">
                      {t(T.parts.askOne, lang)}
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
                        <path d="M5 12h13m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>

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
