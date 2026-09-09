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
                ? "النسر ستور — تجميعات گيمنگ وقطع كمبيوتر، جديد ومستعمل. بغداد، العراق."
                : "Eagle Store — gaming builds and computer parts, new and used. Baghdad, Iraq."}
            </p>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.shop, lang)}</h5>
            <ul>
              <li><a href="#builds">{ar ? "كل التجميعات" : "All builds"}</a></li>
              <li><a href="#builds">{ar ? "رايزن" : "AMD Ryzen"}</a></li>
              <li><a href="#builds">{ar ? "انتل" : "Intel Core"}</a></li>
              <li><a href="#parts">{ar ? "القطع" : "Parts"}</a></li>
            </ul>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.help, lang)}</h5>
            <ul>
              <li><a href="/pick">{ar ? "ساعدني اختار" : "Help me pick"}</a></li>
              <li><a href="#buy">{ar ? "الضمان" : "Warranty"}</a></li>
              <li><a href="#buy">{ar ? "التوصيل" : "Delivery"}</a></li>
              <li><a href="#contact">{ar ? "الفروع" : "Branches"}</a></li>
            </ul>
          </div>

          <div className={s.col}>
            <h5>{t(T.footer.contact, lang)}</h5>
            <ul>
              <li><a href={`https://wa.me/${SHOP.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href={SHOP.instagram} target="_blank" rel="noopener">Instagram</a></li>
              <li><a href={SHOP.facebook} target="_blank" rel="noopener">Facebook</a></li>
              <li><a className="mono" href={`tel:+${SHOP.whatsapp}`} dir="ltr">{SHOP.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <span>© {new Date().getFullYear()} {t(T.footer.rights, lang)}</span>
          <span>{t(T.footer.prices, lang)}</span>
        </div>
        <p className={s.credit}>{t(T.footer.credit, lang)}</p>
      </div>
    </footer>
  );
}
