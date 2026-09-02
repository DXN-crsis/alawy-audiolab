"use client";

import Logo from "./Logo";
import { useStore } from "@/lib/store";
import { SHOP } from "@/data/products";
import { T, t } from "@/data/copy";
import s from "./Footer.module.css";

export default function Footer() {
  const { lang } = useStore();
  const ar = lang === "ar";

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.grid}>
          <div className={s.brand}>
            <a href="#top">
              <Logo size={24} sub />
            </a>
            <p>
              {ar
                ? "اوديو لاب — سماعات احترافية وملحقاتها. بغداد، العراق."
                : "Audiolab — professional earphones and accessories. Baghdad, Iraq."}
            </p>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.shop, lang)}</h5>
            <ul>
              <li><a href="#shop">{ar ? "كل المنتجات" : "All products"}</a></li>
              <li><a href="#shop">{ar ? "سماعات" : "IEMs"}</a></li>
              <li><a href="#shop">{ar ? "دنكل داك" : "DAC / dongles"}</a></li>
              <li><a href="#shop">{ar ? "ملحقات" : "Accessories"}</a></li>
            </ul>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.help, lang)}</h5>
            <ul>
              <li><a href="#guide">{ar ? "دليل الشراء" : "Buying guide"}</a></li>
              <li><a href="#delivery">{ar ? "التوصيل" : "Delivery"}</a></li>
              <li><a href="#delivery">{ar ? "الدفع" : "Payment"}</a></li>
              <li><a href="#delivery">{ar ? "الضمان" : "Warranty"}</a></li>
            </ul>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.contact, lang)}</h5>
            <ul>
              <li><a href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href={SHOP.telegram} target="_blank" rel="noopener">Telegram</a></li>
              <li><a href={SHOP.instagram} target="_blank" rel="noopener">Instagram</a></li>
              <li><a className="mono" href={`tel:+${SHOP.whatsapp}`} dir="ltr">{SHOP.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <span>© {new Date().getFullYear()} {t(T.footer.rights, lang)}</span>
          <span>{t(T.footer.prices, lang)}</span>
        </div>
      </div>
    </footer>
  );
}
