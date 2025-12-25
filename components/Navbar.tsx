"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-lg px-3 py-2 text-sm font-bold transition",
        active ? "text-white" : "text-white/70 hover:text-white",
        "hover:bg-white/5",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15 bg-white/5">
            <Image
              src="/brand/m2dg-logo.png"
              alt="M2DG"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black">Married 2 Da Game</div>
            <div className="text-xs text-white/60">M2DG</div>
          </div>
        </Link>

        {/* Desktop nav (sm and up) */}
        <nav className="hidden items-center gap-2 sm:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={pathname === l.href}
            />
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/app"
            className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm font-extrabold text-white/90 hover:border-white/25 sm:inline-flex"
          >
            Open App Hub
          </Link>

          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-4 py-2 text-sm font-extrabold text-black hover:brightness-110"
          >
            Join the Waitlist
          </Link>

          {/* Mobile hamburger (below sm) */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white sm:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div
              ref={panelRef}
              className="rounded-2xl border border-white/10 bg-black/80 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="grid gap-1">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.href}
                    href={l.href}
                    label={l.label}
                    active={pathname === l.href}
                    onClick={() => setOpen(false)}
                  />
                ))}

                <Link
                  href="/app"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-extrabold text-white/90 hover:border-white/25"
                >
                  Open App Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
