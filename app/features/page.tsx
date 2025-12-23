// app/features/page.tsx
import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — Features",
  description:
    "Explore M2DG platform features: verified court check-ins, profiles, challenges, leaderboards, and community recognition.",
};

type Feature = {
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    title: "Verified Court Check-Ins",
    desc: "GPS and QR-based court verification ensures every run is real. No fake stats. No inflated numbers. Just authentic hooping.",
  },
  {
    title: "Hooper Profiles",
    desc: "Build a public basketball identity with consistency stats, goals, home court data, and community rankings.",
  },
  {
    title: "Challenges & Discipline Tracking",
    desc: "Join structured challenges that reward consistency, effort, and commitment — not just talent.",
  },
  {
    title: "Leaderboards That Matter",
    desc: "Rankings by court, city, and region highlight the most dedicated hoopers in every community.",
  },
  {
    title: "Community-Driven Recognition",
    desc: "Earn badges, status, and respect through real participation — not algorithmic hype.",
  },
  {
    title: "Built for Global Scale",
    desc: "From local parks to international cities, M2DG connects hoopers across borders through shared culture and verified play.",
  },
];

const whoItsFor = [
  {
    title: "Youth Hoopers",
    desc: "Build habits early with fun missions, streaks, and positive competition.",
    tag: "Kids + Teens",
  },
  {
    title: "Serious Grinders",
    desc: "Turn real runs into proof — consistency, discipline, and verified progress.",
    tag: "Athlete-First",
  },
  {
    title: "Adult Athletes",
    desc: "Stay sharp, stay active, and stay accountable — even outside leagues.",
    tag: "Rec + Fitness",
  },
  {
    title: "Parents & Families",
    desc: "A safer, verified system built to encourage healthy routines and community.",
    tag: "Parent-Friendly",
  },
  {
    title: "Coaches & Trainers",
    desc: "Motivate your athletes with challenges, habits, and measurable effort.",
    tag: "Training",
  },
  {
    title: "Community Leaders",
    desc: "Bring courts together — local energy, real culture, connected globally.",
    tag: "Courts Connected",
  },
];

const faqs = [
  {
    q: "How does verification work?",
    a: "M2DG uses GPS + QR court check-ins (and additional validation logic over time) to confirm real-world activity. The goal is simple: real hoopers, real courts, real effort.",
  },
  {
    q: "Do I need to be in a league to use M2DG?",
    a: "No. M2DG is built for everyday hoopers — pickup runs, workouts, training sessions, and community games. If you hoop, you belong here.",
  },
  {
    q: "Is M2DG only for kids?",
    a: "Not at all. M2DG supports youth, teens, and adults — from beginners to serious athletes. It’s athlete-forward, discipline-first, and community-based.",
  },
  {
    q: "What does M2DG track — points and stats?",
    a: "M2DG prioritizes what actually builds players: attendance, consistency streaks, missions completed, and community participation. It’s not fantasy stats — it’s discipline you can prove.",
  },
  {
    q: "When do you launch?",
    a: "We’re building with the early community now. Join the waitlist for launch updates, early access, and first-run perks.",
  },
];

