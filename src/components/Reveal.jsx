"use client";

import { useEffect, useRef } from "react";

/* One observer for the whole page instead of one animation runtime per
   element. It sets an attribute and then forgets the node; the transition
   itself is CSS, so it runs on the compositor and costs nothing on a slow
   phone. */
let io;
const watcher = () =>
  (io ||= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.setAttribute("data-shown", "");
        io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px" }
  ));

export default function Reveal({ as: As = "div", stagger, delay, style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    watcher().observe(el);
    return () => watcher().unobserve(el);
  }, []);

  const flag = stagger ? { "data-stagger": "" } : { "data-reveal": "" };
  return (
    <As
      ref={ref}
      {...flag}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </As>
  );
}
