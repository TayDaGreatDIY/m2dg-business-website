// app/about/page.tsx
import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — About",
  description:
    "M2DG (Married 2 DA Game) is a global basketball platform that turns real hooping into verified progress, competitive recognition, and community respect.",
};

const values = [
  {
    title: "Encourage Discipline",
    desc: "We reward showing up. Consistency becomes visible, trackable, and respected — not just talked about.",
    image: "/images/about/about-discipline.jpg",
  },
  {
    title: "Promote Healthy Habits",
    desc: "Basketball is bigger than one run — it’s routine, focus, energy, and a lifestyle you can build on.",
    image: "/images/about/about-health.jpg",
  },
  {
    title: "Build Confidence",
    desc: "Confidence comes from the work. Progress is earned, recorded, and celebrated in a positive community.",
    image: "/images/about/about-confidence.jpg",
  },
];

const trust = [
  ["Safe & Verified Play", "Check-ins are built around real courts and accountability — not fake stats."],
  ["Positive Community", "Competition without toxic energy — respect stays first."],
  ["Real Effort, Real Recognition", "We track discipline, consistency, and growth — the things that actually matter."],
];

type LockerItem = {
  title: string;
  desc: string;
  image: string;
  label: string; // small tag on top-left
  chip?: string; // small tag on top-right
};

const ringItems: LockerItem[] = [
  {
    title: "M2DG Commitment Ring",
    desc: "Unlocked after the Honey Moon phase — at the Commitment / Promise Ring phase. A symbol of committing to yourself, your craft, and your WHY.",
    image: "/images/locker-room/ring-commitment-1.png",
    label: "Unlocked at Commitment Phase",
    chip: "Promise Ring Phase",
  },
  {
    title: "M2DG Commitment Ring (Alt)",
    desc: "A badge of identity for hoopers who decide they’re truly Married 2 Da Game — consistency over hype.",
    image: "/images/locker-room/ring-commitment-2.png",
    label: "Commitment / Promise",
    chip: "Member Reward",
  },
  {
    title: "M2DG Commitment Ring (Premium)",
    desc: "At this phase, your account can shift from free to paid — unlocking deeper progression and rewards.",
    image: "/images/locker-room/ring-commitment-3.png",
    label: "Commitment Phase",
    chip: "$10/mo Tier Unlock",
  },
  {
    title: "Court Champ Ring",
    desc: "Earned when you become the Court Champ of the month at your home court — the crown for the one who really showed up.",
    image: "/images/locker-room/ring-court-champ-1.png",
    label: "Monthly Home Court Winner",
    chip: "Court Champ",
  },
  {
    title: "Court Champ Ring (Alt)",
    desc: "A flex you earn — not buy. Proof that discipline and real runs beat talk every time.",
    image: "/images/locker-room/ring-court-champ-2.png",
    label: "Court Champ",
    chip: "Monthly Title",
  },
  {
    title: "Court Champ Ring (Premium)",
    desc: "Exclusive reward for leaders who climb the rankings through verified effort and consistency.",
    image: "/images/locker-room/ring-court-champ-3.png",
    label: "Top Rank Reward",
    chip: "Premium",
  },
];

const gearItems: LockerItem[] = [
  {
    title: "M2DG Jersey",
    desc: "Official M2DG jersey — built for hoopers who rep the marriage on the court.",
    image: "/images/locker-room/jersey-m2dg.png",
    label: "Merch",
  },
  {
    title: "M2DG Travel Gym Bag",
    desc: "Travel-ready gym bag for your hoop essentials — built to move like you do.",
    image: "/images/locker-room/travel-gym-bag.png",
    label: "Gear",
  },
  {
    title: "M2DG Gym Backpack",
    desc: "Backpack built for daily runs — carry your grind everywhere.",
    image: "/images/locker-room/gym-backpack.png",
    label: "Gear",
  },
  {
    title: "M2DG Travel Cups",
    desc: "Hydration for hoopers. Keep it moving — on court and off.",
    image: "/images/locker-room/travel-cups.png",
    label: "Lifestyle",
  },
  {
    title: "M2DG Basketball",
    desc: "Signature ball for the ones who take the commitment seriously.",
    image: "/images/locker-room/basketball-m2dg.png",
    label: "Hoops",
  },
];

function LockerCard({ item }: { item: LockerItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
      {/* TOP META (ABOVE IMAGE) */}
      <div className="flex items-center justify-between gap-3 px-5 pt-5">
        <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-extrabold text-white/85">
          {item.label}
        </div>

        {item.chip ? (
          <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-extrabold text-white/75">
            {item.chip}
          </div>
        ) : (
          <span />
        )}
      </div>

      {/* IMAGE (CLEAN / NO TEXT OVER IT) */}
      <div className="px-5 pt-4">
        <div
          className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black"
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label={`${item.title} image`}
        />
      </div>

      {/* BOTTOM COPY (BELOW IMAGE) */}
      <div className="px-5 pb-5 pt-4">
        <div className="text-lg font-extrabold text-white">{item.title}</div>
        <div className="mt-2 text-sm leading-snug text-white/70">{item.desc}</div>
      </div>
    </div>
  );
}

