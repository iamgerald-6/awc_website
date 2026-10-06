"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContent } from "@/app/content/siteContent";
import type { NavDropdown, NavEntry } from "@/app/content/siteContent";
import { classNames } from "@/app/lib/utils";
import {
  isDropdownActive,
  isNavActive,
  isWhatWeDoActive,
} from "@/app/lib/nav";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Container } from "./Container";
import { ChevronDown, Menu, X } from "lucide-react";

function NavLinkItem({
  href,
  label,
  active,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={classNames(
        "text-base font-medium text-brand-gray hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        active && "text-accent font-semibold",
        className
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function DesktopDropdown({ entry }: { entry: NavDropdown }) {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const active =
    isWhatWeDoActive(pathname) ||
    isDropdownActive(pathname, entry.children);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        id={`${menuId}-trigger`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`${menuId}-menu`}
        className={classNames(
          "inline-flex min-h-11 items-center gap-1 text-base font-medium text-brand-gray hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          active && "text-accent font-semibold"
        )}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
          }
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {entry.label}
        <ChevronDown
          className={classNames(
            "h-4 w-4 transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {open && (
        <div
          id={`${menuId}-menu`}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="absolute left-1/2 top-full z-50 min-w-[12rem] -translate-x-1/2 pt-2"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        >
          <div className="rounded-lg border border-border bg-surface py-2 shadow-sm">
            {entry.children.map((child) => {
              const childActive = isNavActive(pathname, child.href);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className={classNames(
                    "block px-4 py-3 text-sm font-medium text-brand-gray hover:bg-brand-light hover:text-brand-dark focus-visible:bg-brand-light focus-visible:outline-none",
                    childActive && "bg-brand-light text-accent font-semibold"
                  )}
                  onClick={close}
                  aria-current={childActive ? "page" : undefined}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  entry,
  onNavigate,
}: {
  entry: NavDropdown;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const active =
    isWhatWeDoActive(pathname) ||
    isDropdownActive(pathname, entry.children);

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        type="button"
        className={classNames(
          "flex min-h-11 w-full items-center justify-between px-4 py-3 text-left text-sm font-medium",
          active
            ? "bg-brand-light text-accent font-semibold"
            : "text-brand-gray hover:bg-brand-light"
        )}
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {entry.label}
        <ChevronDown
          className={classNames(
            "h-4 w-4 shrink-0 transition-transform",
            expanded && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {expanded && (
        <div className="border-t border-border bg-surface pb-2">
          {entry.children.map((child) => {
            const childActive = isNavActive(pathname, child.href);
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className={classNames(
                  "block min-h-11 px-6 py-3 text-sm font-medium",
                  childActive
                    ? "text-accent font-semibold bg-brand-light/80"
                    : "text-brand-gray hover:bg-brand-light"
                )}
                aria-current={childActive ? "page" : undefined}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function renderNavEntry(
  entry: NavEntry,
  pathname: string,
  variant: "desktop" | "mobile",
  onNavigate?: () => void
) {
  if (entry.type === "link") {
    const active = isNavActive(pathname, entry.href);
    if (variant === "desktop") {
      return (
        <NavLinkItem
          key={entry.href}
          href={entry.href}
          label={entry.label}
          active={active}
        />
      );
    }
    return (
      <Link
        key={entry.href}
        href={entry.href}
        onClick={onNavigate}
        className={classNames(
          "flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-medium",
          active
            ? "bg-brand-light text-accent font-semibold"
            : "text-brand-gray hover:bg-brand-light"
        )}
        aria-current={active ? "page" : undefined}
      >
        {entry.label}
      </Link>
    );
  }

  if (variant === "desktop") {
    return <DesktopDropdown key={entry.label} entry={entry} />;
  }
  return (
    <MobileDropdown
      key={entry.label}
      entry={entry}
      onNavigate={onNavigate!}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = siteContent.nav;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="grid grid-cols-12 items-stretch">
        <div className="col-span-6 md:col-span-3 border-r border-border flex">
          <Container className="py-4 sm:py-5 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 min-h-11"
              aria-label="AWC home"
            >
              <Image
                src={siteContent.brand.logo.src}
                alt={siteContent.brand.logo.alt}
                width={90}
                height={38}
                priority
                className="h-auto w-[72px] sm:w-[90px]"
              />
            </Link>
          </Container>
        </div>

        <div className="col-span-0 md:col-span-6 hidden md:flex border-y border-transparent">
          <Container className="py-4 flex justify-center gap-4 lg:gap-6 w-full flex-wrap items-center">
            {nav.map((entry) => renderNavEntry(entry, pathname, "desktop"))}
          </Container>
        </div>

        <div className="col-span-6 md:col-span-3 border-l border-border flex">
          <Container className="py-4 sm:py-5 flex items-center justify-end gap-3 sm:gap-4 w-full">
            <Link
              href="/contact"
              className={classNames(
                "inline-flex min-h-11 items-center text-base md:text-lg font-medium text-brand-gray hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                isNavActive(pathname, "/contact") &&
                  "text-accent font-semibold"
              )}
              aria-current={
                isNavActive(pathname, "/contact") ? "page" : undefined
              }
            >
              Contact us
            </Link>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl p-2 ring-1 ring-border md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </button>
          </Container>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[var(--nav-offset,4.5rem)] z-40 md:hidden bg-black/20"
          aria-hidden
          onClick={closeMobile}
        />
      )}

      {open && (
        <div className="relative z-50 border-t border-border bg-surface md:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          <Container className="py-4">
            <nav className="grid gap-2" aria-label="Mobile">
              {nav.map((entry) =>
                renderNavEntry(entry, pathname, "mobile", closeMobile)
              )}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
