"use client";

import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { PRODUCTS, SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Sections.module.css";

/* Counted off the catalogue and the shop details, so a number on the page can
   never drift from what the page itself lists. */
const STATS = [
  { n: PRODUCTS.length, label: T.buy.stats.builds },
  { n: SHOP.warrantyMonths, label: T.buy.stats.warranty },
  { n: SHOP.governorates, label: T.buy.stats.governorates },
];

const ICONS = {
  shield: (
    <>
      <path d="M12 3 4 6.5v5c0 5 3.4 8.6 8 9.5 4.6-.9 8-4.5 8-9.5v-5L12 3Z" stroke="currentColor"
            strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
            strokeLinejoin="round" />
    </>
  ),
  check: (
    <>
      <circle cx="11" cy="10.6" r="6.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.7 10.6 1.7 1.7 3.4-3.6" stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="m15.7 15.4 4.3 4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  truck: (
    <>
      <path d="M2.8 6.6h10.4v9.2H2.8zM13.2 9.8h3.6l3 3v3h-6.6z" stroke="currentColor"
            strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="6.6" cy="17.6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="17.6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.6V20h16V9.6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 9.6 4.8 4h14.4L21 9.6a3 3 0 0 1-5.6 1.6 3 3 0 0 1-5.6 0A3 3 0 0 1 3 9.6Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
};

export default function Buy() {
  const { lang } = useStore();

  return (
    <section className="section" id="buy" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className={s.dHead}>
          <div>
            <p className="eyebrow">{t(T.buy.eyebrow, lang)}</p>
            <h2 className="h-lg">{t(T.buy.title, lang)}</h2>
          </div>
        </Reveal>

        <Reveal stagger className={s.stats}>
          {STATS.map((it, i) => (
            <div className={s.stat} key={i}>
              <b>{it.n}</b>
              <span>{t(it.label, lang)}</span>
            </div>
          ))}
        </Reveal>

        <Reveal stagger className={s.cards} style={{ marginTop: "var(--s3)" }}>
          {T.buy.items.map((item, i) => (
            <div className={s.card} key={i}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {ICONS[item.icon]}
              </svg>
              <h4>{t(item.t, lang)}</h4>
              <p>{t(item.d, lang)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
