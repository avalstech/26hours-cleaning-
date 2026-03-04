import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-400 text-white font-extrabold">
              26
            </div>
            <div>
              <div className="font-extrabold tracking-tight">26HoursCleaning Services</div>
              <div className="text-sm font-semibold text-slate-600">Trusted cleaners across the UK.</div>
            </div>
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
