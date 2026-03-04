export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-black tracking-tight">Privacy Policy (MVP)</h1>
      <p className="mt-3 text-sm font-semibold text-slate-600 leading-relaxed">
        This is a starter Privacy page for the MVP. Replace with a solicitor-reviewed version before launch.
      </p>

      <div className="mt-8 space-y-6 text-sm font-medium text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold">What we collect</h2>
          <p>Name, email, phone, postcode, and booking/application details you submit.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold">How we use it</h2>
          <p>To contact you, match bookings to cleaners, and operate the platform.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold">Data retention</h2>
          <p>We retain data as needed for operations and compliance. You can request deletion.</p>
        </section>
      </div>
    </main>
  );
}
