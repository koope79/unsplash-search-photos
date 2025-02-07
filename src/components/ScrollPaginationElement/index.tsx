import React, { useEffect, useRef } from "react";
import { throttle } from "./functions";
import { ScrollPaginationElementComp } from "./types";
import styles from "./styles";

const ScrollPaginationElement: ScrollPaginationElementComp = ({
  onScrollEvent,
  additionalCss = {},
  children,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const targetEl = targetRef.current;

      const fn = throttle(() => {
        const screenHeight = window.innerHeight;
        const scrolled = window.scrollY;
        const threshold = targetEl.offsetHeight - screenHeight / 8;
        const position = scrolled + screenHeight;

        if (position >= threshold && scrolled !== 0) {
          onScrollEvent();
        }
      }, 500);

      const observer = new ResizeObserver(fn);
      observer.observe(targetEl);
      window.addEventListener("scroll", fn);

      return () => {
        observer.unobserve(targetEl);
        window.removeEventListener("scroll", fn);
      };
    }
  }, [targetRef, onScrollEvent]);

  return (
    <div css={[styles.container(), additionalCss.container]}>
      <div
        ref={targetRef}
        css={[styles.contentArea(), additionalCss.contentArea]}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollPaginationElement;
