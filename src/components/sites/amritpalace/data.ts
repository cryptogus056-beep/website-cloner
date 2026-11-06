export const ASSET_BASE = "/sites/amritpalace";

export const asset = (path: string) => `${ASSET_BASE}/${path}`;

const SOURCE_ORIGIN = "https://amritpalace.com";

/** Internal pages that are not part of this clone point back to the source site. */
export const sourcePage = (path: string) => `${SOURCE_ORIGIN}${path}`;

export type Location = { label: string; href: string };

export const reserveLocations: Location[] = [
  {
    label: "Book — Ocala",
    href: "https://www.opentable.com/r/amrit-palace-indian-restaurant-reservations-ocala?restref=276529&lang=en-US&ot_source=Restaurant%20website",
  },
  {
    label: "Book — Gainesville",
    href: "https://www.opentable.com/r/amrit-palace-gainesville-reservations-gainesville?restref=1493497&lang=en-US&ot_source=Restaurant%20website",
  },
];

export const orderLocations: Location[] = [
  { label: "Amrit Palace Ocala", href: "https://order.toasttab.com/online/amrit-palace-ocala" },
  { label: "Amrit Palace Gainesville", href: "https://order.toasttab.com/online/amrit-palace-gainesville" },
];

export const desktopNav = [
  { label: "Home", href: "/" },
  { label: "Catering", href: sourcePage("/catering") },
  { label: "Gift Cards", href: sourcePage("/gift-cards") },
  { label: "About", href: sourcePage("/about") },
] as const;

export const mobileNav = [
  { label: "home", href: "/" },
  { label: "catering", href: sourcePage("/catering") },
  { label: "gift card", href: sourcePage("/gift-cards") },
  { label: "store", href: sourcePage("/store") },
  { label: "about", href: sourcePage("/about") },
  { label: "contact", href: sourcePage("/contact") },
] as const;

export const MENU_URL = sourcePage("/menu");
export const CONTACT_URL = sourcePage("/contact");
export const ABOUT_URL = sourcePage("/about");
export const GIFT_CARDS_URL = sourcePage("/gift-cards");
export const RESERVE_URL = "https://www.opentable.com/r/amrit-palace-indian-restaurant-reservations-ocala";

export type MenuItem = { name: string; price: string; description: string };

export const signaturePlates: MenuItem[] = [
  {
    name: "Variety Tray",
    price: "$17.99",
    description:
      "A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.",
  },
  {
    name: "Butter Chicken",
    price: "$19.99",
    description: "Chicken cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture.",
  },
  {
    name: "Lamb Curry",
    price: "$19.29",
    description:
      "Lamb simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek creating a robust and aromatic dish.",
  },
  {
    name: "Palak Paneer",
    price: "$19.49",
    description: "Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic.",
  },
  {
    name: "Chicken Tandoori",
    price: "$21.79",
    description:
      "Chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish.",
  },
  {
    name: "Chicken Tikka Masala",
    price: "$21.99",
    description: "Chicken chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.",
  },
  {
    name: "Gobhi Manchurian (V)",
    price: "$15.99",
    description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste.",
  },
  {
    name: "Aloo Gobhi (V)",
    price: "$19.29",
    description:
      "Cauliflower and potatoes sautéed with green peas in a traditional seasoning, perfect for those who love a hearty vegetable dish.",
  },
];

export const drinks: MenuItem[] = [
  {
    name: "Tamarind Margarita",
    price: "$12.49",
    description:
      "Tamarind with our signature in-house mix for a distinct take on the classic margarita. Pro-tip: make it spicy!",
  },
  { name: "Tipsy Lassi", price: "$10.99", description: "Our renowned signature mango lassi with a boozy rum kick." },
  { name: "Lychee-Tini", price: "$11.29", description: "Fresh lychees and vodka; shaken not stirred." },
  {
    name: "Ginger Peach Soda",
    price: "$6.49",
    description:
      "A bright fusion of spicy ginger and juicy peach — refreshing, smooth, and perfectly balanced for any moment.",
  },
  { name: "Smoked Old Fashion", price: "$13.99", description: "The classic cocktail smoked to excellence." },
  {
    name: "Mint Cucumber Fizz",
    price: "$5.99",
    description: "Cool cucumber meets crisp mint in this sparkling blend that feels like pure, chilled freshness in a glass.",
  },
];

