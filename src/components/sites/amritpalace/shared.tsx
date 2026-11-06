import { cn } from "@/lib/utils";

import { asset } from "./data";
import { SplitText } from "./SplitText";

type ButtonLinkProps = {
  href: string;
  label: string;
  dark?: boolean;
  block?: boolean;
  big?: boolean;
  external?: boolean;
};

/** Bordered pill button; letters re-fade on hover (source `letters-fade-in-hover`). */
export function ButtonLink({ href, label, dark, block, big, external }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn("button w-inline-block", dark && "dark", block && "block_ver")}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className={cn("button_box", dark && "dark", big && "special_big")}>
        <SplitText lines={[label]} reveal={false} />
      </div>
    </a>
  );
}

const STAR_ALT = "Star icobn, png, primary color";

export function ReviewBox({ className }: { className?: string }) {
  return (
    <div className={cn("review_box", className)}>
      <div className="review_wrapper">
        <div className="flex_review">
          <div className="stars_flex">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="star_icon">
                {/* eslint-disable-next-line @next/next/no-img-element -- source icon */}
                <img src={asset("icons/star-icon.png")} alt={STAR_ALT} className="image" />
              </div>
            ))}
          </div>
          <div className="google_icon">
            {/* eslint-disable-next-line @next/next/no-img-element -- source icon */}
            <img src={asset("icons/google-icon.png")} alt="Google icon, png" className="image" />
          </div>
        </div>
        <div className="number_txt">
          <div className="big_number">4.7</div>
          <div className="small_number">/5</div>
          <div className="txt_review">
            <div className="title_review">Excellent</div>
            <div className="base_caption">
              Based on <span className="reviews_count">3 576</span> reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StarRow() {
  return (
    <div className="stars_flex testimonials">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="star_review">
          {/* eslint-disable-next-line @next/next/no-img-element -- source icon */}
          <img src={asset("icons/star-icon.png")} alt={STAR_ALT} className="image stars" />
        </div>
      ))}
    </div>
  );
}

export type MenuLineItem = { name: string; price: string; description: string };

export function MenuLine({ item, highlight }: { item: MenuLineItem; highlight?: boolean }) {
  return (
    <div className="menu_line">
      <div className="name_pr">
        <div className="name_txt">{item.name}</div>
        <div className="price_box">
          <div className="price_txt">{item.price}</div>
        </div>
      </div>
      <div className="name_desc">
        <div className={cn("desc_txt", highlight && "menu_highlight")}>{item.description}</div>
      </div>
    </div>
  );
}
