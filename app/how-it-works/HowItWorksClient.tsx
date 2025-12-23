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

type Step = {
  eyebrow: string;
  title: string;
  desc: string;
};

type FAQ = {
  q: string;
  a: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={cx(
        "inline-block transition-transform duration-200",
        open ? "rotate-180" : "rotate-0"
      )}
      aria-hidden="true"
    >
      ▾
    </span>
  );
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
        bottomCard: { title: "Check in (Verified)", subtitle: "GPS + QR verification • real presence • real courts" },
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

  const steps: Step[] = useMemo(
    () => [
      {
        eyebrow: "Step 1",
        title: "Open & Find a Court",
        desc: "Launch M2DG and see nearby outdoor courts. Pick your spot and get ready to earn real progress.",
      },
      {
        eyebrow: "Step 2",
        title: "Check In (Verified)",
        desc: "GPS + QR verification confirms you’re really there — no fake runs, no inflated stats, just real hoop work.",
      },
      {
        eyebrow: "Step 3",
        title: "Play, Track, & Level Up",
        desc: "Complete missions, maintain streaks, earn badges, and climb rankings by court, city, and beyond.",
      },
    ],
    []
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How does verification work?",
        a: "M2DG uses GPS + QR-based check-ins to confirm real presence at real courts. That’s how effort becomes proof.",
      },
      {
        q: "Do I need a team to use it?",
        a: "No. You can run solo, join pickup, or build a squad. The platform is designed for real hoopers at every level.",
      },
      {
        q: "What do I earn from missions and streaks?",
        a: "Badges, consistency levels, and leaderboard placement — recognition tied to real activity, not algorithm hype.",
      },
      {
        q: "Is this for pros only?",
        a: "Not at all. M2DG is for anyone committed to the game — improving, staying in shape, or just showing up daily.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const current = slides[index];
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

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
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
              M2DG turns your court time into verified momentum — check in, complete missions,
              earn badges, and climb the ranks.
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
              {/* stacked “phone” cards */}
              <div className="absolute right-2 top-8 h-[420px] w-[300px] rotate-[10deg] rounded-[34px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:h-[520px] md:w-[360px]" />
              <div className="absolute right-10 top-4 h-[420px] w-[300px] rotate-[4deg] rounded-[34px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:h-[520px] md:w-[360px]" />

              {/* ACTIVE card */}
              <div className="relative z-10 ml-auto h-[420px] w-[300px] rotate-[-6deg] overflow-hidden rounded-[34px] border border-white/10 bg-black shadow-[0_22px_70px_rgba(0,0,0,0.65)] md:h-[520px] md:w-[360px]">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />

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
                    "pointer-events-none absolute inset-0 grid place-items-center transition-opacity duration-300",
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

      {/* STEPS */}
      <div className="mt-14">
        <h2 className="text-4xl font-black tracking-tight">How it Works</h2>
        <p className="mt-3 max-w-3xl text-white/65">
          Simple flow. Real-world verification. Progress you can prove.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="text-xs font-black tracking-wide text-[#D4AF37]">{s.eyebrow}</div>
              <div className="mt-2 text-2xl font-extrabold">{s.title}</div>
              <div className="mt-3 text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-14">
        <h3 className="text-3xl font-black tracking-tight">FAQ</h3>
        <p className="mt-2 max-w-2xl text-white/65">
          Quick answers about verification, missions, and what you’re building toward.
        </p>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const open = openFAQ === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQ(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-base font-extrabold text-white">{f.q}</span>
                  <span className="text-white/60">
                    <Chevron open={open} />
                  </span>
                </button>

                <div
                  className={cx(
                    "grid transition-[grid-template-rows] duration-200 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden px-6 pb-5 text-white/70">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">Ready to be early?</div>
            <div className="mt-1 text-white/70">
              Join the waitlist for early invites, perks, and first-run access.
            </div>
          </div>

          <Link
            href="/waitlist"
            className="rounded-xl bg-[#FF8C00] px-7 py-3 text-center font-extrabold text-black hover:brightness-110"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
