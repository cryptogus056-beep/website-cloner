import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type SiteLinkProps = {
  href: string;
  className?: string;
  newTab?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

/** Uses client-side navigation for local routes and a plain anchor for source/external URLs. */
export function SiteLink({ href, className, newTab, onClick, children }: SiteLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick} aria-current={href === "/" ? "page" : undefined}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
