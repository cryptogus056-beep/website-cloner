"use client";

import { useEffect, useRef } from "react";

import { GIFT_CARDS_URL, asset } from "./data";
import { ButtonLink } from "./shared";
import { SplitText } from "./SplitText";

function GiftCardAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let destroy: (() => void) | undefined;

    // Load the 3.6 MB animation only when the section approaches the viewport.
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const { default: lottie } = await import("lottie-web");
        if (cancelled) return;
        const animation = lottie.loadAnimation({
          container,
          renderer: "canvas",
          loop: true,
          autoplay: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          path: asset("lottie/e-cards.json"),
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        });
        const onResize = () => animation.resize();
        window.addEventListener("resize", onResize);
        destroy = () => {
          window.removeEventListener("resize", onResize);
          animation.destroy();
        };
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      destroy?.();
    };
  }, []);

  return <div ref={containerRef} className="gc_curs" role="img" aria-label="Animated Amrit Palace e-gift cards" />;
}

export function GiftCard() {
  return (
    <section className="gift_card">
      <div className="wrapper_card cursor_card">
        <div className="center">
          <SplitText as="h2" className="h2 middle" lines={["gift a taste", "of tradition"]} />
        </div>
        <div className="caption_card">
          <div className="p_gift">
            <div className="base_p dark">
              Whether it’s a birthday, celebration, or a simple “thank you,” an Amrit Palace gift card brings people
              together over timeless flavors.
            </div>
          </div>
          <ButtonLink href={GIFT_CARDS_URL} label="Order Now" dark />
        </div>
        <div className="special_b">
          <div className="card_flex">
            <div className="caption_box">
              <SplitText className="caption_heading dark" lines={["Share the experience."]} />
            </div>
            <div id="w-node-bc70e26d-0de8-3403-0069-5b75b1ed9f6b-47ffe4a8" className="caption_box">
              <SplitText className="caption_heading dark" lines={["Give the flavors they’ll remember."]} />
            </div>
          </div>
          <div className="gift_card_box">
            <GiftCardAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
