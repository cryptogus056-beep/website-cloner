import "./amritpalace.css";

import { Catering } from "./Catering";
import { Drinks } from "./Drinks";
import { FeaturedMenu } from "./FeaturedMenu";
import { Footer } from "./Footer";
import { Fullsize } from "./Fullsize";
import { GiftCard } from "./GiftCard";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { SmoothScroll } from "./SmoothScroll";
import { Testimonials } from "./Testimonials";
import { VideoSection } from "./VideoSection";

export function AmritPalacePage() {
  return (
    <div className="amrit">
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <FeaturedMenu />
        <Catering />
        <Drinks />
        <GiftCard />
        <Fullsize />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
