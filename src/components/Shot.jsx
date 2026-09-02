"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./Shot.module.css";

/**
 * A product image with something to look at while it arrives. Renders the
 * placeholder as a sibling, absolutely positioned, so it drops into any
 * container that is already `position: relative` without restructuring it.
 *
 * The placeholder unmounts on load rather than being hidden, so the sweep
 * stops animating instead of running forever behind an opaque image.
 */
export default function Shot({ alt = "", ...rest }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  // An image served from cache can finish before React attaches its handler,
  // which would leave the placeholder up over a picture that already arrived.
  useEffect(() => {
    if (ref.current?.complete) setReady(true);
  }, []);

  return (
    <>
      <Image ref={ref} alt={alt} draggable={false} onLoad={() => setReady(true)} {...rest} />
      {!ready && (
        <span className={s.load} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path
              d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5 18h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      )}
    </>
  );
}
