"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { PRODUCTS, CATEGORIES, money } from "@/data/products";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Shop.module.css";

export default function Shop() {
  const { lang } = useStore();
  const [cat, setCat] = useState("all");
  const [all, setAll] = useState(false);
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);

  const prices = PRODUCTS.map((p) => p.price);
  const lede = t(T.shop.lede, lang)
    .replace("{n}", PRODUCTS.length)
    .replace("{lo}", money(Math.min(...prices)))
    .replace("{hi}", money(Math.max(...prices)));

  return (
    <section className="section" id="builds">
      <div className="container">
        <Reveal className={s.head}>
          <div>
            <p className="eyebrow">{t(T.shop.eyebrow, lang)}</p>
            <h2 className="h-xl">{t(T.shop.title, lang)}</h2>
          </div>
          <div className={s.lede}>
            <p className="lede">{lede}</p>
            <p className={s.caveat}>{t(T.shop.caveat, lang)}</p>
          </div>
        </Reveal>

        <Reveal className={s.filters}>
          {CATEGORIES.map((c) => {
            const n = c.key === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.key).length;
            if (!n) return null;
            return (
              <button
                key={c.key}
                type="button"
                className={s.chip}
                data-on={cat === c.key}
                onClick={() => {
                  setCat(c.key);
                  setAll(false);
                }}
              >
                {t(c, lang)}
                <em>{n}</em>
              </button>
            );
          })}
        </Reveal>

        {/* Keyed on the filter so the cards replay their entrance on a switch.
            data-all is what releases the phone-only cap below — the cap is CSS,
            so the desktop grid is untouched. */}
        <div className={s.grid} key={cat} data-all={all || undefined}>
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
          {!list.length && <p className={s.empty}>{t(T.shop.empty, lang)}</p>}
        </div>

        {!all && list.length > 6 && (
          <button className={s.more} type="button" onClick={() => setAll(true)}>
            {t(T.shop.more, lang)}
            <em>{list.length}</em>
          </button>
        )}
      </div>
    </section>
  );
}
