import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-[255px] overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-[0_12px_28px_rgba(2,8,23,0.2)]">
              <Image src="/logo.svg" alt="" fill className="object-contain p-2" />
            </div>
            <div className="text-sm font-semibold text-slate-600">Trusted cleaners across the UK.</div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
            <Link className="rounded-xl px-3 py-2 hover:bg-brand-50 hover:text-slate-900" href="/legal/terms">Terms</Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-brand-50 hover:text-slate-900" href="/legal/privacy">Privacy</Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-brand-50 hover:text-slate-900" href="/book">Contact</Link>
          </div>
        </div>

        <div className="mt-8 text-sm font-semibold text-slate-500">
          © {new Date().getFullYear()} 26HoursCleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
