import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <BadgePill text="404" tone="gold" />
      <h1 className="mt-4 text-4xl font-black">Page not found</h1>
      <p className="mt-3 max-w-xl text-white/70">
        This page doesn’t exist (or it moved). Head back home and keep building your game.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl bg-[#FF8C00] px-6 py-3 font-extrabold text-black hover:brightness-110"
        >
          Back Home
        </Link>
        <Link
          href="/waitlist"
          className="rounded-xl border border-white/15 px-6 py-3 font-bold text-white/90 hover:border-white/25"
        >
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
}
