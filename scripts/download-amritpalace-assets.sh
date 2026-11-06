#!/usr/bin/env bash
# Downloads the assets used by the amritpalace.com homepage clone into
# public/sites/amritpalace/. Source URL -> local path map lives below and in
# docs/research/amritpalace/page-brief.md.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/sites/amritpalace"
CDN="https://cdn.prod.website-files.com/68a25157e0edb92947ffe4a2"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"

mkdir -p "$DEST"/{images,fonts,video,lottie,icons}

fetch() {
  local url="$1" out="$DEST/$2"
  if [[ -s "$out" ]]; then return; fi
  curl -sSfL -A "$UA" -o "$out" "$url"
  echo "saved $2 ($(wc -c <"$out") bytes)"
}

# Fonts
fetch "$CDN/68ab682a7a96e21e312a6cb7_Satoshi-Regular.woff2" fonts/Satoshi-Regular.woff2
fetch "$CDN/68ab682aafa6258cac9f6576_Satoshi-Medium.woff2" fonts/Satoshi-Medium.woff2
fetch "$CDN/68ab682aa0a6b4bc699d3396_Satoshi-Bold.woff2" fonts/Satoshi-Bold.woff2
fetch "$CDN/68ab68a77717b49e8d0f3e52_TT%20Ramillas%20Trial%20Variable%20Roman.ttf" fonts/TTRamillas-Variable.ttf

# Icons
fetch "$CDN/68ab69d9e852bb71813eafdf_Logo.png" icons/logo.png
fetch "$CDN/68ab6aad6d37e1980d319ac9_menu-icon.png" icons/menu-icon.png
fetch "$CDN/68ab6aad663e114eb608fb96_order-icon.png" icons/order-icon.png
fetch "$CDN/68ab6f5c7f6ef175306f18bb_star-icon.png" icons/star-icon.png
fetch "$CDN/68ab6f5c31e3e7b0a84252b6_google-icon.png" icons/google-icon.png
fetch "$CDN/68c9c21775852a6417f46e90_chevron-down.svg" icons/chevron-down.svg
fetch "$CDN/68bf08843cbc855ea7ecfe60_32x32.png" icons/favicon-32.png
fetch "$CDN/68bf088790486c34f092093a_256x256.png" icons/apple-touch-icon.png

# Images (full size + responsive variants used in srcset).
# The CDN serves the "-p-<width>" variants as WebP even though their URLs end in .avif.
for w in 500 800 1080 1600; do
  fetch "$CDN/68ab6d83cbb46c5a59dea24b_Background%20Hero-min-p-$w.avif" "images/hero-desktop-$w.webp"
done
fetch "$CDN/68ab6d83cbb46c5a59dea24b_Background%20Hero-min.avif" images/hero-desktop.avif
fetch "$CDN/6900f221f61431ab7c171d52_mobile_hero-p-500.avif" images/hero-mobile-500.webp
fetch "$CDN/6900f221f61431ab7c171d52_mobile_hero.avif" images/hero-mobile.avif

for w in 500 800 1080; do
  fetch "$CDN/68ac4c4fc4648b01d408500b_Featured%20Menu-p-$w.avif" "images/featured-menu-$w.webp"
done
fetch "$CDN/68ac4c4fc4648b01d408500b_Featured%20Menu.avif" images/featured-menu.avif

for n in 1 2; do
  id=$([[ $n == 1 ]] && echo 68ac50267055b2ef13a16065 || echo 68ac5027270c47ed176e5cd7)
  for w in 500 800; do fetch "$CDN/${id}_cocktails-$n-p-$w.avif" "images/cocktails-$n-$w.webp"; done
  fetch "$CDN/${id}_cocktails-$n.avif" "images/cocktails-$n.avif"
done

for w in 500 800 1080 1600; do
  fetch "$CDN/68ac5358491181ca69dbe1f5_fullsize-min-p-$w.avif" "images/fullsize-$w.webp"
done
fetch "$CDN/68ac5358491181ca69dbe1f5_fullsize-min.avif" images/fullsize.avif

fetch "$CDN/68e46be43526b08d9492bd44_img-1-p-500.avif" images/catering-1-500.webp
fetch "$CDN/68e46be43526b08d9492bd44_img-1.avif" images/catering-1.avif
fetch "$CDN/68e46be3bdd582aff715479c_img-2-p-500.avif" images/catering-2-500.webp
fetch "$CDN/68e46be3bdd582aff715479c_img-2.avif" images/catering-2.avif
fetch "$CDN/68e46be4c3b9f44298ee4f60_img-3-p-500.avif" images/catering-3-500.webp
fetch "$CDN/68e46be4c3b9f44298ee4f60_img-3.avif" images/catering-3.avif

# Video + poster
fetch "$CDN/69a5fe2eb039b97dd5da108d_amrit-poster.avif" video/amrit-poster.avif
fetch "$CDN%2F68ab88ee4daaf51c42a59660_Amrit%20Palace%20%281%29-transcode.mp4" video/amrit-palace.mp4

# Gift card Lottie animation
fetch "$CDN/68bf1845d8e6c5f227ba8d2f_57787a8b58369ec4d5498ac8c36d0c69_E-Cards.json" lottie/e-cards.json
