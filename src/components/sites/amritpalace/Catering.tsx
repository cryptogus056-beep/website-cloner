import { cateringSlides } from "./data";
import { SplitText } from "./SplitText";

export function Catering() {
  return (
    <section className="catering">
      <div className="wrapper_base slider_special">
        <div className="middle_headline">
          <div className="heading_center">
            <SplitText as="h1" className="h2" lines={["catering"]} />
            <div className="flex_headline">
              <div>
                <SplitText className="caption_heading dark" lines={["Exceptional food"]} />
              </div>
              <div>
                <SplitText as="h1" className="h2" lines={["the amrit way"]} />
              </div>
              <div>
                <SplitText className="caption_heading dark" lines={["Anywhere"]} />
              </div>
            </div>
          </div>
          <div className="middle_p">
            <div className="base_p dark">
              Whether you&apos;re hosting a wedding, corporate gathering, or private celebration, our catering brings
              the warmth of Indian hospitality straight to your table. From full-service spreads to curated menus, Amrit
              Palace delivers flavor, style, and care — wherever the occasion takes you.
            </div>
          </div>
        </div>
      </div>
      <div className="section is--dark">
        <div className="slider_container">
          <div className="splide slider1" role="region" aria-roledescription="carousel" aria-label="Catering services">
            <div className="splide__track">
              <ul className="splide__list">
                {cateringSlides.map((slide) => (
                  <li key={slide.title} className="splide__slide" aria-roledescription="slide">
                    <div className="image_slider">
                      {/* eslint-disable-next-line @next/next/no-img-element -- responsive srcset copied from the source */}
                      <img
                        src={slide.image}
                        srcSet={`${slide.image500} 500w, ${slide.image} 882w`}
                        sizes="(max-width: 882px) 100vw, 882px"
                        alt={slide.alt}
                        className="image"
                        loading="lazy"
                      />
                    </div>
                    <div className="txt_slider center">
                      <div className="title_catering">{slide.title}</div>
                      <div className="desc_catering">{slide.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
