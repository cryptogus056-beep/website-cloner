"use client";

import { useEffect, useRef, useState } from "react";

import { asset, footerColumns } from "./data";
import { SiteLink } from "./SiteLink";

/** Copies its own text and briefly shows a confirmation (source: Finsweet `fs-copyclip`). */
function CopyText({ text, message, className }: { text: string; message: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button type="button" className={`copy-link w-inline-block ${className ?? ""}`} onClick={copy}>
      <div className="txt_footer" aria-live="polite">
        {copied ? message : text}
      </div>
    </button>
  );
}

/** Source "Auto Year" script replaced the static year with the current one. */
function CurrentYear() {
  return (
    <span data-year="" suppressHydrationWarning>
      {new Date().getFullYear()}
    </span>
  );
}

export function Footer() {
  return (
    <section className="footer">
      <div className="wrapper_footer">
        <div className="content_line">
          <div className="address_hours only_hours">
            <div className="flexbox_box">
              <div className="address_box">
                <div className="title_footer">locations</div>
                <div className="addresses_box">
                  <div>
                    <div className="txt_footer">Ocala</div>
                    <div className="txt_footer">3415 SW College Rd Ocala, FL 34474</div>
                  </div>
                  <div>
                    <div className="txt_footer">Gainesville</div>
                    <div className="txt_footer">3105 SW 34th Street Gainesville, FL 32608</div>
                  </div>
                </div>
              </div>
              <div className="right_fotoer_box">
                <div className="title_footer">HOURS</div>
                <div className="txt_footer">
                  <br />
                  <br />
                  <br />
                  Ocala <br />
                  Tue-Thu 11 AM — 9 PM
                  <br />
                  Fri-Sat 12 PM — 10 PM
                  <br />
                  Sunday 12 PM — 9 PM
                  <br />
                  Mon (Closed)
                  <br />
                  <br />
                  Gainesville <br />
                  Tue-Thu 11 AM — 9 PM
                  <br />
                  Fri-Sat 12 M — 10 PM
                  <br />
                  Sunday 12 PM —9 PM
                  <br />
                  Mon (Closed)
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-fec112a8-dfda-1720-b88b-9e68da0a7250-da0a723d" className="middle_logo_footer">
            {/* eslint-disable-next-line @next/next/no-img-element -- source logo */}
            <img src={asset("icons/logo.png")} alt="Amrit Palace, logo, primary color, png" className="image" />
          </div>
          <div className="address_hours">
            <div className="flexbox_box footer_flex">
              <div id="w-node-fec112a8-dfda-1720-b88b-9e68da0a7254-da0a723d" className="address_box address">
                <div className="title_footer">CONTACT</div>
                <div className="middle_links_footer">
                  <div className="phones_footer">
                    <div>
                      <div className="txt_footer">Ocala</div>
                      <CopyText text="+1 (352) 873-8500" message="Phone copied!" className="footer_link" />
                    </div>
                    <div>
                      <div className="txt_footer">Gainesville</div>
                      <CopyText text="+1 (352) 769-8500" message="Phone copied!" className="footer_link" />
                    </div>
                  </div>
                  <CopyText text="E-mail Us" message="E-mail copied!" />
                </div>
              </div>
              <div id="w-node-fec112a8-dfda-1720-b88b-9e68da0a725c-da0a723d" className="right_fotoer_box newsletter">
                <div className="title_footer">NEWSLETTER</div>
                <div>
                  <div className="txt_footer">Get the latest updates.</div>
                  <div className="txt_footer">Coming soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links_footer">
          {footerColumns.map((column, index) =>
            column ? (
              <div key={column.title} id={column.id} className="links_footer_list">
                <div className="title_links">
                  <div className="txt_footer">{column.title}</div>
                </div>
                <div className="footer_links">
                  {column.links.map((link) => (
                    <SiteLink
                      key={link.label}
                      href={link.href}
                      className="txt_footer w-inline-block"
                      newTab={link.external}
                    >
                      <div>{link.label}</div>
                    </SiteLink>
                  ))}
                </div>
              </div>
            ) : (
              <div key={`empty-${index}`} className="empty_div" />
            ),
          )}
        </div>
        <div className="footer_txt_lg">
          <div className="txt_lg">amrit palace</div>
        </div>
        <div className="last_line">
          <div className="copyright">
            <div className="txt_footer">
              © <CurrentYear /> Amrit Palace
            </div>
          </div>
          <div className="reserved">
            <div className="txt_footer">All Rights Reserved</div>
          </div>
          <div className="made_by">
            <div className="txt_footer">
              Made by{" "}
              <a href="https://artemiilebedev.com" target="_blank" rel="noopener noreferrer" className="spec_art_link">
                Artemii Lebedev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
