import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export default function RefereesPage() {
return (
<section className="mx-auto max-w-6xl px-4 py-14">
{/* Hero */}
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div
className="relative p-7 md:p-10"
style={{
backgroundImage:
"radial-gradient(1200px 600px at 25% 10%, rgba(255,140,0,0.35), transparent 60%), radial-gradient(900px 500px at 80% 35%, rgba(200,16,46,0.22), transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.92))",
}}
>
<BadgePill text="Verified Competitions" tone="orange" />
<h1 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">
Refereed Verified Games
</h1>
<p className="mt-3 max-w-3xl text-white/75">
M2DG verified games are built on real courts with real effort — and now we’re
adding fair, structured competition with official referees (or trusted callers)
so athletes can compete with confidence.
</p>

<div className="mt-6 flex flex-wrap gap-3">
<Link
href="/waitlist"
className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
>
Become a Referee
</Link>
<Link
href="/waitlist"
className="inline-flex rounded-xl border border-white/15 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
>
Request a Referee
</Link>
</div>

<div className="mt-4 text-xs text-white/60">
*Referee and trusted caller features roll out with verified competitions.
</div>
</div>
</div>

{/* How it works */}
<div className="mt-10 grid gap-5 md:grid-cols-3">
{[
{
title: "1) Schedule a Verified Game",
desc: "Athletes schedule a verified competition in the app (court, time, players).",
},
{
title: "2) Request a Referee (or Trusted Caller)",
desc: "Choose an official referee or a trusted parent/player to call the game fair.",
},
{
title: "3) Both Players Must Agree",
desc: "The referee or trusted caller must be accepted by BOTH players for verification.",
},
].map((s) => (
<div
key={s.title}
className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
>
<div className="text-lg font-extrabold">{s.title}</div>
<div className="mt-2 text-sm text-white/75">{s.desc}</div>
</div>
))}
</div>

{/* Challenge a call */}
<div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-7 md:p-8">
<BadgePill text="In-App Fair Play" tone="gold" />
<h2 className="mt-3 text-2xl font-black md:text-3xl">Challenge a Call (Mid-Game)</h2>
<p className="mt-2 max-w-3xl text-white/75">
If a call is disputed during a verified competition, the app provides quick options
to keep the game moving — without drama.
</p>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-black/30 p-5">
<div className="text-sm font-extrabold text-white">Option 1</div>
<div className="mt-1 text-lg font-black text-[#FF8C00]">Call the Game Off</div>
<div className="mt-2 text-sm text-white/75">
End the game if both sides can’t agree and it can’t continue fairly.
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/30 p-5">
<div className="text-sm font-extrabold text-white">Option 2</div>
<div className="mt-1 text-lg font-black text-[#FF8C00]">Shoot for It</div>
<div className="mt-2 text-sm text-white/75">
The person who challenges the call must shoot for it.
<span className="font-bold text-white">
{" "}
If they make it, the call is not honored
</span>{" "}
and the ball is rechecked.
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/30 p-5">
<div className="text-sm font-extrabold text-white">Option 3</div>
<div className="mt-1 text-lg font-black text-[#FF8C00]">Recheck the Ball</div>
<div className="mt-2 text-sm text-white/75">
Recheck possession and continue.
<span className="font-bold text-white"> Limited to 2 times per game.</span>
</div>
</div>
</div>

<div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm text-white/75">
The goal is simple: keep competition real, respectful, and fair — with quick
structure that prevents arguments and protects the experience.
</div>
</div>
</div>

{/* Referee scheduling */}
<div className="mt-10 grid gap-5 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-7">
<h3 className="text-xl font-extrabold">Referee Scheduling (Calendly)</h3>
<p className="mt-2 text-sm text-white/75">
Referees will have a Calendly calendar connected to their availability. When a referee
is assigned to a court/game, they’ll receive the request and can accept the job.
</p>
<ul className="mt-4 grid gap-2 text-sm text-white/75">
<li className="rounded-xl border border-white/10 bg-black/25 px-4 py-2">
• Ref gets assignment request
</li>
<li className="rounded-xl border border-white/10 bg-black/25 px-4 py-2">
• Ref accepts (or declines)
</li>
<li className="rounded-xl border border-white/10 bg-black/25 px-4 py-2">
• Game is confirmed + verified flow continues
</li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-7">
<h3 className="text-xl font-extrabold">Become a Referee</h3>
<p className="mt-2 text-sm text-white/75">
If you’re interested in becoming an official M2DG referee, you can sign up to take
the course and classes — and join the referee community.
</p>

<div className="mt-5 flex flex-wrap gap-3">
<Link
href="/waitlist"
className="inline-flex rounded-xl bg-[#FF8C00] px-6 py-3 text-sm font-extrabold text-black hover:brightness-110"
>
Sign Up for Referee Training
</Link>
<Link
href="/how-it-works"
className="inline-flex rounded-xl border border-white/15 px-6 py-3 text-sm font-extrabold text-white/90 hover:border-white/25"
>
How Verified Games Work
</Link>
</div>

<div className="mt-4 text-xs text-white/60">
Next step later: add a dedicated referee application form + training schedule.
</div>
</div>
</div>

{/* Bottom CTA */}
<div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF8C00]/15 via-white/5 to-[#C8102E]/10 p-7">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<div className="text-xl font-black">Want to ref verified competitions?</div>
<div className="mt-1 text-sm text-white/75">
Join the referee training waitlist and be first when assignments go live.
</div>
</div>
<Link
href="/waitlist"
className="rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-extrabold text-black hover:brightness-110"
>
Become a Referee
</Link>
</div>
</div>
</section>
);
}