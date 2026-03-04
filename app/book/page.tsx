import { Card, CardContent } from "@/components/ui/card";
import { BookingForm, ContactForm } from "@/components/forms";

export default function BookPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Book a cleaner</h1>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            Submit your request and we’ll match you with available cleaners near your postcode.
          </p>

          <div className="mt-6 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <BookingForm />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="border-slate-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="text-lg font-black tracking-tight">What happens next?</div>
              <ol className="mt-3 list-decimal pl-5 text-sm font-semibold text-slate-600 leading-relaxed">
                <li>We review your request and confirm availability.</li>
                <li>We send you cleaner options with pricing.</li>
                <li>You choose your cleaner and confirm the booking.</li>
              </ol>
              <p className="mt-3 text-xs font-semibold text-slate-500">
                When you’re ready, we can enable instant booking + online payments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/80">
            <CardContent className="pt-6">
              <div className="text-lg font-black tracking-tight">Contact support</div>
              <p className="mt-2 text-sm font-semibold text-slate-600">Questions about your booking? Send us a message.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
