import { MENU_URL, asset, drinks } from "./data";
import { ParallaxImage } from "./Parallax";
import { ButtonLink, MenuLine } from "./shared";
import { SplitText } from "./SplitText";

const cocktailSrcSet = (n: 1 | 2) =>
  `${asset(`images/cocktails-${n}-500.webp`)} 500w, ${asset(`images/cocktails-${n}-800.webp`)} 800w, ${asset(
    `images/cocktails-${n}.avif`,
  )} 1800w`;

export function Drinks() {
  return (
    <section className="drinks">
      <div className="sides">
        <div className="left_side biege">
          <div className="headline_top">
            <div className="heading_side drinks">
              <div className="txt_content">
                <SplitText as="h3" className="h3" lines={["DRINKS THAT", "COMPLETE", "THE EXPERIENCE"]} />
                <div className="base_box">
                  <div className="base_p dark">
                    From house-special cocktails to traditional Indian lassi, every drink is designed to pair perfectly
                    with your meal.
                  </div>
                </div>
              </div>
              <div className="button_dark">
                <ButtonLink href={MENU_URL} label="Open Menu" dark />
              </div>
            </div>
          </div>
          <div className="drinks_cms_featured">
            {drinks.map((item) => (
              <div key={item.name} className="featured_menu_drinks">
                <MenuLine item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="right_side drinks">
          {([1, 2] as const).map((n) => (
            <div key={n} className="image_drinks">
              <ParallaxImage
                src={asset(`images/cocktails-${n}.avif`)}
                srcSet={cocktailSrcSet(n)}
                sizes="100vw"
                alt="Amrit Palace, cocktails and drinks, photo, avif"
                className="image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
