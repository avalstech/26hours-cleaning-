export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-black tracking-tight">Terms & Conditions (MVP)</h1>
      <p className="mt-3 text-sm font-semibold text-slate-600 leading-relaxed">
        This is a starter Terms page for the MVP. Replace with a solicitor-reviewed version before launch.
      </p>

      <div className="mt-8 space-y-6 text-sm font-medium text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold">1. Platform role</h2>
          <p>26HoursCleaning helps customers connect with independent cleaners. Cleaners provide services directly.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold">2. Bookings</h2>
          <p>For MVP, bookings are requests. We confirm availability and provide cleaner options.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold">3. Payments</h2>
          <p>Payments may be handled offline during MVP. Online payments will be introduced later.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold">4. Liability</h2>
          <p>Customers and cleaners should agree expectations. Insurance and disputes will be addressed in the full Terms.</p>
        </section>
      </div>
    </main>
  );
}
