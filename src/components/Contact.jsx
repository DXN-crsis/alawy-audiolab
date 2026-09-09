"use client";

import { siInstagram, siFacebook, siWhatsapp } from "simple-icons";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import sec from "./Sections.module.css";
import s from "./Contact.module.css";

/* Official marks from simple-icons, drawn in the page's own greys rather than
   in the brand colours — three saturated logos pull the eye off the shop. */
const PHONE = (
  <path
    d="M6.4 3.6h3l1.6 4-2 1.4a12 12 0 0 0 6 6l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.4 5.8a2 2 0 0 1 2-2.2Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinejoin="round"
  />
);

const LINK = {
  whatsapp: { path: siWhatsapp.path, href: `https://wa.me/${SHOP.whatsapp}`, handle: SHOP.phone },
  instagram: { path: siInstagram.path, href: SHOP.instagram, handle: SHOP.handle.instagram },
  facebook: { path: siFacebook.path, href: SHOP.facebook, handle: SHOP.handle.facebook },
  phone: { node: PHONE, href: `tel:+${SHOP.whatsapp}`, handle: SHOP.phone2 },
};

export default function Contact() {
  const { lang } = useStore();

  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className={sec.cta}>
          <div className={sec.glow} />
          <h2 className="h-lg">{t(T.cta.title, lang)}</h2>
          <p className="lede center" style={{ margin: "22px auto 34px" }}>
            {t(T.cta.lede, lang)}
          </p>
          <div className={sec.ctaActions}>
            {/* a magnifier, not an arrow: an arrow has to be mirrored per
                language and says nothing about what happens */}
            <a className={`btn btn-primary ${sec.big}`} href="/pick">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.6" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {t(T.pick.cta, lang)}
            </a>
          </div>
        </Reveal>

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
            const { path, node, href, handle } = LINK[item.key];
            const external = href.startsWith("http");
            return (
              <a
                key={item.key}
                className={s.card}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className={s.mark}>
                  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                    {node || <path d={path} fill="currentColor" />}
                  </svg>
                </span>
                <span className={s.text}>
                  <b>{t(item.label, lang)}</b>
                  <i dir={item.key === "facebook" ? "auto" : "ltr"}>{handle}</i>
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

        <Reveal className={s.branches}>
          <span className={s.branchLabel}>{t(T.social.branches, lang)}</span>
          {SHOP.branches.map((b, i) => (
            <p key={i}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              {t(b, lang)}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