export type CateringSlide = { title: string; description: string; image: string; image500: string; alt: string };

export const cateringSlides: CateringSlide[] = [
  {
    title: "Buffet Displays",
    description:
      "Elegant and abundant buffet setups that showcase our dishes beautifully while making service smooth and efficient.",
    image: asset("images/catering-1.avif"),
    image500: asset("images/catering-1-500.webp"),
    alt: "Catering, buffet displays, image, avif",
  },
  {
    title: "Professional Service Team",
    description: "Our experienced staff provides courteous, attentive service so your event runs seamlessly.",
    image: asset("images/catering-2.avif"),
    image500: asset("images/catering-2-500.webp"),
    alt: "professional service team, photo, avif",
  },
  {
    title: "Years of Experience",
    description:
      "Decades of catering knowledge and event expertise to ensure a stress-free, memorable experience for you and your guests.",
    image: asset("images/catering-3.avif"),
    image500: asset("images/catering-3-500.webp"),
    alt: "years of experience, photo, avif",
  },
];

export type Testimonial = { platform: string; quote: string; author: string };

export const testimonials: Testimonial[] = [
  {
    platform: "Google",
    quote: "Always so delicious. The staff is incredible and attentive. My favorite restaurant in Ocala.",
    author: "James T.",
  },
  {
    platform: "Yelp",
    quote: "The restaurant is very clean, food is amazing and servers very attentive. You will not regret eating here.",
    author: "Elizabeth M.",
  },
  {
    platform: "Reddit",
    quote:
      "I had some of the best Indian food around… Tandoori Chicken, Rogan Josh and samosa chaat — everything was incredible.",
    author: "Rahul S.",
  },
  {
    platform: "MapQuest",
    quote: "Inassumong on the outside, GORGEOUS on the inside. I was dining alone and it was just stellar.",
    author: "Marie R.",
  },
];

export const REVIEW_URL =
  "https://www.google.com/search?sca_esv=972409babe1b9eaa&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s909IWr16dNG_KDShGavAL3cue4s8qxAOavCgrazHPQLske-FtvjHsk10zPoYuGcKCd7Z_LNBId9v53hKYxiqVOeRgST&q=Amrit+Palace+Reviews&sa=X&ved=2ahUKEwj2l8iJ2ouQAxXMlP0HHRZiJsAQ0bkNegQISBAE&biw=1707&bih=932&dpr=1.5";

export const footerColumns = [
  {
    id: "w-node-fec112a8-dfda-1720-b88b-9e68da0a7265-da0a723d",
    title: "Discover",
    links: [
      { label: "Home", href: "/", external: false },
      { label: "Catering", href: sourcePage("/catering"), external: false },
      { label: "Gift Cards", href: sourcePage("/gift-cards"), external: false },
      { label: "About", href: sourcePage("/about"), external: false },
      { label: "Contact", href: sourcePage("/contact"), external: false },
    ],
  },
  {
    id: "w-node-fec112a8-dfda-1720-b88b-9e68da0a7279-da0a723d",
    title: "Legals",
    links: [
      { label: "Privacy Policy", href: sourcePage("/privacy-policy"), external: false },
      { label: "Terms and Conditions", href: sourcePage("/terms-and-conditions"), external: false },
      { label: "Cookie Policy", href: sourcePage("/cookie-policy"), external: false },
    ],
  },
  null,
  {
    id: "w-node-fec112a8-dfda-1720-b88b-9e68da0a7288-da0a723d",
    title: "Actions",
    links: [
      { label: "View Menu", href: MENU_URL, external: true },
      {
        label: "Order Gift Card",
        href: "https://www.toasttab.com/amrit-palace-3415-sw-college-rd/giftcards",
        external: true,
      },
      { label: "Reserve a Table", href: RESERVE_URL, external: true },
    ],
  },
  {
    id: "w-node-fec112a8-dfda-1720-b88b-9e68da0a7299-da0a723d",
    title: "Socials",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/amrit_palace/", external: true },
      { label: "Facebook", href: "https://www.facebook.com/amritpalace/", external: true },
    ],
  },
] as const;
