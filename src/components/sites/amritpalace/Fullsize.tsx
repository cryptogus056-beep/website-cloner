import { asset } from "./data";
import { ParallaxImage } from "./Parallax";
import { SplitText } from "./SplitText";

const fullsizeSrcSet = [500, 800, 1080, 1600]
  .map((w) => `${asset(`images/fullsize-${w}.webp`)} ${w}w`)
  .concat(`${asset("images/fullsize.avif")} 3200w`)
  .join(", ");

export function Fullsize() {
  return (
    <section className="fullsize_section">
      <div className="wrapper_video">
        <div className="headline_fs">
          <SplitText as="h2" className="h2 biege" lines={["Rooted in", "Experience"]} />
        </div>
        <div className="desc_fs">
          <div className="base_p">
            Since 1996, Amrit Palace has been more than a destination for Indian cuisine. It has been a space for
            celebration, connection, and tradition reimagined. Each visit is a quiet ritual; the warmth of spice, the
            hum of conversation, the comfort of something familiar yet elevated. Whether it’s your first time or your
            fiftieth, we believe the best meals are the ones that stay with you long after the last bite.
          </div>
        </div>
      </div>
      <div className="overlay_base fs" />
      <div className="background_fullsize">
        <ParallaxImage
          src={asset("images/fullsize.avif")}
          srcSet={fullsizeSrcSet}
          sizes="100vw"
          width={1600}
          alt="Fullsize hall photo, avif"
          className="image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
