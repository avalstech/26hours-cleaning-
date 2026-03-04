"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7fbf9]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3 font-extrabold tracking-tight">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-400 shadow-[0_14px_30px_rgba(16,185,129,0.25)]">
            <span className="absolute -inset-10 opacity-60 [background:conic-gradient(from_180deg,transparent,rgba(255,255,255,0.55),transparent)] animate-[spin_6s_linear_infinite]" />
            <span className="relative text-white">26</span>
          </span>
          <span>26HoursCleaning</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {[
            ["How it works", "/#how"],
            ["Services", "/#services"],
            ["Pricing", "/#pricing"],
            ["Reviews", "/#testimonials"],
            ["FAQ", "/#faq"]
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-brand-50 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="/join">Join as Cleaner</Link>
          </Button>
          <Button asChild>
            <Link href="/book">Book now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
