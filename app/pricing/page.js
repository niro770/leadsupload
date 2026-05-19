import Link from "next/link";
import { SectionHeading } from "../../components/Sections";

export const metadata = {
  title: "Pricing — Pay for Intent, Not Static Lists",
  description:
    "LeadsUpload pricing: buy live intent leads, enriched data, or aged volume. Sample-first, no card to start. Pricing scales with layer and exclusivity.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    name: "Aged",
    tag: "Volume play",
    blurb: "30–90 day recycled records for high-frequency dialing and nurture.",
    feat: ["Lowest cost per record", "Bulk volume bands", "Shared delivery", "Re-engagement ready"],
    cta: "Start with a sample",
  },
  {
    name: "Enriched",
    tag: "CRM-ready",
    blurb: "Intent records with firmographic and contact enrichment, field-mapped.",
    feat: ["CRM-ready exports", "Firmographic depth", "Dedupe & field mapping", "1–7 day freshness"],
    cta: "Start with a sample",
    featured: true,
  },
  {
    name: "Live Intent",
    tag: "Highest conversion",
    blurb: "Minutes-fresh records delivered at the moment of intent.",
    feat: ["Minutes-fresh delivery", "Exclusive or shared", "Top intent scores", "Live-transfer option"],
    cta: "Talk volume",
  },
];

export default function Pricing() {
  return (
    <>
      <section className="container-content pt-20 pb-12 text-center grain relative">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Pricing"
            title="You pay for timing and readiness — not record count"
            sub="Pricing scales with the data layer, exclusivity, and volume. Every plan starts with a free sample."
            center
          />
        </div>
      </section>

      <section className="container-content pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`card flex flex-col p-8 ${t.featured ? "border-signal/40 lg:-translate-y-3" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className={`eyebrow ${t.featured ? "" : "!text-slate-muted"}`}>{t.tag}</span>
                {t.featured && (
                  <span className="rounded-full bg-signal-glow px-3 py-1 text-[11px] font-medium text-signal">
                    Most popular
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-display text-3xl text-paper">{t.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-muted">{t.blurb}</p>
              <div className="my-6 h-px bg-ink-600" />
              <ul className="flex-1 space-y-3">
                {t.feat.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-paper/85">
                    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15E0A0" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/sample-data" className={`mt-8 ${t.featured ? "btn-primary" : "btn-ghost"}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[14px] text-slate-muted">
          Custom volume, exclusivity, and integration terms are quoted per stream.{" "}
          <Link href="/sample-data" className="text-signal hover:underline">
            Get a sample to start the conversation
          </Link>
          .
        </p>
      </section>
    </>
  );
}
