import Link from "next/link";
import Hero from "@/components/Hero";
import BadgePill from "@/components/BadgePill";

type Tile = {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  href: string;
};

const tiles: Tile[] = [
  {
    title: "Verified Court Check-Ins",
    subtitle: "Scan In & Play",
    image: "/images/tile-checkin.jpg",
    tag: "GPS + QR",
    href: "/features",
  },
  {
    title: "Skill Challenges",
    subtitle: "Complete Fun Missions",
    image: "/images/tile-challenges.jpg",
    tag: "Daily + Weekly",
    href: "/features",
  },
  {
    title: "Earn Badges & Rewards",
    subtitle: "Collect & Level Up",
    image: "/images/tile-badges.jpg",
    tag: "XP + Streaks",
    href: "/features",
  },
  {
    title: "Climb Leaderboards",
    subtitle: "Court • City • Global",
    image: "/images/tile-leaderboards.jpg",
    tag: "Positive Competition",
    href: "/features",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Poster features strip (matches mock layout) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <BadgePill text="Awesome Features & How It Works" tone="orange" />
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Built Like a Game. Powered by Real Hoops.
            </h2>
            <p className="mt-2 max-w-2xl text-white/75">
              M2DG turns real court time into progress you can see: check-ins, missions, rewards, and rankings — built for kids,
              athletes, and parents.
            </p>
          </div>

          <div className="mt-3 md:mt-0 flex gap-3">
            <Link
              href="/how-it-works"
              className="inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white/90 hover:border-white/25"
            >
              How It Works
            </Link>
            <Link
              href="/waitlist"
              className="inline-flex rounded-xl bg-[#FF8C00] px-4 py-2 text-sm font-extrabold text-black hover:brightness-110"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.88)), url('${t.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-black text-[#D4AF37]">{t.tag}</div>
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black text-white/80">
                    NEW
                  </span>
                </div>

                <div className="mt-3 text-lg font-extrabold leading-snug">{t.title}</div>
                <div className="mt-1 text-sm text-white/80">{t.subtitle}</div>

                <Link
                  href={t.href}
                  className="mt-5 inline-flex rounded-xl bg-[#FF8C00] px-4 py-2 text-sm font-extrabold text-black hover:brightness-110"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Upgraded Parent Trust Section (poster + real imagery vibe) */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {/* Photo header */}
          <div
            className="relative p-6 md:p-8"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.30), rgba(0,0,0,0.92)), url('/images/parents-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-black">Why Parents Trust M2DG</div>
                <div className="mt-1 text-sm text-white/75">
                  A positive basketball system that builds confidence, discipline, and healthy habits — with verified play and safe community energy.
                </div>
              </div>
              <BadgePill text="Parent-Approved" tone="gold" />
            </div>

            {/* Trust badge row (quick-scannable) */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                ["Verified Play", "GPS + QR check-ins"],
                ["Positive Community", "Respect stays first"],
                ["Kid-Safe Energy", "Built for families"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                  <div className="text-sm font-extrabold">{t}</div>
                  <div className="mt-1 text-xs text-white/70">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust tiles + quote */}
          <div className="p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Safe & Verified Play",
                  desc: "Check-ins are built around real courts and accountability — not fake stats.",
                  img: "/images/parents-verified.jpg",
                  tag: "Safety",
                },
                {
                  title: "Positive Community",
                  desc: "Competition without toxic energy — growth, effort, and respect stay at the center.",
                  img: "/images/parents-community.jpg",
                  tag: "Culture",
                },
                {
                  title: "No Fantasy — Just Real Hoops",
                  desc: "Kids grow through real effort: training, consistency, and confidence on the court.",
                  img: "/images/parents-realhoops.jpg",
                  tag: "Trust",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                >
                  <div
                    className="h-40"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.80)), url('${c.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-black text-[#D4AF37]">{c.tag}</div>
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-black text-white/80">
                        PARENT
                      </span>
                    </div>
                    <div className="mt-2 text-lg font-extrabold">{c.title}</div>
                    <div className="mt-2 text-sm text-white/75">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Parent quote (emotion + trust) */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-black text-white/70">PARENT VOICE</div>
                  <div className="mt-2 text-lg font-extrabold">
                    “I love that M2DG makes practice fun — and keeps my kid consistent without pressure.”
                  </div>
                  <div className="mt-2 text-sm text-white/60">— Early parent tester (waitlist community)</div>
                </div>
                <Link
                  href="/waitlist"
                  className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-extrabold text-black hover:brightness-110"
                >
                  Join the Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-black">Ready to build your basketball journey?</div>
              <div className="mt-1 text-sm text-white/75">Join the waitlist for early access + launch perks.</div>
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
    </>
  );
}
