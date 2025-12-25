import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — Terms",
  description: "M2DG terms of service.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <BadgePill text="Terms" tone="gold" />
      <h1 className="mt-4 text-4xl font-black">Terms of Service</h1>

      <p className="mt-4 text-white/70">
        This is a placeholder Terms page. Before launch, we’ll finalize terms covering usage, eligibility,
        verification rules, and community guidelines.
      </p>

      <div className="mt-6 space-y-4 text-white/75">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-extrabold">Respect-first culture</div>
          <p className="mt-2 text-sm">
            M2DG is built around discipline and respect. Abuse, cheating, and toxic behavior will be removed.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-extrabold">Verification</div>
          <p className="mt-2 text-sm">
            Check-ins and progress are built for real courts and real effort. Attempts to spoof or falsify activity may
            result in account limits or removal.
          </p>
        </div>
      </div>
    </section>
  );
}
