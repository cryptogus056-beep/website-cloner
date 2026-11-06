import { MENU_URL, RESERVE_URL, asset, signaturePlates } from "./data";
import { ParallaxImage } from "./Parallax";
import { ButtonLink, MenuLine } from "./shared";
import { SplitText } from "./SplitText";

const featuredSrcSet = [500, 800, 1080]
  .map((w) => `${asset(`images/featured-menu-${w}.webp`)} ${w}w`)
  .concat(`${asset("images/featured-menu.avif")} 1820w`)
  .join(", ");

export function FeaturedMenu() {
  return (
    <section className="featured_menu">
      <div className="sides">
        <div className="left_side">
          <div className="box_featured">
            <div className="top_menu">
              <div className="heading_featured">
                <SplitText as="h3" className="h3" lines={["signature", "plates"]} />
                <div className="icon_plates">
                  {/* eslint-disable-next-line @next/next/no-img-element -- source icon */}
                  <img src={asset("icons/menu-icon.png")} alt="Menu, icon, png" className="image" />
                </div>
              </div>
              <div className="cms_list">
                {signaturePlates.map((item) => (
                  <div key={item.name} className="featured_menu_item">
                    <MenuLine item={item} highlight />
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom_button">
              <ButtonLink href={MENU_URL} label="View Full Menu" dark block big />
            </div>
          </div>
        </div>
        <div className="right_side home_menu">
          <div className="wrapper_side">
            <div className="heading_side">
              <div className="txt_content">
                <SplitText as="h3" className="h3" lines={["Signature Dishes.", "Classic Roots."]} />
                <div className="base_box">
                  <div className="base_p dark special_p">
                    Every item on our menu reflects decades of tradition — recipes passed down, refined through
                    experience, and thoughtfully adapted for today’s palate. From bold, aromatic curries to delicate
                    tandoori finishes, our dishes are crafted to honor heritage while welcoming every kind of guest —
                    whether it’s your first taste or a family favorite.
                  </div>
                </div>
              </div>
              <div className="button_dark">
                {/* Source button (`data-open-reserve`, href="#") did nothing; it now opens the reservation page. */}
                <ButtonLink href={RESERVE_URL} label="Reserve a Table" dark external />
              </div>
            </div>
            <div className="image_box">
              <ParallaxImage
                src={asset("images/featured-menu.avif")}
                srcSet={featuredSrcSet}
                sizes="100vw"
                alt="Featured menu, food, photo, avif"
                className="image"
                loading="lazy"
                start={0.43}
                end={1}
                triggerSelector=".right_side"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
