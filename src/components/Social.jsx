"use client";

import { siInstagram, siWhatsapp, siTelegram } from "simple-icons";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Social.module.css";

// The official marks from simple-icons. Drawn in the page's own greys, not in
// the brand colours — three saturated logos pull the eye away from the shop.
const LINK = {
  instagram: { icon: siInstagram, href: SHOP.instagram },
  whatsapp: { icon: siWhatsapp, href: `https://wa.me/${SHOP.whatsapp}` },
  telegram: { icon: siTelegram, href: SHOP.telegram },
};

export default function Social() {
  const { lang } = useStore();

  return (
    <section className="section" id="social" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className={s.head}>
          <div>
            <p className="eyebrow">{t(T.social.eyebrow, lang)}</p>
            <h2 className="h-lg">{t(T.social.title, lang)}</h2>
          </div>
          <p className="lede" style={{ maxWidth: "24em" }}>
            {t(T.social.lede, lang)}
          </p>
        </Reveal>

        <Reveal stagger className={s.grid}>
          {T.social.items.map((item) => {
            const { icon, href } = LINK[item.key];
            return (
              <a key={item.key} className={s.card} href={href} target="_blank" rel="noopener">
                <span className={s.mark}>
                  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                    <path d={icon.path} fill="currentColor" />
                  </svg>
                </span>

                <span className={s.text}>
                  <b>{icon.title}</b>
                  <i dir="ltr">{item.handle}</i>
                </span>

                <svg className={s.out} viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                  <path d="M14 4h6v6M20 4l-8.5 8.5" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5"
                        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
