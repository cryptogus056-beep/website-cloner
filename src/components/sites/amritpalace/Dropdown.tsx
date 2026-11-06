"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type DropdownProps = {
  className?: string;
  toggleClassName?: string;
  listClassName?: string;
  toggle: ReactNode;
  children: ReactNode;
};

/** Click-to-open dropdown matching Webflow's `w-dropdown` markup and `w--open` state classes. */
export function Dropdown({ className, toggleClassName, listClassName, toggle, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("w-dropdown", className)}>
      <button
        type="button"
        className={cn(toggleClassName, "w-dropdown-toggle", open && "w--open")}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        {toggle}
      </button>
      <nav
        id={listId}
        className={cn(listClassName, "w-dropdown-list", open && "w--open")}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {children}
      </nav>
    </div>
  );
}

export function DropdownChevron() {
  return (
    <div className="icon_drop w-icon-dropdown-toggle" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
    </div>
  );
}
