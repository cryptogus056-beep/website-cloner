"use client";

import { useCallback, useRef, type CSSProperties, type ImgHTMLAttributes } from "react";

import { parallaxY, useScrollVar, viewportProgress } from "./useScrollVar";

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Viewport-crossing progress (0 = trigger enters at the bottom, 1 = it leaves at the top) where motion starts/ends. */
  start?: number;
  end?: number;
  /** translateY range in percent of the image height. */
  from?: number;
  to?: number;
  /** Closest ancestor whose position drives the motion; defaults to the image's parent. */
  triggerSelector?: string;
};

/** Image that drifts vertically while its trigger crosses the viewport (source Webflow IX2 "while scrolling in view"). */
export function ParallaxImage({
  start = 0,
  end = 1,
  from = -5,
  to = 5,
  triggerSelector,
  alt = "",
  style,
  ...props
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const compute = useCallback(
    (rect: DOMRect, viewportHeight: number) => parallaxY(viewportProgress(rect, viewportHeight), start, end, from, to),
    [start, end, from, to],
  );

  const setRef = useCallback(
    (node: HTMLImageElement | null) => {
      imageRef.current = node;
      triggerRef.current = node
        ? ((triggerSelector ? node.closest<HTMLElement>(triggerSelector) : null) ?? node.parentElement)
        : null;
    },
    [triggerSelector],
  );

  useScrollVar(triggerRef, imageRef, "--parallax-y", compute);

  const initialStyle = { "--parallax-y": `${from}%`, ...style } as CSSProperties;

  // eslint-disable-next-line @next/next/no-img-element -- responsive srcset copied from the source
  return <img ref={setRef} data-parallax="" alt={alt} style={initialStyle} {...props} />;
}
