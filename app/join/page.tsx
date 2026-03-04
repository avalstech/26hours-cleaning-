import { Card, CardContent } from "@/components/ui/card";
import { CleanerApplyForm } from "@/components/forms";

export default function JoinPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Join as a cleaner</h1>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            Get more clients, choose your schedule, and manage bookings from one dashboard.
          </p>

          <div className="mt-6 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <CleanerApplyForm />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="bg-white/80">
            <CardContent className="pt-6">
              <div className="text-lg font-black tracking-tight">Cleaner benefits</div>
              <ul className="mt-3 list-disc pl-5 text-sm font-semibold text-slate-600 leading-relaxed">
                <li>Set your availability and service area</li>
                <li>Get matched to nearby jobs</li>
                <li>Transparent fees and faster payouts (when payments enabled)</li>
                <li>Build trust with reviews</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80">
            <CardContent className="pt-6">
              <div className="text-lg font-black tracking-tight">Verification (MVP)</div>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                We review applications for completeness and can add formal checks as you scale.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm font-semibold text-slate-600 leading-relaxed">
                <li>Identity details and references</li>
                <li>Service preferences and experience</li>
                <li>Optional insurance details</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
