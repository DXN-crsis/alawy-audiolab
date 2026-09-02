"use client";

import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Sections.module.css";

/* The two payment methods and the delivery terms are the ones on his own
   "طرق الدفع" highlight — cash on delivery, or a Rafidain / Qi Card transfer. */
const ICONS = {
  wallet: (
    <>
      <rect x="2.6" y="6" width="18.8" height="12.4" rx="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.6 10.2h18.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="14.4" r="1.15" fill="currentColor" />
    </>
  ),
  qi: (
    <>
      <rect x="3" y="4.4" width="18" height="15.2" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13.6 13.6 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  map: (
    <>
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  shield: (
    <>
      <path
        d="M12 3 4 6.5v5c0 5 3.4 8.6 8 9.5 4.6-.9 8-4.5 8-9.5v-5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function Delivery() {
  const { lang } = useStore();

  return (
    <>
      <section className="section" id="delivery">
        <div className="container">
          <Reveal className={s.dHead}>
            <div>
              <p className="eyebrow">{t(T.delivery.eyebrow, lang)}</p>
              <h2 className="h-lg">{t(T.delivery.title, lang)}</h2>
            </div>
            <p className="lede" style={{ maxWidth: "24em" }}>
              {t(T.delivery.lede, lang)}
            </p>
          </Reveal>

          <Reveal stagger className={s.cards}>
            {T.delivery.items.map((item, i) => (
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

      <section className="section" id="contact" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className={s.cta}>
            <div className={s.glow} />
            <h2 className="h-lg">{t(T.cta.title, lang)}</h2>
            <p className="lede center" style={{ margin: "22px auto 36px" }}>
              {t(T.cta.lede, lang)}
            </p>
            <div className={s.ctaActions}>
              {/* one action here. a magnifier, not an arrow: an arrow has to be
                  mirrored per language and says nothing about what happens. */}
              <a className={`btn btn-primary ${s.big}`} href="/pick">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.6" stroke="currentColor" strokeWidth="2" />
                  <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {t(T.pick.cta, lang)}
              </a>
            </div>

          </Reveal>
        </div>
      </section>
    </>
  );
}
