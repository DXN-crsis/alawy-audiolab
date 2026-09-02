"use client";

import { Mark } from "./Logo";
import Marquee from "./Marquee";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Hero.module.css";

const WORD = [..."ALAWY"];

export default function Hero() {
  const { lang } = useStore();

  return (
    <header className={s.hero} id="top">
      {/* Layered rather than one gradient: each drifts on its own clock, so the
          field never settles into a repeating pose. Transforms only, so it all
          stays on the compositor. The motion gating lives in the stylesheet
          instead of the shared "amb" class, because this is wanted moving even
          with the system reduce-motion setting on — it runs, just far slower. */}
      <div className={s.mesh} />
      <div className={s.orbs} aria-hidden="true">
        <i className={s.o1} />
        <i className={s.o2} />
        <i className={s.o3} />
        <i className={s.o4} />
      </div>
      <div className={s.aurora} />
      <div className={s.glow} />
      <div className={s.rays} />
      <div className={s.sheen} />
      <div className={s.grain} />
      <div className={s.fade} />

      <div className={`container ${s.inner}`}>
        <div className={s.mark}>
          <Mark size={78} />
        </div>

        <h1 className={s.word} aria-label="ALAWY audiolab">
          {WORD.map((ch, i) => (
            <span key={i} style={{ "--i": i }} aria-hidden="true">
              {ch}
            </span>
          ))}
        </h1>
        <p className={s.sig} aria-hidden="true">
          audiolab
        </p>

        <p className={s.sub}>{t(T.hero.tagline, lang)}</p>
        <p className={s.subEn}>{t(T.hero.sub, lang)}</p>

        <div className={s.actions}>
          <a className="btn btn-dark" href="#shop">
            {t(T.hero.browse, lang)}
          </a>
          <a className="btn btn-light" href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noopener">
            {t(T.hero.ask, lang)}
          </a>
        </div>
      </div>

      <Marquee />
    </header>
  );
}
