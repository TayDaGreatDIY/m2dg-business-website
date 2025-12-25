import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — Privacy",
  description: "M2DG privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <BadgePill text="Privacy" tone="gold" />
      <h1 className="mt-4 text-4xl font-black">Privacy Policy</h1>

      <p className="mt-4 text-white/70">
        This is a placeholder privacy policy page. Before launch, we’ll finalize how we handle data like check-ins,
        account info, and analytics.
      </p>

      <div className="mt-6 space-y-4 text-white/75">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-extrabold">What we collect</div>
          <p className="mt-2 text-sm">
            Basic account details and app usage data required to operate features like check-ins, missions, badges, and
            rankings.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-extrabold">How we use it</div>
          <p className="mt-2 text-sm">
            To verify activity, improve the product, prevent abuse, and deliver the experience safely.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-extrabold">Contact</div>
          <p className="mt-2 text-sm">
            Questions? Email us at <span className="text-white/90 font-bold">married2dagame4444@gmail.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
