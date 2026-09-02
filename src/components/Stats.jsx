"use client";

import Reveal from "./Reveal";
import { PRODUCTS, SHOP } from "@/data/products";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Sections.module.css";

// Counted off the catalogue, so they can never drift from what is on the page.
const BRANDS = new Set(PRODUCTS.map((p) => p.brand)).size;

const ITEMS = [
  { n: PRODUCTS.length, label: T.stats.products },
  { n: SHOP.governorates, label: T.stats.governorates },
  { n: BRANDS, label: T.stats.brands },
];

export default function Stats() {
  const { lang } = useStore();

  return (
    <section className="section" style={{ paddingBlock: "var(--s7)" }}>
      <div className="container">
        <Reveal stagger className={s.stats}>
          {ITEMS.map((it, i) => (
            <div className={s.stat} key={i}>
              <b>{it.n}</b>
              <span>{t(it.label, lang)}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
