"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Shot from "./Shot";
import { useStore } from "@/lib/store";
import { recommend, addon } from "@/lib/recommend";
import { money, SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Picker.module.css";

const Q = T.pick.questions;

// one place, because the warm-up below is only useful if it matches exactly
const SHOT = {
  width: 864,
  height: 1080,
  quality: 90,
  // results are one column on a phone, two on a tablet, three across a desktop
  sizes: "(max-width: 540px) 92vw, (max-width: 900px) 46vw, 400px",
};

export default function Picker() {
  const { lang } = useStore();
  const [answers, setAnswers] = useState({});

  // Which question you are on is derived from what you have answered, not
  // tracked alongside it. A question leaving the screen is still clickable for
  // the length of its exit, and with a separate counter that stale click would
  // advance the step without recording anything. This way it is a no-op.
  const at = Q.findIndex((q) => answers[q.key] === undefined);
  const done = at === -1;

  const ranked = useMemo(() => (done ? recommend(answers) : []), [done, answers]);
  const extra = useMemo(() => (done ? addon(answers, ranked) : null), [done, answers, ranked]);

  // While the last question is on screen, fetch the images every possible
  // answer could land on. The bytes are small; what is slow is the image
  // optimiser running cold at the moment the results appear, so this pays that
  // cost during the seconds it takes to read and click the final option.
  const warm = useMemo(() => {
    const pending = Q.filter((q) => answers[q.key] === undefined);
    if (pending.length !== 1) return [];
    const slugs = new Set();
    for (const o of pending[0].options) {
      for (const r of recommend({ ...answers, [pending[0].key]: o.v })) slugs.add(r.product.slug);
    }
    return [...slugs].slice(0, 6);
  }, [answers]);

  const pick = (key, v) => setAnswers((a) => ({ ...a, [key]: v }));
  const back = () =>
    setAnswers((a) => {
      const prev = Q[(done ? Q.length : at) - 1];
      if (!prev) return a;
      const n = { ...a };
      delete n[prev.key];
      return n;
    });

  return (
    <div className={s.page}>
      <div className="container">
        <header className={s.head}>
          <h1 className="h-xl">{t(T.pick.title, lang)}</h1>
          <p className="lede">{t(done ? T.pick.resultsLede : T.pick.lede, lang)}</p>
        </header>

        {/* Keyed remount plus a CSS keyframe. An exit animation here would mean
            gating the next question on the last one finishing, and anything
            that stalls the frame loop then leaves the page blank. */}
        {done ? (
          <Results ranked={ranked} extra={extra} lang={lang} reset={() => setAnswers({})} />
        ) : (
          <Question key={at} q={Q[at]} at={at} lang={lang} onPick={pick} onBack={back} />
        )}

        {warm.length > 0 && (
          <div className={s.warm} aria-hidden="true">
            {warm.map((slug) => (
              // eager, or next/image lazy-loads it and a 1px off-screen box
              // never enters the viewport, so nothing is ever fetched
              <Image key={slug} src={`/products/${slug}.jpg`} alt="" loading="eager" {...SHOT} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* Keyed on the question index, so moving on remounts it: the CSS entrance
   replays and any half-made multi-selection is cleared without a reset call. */
function Question({ q, at, lang, onPick, onBack }) {
  const [sel, setSel] = useState([]);
  const toggle = (v) => setSel((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v]));

  return (
    <div className={s.card}>
      <div className={s.meter}>
        <span className={s.count}>
          {at + 1} <i>{t(T.pick.of, lang)}</i> {Q.length}
        </span>
        <span className={s.track} aria-hidden="true">
          <span className={s.fill} style={{ scale: `${(at + 1) / Q.length} 1` }} />
        </span>
      </div>

      <h2 className={s.q}>{t(q.q, lang)}</h2>
      {q.hint && <p className={s.hint}>{t(q.hint, lang)}</p>}

      <div className={s.options}>
        {q.options.map((o) => {
          const on = q.multi && sel.includes(o.v);
          return (
            <button
              key={String(o.v)}
              type="button"
              className={s.option}
              data-on={on || undefined}
              aria-pressed={q.multi ? on : undefined}
              onClick={() => (q.multi ? toggle(o.v) : onPick(q.key, o.v))}
            >
              {t(o, lang)}
              {q.multi ? (
                <span className={s.tick} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
                    <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="3"
                          strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : (
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                  <path d="M5 12h13m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <div className={s.controls}>
        {q.multi && (
          <button
            className="btn btn-primary"
            type="button"
            disabled={!sel.length}
            onClick={() => onPick(q.key, sel)}
          >
            {t(T.pick.next, lang)}
          </button>
        )}
        {at > 0 && (
          <button className={s.back} type="button" onClick={onBack}>
            {t(T.pick.back, lang)}
          </button>
        )}
      </div>
    </div>
  );
}

function Results({ ranked, extra, lang, reset }) {
  const { add, setPeek } = useStore();

  if (!ranked.length) {
    return (
      <div className={s.card}>
        <p className={s.none}>{t(T.pick.none, lang)}</p>
        <div className={s.ends}>
          <button className="btn btn-primary" type="button" onClick={reset}>
            {t(T.pick.restart, lang)}
          </button>
          <a className="btn btn-ghost" href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noopener">
            {t(T.hero.ask, lang)}
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={s.results}>
        {ranked.map((r, i) => (
          <article className={s.result} key={r.product.slug} data-first={i === 0} style={{ "--i": i }}>
            <span className={s.rank} aria-label={`${i + 1}`}>{i + 1}</span>

            <button
              className={s.shot}
              type="button"
              onClick={() => setPeek(r.product)}
              aria-label={`${r.product.brand} ${r.product.name}`}
            >
              <Shot
                src={`/products/${r.product.slug}.jpg`}
                alt={`${r.product.brand} ${r.product.name}`}
                priority
                {...SHOT}
              />
            </button>

            <div className={s.body}>
              <span className={s.brand}>{r.product.brand}</span>
              <h3 className={s.name}>{r.product.name}</h3>

              <ul className={s.why}>
                {r.why.slice(0, 4).map((k) => (
                  <li key={k}>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t(T.pick.reasons[k], lang)}
                  </li>
                ))}
              </ul>

              <div className={s.foot}>
                <span className={s.price} dir="ltr">
                  {money(r.product.price)} <small>IQD</small>
                </span>
                <button
                  className="btn btn-sm btn-primary"
                  type="button"
                  onClick={() => add(r.product.slug, 0, `${r.product.brand} ${r.product.name}`)}
                >
                  {t(T.shop.add, lang)}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {extra && (
        <div className={s.extra}>
          <span className={s.extraThumb}>
            <Image src={`/products/${extra.slug}.jpg`} alt="" width={160} height={200} sizes="56px" />
          </span>
          <div>
            <span className={s.extraLabel}>{t(T.pick.addon, lang)}</span>
            <b>
              {extra.brand} {extra.name} — <span dir="ltr">{money(extra.price)} IQD</span>
            </b>
          </div>
          <button
            className="btn btn-sm btn-ghost"
            type="button"
            onClick={() => add(extra.slug, 0, `${extra.brand} ${extra.name}`)}
          >
            {t(T.shop.add, lang)}
          </button>
        </div>
      )}

      <div className={s.ends}>
        <button className="btn btn-ghost" type="button" onClick={reset}>
          {t(T.pick.restart, lang)}
        </button>
        <a className="btn btn-ghost" href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noopener">
          {t(T.hero.ask, lang)}
        </a>
      </div>
    </>
  );
}
