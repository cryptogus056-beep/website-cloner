import { asset } from "./data";
import { ParallaxImage } from "./Parallax";
import { ReviewBox } from "./shared";
import { SplitText } from "./SplitText";

const heroDesktopSrcSet = [500, 800, 1080, 1600]
  .map((w) => `${asset(`images/hero-desktop-${w}.webp`)} ${w}w`)
  .concat(`${asset("images/hero-desktop.avif")} 3200w`)
  .join(", ");

export function Hero() {
  return (
    <section id="hero-section" className="hero_section">
      <div className="wrapper_hero special_main">
        <div id="hero-sentinel" className="sentinel" />
        <div className="hero_headline">
          <SplitText as="h1" className="h1_hero" lines={["flavors"]} />
          <div className="flex_heading">
            <div id="w-node-_11f36968-8a56-e8e7-e367-3a06c52258de-47ffe4a8">
              <SplitText className="caption_heading" lines={["serving central florida"]} />
            </div>
            <SplitText as="h1" className="h1_hero" lines={["that stay"]} />
            <div>
              <SplitText className="caption_heading" lines={["established 1996"]} />
            </div>
          </div>
        </div>
        <div className="bottom_part">
          <div className="p_box">
            <div className="base_p">
              At Amrit Palace, every dish is a tribute to tradition and every moment is crafted for today. We bring
              together the warmth of Indian hospitality, the richness of timeless flavors, and the pace of modern life.
            </div>
          </div>
          <ReviewBox />
        </div>
      </div>
      <div className="background_hero">
        <div className="overlay" />
        <div className="background hero_spec">
          {/* eslint-disable-next-line @next/next/no-img-element -- art-directed source image */}
          <img
            src={asset("images/hero-mobile.avif")}
            srcSet={`${asset("images/hero-mobile-500.webp")} 500w, ${asset("images/hero-mobile.avif")} 786w`}
            sizes="(max-width: 786px) 100vw, 786px"
            alt=""
            className="image mobile_main"
          />
          <ParallaxImage
            src={asset("images/hero-desktop.avif")}
            srcSet={heroDesktopSrcSet}
            sizes="(max-width: 3200px) 100vw, 3200px"
            alt="Amrit Palace, hall photo, avif"
            className="image desktop_main"
            fetchPriority="high"
            start={0.75}
            end={1}
            from={0}
            to={5}
            triggerSelector=".hero_section"
          />
        </div>
      </div>
    </section>
  );
}
