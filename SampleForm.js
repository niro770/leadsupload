import Link from "next/link";
import SampleForm from "./SampleForm";
import { LeadTable, FAQ, SectionHeading } from "./Sections";
import { SAMPLE_LEADS } from "../data/leads";
import { VERTICALS } from "../data/verticals";

// One template renders all 6 SEO money pages. Each page targets ONE keyword
// cluster, internally links only to its related verticals (no cannibalization),
// and emits Dataset + FAQPage schema.

export default function VerticalPage({ slug }) {
  const v = VERTICALS[slug];
  const rows = SAMPLE_LEADS[v.sampleKey];

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${v.eyebrow} Lead Stream — LeadsUpload`,
    description: v.metaDescription,
    keywords: v.keyword,
    creator: { "@type": "Organization", name: "LeadsUpload" },
    isAccessibleForFree: false,
    license: "https://leadsupload.example/terms",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: v.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="container-content relative z-10 grid items-start gap-14 pt-20 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav className="mb-7 flex items-center gap-2 text-[13px] text-slate-muted">
              <Link href="/" className="transition hover:text-signal">Home</Link>
              <span>/</span>
              <span className="text-paper/70">{v.eyebrow} Leads</span>
            </nav>
            <span className="eyebrow">{v.eyebrow}</span>
            <h1 className="mt-5 font-display text-[2.4rem] leading-[1.08] tracking-tight text-paper sm:text-5xl text-balance">
              {v.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-muted">
              {v.solution}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#sample" className="btn-primary">Download Sample Leads</a>
              <Link href="/pricing" className="btn-ghost">View pricing</Link>
            </div>
          </div>
          <div id="sample">
            <SampleForm vertical={slug} />
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="bg-ink-800/30 py-24">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="card p-8">
            <span className="eyebrow !text-slate-muted">The problem</span>
            <p className="mt-5 text-[17px] leading-relaxed text-paper/85">{v.problem}</p>
          </div>
          <div className="card p-8 border-signal/30">
            <span className="eyebrow">The LeadsUpload approach</span>
            <p className="mt-5 text-[17px] leading-relaxed text-paper/85">{v.solution}</p>
          </div>
        </div>
      </section>

      {/* LEAD TYPE BREAKDOWN */}
      <section className="container-content py-24">
        <SectionHeading
          eyebrow="Stream breakdown"
          title={`What's inside the ${v.eyebrow.toLowerCase()} stream`}
          sub="Segmented sub-streams so you only buy the intent that fits your funnel."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {v.leadTypes.map((t) => (
            <div key={t.name} className="card card-hover p-6">
              <h3 className="font-display text-lg text-paper">{t.name}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-slate-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE TABLE */}
      <section className="bg-ink-800/30 py-24">
        <div className="container-content">
          <SectionHeading
            eyebrow="Live sample"
            title="Mock records in the exact delivery schema"
            sub="This is the structure your CSV ships in. Download the full sample below."
          />
          <div className="mt-12">
            <LeadTable rows={rows} />
          </div>
          <div className="mt-8 text-center">
            <a href="#sample" className="btn-primary">Download Sample Leads</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content py-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title={`${v.eyebrow} leads, answered`} />
          <FAQ items={v.faqs} />
        </div>
      </section>

      {/* INTERNAL LINKS — related verticals only (no cannibalization) */}
      <section className="bg-ink-800/30 py-20">
        <div className="container-content">
          <span className="eyebrow">Related streams</span>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {v.related.map((r) => {
              const rv = VERTICALS[r];
              return (
                <Link key={r} href={`/${r}`} className="card card-hover group flex items-center justify-between p-7">
                  <div>
                    <h3 className="font-display text-xl text-paper">{rv.eyebrow} Leads</h3>
                    <p className="mt-1.5 text-[13px] text-slate-muted">{rv.keyword}</p>
                  </div>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#15E0A0" strokeWidth="2" className="shrink-0 transition group-hover:translate-x-1">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONVERSION CTA BLOCK */}
      <section className="container-content py-28">
        <div className="card relative overflow-hidden grain p-12 text-center sm:p-16">
          <div className="relative z-10 mx-auto max-w-xl">
            <h2 className="font-display text-3xl text-paper sm:text-4xl text-balance">
              Start with a free {v.eyebrow.toLowerCase()} sample
            </h2>
            <p className="mt-4 text-[16px] text-slate-muted">
              Inspect the schema, scoring, and consent fields before anything is signed.
            </p>
            <a href="#sample" className="btn-primary mt-8 !px-9 !py-4">Download Sample Leads</a>
          </div>
        </div>
      </section>
    </>
  );
}
