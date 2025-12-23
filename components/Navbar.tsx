// components/Navbar.tsx
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FF8C00] text-black font-black">
            M2
          </div>
          <div className="leading-tight">
            <div className="font-black tracking-wide">M2DG</div>
            <div className="text-xs text-white/70">Married 2 Da Game</div>
          </div>
        </Link>

        {/* Links (always visible) */}
        <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap px-1">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/app"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:border-white/25"
          >
            Open App Hub
          </Link>
          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-4 py-2 text-sm font-extrabold text-black hover:brightness-110"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
