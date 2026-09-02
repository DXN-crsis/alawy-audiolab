"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "motion/react";
import { useStore } from "@/lib/store";
import { money, SHOP } from "@/data/products";
import { T, t, CAT_TYPE } from "@/data/copy";
import s from "./Sheet.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function ProductSheet() {
  const { lang, peek, setPeek, add } = useStore();

  return (
    <AnimatePresence>
      {peek && <Sheet key={peek.slug} p={peek} lang={lang} close={() => setPeek(null)} add={add} />}
    </AnimatePresence>
  );
}

function Sheet({ p, lang, close, add }) {
  const [vi, setVi] = useState(0);
  const [zoom, setZoom] = useState(false);
  const variant = p.variants?.[vi];
  const price = variant?.price ?? p.price;

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
      ? `سلام، اريد اسأل عن ${p.brand} ${p.name}`
      : `Hi — a question about the ${p.brand} ${p.name}`
  )}`;

  // Only what is actually known: his transcribed fields, plus the two terms
  // that hold for every order in the shop.
  const facts = [
    [T.sheet.brand, { en: p.brand, ar: p.brand }],
    [T.sheet.type, CAT_TYPE[p.cat]],
    // only as a row when there is no picker above to say it already
    p.variants?.length === 1 && [T.sheet.pick, p.variants[0]],
    p.colors && [T.sheet.colors, p.colors],
    p.warranty && [T.sheet.warranty, p.warranty],
    p.note && [T.sheet.chip, p.note],
    [T.sheet.delivery, T.sheet.deliveryVal],
    [T.sheet.pay, T.sheet.payVal],
  ].filter(Boolean);

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
        aria-label={`${p.brand} ${p.name}`}
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
          <Image
            src={`/products/${p.slug}.jpg`}
            alt={`${p.brand} ${p.name}`}
            width={1080}
            height={1350}
            quality={90}
            sizes="(max-width: 880px) 100vw, 460px"
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

            {p.variants?.length > 1 && (
              <div className={s.picker}>
                {p.variants.map((v, i) => (
                  <button key={i} type="button" data-on={i === vi} onClick={() => setVi(i)}>
                    {t(v, lang)}
                    <em dir="ltr">{money(v.price)}</em>
                  </button>
                ))}
              </div>
            )}

            <dl className={s.facts}>
              {facts.map(([k, v], i) => (
                <div key={i}>
                  <dt>{t(k, lang)}</dt>
                  <dd>{t(v, lang)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={s.foot}>
            <span className={s.price} dir="ltr">
              {money(price)} <small>IQD</small>
            </span>
            <div className={s.buttons}>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  add(p.slug, vi, `${p.brand} ${p.name}`);
                  close();
                }}
              >
                {t(T.shop.add, lang)}
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
          aria-label={`${p.brand} ${p.name}`}
          onClick={() => setZoom(false)}
        >
          <button className={s.zoomClose} type="button" aria-label={t(T.sheet.close, lang)}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <Image
            src={`/products/${p.slug}.jpg`}
            alt={`${p.brand} ${p.name}`}
            width={1080}
            height={1350}
            quality={92}
            sizes="(max-width: 900px) 94vw, 780px"
            priority
          />
        </div>
      )}
    </>
  );
}
