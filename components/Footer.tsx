export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-white">M2DG</span> — Verified runs • Real courts • Discipline-first
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} M2DG. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
