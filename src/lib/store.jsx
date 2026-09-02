"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { bySlug, money, SHOP } from "@/data/products";

const Ctx = createContext(null);
const KEY = "alawy-cart";

export function StoreProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const [peek, setPeek] = useState(null); // product open in the detail sheet
  const [toast, setToast] = useState(null); // { slug, label } after an add

  // The boot script in <head> already picked the language from the browser and
  // the timezone; read its answer rather than guessing again.
  useEffect(() => {
    const l = document.documentElement.lang;
    if (l === "en" || l === "ar") setLang(l);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // Note there is no write here. Persisting on every render meant the first
  // page view saved whatever was detected, and every later visit read that
  // back instead of detecting again — so region detection ran once, ever.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // the page must not scroll behind the drawer or the sheet
  useEffect(() => {
    const lock = open || !!peek;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, peek]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(id);
  }, [toast]);

  // a cart key is slug, or slug#variantIndex when the product has variants
  const add = useCallback((slug, vi = 0, label = "") => {
    const key = vi ? `${slug}#${vi}` : slug;
    setCart((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
    setToast({ slug, label });
  }, []);

  const bump = useCallback((key, d) => {
    setCart((c) => {
      const n = (c[key] || 0) + d;
      const next = { ...c };
      if (n < 1) delete next[key];
      else next[key] = n;
      return next;
    });
  }, []);

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([key, qty]) => {
          const [slug, vi] = key.split("#");
          const p = bySlug(slug);
          if (!p) return null;
          const v = p.variants?.[Number(vi) || 0];
          return { key, qty, product: p, variant: v, unit: v?.price ?? p.price };
        })
        .filter(Boolean),
    [cart]
  );

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((n, l) => n + l.unit * l.qty, 0);

  const checkoutUrl = useMemo(() => {
    if (!lines.length) return null;
    const head = lang === "ar" ? "السلام عليكم، اريد اطلب:" : "Hi, I'd like to order:";
    const body = lines.map((l) => {
      const v = l.variant ? ` (${l.variant[lang] || l.variant.en})` : "";
      return `• ${l.product.brand} ${l.product.name}${v} ×${l.qty} — ${money(l.unit * l.qty)} IQD`;
    });
    const foot = `${lang === "ar" ? "المجموع" : "Total"}: ${money(total)} IQD`;
    return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent([head, ...body, foot].join("\n"))}`;
  }, [lines, total, lang]);

  const value = {
    lang,
    toggleLang: () =>
      setLang((l) => {
        const next = l === "ar" ? "en" : "ar";
        try {
          localStorage.setItem("alawy-lang-choice", next);
        } catch {}
        return next;
      }),
    lines,
    count,
    total,
    add,
    bump,
    open,
    setOpen,
    peek,
    setPeek,
    toast,
    setToast,
    checkoutUrl,
  };

  // domAnimation only — no layout or drag features anywhere, which keeps the
  // animation runtime at roughly half its full size.
  return (
    <Ctx.Provider value={value}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </Ctx.Provider>
  );
}

export const useStore = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used inside <StoreProvider>");
  return v;
};
