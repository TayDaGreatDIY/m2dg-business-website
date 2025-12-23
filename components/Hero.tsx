import Link from "next/link";
import BadgePill from "@/components/BadgePill";

type Card = {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Play Challenges",
    subtitle: "Scan in & Play",
    badge: "🔥 Daily Missions",
    image: "/images/card-challenges.jpg",
  },
  {
    title: "Track Progress",
    subtitle: "Complete Fun Missions",
    badge: "🏅 Badges + Streaks",
    image: "/images/card-progress.jpg",
  },
  {
    title: "Climb the Ranks",
    subtitle: "Court • City • Global",
    badge: "🏆 Leaderboards",
    image: "/images/card-leaderboards.jpg",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Poster background image + overlay */}
      <div
        className="relative m2dg-sparkle"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.90)), radial-gradient(900px 500px at 30% 10%, rgba(255,140,0,0.45), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(200,16,46,0.25), transparent 55%), url('/images/hero-kids.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: Poster copy */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <BadgePill text="Verified runs • Real courts • Discipline-first" tone="gold" />
                <BadgePill text="Built for kids • Trusted by parents" tone="navy" />
              </div>

              <h1 className="mt-5 text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl">
                <span className="block drop-shadow-[0_8px_40px_rgba(0,0,0,0.80)]">
                  Turn Every Court
                </span>
                <span className="block text-[#FF8C00] drop-shadow-[0_8px_40px_rgba(0,0,0,0.80)]">
                  Into a Game!
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-white/85 md:text-lg">
                Build skills. Earn badges. Ball out. M2DG turns real basketball into challenges and rewards — on real courts, with real effort.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="rounded-xl bg-[#FF8C00] px-7 py-3 text-center font-extrabold text-black shadow-[0_18px_45px_rgba(0,0,0,0.45)] hover:brightness-110"
                >
                  Start Your Journey
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-xl border border-white/20 bg-black/30 px-7 py-3 text-center font-bold text-white/90 hover:border-white/35"
                >
                  How It Works
                </Link>
              </div>

              {/* Quick stat strip */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/15 bg-black/35 p-3">
                  <div className="text-xs font-black text-white/70">CHECK-IN</div>
                  <div className="mt-1 text-sm font-extrabold">GPS + QR Verified</div>
                </div>
                <div className="rounded-xl border border-white/15 bg-black/35 p-3">
                  <div className="text-xs font-black text-white/70">PLAY</div>
                  <div className="mt-1 text-sm font-extrabold">Challenges & Missions</div>
                </div>
                <div className="rounded-xl border border-white/15 bg-black/35 p-3">
                  <div className="text-xs font-black text-white/70">LEVEL UP</div>
                  <div className="mt-1 text-sm font-extrabold">Badges + Ranks</div>
                </div>
              </div>
            </div>

            {/* Right: Phone / poster frame */}
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-black text-white/80">M2DG Preview</div>
                <BadgePill text="COMING SOON" tone="orange" />
              </div>

              <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                <div className="aspect-[16/10] w-full">
                  {/* swap with a phone mock image later */}
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.75)), url('/images/hero-phone.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Play", "Earn", "Rank"].map((t) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-black/45 p-3">
                    <div className="text-sm font-extrabold">{t}</div>
                    <div className="mt-1 text-xs text-white/70">Fun • Verified • Real</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card strip (matches mock vibe) */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.40)]"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      `linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.85)), url('${c.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xl font-extrabold">{c.title}</div>
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black text-white/80">
                      {c.badge}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-white/80">{c.subtitle}</div>

                  <div className="mt-5 inline-flex rounded-xl bg-[#FF8C00] px-4 py-2 text-sm font-extrabold text-black group-hover:brightness-110">
                    Open
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Built for kids strip */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-bold text-white/80">
                Built for kids • athletes • parents worldwide
                <span className="mx-2 text-white/40">•</span>
                No fantasy — just real hoops.
              </div>
              <Link
                href="/waitlist"
                className="rounded-xl border border-white/15 px-5 py-2 text-sm font-extrabold text-white/90 hover:border-white/25"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
