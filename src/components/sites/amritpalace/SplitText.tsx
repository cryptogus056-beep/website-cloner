"use client";

import { createElement, useEffect, useRef, type CSSProperties, type JSX } from "react";

import { cn } from "@/lib/utils";

/** Source timing: GSAP `stagger: { amount: 0.8 }` on reveal, `amount: 0.3` on hover. */
const REVEAL_STAGGER_TOTAL = 0.8;
const HOVER_STAGGER_TOTAL = 0.3;

type SplitTextProps = {
  /** Each entry renders on its own line (source used `<br/>`). */
  lines: string[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  /** Fade letters in once the element reaches 70% of the viewport. */
  reveal?: boolean;
};

type CharStyle = CSSProperties & { "--char-delay"?: string; "--hover-delay"?: string };

export function SplitText({ lines, as = "div", className, id, reveal = true }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const totalChars = lines.reduce((sum, line) => sum + line.replace(/\s+/g, "").length, 0);
  const step = (amount: number) => (totalChars > 1 ? amount / (totalChars - 1) : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !reveal) return;

    const show = () => el.classList.add("is-revealed");
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      // Equivalent to ScrollTrigger `start: "top 70%"`. The huge top margin also reveals
      // elements the visitor jumped past (ScrollTrigger fires onEnter for those too).
      { rootMargin: "1000000px 0px -30% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  let charIndex = 0;
  const content = lines.map((line, lineIndex) => {
    const words = line.split(/\s+/).filter(Boolean);
    return (
      <span key={lineIndex}>
        {lineIndex > 0 && <br />}
        {words.map((word, wordIndex) => (
          <span key={wordIndex}>
            {wordIndex > 0 && " "}
            <span className="split-word" aria-hidden="true">
              {Array.from(word).map((char, i) => {
                const index = charIndex++;
                const style: CharStyle = {
                  "--char-delay": `${(index * step(REVEAL_STAGGER_TOTAL)).toFixed(3)}s`,
                  "--hover-delay": `${(index * step(HOVER_STAGGER_TOTAL)).toFixed(3)}s`,
                };
                return (
                  <span key={i} className="split-char" style={style}>
                    {char}
                  </span>
                );
              })}
            </span>
          </span>
        ))}
      </span>
    );
  });

  return createElement(
    as,
    {
      ref,
      id,
      className: cn(className),
      "aria-label": lines.join(" "),
      "data-split-reveal": reveal ? "" : undefined,
    },
    content,
  );
}
