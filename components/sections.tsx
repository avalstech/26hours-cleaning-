import Image from "next/image";
import { ShieldCheck, Clock, Sparkles, Wallet, Building2, Home, KeyRound } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function HowItWorks() {
  const steps = [
    { title: "Search", desc: "Enter your postcode and choose the service you need.", icon: <Sparkles className="h-5 w-5" /> },
    { title: "Match", desc: "Compare verified cleaners by rating, price, and availability.", icon: <ShieldCheck className="h-5 w-5" /> },
    { title: "Book", desc: "Secure payment and instant confirmation with reminders.", icon: <Wallet className="h-5 w-5" /> },
    { title: "Relax", desc: "Enjoy the results and leave a review to help others.", icon: <Clock className="h-5 w-5" /> }
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600">
          Simple, fast, and safe. Book in minutes and track everything from your phone.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <Card key={s.title} className="overflow-hidden border-brand-100/80 bg-white/90 shadow-[0_16px_38px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-brand-700">
                {s.icon}
              </div>
              <div className="mt-3 text-base font-extrabold">{s.title}</div>
            </CardHeader>
            <CardContent className="pt-0 text-sm font-medium text-slate-600 leading-relaxed">
              {s.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Home cleaning",
      desc: "Regular or one-off cleaning for kitchens, bathrooms, and living spaces.",
      icon: <Home className="h-5 w-5" />,
      img: "https://images.unsplash.com/photo-1560185008-5bf9f2849488?auto=format&fit=crop&w=1400&q=80",
      bullets: ["Dusting and vacuuming", "Bathroom sanitization", "Kitchen wipe-down"]
    },
    {
      title: "Deep cleaning",
      desc: "For a serious reset: corners, build-up, and hard-to-reach areas.",
      icon: <Sparkles className="h-5 w-5" />,
      img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1400&q=80",
      bullets: ["Detail work and skirting boards", "Appliance exterior cleaning", "High-touch disinfection"]
    },
    {
      title: "End of tenancy",
      desc: "Landlord-ready cleaning designed for move-outs and inspections.",
      icon: <KeyRound className="h-5 w-5" />,
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      bullets: ["Oven and kitchen focus", "Bathroom descaling", "Final walk-through checklist"]
    },
    {
      title: "Office cleaning",
      desc: "Reliable, professional cleaning for small teams to multi-room offices.",
      icon: <Building2 className="h-5 w-5" />,
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      bullets: ["Common areas and restrooms", "Bins, floors, and surfaces", "After-hours scheduling"]
    }
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight">Services that match real life</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600">
          Choose the service you need today. Upgrade to recurring plans anytime.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden border-brand-100/80 bg-white/90 shadow-[0_16px_38px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
            <div className="relative h-44 w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-transparent to-emerald-700/10" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-2 text-xs font-extrabold text-slate-800">
                <span className="grid h-7 w-7 place-items-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">{s.icon}</span>
                {s.title}
              </div>
            </div>
            <CardContent>
              <p className="text-sm font-semibold text-slate-600">{s.desc}</p>
              <ul className="mt-3 list-disc pl-5 text-sm font-medium text-slate-600 leading-relaxed">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    { title: "One-off booking", badge: "Popular", price: "£25", note: "Example starting rate. Final price depends on size and service.", features: ["Ideal for quick clean-ups", "Instant matching", "Secure payment"] },
    { title: "Recurring weekly", badge: "Save more", price: "£22", note: "Example recurring rate. Cleaner preference when available.", features: ["Priority booking slots", "Easy rescheduling", "Same cleaner preference"] },
    { title: "Office plans", badge: "For teams", price: "Custom", note: "Tell us your space size and frequency for a tailored quote.", features: ["After-hours scheduling", "Flexible frequency", "Multi-site support"] }
  ];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight">Transparent pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600">
          Start with an affordable booking and scale to recurring clean plans.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.title} className="border-brand-100/80 bg-white/90 shadow-[0_16px_38px_rgba(15,23,42,0.08)]">
            <CardContent className="pt-6">
              <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-2 text-xs font-extrabold text-slate-800">
                {t.badge}
              </div>
              <h3 className="mt-3 text-lg font-black tracking-tight">{t.title}</h3>
              <div className="mt-3 text-4xl font-black tracking-tight">
                {t.price}{t.price !== "Custom" && <span className="text-sm font-extrabold text-slate-500">/hr*</span>}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-600">{t.note}</p>
              <ul className="mt-4 list-disc pl-5 text-sm font-medium text-slate-600 leading-relaxed">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { quote: "I booked in minutes and the cleaner arrived exactly on time. The place looked brand new.", who: "Laura M., Birmingham", stars: "★★★★★" },
    { quote: "Finally a platform that feels safe. Payment was smooth and the cleaning checklist was clear.", who: "James K., Manchester", stars: "★★★★★" },
    { quote: "As a cleaner, I can set my schedule and get consistent bookings without endless calls.", who: "Amina S., London", stars: "★★★★★" }
  ];
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight">Loved by customers and cleaners</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600">
          Trust is everything. We prioritize verified profiles, clear expectations, and great experiences.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <Card key={i.who} className="border-brand-100/80 bg-white/90 shadow-[0_16px_38px_rgba(15,23,42,0.08)]">
            <CardContent className="pt-6">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">“{i.quote}”</p>
              <div className="mt-4 flex items-center justify-between text-sm font-extrabold text-slate-600">
                <span>{i.who}</span>
                <span>{i.stars}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How do you verify cleaners?", a: "For MVP, cleaners submit identity details and references. In production, we can add formal background checks with a verification partner and require proof of right to work where appropriate." },
    { q: "Can I choose the same cleaner every time?", a: "Yes. Recurring plans prioritize matching you with the same cleaner when they are available." },
    { q: "How do payments work?", a: "For MVP, booking requests are captured and confirmed. When you’re ready, we can enable online payments with Stripe and hold funds until completion." },
    { q: "Do you support end-of-tenancy checklists?", a: "Yes. We provide a checklist so expectations are clear for the customer and the cleaner." }
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tight">FAQ</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600">
          Quick answers to common questions about booking, trust, and payments.
        </p>
      </div>

      <div className="mx-auto mt-7 max-w-3xl">
        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
