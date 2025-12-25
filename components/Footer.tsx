import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/75">
            <span className="font-black text-white">M2DG</span> — Verified runs • Real courts • Discipline-first
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/about" className="text-white/70 hover:text-white">
              About
            </Link>
            <Link href="/how-it-works" className="text-white/70 hover:text-white">
              How It Works
            </Link>
            <Link href="/features" className="text-white/70 hover:text-white">
              Features
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/privacy" className="text-white/70 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/45">
          © {new Date().getFullYear()} M2DG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
