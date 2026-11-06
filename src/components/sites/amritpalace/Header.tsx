"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  CONTACT_URL,
  MENU_URL,
  asset,
  desktopNav,
  mobileNav,
  orderLocations,
  reserveLocations,
  type Location,
} from "./data";
import { Dropdown, DropdownChevron } from "./Dropdown";
import { SiteLink } from "./SiteLink";

function LocationList({ locations, titleClassName }: { locations: Location[]; titleClassName?: string }) {
  return (
    <>
      <div className="title_locs">
        <div className={cn("base_p dark", titleClassName)}>Choose restaurant</div>
      </div>
      <div className="links_addresses">
        {locations.map((location) => (
          <a
            key={location.href}
            href={location.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link_loc w-dropdown-link"
          >
            {location.label}
          </a>
        ))}
      </div>
    </>
  );
}

function OrderDropdown({ className, titleClassName }: { className?: string; titleClassName?: string }) {
  return (
    <Dropdown
      className={className}
      toggleClassName="link_header drop_locs"
      listClassName="links_navs"
      toggle={
        <>
          <div>Order Now</div>
          <DropdownChevron />
        </>
      }
    >
      <LocationList locations={orderLocations} titleClassName={titleClassName} />
    </Dropdown>
  );
}

function IconBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="icon_box">
      {/* eslint-disable-next-line @next/next/no-img-element -- small source icon */}
      <img src={src} alt={alt} className="image" />
    </div>
  );
}

/** Header slides away on downward scroll only above Webflow's 767px breakpoint. */
const HIDE_ON_SCROLL_QUERY = "(min-width: 768px)";
/** Mobile bottom bar fades out between these fractions of the page scroll (measured on the source). */
const FIXED_MENU_FADE_START = 0.839;
const FIXED_MENU_FADE_END = 0.895;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const fixedMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hideQuery = window.matchMedia(HIDE_ON_SCROLL_QUERY);
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 0);
      if (!hideQuery.matches) setHidden(false);
      else if (y > lastY && y > 40) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;

      const fixedMenu = fixedMenuRef.current;
      if (fixedMenu) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? y / scrollable : 0;
        const fade = (progress - FIXED_MENU_FADE_START) / (FIXED_MENU_FADE_END - FIXED_MENU_FADE_START);
        const opacity = 1 - Math.min(1, Math.max(0, fade));
        fixedMenu.style.opacity = opacity.toFixed(3);
        fixedMenu.style.visibility = opacity === 0 ? "hidden" : "";
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div
        className={cn(
          "header",
          (scrolled || menuOpen) && "is-colored",
          hidden && !menuOpen && "is-hidden",
          menuOpen && "menu-open",
        )}
      >
        <div className="wrapper_header">
          <div className="flex_header">
            <div className="left-side">
              <div className="flexbox">
                <Link href="/" aria-current="page" className="logo w-inline-block w--current">
                  {/* eslint-disable-next-line @next/next/no-img-element -- source logo */}
                  <img src={asset("icons/logo.png")} alt="Amrit Palace, logo, primary color, png" />
                </Link>
                <nav className="menu_header" aria-label="Main">
                  {desktopNav.map((item) => (
                    <SiteLink
                      key={item.label}
                      href={item.href}
                      className={cn("h-link w-inline-block", item.href === "/" && "w--current")}
                    >
                      <div>{item.label}</div>
                    </SiteLink>
                  ))}
                  <div className="h-link">
                    <Dropdown
                      toggleClassName="link_header drop_locs"
                      listClassName="links_navs"
                      toggle={
                        <>
                          <div>Reserve a Table</div>
                          <DropdownChevron />
                        </>
                      }
                    >
                      <LocationList locations={reserveLocations} />
                    </Dropdown>
                  </div>
                  <a href={CONTACT_URL} className="h-link w-inline-block">
                    <div>Contact</div>
                  </a>
                </nav>
              </div>
            </div>
            <div className="right-side">
              <div className="right_links">
                <a href={MENU_URL} className="link_header w-inline-block">
                  <div>Menu</div>
                  <IconBox src={asset("icons/menu-icon.png")} alt="Menu, icon, png" />
                </a>
                <div className="line_splitter" />
                <div className="link_header">
                  <OrderDropdown />
                  <IconBox src={asset("icons/order-icon.png")} alt="Order now, icon, png" />
                </div>
              </div>
              <button
                type="button"
                className="hamburger_menu"
                aria-expanded={menuOpen}
                aria-controls="amrit-mobile-menu"
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="menu_txt close">Close</span>
                <span className="menu_txt open">Menu</span>
                <span className="hamburger_box" aria-hidden="true">
                  <span className="line_1" />
                  <span className="line_2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="amrit-mobile-menu" className={cn("mobile_menu", menuOpen && "is-open")} inert={!menuOpen}>
        <div className="wrapper_menu">
          <nav className="list_menu" aria-label="Mobile">
            {mobileNav.map((item) => (
              <SiteLink
                key={item.label}
                href={item.href}
                className={cn("mobile_menu_link w-inline-block", item.href === "/" && "w--current")}
                onClick={() => setMenuOpen(false)}
              >
                <div>{item.label}</div>
              </SiteLink>
            ))}
          </nav>
          <div className="reserve_table">
            <Dropdown
              className="dropdown_mobile"
              toggleClassName="dropdown_menu"
              listClassName="dropdown_reserves"
              toggle={
                <>
                  <div>reserve a table</div>
                  <div className="icon_dropdown">
                    {/* eslint-disable-next-line @next/next/no-img-element -- source chevron */}
                    <img src={asset("icons/chevron-down.svg")} alt="chevron icon, svg, black" />
                  </div>
                </>
              }
            >
              {reserveLocations.map((location) => (
                <a
                  key={location.href}
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link_location w-dropdown-link"
                >
                  {location.label}
                </a>
              ))}
            </Dropdown>
          </div>
          <div className="socials_contacts">
            <div className="address_menu">
              <div className="title_menu">Working Hours</div>
              <div className="content_box">
                <div className="content_menu">
                  Tue-Fri 11 AM — 10 PM
                  <br />
                  Sat-Sun 12 AM — 10 PM
                  <br />
                  Mon (Closed)
                </div>
              </div>
            </div>
            <div className="address_menu">
              <div className="title_menu">Address</div>
              <div className="content_box">
                <div className="content_menu">
                  3415 SW College Rd <br />
                  Ocala, FL 34474
                </div>
                <div className="content_menu">
                  3105 SW 34th Street <br />
                  Gainesville, FL 32608
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={fixedMenuRef} className="fixed_menu">
        <div className="right_links menu_fixed">
          <a href={MENU_URL} className="link_header link_menu w-inline-block">
            <div className="menu_rest">Menu</div>
            <IconBox src={asset("icons/menu-icon.png")} alt="Menu, icon, png" />
          </a>
          <div id="w-node-_61c9675a-f097-0b94-ac69-134a32975c7d-32975c76" className="line_splitter" />
          <div className="link_header link_order">
            <OrderDropdown className="drop_mobile" titleClassName="location_mobile" />
            <IconBox src={asset("icons/order-icon.png")} alt="Order now, icon, png" />
          </div>
        </div>
      </div>
    </>
  );
}
