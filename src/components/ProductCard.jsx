"use client";

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/lib/store";
import { money } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Shop.module.css";

export default function ProductCard({ product, index }) {
  const { lang, add, setPeek } = useStore();
  const [vi, setVi] = useState(0);

  const variant = product.variants?.[vi];
  const price = variant?.price ?? product.price;
  const chips = [product.note, product.colors, product.warranty].filter(Boolean);

  return (
    <article className={s.card} style={{ "--i": Math.min(index, 7) }}>
      <button
        className={s.open}
        type="button"
        onClick={() => setPeek(product)}
        aria-label={`${product.brand} ${product.name} — ${t(T.shop.details, lang)}`}
      />

      <div className={s.shot}>
        <Image
          src={`/products/${product.slug}.jpg`}
          alt={`${product.brand} ${product.name}`}
          width={864}
          height={1080}
          priority={index < 4}
          loading={index < 4 ? undefined : "lazy"}
          quality={90}
          sizes="(max-width: 540px) 46vw, (max-width: 1180px) 32vw, 300px"
        />
      </div>

      <div className={s.body}>
        <span className={s.brand}>{product.brand}</span>
        <h3 className={s.name}>{product.name}</h3>

        {chips.length > 0 && (
          <div className={s.meta}>
            {chips.map((c, i) => (
              <i key={i}>{t(c, lang)}</i>
            ))}
          </div>
        )}

        {product.variants?.length > 1 && (
          <div className={s.variants}>
            {product.variants.map((v, i) => (
              <button
                key={i}
                type="button"
                className={s.variant}
                data-on={i === vi}
                onClick={() => setVi(i)}
              >
                {t(v, lang)}
              </button>
            ))}
          </div>
        )}

        <div className={s.foot}>
          <span className={s.price} dir="ltr">
            {money(price)}
            <small>IQD</small>
          </span>
          <button
            className={s.add}
            type="button"
            onClick={() => add(product.slug, vi, `${product.brand} ${product.name}`)}
            aria-label={`${t(T.shop.add, lang)} — ${product.brand} ${product.name}`}
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
