"use client";

import { useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "motion/react";
import { useStore } from "@/lib/store";
import { money } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Cart.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function CartDrawer() {
  const { lang, lines, total, count, bump, open, setOpen, peek, toast, checkoutUrl } = useStore();
  const rtl = lang === "ar";

  // the thing just added, else the first line in the cart
  const shownSlug = toast?.slug ?? lines[0]?.product.slug;

  // reserve room at the bottom of the page so the bar never sits on the footer
  useEffect(() => {
    document.documentElement.style.setProperty("--barPad", count > 0 ? "78px" : "0px");
  }, [count]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <m.div
              className={s.scrim}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.26, ease: EASE }}
            />
            <m.aside
              className={s.drawer}
              aria-label={t(T.cart.title, lang)}
              initial={{ x: rtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: rtl ? "-100%" : "100%" }}
              transition={{ duration: 0.36, ease: EASE }}
            >
              <div className={s.head}>
                <h3>{t(T.cart.title, lang)}</h3>
                <button className={s.close} onClick={() => setOpen(false)} type="button" aria-label="Close">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className={s.body}>
                {lines.length === 0 ? (
                  <div className={s.empty}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 7h12l-1.2 11.2A2 2 0 0 1 14.8 20H9.2a2 2 0 0 1-2-1.8L6 7Zm3 0V5.5a3 3 0 0 1 6 0V7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t(T.cart.empty, lang)}
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {lines.map((l) => (
                      <m.div
                        className={s.line}
                        key={l.key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.26, ease: EASE }}
                      >
                        <span className={s.thumb}>
                          <Image src={`/products/${l.product.slug}.jpg`} alt="" width={120} height={150} sizes="60px" />
                        </span>
                        <span className={s.info}>
                          <b>
                            {l.product.brand} {l.product.name}
                          </b>
                          {l.variant && <em>{t(l.variant, lang)}</em>}
                          <span dir="ltr">{money(l.unit)} IQD</span>
                        </span>
                        <span className={s.qty}>
                          <button onClick={() => bump(l.key, -1)} type="button" aria-label="−">
                            −
                          </button>
                          <i>{l.qty}</i>
                          <button onClick={() => bump(l.key, 1)} type="button" aria-label="+">
                            +
                          </button>
                        </span>
                      </m.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              <div className={s.foot}>
                <div className={s.total}>
                  <span>{t(T.cart.total, lang)}</span>
                  <b dir="ltr">
                    {money(total)} <small>IQD</small>
                  </b>
                </div>
                <a
                  className="btn btn-primary"
                  style={{
                    height: 48,
                    pointerEvents: checkoutUrl ? "auto" : "none",
                    opacity: checkoutUrl ? 1 : 0.4,
                  }}
                  href={checkoutUrl ?? "#"}
                  target="_blank"
                  rel="noopener"
                >
                  {t(T.cart.checkout, lang)}
                </a>
                <p className={s.note}>{t(T.cart.note, lang)}</p>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>

      {/* Stays put while there is anything in the cart — one line, 46px, never
          covers a card's controls. It just swaps its label for a moment after
          an add instead of appearing and vanishing. */}
      <AnimatePresence>
        {count > 0 && !open && !peek && (
          <m.div
            className={s.bar}
            initial={{ y: 72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 72, opacity: 0 }}
            transition={{ duration: 0.34, ease: EASE }}
          >
            <button className={s.barBtn} type="button" onClick={() => setOpen(true)}>
              <span className={s.barThumb}>
                <Image src={`/products/${shownSlug}.jpg`} alt="" width={80} height={100} sizes="34px" />
              </span>

              <span className={s.barText}>
                <AnimatePresence mode="wait" initial={false}>
                  <m.i
                    key={toast ? toast.label : "summary"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: EASE }}
                  >
                    {toast ? `${t(T.cart.added, lang)} — ${toast.label}` : `${count} ${t(T.cart.items, lang)}`}
                  </m.i>
                </AnimatePresence>
                <b dir="ltr">{money(total)} IQD</b>
              </span>

              <span className={s.barGo}>
                {t(T.cart.go, lang)}
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
                  <path d="M5 12h13m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
