"use client";

import Shot from "./Shot";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { PARTS, SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Parts.module.css";

export default function Parts() {
  const { lang } = useStore();

  const ask = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
    lang === "ar" ? "سلام، اريد اسأل عن سعر قطعة" : "Hi — I'd like to ask about a part"
  )}`;

  return (
    <section className="section" id="parts" style={{ paddingTop: 0 }}>
      <Reveal className={`container ${s.band}`}>
        {/* the shop's own photograph, off their RTX 4060 poster */}
        <div className={s.shot}>
          <Shot
            src="/parts/components.jpg"
            alt={t(T.parts.title, lang)}
            width={1100}
            height={733}
            quality={84}
            loading="lazy"
            sizes="(max-width: 900px) 92vw, 520px"
          />
        </div>

        <div className={s.side}>
          <p className="eyebrow">{t(T.parts.eyebrow, lang)}</p>
          <h2 className="h-lg">{t(T.parts.title, lang)}</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            {t(T.parts.lede, lang)}
          </p>

          <ul className={s.chips}>
            {PARTS.map((x, i) => (
              <li key={i}>{t(x, lang)}</li>
            ))}
          </ul>

          <div className={s.also}>
            <span>{t(T.parts.alsoLabel, lang)}</span>
            {T.parts.also.map((x, i) => (
              <i key={i}>{t(x, lang)}</i>
            ))}
          </div>

          <a className="btn btn-ghost" href={ask} target="_blank" rel="noopener">
            {t(T.parts.ask, lang)}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
