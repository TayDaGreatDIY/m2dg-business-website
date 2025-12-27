import Link from "next/link";
import BadgePill from "@/components/BadgePill";

export const metadata = {
  title: "M2DG — Contact",
  description: "Contact M2DG.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <BadgePill text="Contact" tone="orange" />
      <h1 className="mt-4 text-4xl font-black">Contact</h1>

      <p className="mt-4 text-white/70">
        Want to collaborate, ask a question, or support the launch? Reach out anytime.
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-extrabold">Email</div>
        <p className="mt-2 text-sm text-white/75">
          <a className="font-bold text-white hover:underline" href="mailto:Support@m2dg.io">
            Support@m2dg.io
          </a>
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:support@m2dg.io.com?subject=M2DG%20Website%20Contact"
            className="rounded-xl bg-[#FF8C00] px-6 py-3 font-extrabold text-black hover:brightness-110"
          >
            Email M2DG
          </a>

          <Link
            href="/waitlist"
            className="rounded-xl border border-white/15 px-6 py-3 font-bold text-white/90 hover:border-white/25"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
