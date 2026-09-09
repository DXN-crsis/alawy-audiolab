"use client";

import { Mark } from "./Logo";
import Marquee from "./Marquee";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Hero.module.css";

const WORD = [..."EAGLE"];

export default function Hero() {
  const { lang } = useStore();

  return (
    <header className={s.hero} id="top">
      <div className={`${s.mesh} amb`} />
      <div className={`${s.sheen} amb`} />
      <div className={s.fade} />

      <div className={`container ${s.inner}`}>
        <div className={s.mark}>
          {/* a length, not a number: an inline --m would otherwise beat the CSS */}
          <Mark disc size="clamp(52px, 6.8vw, 76px)" />
        </div>

        <h1 className={s.word} aria-label="Eagle Store">
          {WORD.map((ch, i) => (
            <span key={i} style={{ "--i": i }} aria-hidden="true">
              {ch}
            </span>
          ))}
        </h1>
        <p className={s.sig} aria-hidden="true">
          computer store
        </p>

        <p className={s.sub}>{t(T.hero.tagline, lang)}</p>
        <p className={s.subEn}>{t(T.hero.sub, lang)}</p>

        <div className={s.actions}>
          <a className="btn btn-dark" href="#builds">
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
