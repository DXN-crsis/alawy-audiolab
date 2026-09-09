"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Nav.module.css";

// rooted at "/" so they work from the picker page too
const LINKS = [
  ["/#builds", T.nav.builds],
  ["/#parts", T.nav.parts],
  ["/#buy", T.nav.buy],
  ["/#contact", T.nav.contact],
];

export default function Nav() {
  const { lang, toggleLang, count, setOpen } = useStore();
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  // one passive listener, coalesced to a frame — no scroll runtime
  useEffect(() => {
    let queued = false;
    const read = () => {
      queued = false;
      const y = window.scrollY;
      setSolid(y > 40);
      // no hero on this page means dark from the first pixel
      setDark(y > (document.getElementById("top")?.offsetHeight ?? 0) - 90);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(read);
    };
    read();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  const onDark = solid || dark;

  return (
    <>
      <nav className={[s.nav, solid && s.scrolled, onDark && s.dark].filter(Boolean).join(" ")}>
        <div className={s.inner}>
          <a href="/" className={s.logo} aria-label="Eagle Store">
            <Logo size={21} />
          </a>

          <ul className={s.links}>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{t(label, lang)}</a>
              </li>
            ))}
          </ul>

          <div className={s.actions}>
            <button className={s.lang} onClick={toggleLang} type="button">
              {lang === "ar" ? "English" : "عربي"}
            </button>

            <button
              className={`btn btn-sm ${onDark ? "btn-ghost" : "btn-dark"} ${s.cart}`}
              onClick={() => setOpen(true)}
              type="button"
            >
              <CartIcon />
              <span className={s.cartLabel}>{t(T.nav.cart, lang)}</span>
              <AnimatePresence>
                {count > 0 && (
                  <m.span
                    className={s.count}
                    key={count}
                    initial={{ scale: 0.4 }}
                    animate={{ scale: [1.4, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {count}
                  </m.span>
                )}
              </AnimatePresence>
            </button>

            <button
              className={s.toggle}
              onClick={() => setMenu((v) => !v)}
              aria-expanded={menu}
              aria-label="Menu"
              type="button"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <m.div
            className={s.panel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenu(false)}>
                    {t(label, lang)}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost" style={{ width: "100%" }} onClick={toggleLang} type="button">
              {lang === "ar" ? "English" : "عربي"}
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
      <path
        d="M6 7h12l-1.2 11.2A2 2 0 0 1 14.8 20H9.2a2 2 0 0 1-2-1.8L6 7Zm3 0V5.5a3 3 0 0 1 6 0V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
