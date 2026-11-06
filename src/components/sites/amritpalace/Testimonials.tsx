import { REVIEW_URL, testimonials } from "./data";
import { ReviewBox, StarRow } from "./shared";
import { SplitText } from "./SplitText";

function TestimonialList({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee_list" aria-hidden={hidden || undefined}>
      <div role="list" className="marquee_flex">
        {testimonials.map((item) => (
          <div key={item.author} role="listitem" className="marquee_item">
            <div className="box_testimonial">
              <div className="header_testimonial">
                <StarRow />
                <div className="platform">
                  <div className="txt_platform">{item.platform}</div>
                </div>
              </div>
              <div className="testimonial_txt">
                <div className="testimonial_p">{item.quote}</div>
              </div>
              <div className="author_box">
                <div className="author_title">Author</div>
                <div className="author_name">{item.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrapper_base special_marque">
        <div className="flexbox_testimonials">
          <div>
            <SplitText as="h2" className="h2" lines={["What Our", "Guests Say"]} />
          </div>
          <ReviewBox className="testimonials_box" />
        </div>
      </div>
      <div className="marquee_reviews">
        <div className="marquee">
          <div className="marquee_track">
            <TestimonialList />
            <TestimonialList hidden />
          </div>
        </div>
      </div>
      <div className="wrapper_base special_marque">
        <div className="review_txt">
          <div className="base_p dark review_spec">
            Have you already visited our restaurant and left with great memories?
          </div>
          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="w-inline-block">
            <div className="base_p dark link_review">Be sure to leave us a review!</div>
          </a>
        </div>
      </div>
    </section>
  );
}
