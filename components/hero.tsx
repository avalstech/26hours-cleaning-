"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-12 pb-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-xs font-extrabold text-slate-700 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" />
            Verified cleaners • Secure booking • UK-wide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Book trusted home cleaners in minutes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-600"
          >
            Choose one-off, deep, or recurring cleaning with transparent pricing and vetted professionals across the UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/book">Check availability</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#services">View services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-slate-700"
          >
            {[
              ["24/7", "Flexible scheduling"],
              ["Top-rated", "Local vetted professionals"],
              ["Safe", "Verified profiles"],
              ["Fast", "Instant matching"]
            ].map(([tag, label]) => (
              <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm">
                <span className="rounded-full border border-brand-200 bg-brand-50 px-2 py-1 text-xs font-extrabold text-slate-800">{tag}</span>
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative overflow-hidden rounded-[30px] border border-brand-200/80 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-200/50 via-white/60 to-emerald-200/40" />
          <Image
            src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=80"
            alt="House cleaning service"
            width={1200}
            height={900}
            className="relative h-[420px] w-full object-cover"
            priority
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/85 p-4 backdrop-blur shadow-lg">
            <div className="flex items-center justify-between text-sm font-extrabold text-slate-800">
              <span>Next cleaner window</span>
              <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs">In 45 mins</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm font-extrabold text-slate-800">
              <span>Average rating</span>
              <span>4.8 ★</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
