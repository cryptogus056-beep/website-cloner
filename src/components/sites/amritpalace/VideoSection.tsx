"use client";

import { useEffect, useRef } from "react";

import { ABOUT_URL, asset } from "./data";
import { ButtonLink } from "./shared";
import { SplitText } from "./SplitText";
import { useScrollVar } from "./useScrollVar";

/** Section grows from 0.95 to 1 while its top travels from the viewport bottom to the top. */
const sectionScale = (rect: DOMRect, viewportHeight: number) => {
  const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / viewportHeight));
  return (0.95 + progress * 0.05).toFixed(4);
};

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useScrollVar(sectionRef, sectionRef, "--section-scale", sectionScale);

  // Source lazy-loads the video when it nears the viewport.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!video.src) {
          video.src = asset("video/amrit-palace.mp4");
          void video.play().catch(() => {});
        }
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="video_section">
      <div className="wrapper_video">
        <div className="box_content">
          <SplitText as="h2" className="h2 biege" lines={["The Spirit of", "Indian Dining"]} />
          <div className="base_p">From warm hospitality to bold flavors, every detail tells a story.</div>
          <div className="button_s">
            <ButtonLink href={ABOUT_URL} label="About Us" />
          </div>
        </div>
      </div>
      <div className="embed_video">
        <div className="overlay_base" />
        <video
          ref={videoRef}
          className="video"
          poster={asset("video/amrit-poster.avif")}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="none"
          aria-label="Amrit Palace Restaurant"
        />
      </div>
    </section>
  );
}
