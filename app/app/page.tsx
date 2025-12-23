// app/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BadgePill from "@/components/BadgePill";

type HubCard = {
  title: string;
  pill: string;
  pillTone?: "gold" | "orange" | "red" | "blue";
  desc: string;
  micro: string;
  cta: string;
};

const cards: HubCard[] = [
  {
    title: "Check In",
    pill: "NEW",
    pillTone: "gold",
    desc: "GPS + QR • Verified play at real courts.",
    micro: "Show up today. Let your consistency speak for you.",
    cta: "Start",
  },
  {
    title: "Challenges",
    pill: "NEW",
    pillTone: "gold",
    desc: "Daily missions • Skills, conditioning, mindset.",
    micro: "Win the day. Small reps become big results.",
    cta: "Play",
  },
  {
    title: "Badges",
    pill: "NEW",
    pillTone: "red",
    desc: "Collect • Level up • Build your identity.",
    micro: "Earn it. Your work deserves proof.",
    cta: "View",
  },
  {
    title: "Leaderboards",
    pill: "NEW",
    pillTone: "blue",
    desc: "Court → City → Global • Positive competition.",
    micro: "Climb with discipline — not noise.",
    cta: "Rank",
  },
];

export default function AppHubPage() {
  const [introOn, setIntroOn] = useState(false);

  // Subtle “welcome” animation on load (no libs needed)
  useEffect(() => {
    const t = setTimeout(() => setIntroOn(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-[28px] border border-white/10 bg-black/40 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)] md:p-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <BadgePill text="App Hub Preview" tone="orange" />

            <h1
              className={[
                "mt-4 text-4xl font-black tracking-tight md:text-5xl",
                "transition-all duration-700 ease-out",
                introOn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              Welcome Back, Hooper
            </h1>

            <p
              className={[
                "mt-3 max-w-2xl text-white/75",
                "transition-all duration-700 ease-out delay-100",
                introOn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              You showed up. Now lock in. Every check-in, mission, and run pushes you closer to the player you’re becoming.
            </p>
          </div>

          <div
            className={[
              "transition-all duration-700 ease-out delay-150",
              introOn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            <Link
              href="/waitlist"
              className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-extrabold">{c.title}</div>
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-black tracking-wide",
                    c.pillTone === "red"
                      ? "bg-[#C8102E]/20 text-[#ff7a92] border border-[#C8102E]/30"
                      : c.pillTone === "blue"
                      ? "bg-blue-500/15 text-blue-200 border border-blue-500/25"
                      : "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25",
                  ].join(" ")}
                >
                  {c.pill}
                </span>
              </div>

              {/* Placeholder image / icon block */}
              <div className="mt-4 grid aspect-square place-items-center rounded-2xl border border-white/10 bg-black/30">
                <div className="text-xs font-bold text-white/60">ICON / IMAGE</div>
              </div>

              <div className="mt-4 text-sm text-white/75">{c.desc}</div>
              <div className="mt-2 text-xs text-white/60">{c.micro}</div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-[#FF8C00] px-5 py-2.5 text-sm font-extrabold text-black hover:brightness-110"
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Mini strips */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-lg font-extrabold">Today’s Focus</div>
            <div className="mt-1 text-sm text-white/70">Pick a challenge and lock your streak.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-lg font-extrabold">Consistency Score</div>
            <div className="mt-1 text-sm text-white/70">Show up often. Improve faster.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-lg font-extrabold">Community Energy</div>
            <div className="mt-1 text-sm text-white/70">Compete with positivity — earn respect.</div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-black">Coming Soon: Verified Runs + Missions + Rewards</div>
              <div className="mt-1 text-sm text-white/70">
                We’re building the full M2DG experience — real courts, real effort, real progress you can track and celebrate.
              </div>
            </div>

            <Link
              href="/waitlist"
              className="inline-flex rounded-xl border border-white/15 bg-black/35 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
