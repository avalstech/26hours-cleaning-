import Link from "next/link";
import { Hero } from "@/components/hero";
import { HowItWorks, Services, Pricing, Testimonials, FAQ } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <Card className="border-brand-200 bg-white/80">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-black tracking-tight">Check availability in your area</div>
                <div className="mt-1 text-sm font-semibold text-slate-600">
                  Enter your postcode, select a service, and we’ll match you with nearby cleaners.
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href="/book">Find cleaners</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/join">Join as cleaner</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonials />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Ready to book your next clean?</h2>
              <p className="mt-3 text-sm font-semibold text-slate-600">
                Tell us what you need and we’ll follow up with the best matches for your location and schedule.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <Button asChild size="lg">
                <Link href="/book">Book now</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/join">Become a cleaner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
