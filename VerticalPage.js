import Link from "next/link";
import { VERTICAL_LIST } from "../data/verticals";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-600/60 bg-ink-900/80 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="font-display text-[19px] tracking-tight text-paper">
            Leads<span className="text-signal">Upload</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <DropTrigger />
          <Link href="/pricing" className="text-[14px] text-slate-muted transition hover:text-paper">
            Pricing
          </Link>
          <Link href="/sample-data" className="text-[14px] text-slate-muted transition hover:text-paper">
            Sample Data
          </Link>
        </nav>

        <Link href="/sample-data" className="btn-primary !px-5 !py-2.5 !text-[14px]">
          Get Sample Leads
        </Link>
      </div>
    </header>
  );
}

function DropTrigger() {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1.5 text-[14px] text-slate-muted transition hover:text-paper">
        Lead Streams
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition group-hover:rotate-180">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="card p-2">
          {VERTICAL_LIST.map((v) => (
            <Link
              key={v.slug}
              href={`/${v.slug}`}
              className="block rounded-lg px-3 py-2.5 transition hover:bg-ink-700"
            >
              <span className="block text-[14px] text-paper">{v.eyebrow}</span>
              <span className="block text-[12px] text-slate-muted">{v.keyword}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-600/60 mt-32">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-signal" />
              <span className="font-display text-[18px] text-paper">
                Leads<span className="text-signal">Upload</span>
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-muted max-w-xs">
              Structured, intent-filtered lead streams for outbound conversion performance — not static databases.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-slate-muted">Lead Streams</h4>
            <ul className="mt-4 space-y-2.5">
              {VERTICAL_LIST.slice(0, 3).map((v) => (
                <li key={v.slug}>
                  <Link href={`/${v.slug}`} className="text-[14px] text-paper/80 transition hover:text-signal">
                    {v.eyebrow} Leads
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-slate-muted">More Streams</h4>
            <ul className="mt-4 space-y-2.5">
              {VERTICAL_LIST.slice(3).map((v) => (
                <li key={v.slug}>
                  <Link href={`/${v.slug}`} className="text-[14px] text-paper/80 transition hover:text-signal">
                    {v.eyebrow} Leads
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-slate-muted">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/pricing" className="text-[14px] text-paper/80 transition hover:text-signal">Pricing</Link></li>
              <li><Link href="/sample-data" className="text-[14px] text-paper/80 transition hover:text-signal">Sample Data</Link></li>
              <li><a href="#compliance" className="text-[14px] text-paper/80 transition hover:text-signal">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-600/60 pt-7 text-[12px] text-slate-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LeadsUpload. Intent-filtered lead intelligence.</p>
          <p className="font-mono">Sample data shown is mock and illustrative only.</p>
        </div>
      </div>
    </footer>
  );
}
