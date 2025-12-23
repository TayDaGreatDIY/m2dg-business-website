import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — Join the Waitlist",
  description: "Join the M2DG waitlist for early access to verified basketball challenges.",
};

export default function WaitlistPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <BadgePill text="Early Access" tone="orange" />

      <h1 className="mt-3 text-4xl font-black">
        Join the M2DG Waitlist
      </h1>

      <p className="mt-3 text-white/75">
        Be first to access verified court check-ins, challenges, badges, and leaderboards.
        Built for kids, athletes, and families worldwide.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        <form
          action="https://formspree.io/f/mrezprqw"
          method="POST"
          className="grid gap-4"
        >
          <label className="text-sm font-bold text-white/80">
            Email Address
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FF8C00]/60"
            />
          </label>

          <label className="text-sm font-bold text-white/80">
            I’m joining as
            <select
              name="role"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#FF8C00]/60"
              defaultValue="Athlete"
            >
              <option>Kid</option>
              <option>Athlete</option>
              <option>Parent</option>
              <option>Coach</option>
            </select>
          </label>

          <label className="text-sm font-bold text-white/80">
            City (optional)
            <input
              type="text"
              name="city"
              placeholder="Los Angeles"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FF8C00]/60"
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-extrabold text-black hover:brightness-110"
          >
            Reserve My Spot
          </button>

          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="text-xs font-black text-white/70 mb-2">
              WHAT YOU GET
            </div>
            <ul className="list-disc pl-5 text-sm text-white/75 space-y-1">
              <li>Early access to M2DG features</li>
              <li>First badge drops + launch perks</li>
              <li>Invite access for teammates</li>
            </ul>
          </div>

          <p className="text-xs text-white/50">
            By joining, you agree to receive emails about early access and updates.
            You can unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
