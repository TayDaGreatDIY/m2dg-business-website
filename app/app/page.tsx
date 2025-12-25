// app/app/page.tsx
import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — App Hub Preview",
  description:
    "Preview the M2DG App Hub dashboard — check-ins, challenges, badges, leaderboards, and daily motivation for real hoopers.",
};

type HubCard = {
  label: string;
  title: string;
  description: string;
  cta: string;
  image: string;
};

const primaryCards: HubCard[] = [
  {
    label: "Check In",
    title: "Lock in real runs.",
    description: "GPS + QR-verified play at real courts.",
    cta: "Start",
    image: "/images/tile-checkin.jpg",
  },
  {
    label: "Challenges",
    title: "Stack wins daily.",
    description: "Missions and skill work that add up over time.",
    cta: "Play",
    image: "/images/tile-challenges.jpg",
  },
  {
    label: "Badges",
    title: "Let your work show.",
    description: "Collect discipline-driven rewards — not just highlights.",
    cta: "View",
    image: "/images/tile-badges.jpg",
  },
  {
    label: "Leaderboards",
    title: "Climb the ranks.",
    description: "Court → City → Global. Earn your spot with consistency.",
    cta: "Rank",
    image: "/images/tile-leaderboards.jpg",
  },
];

export default function AppHubPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)] md:p-8">
        <BadgePill text="App Hub Preview" tone="gold" />

        {/* animated welcome text handled via simple CSS (can enhance later if needed) */}
        <h1 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
          Welcome Back, Hooper
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
          You showed up. Now lock in. Every check-in, mission, and run pushes
          you closer to the player you&apos;re becoming.
        </p>

        <div className="mt-4 flex justify-end">
          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-5 py-2.5 text-sm font-extrabold text-black hover:brightness-110"
          >
            Get Early Access
          </Link>
        </div>

        {/* Primary feature row */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {primaryCards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between text-xs font-black text-white/80">
                <span>{card.label}</span>
                <span className="rounded-full bg-[#FF8C00]/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#FFB347]">
                  New
                </span>
              </div>

              {/* Image tile */}
              <div
                className="mt-3 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/50"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.65)), url('${card.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={`${card.label} preview`}
              />

              {/* Micro motivation copy */}
              <div className="mt-3 text-xs font-bold text-white/90">
                {card.title}
              </div>
              <div className="mt-1 text-xs text-white/65">{card.description}</div>

              <button className="mt-4 rounded-xl bg-[#FF8C00] px-3 py-2 text-xs font-extrabold text-black hover:brightness-110">
                {card.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Secondary strip */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            <div className="font-extrabold text-white/90">Today&apos;s Focus</div>
            <div className="mt-1 text-xs text-white/70">
              Pick a challenge and lock your streak.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            <div className="font-extrabold text-white/90">Consistency Score</div>
            <div className="mt-1 text-xs text-white/70">
              Show up often. Improve faster.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            <div className="font-extrabold text-white/90">Community Energy</div>
            <div className="mt-1 text-xs text-white/70">
              Compete with positivity — earn respect.
            </div>
          </div>
        </div>

        {/* Coming soon strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-black/40 to-[#C8102E]/15 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <div className="text-sm font-black md:text-base">
              Coming Soon: Verified Runs + Missions + Rewards
            </div>
            <div className="mt-1 text-xs text-white/75 md:text-sm">
              We&apos;re building the full M2DG experience — real courts, real
              effort, real progress you can track and celebrate.
            </div>
          </div>
          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-5 py-2.5 text-center text-xs font-extrabold text-black hover:brightness-110 md:text-sm"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
