"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7fbf9]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center">
          <span className="relative h-14 w-[260px]">
            <Image src="/logo.svg" alt="" fill className="object-contain" priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-sm md:flex">
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
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-brand-50 hover:text-slate-900"
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