function LockerSection({
  title,
  subtitle,
  badgeText,
  items,
}: {
  title: string;
  subtitle: string;
  badgeText: string;
  items: LockerItem[];
}) {
  return (
    <div className="mt-12 rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-2xl font-black">{title}</div>
          <div className="mt-1 text-sm text-white/75">{subtitle}</div>
        </div>
        <BadgePill text={badgeText} tone="gold" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <LockerCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      {/* Top */}
      <BadgePill text="About M2DG" tone="gold" />
      <h1 className="mt-3 text-4xl font-black">Built for Passion. Made for the Game.</h1>

      <p className="mt-3 max-w-3xl text-white/75">
        <span className="font-bold text-white/90">M2DG (Married 2 Da Game)</span> is a basketball platform built to
        recognize real effort on real courts. We help athletes turn everyday hooping into{" "}
        <span className="font-semibold text-white/90">verified progress</span>,{" "}
        <span className="font-semibold text-white/90">competitive recognition</span>, and{" "}
        <span className="font-semibold text-white/90">community respect</span> — without simulated stats or fantasy
        systems.
      </p>

      {/* Founder Mission */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-black text-[#D4AF37] uppercase tracking-wide">Founder Mission</div>
            <div className="mt-2 text-xl font-extrabold leading-snug">
              “To give real hoopers a system that respects discipline, consistency, and love for the game — on any court,
              at any level.”
            </div>
            <div className="mt-2 text-sm text-white/70">
              Athlete-first by design — built with a safe, positive environment parents and communities can trust.
            </div>
          </div>
          <BadgePill text="Discipline-First" tone="orange" />
        </div>
      </div>

      {/* What we do (tight, business-forward) */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["What M2DG Does", "Verified check-ins, challenges, streaks, and rankings that make the work count."],
          ["Why It Matters", "Most hoopers grind in silence. We make consistency visible and progress real."],
          ["What Makes Us Different", "We don’t simulate performance. We verify real effort on real courts."],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
          >
            <div className="text-lg font-extrabold">{title}</div>
            <div className="mt-2 text-sm text-white/75">{desc}</div>
          </div>
        ))}
      </div>

      {/* Image cards (keep structure) */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
          >
            <div
              className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.55)), url('${v.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={`${v.title} image`}
            />
            <div className="mt-4 text-xl font-extrabold">{v.title}</div>
            <div className="mt-2 text-sm text-white/75">{v.desc}</div>
          </div>
        ))}
      </div>

      {/* LOCKER ROOM (replaces the video section) */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">The Locker Room</div>
            <div className="mt-1 text-sm text-white/75">
              Merch + rewards coming soon in the app. Earn unlocks through real runs — or gear up and rep the commitment.
            </div>
          </div>
          <BadgePill text="Store Preview" tone="orange" />
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
          <div className="text-sm font-extrabold text-white">How unlocks work</div>
          <div className="mt-2 text-sm text-white/70 leading-relaxed">
            Rings unlock after the <span className="font-bold text-white">Honey Moon</span> phase — at the{" "}
            <span className="font-bold text-white">Commitment / Promise Ring</span> phase (committing to yourself, your craft, your WHY).
            Court Champ rings are <span className="font-bold text-white">earned monthly</span> by winning your home court.
          </div>
        </div>

        {/* Ring Collection */}
        <LockerSection
          title="Ring Collection"
          subtitle="Commitment / Promise Ring phase unlocks + Court Champ monthly rewards."
          badgeText="Preview"
          items={ringItems}
        />

        {/* Gear & Merch */}
        <LockerSection
          title="Gear & Merch"
          subtitle="Jerseys, bags, cups, and more — designed for athletes who rep the commitment on and off the court."
          badgeText="Preview"
          items={gearItems}
        />
      </div>

      {/* Parents + trust strip (still athlete-forward, but reassuring) */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">Built for athletes. Trusted by families.</div>
            <div className="mt-1 text-sm text-white/75">
              Competitive energy, verified effort, and a culture built on respect — on and off the court.
            </div>
          </div>
          <BadgePill text="Parent-Approved" tone="orange" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trust.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-lg font-extrabold">{t}</div>
              <div className="mt-2 text-sm text-white/75">{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black">Help shape the launch</div>
            <div className="mt-1 text-sm text-white/75">
              Join the waitlist for early access, updates, and launch perks.
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

      <div className="mt-10">
        <Link
          href="/app"
          className="inline-flex rounded-xl border border-white/15 px-6 py-3 font-bold text-white/90 hover:border-white/25"
        >
          Preview the App Hub
        </Link>
      </div>
    </section>
  );
}
