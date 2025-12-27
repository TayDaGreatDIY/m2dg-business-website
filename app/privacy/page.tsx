export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <p className="mt-2 text-white/70">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-8 space-y-8 text-white/85 leading-relaxed">
        <section>
          <h2 className="text-xl font-extrabold">1. Overview</h2>
          <p className="mt-2">
            M2DG (“Married 2 Da Game,” “we,” “us”) respects your privacy. This Privacy Policy
            explains what information we collect, how we use it, and the choices you have when
            you visit our website or join our waitlist.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">2. Information We Collect</h2>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li><b>Waitlist info:</b> name, email, and any optional info you submit.</li>
            <li><b>Usage data:</b> pages viewed, device/browser details, and approximate location (city/state) from IP.</li>
            <li><b>Cookies:</b> basic cookies for site functionality and analytics (if enabled).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">3. How We Use Information</h2>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>Operate and improve the website and experience.</li>
            <li>Contact you about the waitlist, updates, and launch info.</li>
            <li>Protect against abuse, fraud, and security issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">4. Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. We may share information with service
            providers who help us run the site (e.g., hosting, email, analytics), and when
            required by law or to protect our rights and users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">5. Children’s Privacy</h2>
          <p className="mt-2">
            M2DG is designed to be kid-safe and family-friendly. If we learn we collected personal
            information from a child in a way that requires parental consent, we will take steps
            to delete it or obtain consent as required.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">6. Security</h2>
          <p className="mt-2">
            We use reasonable administrative, technical, and physical safeguards to protect
            information. No method of transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">7. Your Choices</h2>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>You can request removal from the waitlist at any time.</li>
            <li>You can control cookies in your browser settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold">8. Contact</h2>
          <p className="mt-2">
            Questions? Email us at <b>support@m2dg.io</b>.
          </p>
        </section>
      </div>
    </div>
  );
}
