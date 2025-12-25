// app/how-it-works/HowItWorksClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BadgePill from "@/components/BadgePill";

type Slide = {
  src: string;
  alt: string;
  topToast: { title: string; subtitle: string };
  bottomCard: { title: string; subtitle: string };
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HowItWorksClient() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/images/how-it-works/hiw-01-launch.jpg",
        alt: "Launch M2DG and find nearby courts",
        topToast: { title: "App Opened", subtitle: "Nearby courts loaded" },
        bottomCard: { title: "Open the app", subtitle: "Find courts • choose your run" },
      },
      {
        src: "/images/how-it-works/hiw-02-checkin.jpg",
        alt: "Check in with GPS and QR code",
        topToast: { title: "Check-In Confirmed", subtitle: "Court verified • run started" },
        bottomCard: {
          title: "Check in (Verified)",
          subtitle: "GPS + QR verification • real presence • real courts",
        },
      },
      {
        src: "/images/how-it-works/hiw-03-play.jpg",
        alt: "Play and earn missions, streaks, rank",
        topToast: { title: "Run Active", subtitle: "Tracking consistency + missions" },
        bottomCard: { title: "Play & earn", subtitle: "Missions • streaks • rank" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const current = slides[index];
  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Badge unlock polish: show when we land on last slide
  useEffect(() => {
    if (index === slides.length - 1) {
      setShowBadge(true);
      const t = setTimeout(() => setShowBadge(false), 2400);
      return () => clearTimeout(t);
    }
  }, [index, slides.length]);

  // Data for the lower sections
  const steps = [
    {
      label: "Step 1",
      title: "Check In on Real Courts",
      desc: "Open the app, find a nearby court, and check in with GPS + QR so every run is verified.",
      image: "/images/tile-checkin.jpg",
    },
    {
      label: "Step 2",
      title: "Run Missions & Build Streaks",
      desc: "Pick challenges that match your goals — consistency, conditioning, reps, or team play.",
      image: "/images/tile-challenges.jpg",
    },
    {
      label: "Step 3",
      title: "Earn Badges & Climb the Ranks",
      desc: "Turn discipline into visible progress with badges, streaks, and leaderboards that actually mean something.",
      image: "/images/tile-badges.jpg",
    },
  ];

  const runBenefits = [
    {
      title: "Verified Runs",
      desc: "GPS + QR check-ins prove you really showed up.",
    },
    {
      title: "Daily Momentum",
      desc: "Missions and streaks keep you locked in — one day at a time.",
    },
    {
      title: "Real Recognition",
      desc: "Leaderboards, badges, and stats rooted in actual court time.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO CAROUSEL */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        {/* soft background glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/70" />
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#FF8C00]/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#C8102E]/10 blur-3xl" />
        </div>

        <div className="relative grid gap-10 px-6 py-10 md:grid-cols-2 md:px-10 md:py-14">
          {/* LEFT COPY */}
          <div>
            <BadgePill text="How It Works" tone="orange" />
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Real Courts.
              <br />
              Real Runs.
              <br />
              Real Progress.
            </h1>

            <p className="mt-4 max-w-xl text-white/70">
              M2DG turns your court time into verified momentum — check in, complete missions, earn badges, and climb the
              ranks.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/waitlist"
                className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
              >
                Join the Waitlist
              </Link>

              <Link
                href="/features"
                className="inline-flex rounded-xl border border-white/15 bg-black/35 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
              >
                Explore Features
              </Link>
            </div>

            {/* Mini strips */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                <div className="text-xs font-black tracking-wide text-[#D4AF37]">VERIFIED</div>
                <div className="mt-1 text-sm font-bold text-white/90">GPS + QR check-ins</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                <div className="text-xs font-black tracking-wide text-[#D4AF37]">DISCIPLINE</div>
                <div className="mt-1 text-sm font-bold text-white/90">Streaks + missions</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                <div className="text-xs font-black tracking-wide text-[#D4AF37]">RANKED</div>
                <div className="mt-1 text-sm font-bold text-white/90">Court • City • Global</div>
              </div>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* BACK CARD (prev slide) */}
              <div className="absolute right-10 top-6 h-[420px] w-[300px] rotate-[6deg] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:h-[520px] md:w-[360px]">
                <img
                  src={slides[prevIndex].src}
                  alt={slides[prevIndex].alt}
                  className="h-full w-full object-cover opacity-70"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>

              {/* BACK CARD (next slide) */}
              <div className="absolute right-2 top-10 h-[420px] w-[300px] rotate-[10deg] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:h-[520px] md:w-[360px]">
                <img
                  src={slides[nextIndex].src}
                  alt={slides[nextIndex].alt}
                  className="h-full w-full object-cover opacity-70"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>

              {/* ACTIVE CARD */}
              <div className="relative z-10 ml-auto h-[420px] w-[300px] rotate-[-6deg] overflow-hidden rounded-[34px] border border-white/10 bg-black shadow-[0_22px_70px_rgba(0,0,0,0.65)] md:h-[520px] md:w-[360px]">
                {/* image */}
                <img src={current.src} alt={current.alt} className="h-full w-full object-cover" draggable={false} />

                {/* glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />

                {/* TOP TOAST */}
                <div className="absolute left-4 right-4 top-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                      <span className="text-[#D4AF37]">✦</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-extrabold text-white">{current.topToast.title}</div>
                      <div className="text-xs text-white/70">{current.topToast.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM LABEL */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                    <div className="text-base font-extrabold text-white">{current.bottomCard.title}</div>
                    <div className="mt-1 text-xs text-white/70">{current.bottomCard.subtitle}</div>
                  </div>
                </div>

                {/* BADGE UNLOCK overlay */}
                <div
                  className={cx(
                    "pointer-events-none absolute inset-0 grid place-items-center transition-opacity",
                    showBadge ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="rounded-3xl border border-white/10 bg-black/55 px-6 py-5 text-center backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#FF8C00]/20 border border-[#FF8C00]/30">
                      <span className="text-xl">🏅</span>
                    </div>
                    <div className="mt-3 text-lg font-black text-white">Badge Unlocked</div>
                    <div className="mt-1 text-sm text-white/70">Consistency Streak • Level 1</div>
                  </div>
                </div>
              </div>

              {/* CONTROLS */}
              <div className="mt-8 flex items-center justify-center gap-3 md:justify-end">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-2 text-sm font-extrabold text-white/90 hover:border-white/25"
                  aria-label="Previous slide"
                >
                  Prev
                </button>

                <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white/70">
                  {index + 1} / {slides.length}
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/35 px-4 py-2 text-sm font-extrabold text-white/90 hover:border-white/25"
                  aria-label="Next slide"
                >
                  Next
                </button>
              </div>

              <p className="mt-3 text-center text-xs text-white/45 md:text-right">
                Each slide shows a real product moment: open → check-in → run active.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STEP-BY-STEP SECTION */}
      <div className="mt-16">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">How It Works, Step by Step</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          The flow is simple on purpose: open the app, verify your run, and let the system handle missions,
          streaks, and recognition while you hoop.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="text-xs font-black uppercase tracking-wide text-[#D4AF37]">{step.label}</div>

              <div className="mt-3 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 text-lg font-extrabold">{step.title}</div>
              <div className="mt-2 text-sm text-white/75">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RUN BENEFITS / SUMMARY STRIP */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-black/40 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-black uppercase tracking-wide text-[#D4AF37]">
              Every verified run gives you:
            </div>
            <div className="mt-2 text-xl font-extrabold">
              Proof you showed up, structure for your grind, and recognition for the work.
            </div>
          </div>
          <BadgePill text="Discipline Engine" tone="orange" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {runBenefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="text-lg font-extrabold">{b.title}</div>
              <div className="mt-2 text-sm text-white/75">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black">Ready to turn your runs into receipts?</div>
            <div className="mt-1 text-sm text-white/75">
              Join the waitlist to lock in early access, launch perks, and first shot at verified leaderboards.
            </div>
          </div>
          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-extrabold text-black hover:brightness-110"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
