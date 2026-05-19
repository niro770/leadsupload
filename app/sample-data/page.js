import SampleForm from "../../components/SampleForm";
import { SectionHeading } from "../../components/Sections";
import { VERTICAL_LIST } from "../../data/verticals";
import Link from "next/link";

export const metadata = {
  title: "Get Free Sample Leads — Schema-Accurate Mock Stream",
  description:
    "Download a free, schema-accurate sample lead stream. See intent scoring, layers, and consent fields before you commit. No card required.",
  alternates: { canonical: "/sample-data" },
};

export default function SampleData() {
  return (
    <section className="container-content py-20">
      <div className="grid items-start gap-16 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionHeading
            eyebrow="Sample-first acquisition"
            title="See exactly what you'd be buying — for free"
            sub="The fastest way to evaluate a lead provider is to read the schema. Here it is, with mock records, no gatekeeping beyond a quick segmentation."
          />

          <div className="mt-12 space-y-7">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-signal-glow font-mono text-[13px] text-signal">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg text-paper">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-muted">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-6">
            <h3 className="font-display text-[17px] text-paper">Prefer a specific vertical?</h3>
            <p className="mt-2 text-[13px] text-slate-muted">
              Each money page has its own pre-filtered sample stream.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {VERTICAL_LIST.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}#sample`}
                  className="rounded-full border border-ink-600 px-3.5 py-1.5 text-[13px] text-paper/80 transition hover:border-signal hover:text-signal"
                >
                  {v.eyebrow}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <SampleForm vertical="b2b-leads-usa" />
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { t: "Pick your context", d: "Tell us your volume, segment, and use case so the sample and follow-up match how you actually sell." },
  { t: "Download the CSV", d: "Schema-accurate mock records in the exact delivery format — intent score, layer, consent reference, timestamp." },
  { t: "Get a segmented follow-up", d: "Brokers and agencies get a fast-track path; high-volume buyers get a direct line. No generic blast." },
];
