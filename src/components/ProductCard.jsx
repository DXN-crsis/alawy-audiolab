"use client";

import Shot from "./Shot";
import { useStore } from "@/lib/store";
import { money } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Shop.module.css";

/* The picture is the shop's own poster for that build, whole. It already
   carries the spec list, so the card underneath only repeats the two lines you
   scan a shop by — the card and the processor — and the price. */
export default function ProductCard({ product: p, index }) {
  const { lang, add, setPeek } = useStore();

  return (
    <article className={s.card} style={{ "--i": Math.min(index, 7) }}>
      <button
        className={s.open}
        type="button"
        onClick={() => setPeek(p)}
        aria-label={`${p.name} — ${p.cpu}`}
      />

      <div className={s.shot}>
        <Shot
          src={`/builds/${p.slug}.jpg`}
          alt={`${p.name} — ${p.cpu}`}
          width={1000}
          height={1250}
          priority={index < 4}
          loading={index < 4 ? undefined : "lazy"}
          quality={82}
          sizes="(max-width: 620px) 92vw, (max-width: 1180px) 44vw, 300px"
        />
        {p.fresh && <span className={s.tag}>{t(T.shop.fresh, lang)}</span>}
      </div>

      <div className={s.body}>
        <h3 className={s.name}><bdi>{p.name}</bdi></h3>
        <p className={s.cpu}><bdi>{p.cpu}</bdi></p>

        <div className={s.foot}>
          <span className={s.price} dir="ltr">
            {money(p.price)}
            <small>IQD</small>
          </span>
          <button
            className={s.add}
            type="button"
            onClick={() => add(p.slug, 0, p.name)}
            aria-label={`${t(T.shop.add, lang)} — ${p.name}`}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
