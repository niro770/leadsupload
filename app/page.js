import Link from "next/link";
import SampleForm from "../components/SampleForm";
import { SectionHeading } from "../components/Sections";
import { VERTICAL_LIST } from "../data/verticals";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="container-content relative z-10 pt-20 pb-24 sm:pt-28">
          <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow reveal" style={{ animationDelay: "0ms" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
                Live intent · updated continuously
              </span>
              <h1
                className="mt-6 font-display text-[2.6rem] leading-[1.05] tracking-tight text-paper sm:text-6xl text-balance reveal"
                style={{ animationDelay: "80ms" }}
              >
                Real-Time Verified Lead Intelligence for{" "}
                <span className="gradient-text">High-Intent Outbound Teams</span>
              </h1>
              <p
                className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-muted reveal"
                style={{ animationDelay: "160ms" }}
              >
                We provide structured, intent-filtered lead streams — not static databases.
                Every record is scored, consent-verified, and routed while the prospect is
                still in-market.
              </p>
              <div
                className="mt-9 flex flex-wrap items-center gap-4 reveal"
                style={{ animationDelay: "240ms" }}
              >
                <Link href="/sample-data" className="btn-primary">
                  Get Sample Leads (Free)
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  See how pricing works
                </Link>
              </div>

              <div
                className="mt-12 grid max-w-lg grid-cols-3 gap-6 reveal"
                style={{ animationDelay: "320ms" }}
              >
                {[
                  ["3 layers", "Live · Enriched · Aged"],
                  ["6 verticals", "Finance to home services"],
                  ["0–100", "Intent score per record"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="font-display text-2xl text-signal">{k}</div>
                    <div className="mt-1 text-[12px] leading-snug text-slate-muted">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ animationDelay: "200ms" }}>
              <SampleForm vertical="b2b-leads-usa" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-ink-600/60 bg-ink-800/40">
        <div className="container-content overflow-hidden py-5">
          <div className="flex animate-ticker gap-12 whitespace-nowrap">
            {[...TRUST_ITEMS, ...TRUST_ITEMS].map((t, i) => (
              <span key={i} className="flex items-center gap-2.5 text-[13px] text-slate-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DATA WORKS — 4 STEP PIPELINE */}
      <section className="container-content py-28">
        <SectionHeading
          eyebrow="The pipeline"
          title="How an intent signal becomes a closed deal"
          sub="Four stages between a prospect's action and your rep's dial. No black box."
          center
        />
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {PIPELINE.map((step, i) => (
            <div key={i} className="card card-hover relative p-6">
              <span className="font-mono text-[13px] text-signal">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl text-paper">{step.t}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate-muted">{step.d}</p>
              {i < 3 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-signal md:block">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3 PRODUCT CATEGORIES */}
      <section className="bg-ink-800/30 py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Data layers"
            title="Three layers, priced for how you sell"
            sub="Buy timing when you need conversion, volume when you need reach."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {LAYERS.map((l) => (
              <div key={l.name} className="card card-hover flex flex-col p-8">
                <span className={`eyebrow ${l.accent}`}>{l.tag}</span>
                <h3 className="mt-4 font-display text-2xl text-paper">{l.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-muted">{l.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-paper/80">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15E0A0" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICAL USE CASES GRID */}
      <section className="container-content py-28">
        <SectionHeading
          eyebrow="Verticals"
          title="A dedicated intent stream per industry"
          sub="One keyword, one page, one segmented stream. Pick where you sell."
          center
        />
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICAL_LIST.map((v) => (
            <Link
              key={v.slug}
              href={`/${v.slug}`}
              className="card card-hover group flex flex-col justify-between p-6"
            >
              <div>
                <span className="eyebrow">{v.eyebrow}</span>
                <h3 className="mt-3 font-display text-xl text-paper">{v.eyebrow} Leads</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-muted line-clamp-2">
                  {v.solution.slice(0, 90)}…
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-signal">
                Explore stream
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition group-hover:translate-x-1">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" className="bg-ink-800/30 py-28">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Trust & compliance"
              title="Consent and screening on every single record"
              sub="We don't sell what we can't document. Compliance is part of the schema, not an afterthought."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {COMPLIANCE.map((c) => (
              <div key={c.t} className="card p-6">
                <h3 className="font-display text-[17px] text-paper">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-muted">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-content py-28">
        <div className="card relative overflow-hidden grain p-12 text-center sm:p-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl text-paper sm:text-5xl text-balance">
              See the data structure before you commit a dollar
            </h2>
            <p className="mt-5 text-[17px] text-slate-muted">
              Free, schema-accurate sample stream. No card. No sales call until you want one.
            </p>
            <Link href="/sample-data" className="btn-primary mt-9 !px-9 !py-4">
              Get Sample Leads (Free)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const TRUST_ITEMS = [
  "Continuously refreshed live layer",
  "Intent score on every record",
  "TCPA-screened phone data",
  "Segmented by state & volume",
  "Consent reference per lead",
  "CRM-ready formatting",
];

const PIPELINE = [
  { t: "Signal captured", d: "A prospect takes a real action — a quote request, an RFP, a comparison. We capture the trigger, not a guess." },
  { t: "Scored", d: "A readiness model turns the signal into a 0–100 intent score so you dial the hottest records first." },
  { t: "Verified", d: "Phone and email are screened, consent is referenced, and the record is stamped with a capture timestamp." },
  { t: "Routed", d: "The lead lands in your stream — live, enriched, or aged — formatted and ready for outbound." },
];

const LAYERS = [
  {
    name: "Live Intent Leads",
    tag: "Highest conversion",
    accent: "",
    desc: "Real-time submissions delivered within minutes of the intent signal. Built for urgent outreach and live transfers.",
    points: ["Minutes-fresh delivery", "Exclusive or shared", "Top intent scores"],
  },
  {
    name: "Enriched Business Data",
    tag: "CRM-ready",
    accent: "!text-amber",
    desc: "Contact and firmographic enrichment layered on intent — formatted and mapped for direct CRM import.",
    points: ["Field-mapped exports", "Firmographic depth", "Dedupe-ready"],
  },
  {
    name: "Aged Leads",
    tag: "Volume play",
    accent: "!text-slate-muted",
    desc: "30–90 day recycled records at a lower price point for high-frequency dialing and nurture campaigns.",
    points: ["Lower cost per record", "High volume", "Re-engagement ready"],
  },
];

const COMPLIANCE = [
  { t: "Consent reference", d: "Every record carries an opt-in source reference and capture timestamp." },
  { t: "TCPA screening", d: "Phone numbers are screened before any record is delivered." },
  { t: "Segmented delivery", d: "Filter to only the records that match your compliance and funding box." },
  { t: "Sample-first", d: "Inspect the exact schema with mock data before any agreement." },
];
