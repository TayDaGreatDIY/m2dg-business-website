import Link from "next/link";
import BadgePill from "@/components/BadgePill";

const challengeTypes = [
{ title: "Miles Walked", desc: "Track distance over a day, week, or month." },
{ title: "Jump Rope", desc: "Time-based or rep-based jump rope challenges." },
{ title: "Treadmill", desc: "Distance or minutes — gym-friendly challenges." },
{ title: "Stair Master", desc: "Minutes, floors, or streak-based goals." },
{ title: "Gym Streaks", desc: "Consistency challenges with weekly streak rewards." },
{ title: "Family Challenges", desc: "Team up: family totals + friendly leaderboards." },
];

export default function ParentChallengesPage() {
return (
<section className="mx-auto max-w-6xl px-4 py-14">
{/* Hero */}
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div
className="relative p-7 md:p-10"
style={{
backgroundImage:
"radial-gradient(1200px 600px at 30% 10%, rgba(255,140,0,0.28), transparent 60%), radial-gradient(900px 500px at 80% 35%, rgba(212,175,55,0.18), transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.92))",
}}
>
<BadgePill text="Parents + Families" tone="gold" />
<h1 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">
Parent Challenges
</h1>
<p className="mt-3 max-w-3xl text-white/75">
A fun, healthy way for parents to stay active — and show kids what consistency looks like.
Walk miles, jump rope, hit the treadmill, crush stair master minutes, and more.
</p>

<div className="mt-6 flex flex-wrap gap-3">
<Link
href="/waitlist"
className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
>
Join Parent Challenges
</Link>
<Link
href="/how-it-works"
className="inline-flex rounded-xl border border-white/15 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
>
How M2DG Works
</Link>
</div>

<div className="mt-4 text-xs text-white/60">
*Parent challenges roll out with app features — website now collects interest and early access.
</div>
</div>
</div>

{/* Challenge grid */}
<div className="mt-10">
<BadgePill text="Challenge Types" tone="orange" />
<h2 className="mt-3 text-2xl font-black md:text-3xl">Pick a Challenge. Build a Streak.</h2>
<p className="mt-2 max-w-3xl text-white/75">
Parents can compete solo, with friends, or as a family team. It’s positive, motivating, and built
around real effort — not pressure.
</p>

<div className="mt-6 grid gap-5 md:grid-cols-3">
{challengeTypes.map((c) => (
<div
key={c.title}
className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
>
<div className="text-sm font-black text-[#D4AF37]">PARENT MODE</div>
<div className="mt-2 text-xl font-extrabold">{c.title}</div>
<div className="mt-2 text-sm text-white/75">{c.desc}</div>
</div>
))}
</div>
</div>

{/* Why it matters */}
<div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-7 md:p-8">
<BadgePill text="Why It Matters" tone="gold" />
<h3 className="mt-3 text-2xl font-black md:text-3xl">Healthy Habits + Real Motivation</h3>
<p className="mt-2 max-w-3xl text-white/75">
M2DG isn’t just about athletes — it’s about family momentum. Parent challenges give parents a way
to lead by example and build consistent routines that support kids.
</p>

<div className="mt-6 grid gap-4 md:grid-cols-3">
{[
["Consistency", "Simple streaks that keep you active."],
["Community", "Friendly competition with positive energy."],
["Family Support", "Kids see effort — not just talk."],
].map(([t, d]) => (
<div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-5">
<div className="text-lg font-extrabold">{t}</div>
<div className="mt-2 text-sm text-white/75">{d}</div>
</div>
))}
</div>

<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm text-white/75">
Coming soon: challenge verification options, leaderboards, and streak rewards — built to stay
simple and supportive.
</div>
</div>
</div>

{/* Bottom CTA */}
<div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-7">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<div className="text-xl font-black">Join Parent Challenges early</div>
<div className="mt-1 text-sm text-white/75">
Get early access and help shape what challenges launch first.
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