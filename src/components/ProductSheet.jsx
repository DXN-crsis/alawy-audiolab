"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Shot from "./Shot";
import { m, AnimatePresence } from "motion/react";
import { useStore, cartKey } from "@/lib/store";
import { money, SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Sheet.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function ProductSheet() {
  const { lang, peek, setPeek } = useStore();

  return (
    <AnimatePresence>
      {peek && <Sheet key={peek.slug} p={peek} lang={lang} close={() => setPeek(null)} />}
    </AnimatePresence>
  );
}

function Sheet({ p, lang, close }) {
  const { add, drop, lines } = useStore();
  const [zoom, setZoom] = useState(false);

  // Offering "add to cart" for something already in the cart reads as a
  // mistake, most obviously when the sheet was opened from the cart itself.
  const key = cartKey(p.slug);
  const inCart = lines.some((l) => l.key === key);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      // step back one layer at a time rather than dropping the whole sheet
      if (zoom) setZoom(false);
      else close();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [close, zoom]);

  const ask = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
    lang === "ar"
      ? `سلام، اريد اسأل عن تجميعة ${p.name} — ${p.cpu}`
      : `Hi — a question about the ${p.name} build with the ${p.cpu}`
  )}`;

  // Only what the shop itself printed on the post this build came from.
  const facts = [
    [T.sheet.gpu, p.name],
    [T.sheet.cpu, p.cpu],
    [T.sheet.mb, p.mb],
    [T.sheet.ram, p.ram],
    [T.sheet.ssd, p.ssd],
    [T.sheet.psu, p.psu],
    p.cool && [T.sheet.cool, t(p.cool, lang)],
    p.note && [T.sheet.note, t(p.note, lang)],
    p.warranty && [T.sheet.warranty, t(p.warranty, lang)],
    [T.sheet.delivery, t(T.sheet.deliveryVal, lang)],
  ].filter(Boolean);

  const src = `/builds/${p.slug}.jpg`;

  return (
    <>
      <m.div
        className={s.scrim}
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24, ease: EASE }}
      />
      <m.div
        className={s.wrap}
        role="dialog"
        aria-modal="true"
        aria-label={`${p.name} — ${p.cpu}`}
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.99 }}
        transition={{ duration: 0.34, ease: EASE }}
      >
        <button className={s.close} onClick={close} type="button" aria-label={t(T.sheet.close, lang)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <button
            className={s.shot}
            type="button"
            onClick={() => setZoom(true)}
            aria-label={t(T.sheet.zoom, lang)}
          >
            <Shot
              src={src}
              alt={`${p.name} — ${p.cpu}`}
              width={1000}
              height={1250}
              quality={86}
              sizes="(max-width: 880px) 100vw, 420px"
              priority
            />
            <span className={s.expand} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                <path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
        </button>

        <div className={s.side}>
          <div className={s.scroll}>
            <h3 className={s.name}>{p.name}</h3>
            <p className={s.sub}>{p.cpu}</p>

            <dl className={s.facts}>
              {facts.map(([k, v], i) => (
                <div key={i}>
                  <dt>{t(k, lang)}</dt>
                  <dd dir="auto">{v}</dd>
                </div>
              ))}
            </dl>

            {p.post && (
              <a className={s.post} href={p.post} target="_blank" rel="noopener">
                {t(T.sheet.post, lang)}
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
                  <path d="M14 4h6v6M20 4l-8.5 8.5" stroke="currentColor" strokeWidth="1.9"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>

          <div className={s.foot}>
            <span className={s.price} dir="ltr">
              {money(p.price)} <small>IQD</small>
            </span>
            <div className={s.buttons}>
              <button
                className={inCart ? "btn btn-ghost" : "btn btn-primary"}
                type="button"
                onClick={() => {
                  if (inCart) {
                    drop(key); // stay open, so you can see it go and put it back
                    return;
                  }
                  add(p.slug, 0, p.name);
                  close();
                }}
              >
                {t(inCart ? T.sheet.remove : T.shop.add, lang)}
              </button>
              <a className="btn btn-ghost" href={ask} target="_blank" rel="noopener">
                {t(T.hero.ask, lang)}
              </a>
            </div>
          </div>
        </div>
      </m.div>

      {zoom && (
        <div
          className={s.zoom}
          role="dialog"
          aria-modal="true"
          aria-label={p.name}
          onClick={() => setZoom(false)}
        >
          <button className={s.zoomClose} type="button" aria-label={t(T.sheet.close, lang)}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Image
            src={src}
            alt={`${p.name} — ${p.cpu}`}
            width={1000}
            height={1250}
            quality={92}
            sizes="(max-width: 900px) 94vw, 700px"
            priority
          />
        </div>
      )}
    </>
  );
}
