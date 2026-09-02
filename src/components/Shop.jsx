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
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);

  const prices = PRODUCTS.map((p) => p.price);
  const lede = t(T.shop.lede, lang)
    .replace("{n}", PRODUCTS.length)
    .replace("{lo}", money(Math.min(...prices)))
    .replace("{hi}", money(Math.max(...prices)));

  return (
    <section className="section" id="shop">
      <div className="container">
        <Reveal className={s.head}>
          <div>
            <p className="eyebrow">{t(T.shop.eyebrow, lang)}</p>
            <h2 className="h-xl">{t(T.shop.title, lang)}</h2>
          </div>
          <p className="lede" style={{ maxWidth: "24em" }}>
            {lede}
          </p>
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
                onClick={() => setCat(c.key)}
              >
                {t(c, lang)}
                <em>{n}</em>
              </button>
            );
          })}
        </Reveal>

        {/* keyed on the filter so the cards replay their entrance on a switch */}
        <div className={s.grid} key={cat}>
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
          {!list.length && <p className={s.empty}>{t(T.shop.empty, lang)}</p>}
        </div>
      </div>
    </section>
  );
}
