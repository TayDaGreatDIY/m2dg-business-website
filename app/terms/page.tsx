import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-4xl font-black">Terms of Service</h1>
      <p className="mt-2 text-white/70">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 space-y-8 text-white/85 leading-relaxed">
        <section>
          <h2 className="text-xl font-extrabold">1. Acceptance</h2>
          <p className="mt-2">
            By accessing or using the M2DG website, you agree to these Terms. If you do not agree,
            do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">2. Waitlist</h2>
          <p className="mt-2">
            Joining the waitlist does not guarantee access to any product or feature. We may
            contact you with updates and launch information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">3. Intellectual Property</h2>
          <p className="mt-2">
            The M2DG name, logo, and site content are owned by M2DG and protected by applicable
            laws. You may not copy, modify, or redistribute without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">4. Acceptable Use</h2>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>Do not attempt to break or disrupt the site.</li>
            <li>Do not upload or submit harmful, abusive, or illegal content.</li>
            <li>Do not impersonate others or misrepresent affiliation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">5. Disclaimer</h2>
          <p className="mt-2">
            The site is provided “as is” without warranties of any kind. We do not guarantee the
            site will be uninterrupted or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">6. Limitation of Liability</h2>
          <p className="mt-2">
            To the maximum extent permitted by law, M2DG will not be liable for indirect,
            incidental, special, consequential, or punitive damages arising from your use of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">7. Changes</h2>
          <p className="mt-2">
            We may update these Terms from time to time. Continued use of the site after changes
            means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">8. Privacy</h2>
          <p className="mt-2">
            See our <Link className="text-[#FF8C00] hover:underline" href="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">9. Contact</h2>
          <p className="mt-2">
            Questions? Email <b>support@m2dg.io</b>.
          </p>
        </section>
      </div>
    </div>
  );
}
