import type { Metadata } from "next";

import { AmritPalacePage } from "@/components/sites/amritpalace/AmritPalacePage";

const description =
  "Discover Amrit Palace — a fast-fine Indian restaurant blending authentic flavors with a modern dining experience. Explore our menu, catering, and gift options.";

export const metadata: Metadata = {
  title: "Amrit Palace",
  description,
  icons: {
    icon: "/sites/amritpalace/icons/favicon-32.png",
    apple: "/sites/amritpalace/icons/apple-touch-icon.png",
  },
  openGraph: { title: "Amrit Palace", description, type: "website" },
  twitter: { card: "summary_large_image", title: "Amrit Palace", description },
};

export default function Home() {
  return <AmritPalacePage />;
}
