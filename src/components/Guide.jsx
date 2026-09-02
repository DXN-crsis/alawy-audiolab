"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import { useStore } from "@/lib/store";
import { T, t } from "@/data/copy";
import s from "./Sections.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function Guide() {
  const { lang } = useStore();
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="guide">
      <Reveal className={`container ${s.guide}`}>
        <div>
          <p className="eyebrow">{t(T.guide.eyebrow, lang)}</p>
          <h2 className="h-lg">{t(T.guide.title, lang)}</h2>
          <p className="lede" style={{ marginTop: 22 }}>
            {t(T.guide.lede, lang)}
          </p>
        </div>

        <div className={s.acc}>
          {T.guide.items.map((item, i) => {
            const on = open === i;
            return (
              <div className={s.row} key={i}>
                <button className={s.q} type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
                  {t(item.q, lang)}
                  <m.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ rotate: on ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </m.svg>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <m.div
                      className={s.a}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                    >
                      <p className={s.aInner}>{t(item.a, lang)}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