export default function FeaturesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO: Video Preview */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/videos/m2dg-preview.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/55" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative px-6 py-10 md:px-10 md:py-14">
          <BadgePill text="Platform Preview" tone="orange" />

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Built for Real Hoopers.
            <br />
            Powered by Real Data.
          </h1>

          <p className="mt-4 max-w-2xl text-white/75">
            M2DG turns everyday runs into verified competition, measurable progress, and global recognition — all on real
            courts.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/how-it-works"
              className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
            >
              How It Works
            </Link>

            <Link
              href="/waitlist"
              className="inline-flex rounded-xl border border-white/15 bg-black/35 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* Mini strips */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
              <div className="text-xs font-black tracking-wide text-[#D4AF37]">VERIFIED</div>
              <div className="mt-1 text-sm font-bold text-white/90">GPS + QR check-ins</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
              <div className="text-xs font-black tracking-wide text-[#D4AF37]">MISSIONS</div>
              <div className="mt-1 text-sm font-bold text-white/90">Skill + discipline challenges</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
              <div className="text-xs font-black tracking-wide text-[#D4AF37]">RANKED</div>
              <div className="mt-1 text-sm font-bold text-white/90">Court • City • Global</div>
            </div>
          </div>
        </div>
      </div>

      {/* PLATFORM FEATURES */}
      <div className="mt-14">
        <h2 className="text-4xl font-black tracking-tight">Platform Features</h2>
        <p className="mt-3 max-w-3xl text-white/65">
          Everything M2DG is built around one idea: showing up should count. These features turn effort into proof.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="text-2xl font-extrabold">{f.title}</div>
              <div className="mt-3 text-white/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* (1) HOW IT WORKS IN 3 STEPS */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <BadgePill text="How It Works" tone="gold" />
            <div className="mt-4 text-3xl font-black md:text-4xl">Three steps. Real courts. Real progress.</div>
            <div className="mt-3 max-w-3xl text-white/75">
              M2DG is built for real hoop culture — quick to start, easy to understand, and focused on the work.
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/how-it-works"
              className="inline-flex rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
            >
              See the full walkthrough
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Check In", "Show up at real courts and verify with GPS + QR."],
            ["02", "Run Missions", "Complete skill + discipline challenges that build habits."],
            ["03", "Earn Status", "Level up with streaks, badges, and leaderboards that matter."],
          ].map(([num, title, desc]) => (
            <div key={num} className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-black tracking-wide text-[#D4AF37]">{num}</div>
                <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black text-white/75">
                  STEP
                </span>
              </div>
              <div className="mt-3 text-xl font-extrabold">{title}</div>
              <div className="mt-2 text-sm text-white/70">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* UPDATED SECTION (Option A) */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <BadgePill text="Why M2DG" tone="gold" />
        <div className="mt-4 text-3xl font-black md:text-4xl">More Than an App. A Commitment.</div>
        <div className="mt-4 max-w-4xl text-white/75 leading-relaxed">
          <p>
            M2DG wasn’t built to simulate the game — it was built to{" "}
            <span className="font-bold text-white">honor it</span>.
          </p>
          <p className="mt-3">
            This platform exists for people who show up when no one’s watching. For hoopers who grind on real courts,
            build real habits, and earn respect through consistency — not hype.
          </p>
          <p className="mt-3">
            <span className="font-bold text-white">Every run matters.</span>{" "}
            <span className="font-bold text-white">Every court counts.</span>{" "}
            <span className="font-bold text-white">Every commitment shows.</span>
          </p>
        </div>
      </div>

      {/* UPDATED SECTION (Built for People Who Show Up) */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/10 via-white/5 to-[#C8102E]/10 p-8 md:p-10">
        <BadgePill text="Athlete-First" tone="orange" />
        <div className="mt-4 text-3xl font-black md:text-4xl">Built for People Who Show Up</div>

        <div className="mt-4 max-w-4xl text-white/75 leading-relaxed">
          <p>
            M2DG rewards consistency, effort, and commitment — whether you’re chasing a dream, staying in shape, or making
            the decision to truly be <span className="font-bold text-white">Married 2 Da Game</span>.
          </p>

          <p className="mt-3">For some, basketball is just a sport. For others, it’s discipline. It’s therapy. It’s purpose.</p>

          <p className="mt-3">This game pushes us. Grounds us. Challenges us to be better than yesterday.</p>

          <p className="mt-3">
            M2DG exists for that mindset — for the people who choose to commit, show up again tomorrow, and earn
            everything they become.
          </p>
        </div>
      </div>

      {/* (3) WHO IT’S FOR */}
      <div className="mt-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <BadgePill text="Community" tone="orange" />
            <div className="mt-4 text-3xl font-black md:text-4xl">Who M2DG is for</div>
            <div className="mt-3 max-w-3xl text-white/70">
              Youth, teens, and adults — from casual hoopers to serious grinders. If you show up, you belong here.
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              href="/waitlist"
              className="inline-flex rounded-xl bg-[#FF8C00] px-5 py-3 text-sm font-extrabold text-black hover:brightness-110"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whoItsFor.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg font-extrabold">{x.title}</div>
                <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black text-white/75">
                  {x.tag}
                </span>
              </div>
              <div className="mt-3 text-sm text-white/70">{x.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* (4) FAQ */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <BadgePill text="FAQ" tone="gold" />
            <div className="mt-4 text-3xl font-black md:text-4xl">Questions hoopers ask</div>
            <div className="mt-3 max-w-3xl text-white/70">
              Quick answers — so you can decide if you’re ready to be part of the early community.
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-black/30 p-5 open:border-white/20"
            >
              <summary className="cursor-pointer list-none select-none">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-extrabold">{item.q}</div>
                  <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black text-white/70">
                    OPEN
                  </div>
                </div>
                <div className="mt-1 text-sm text-white/50">Tap to expand</div>
              </summary>

              <div className="mt-4 text-sm leading-relaxed text-white/75">{item.a}</div>
            </details>
          ))}
        </div>
      </div>

      {/* FINAL CTA (kept) */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">Want early access?</div>
            <div className="mt-1 text-white/70">
              Join the waitlist — launch perks, early invites, and first-run features.
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
