"use client";

import { useEffect, type RefObject } from "react";

/**
 * Writes a CSS custom property on `target` from the scroll position of `trigger`.
 * `compute` receives the trigger's rect and viewport height and returns the value.
 * Runs once per animation frame while scrolling or resizing.
 */
export function useScrollVar(
  trigger: RefObject<HTMLElement | null>,
  target: RefObject<HTMLElement | null>,
  property: string,
  compute: (rect: DOMRect, viewportHeight: number) => string,
) {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const triggerEl = trigger.current;
      const targetEl = target.current;
      if (!triggerEl || !targetEl) return;
      targetEl.style.setProperty(property, compute(triggerEl.getBoundingClientRect(), window.innerHeight));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [trigger, target, property, compute]);
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Progress of an element crossing the viewport: 0 when its top meets the
 * viewport bottom, 1 when its bottom meets the viewport top.
 */
export const viewportProgress = (rect: DOMRect, viewportHeight: number) =>
  clamp01((viewportHeight - rect.top) / (viewportHeight + rect.height));

/** Maps `progress` within [start, end] to a translateY between `from`% and `to`% (source IX2 parallax). */
export const parallaxY = (progress: number, start = 0, end = 1, from = -5, to = 5) => {
  const local = clamp01((progress - start) / (end - start));
  return `${(from + local * (to - from)).toFixed(3)}%`;
};
