"use client";

import { useState } from "react";

const LAYER_STYLE = {
  live: "text-signal border-signal/30 bg-signal-glow",
  enriched: "text-amber border-amber/30 bg-amber/10",
  aged: "text-slate-muted border-slate-600 bg-ink-700",
};

export function LeadTable({ rows }) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-ink-600 bg-ink-800/80">
              {["Lead ID", "Name / Company", "State", "Intent Signal", "Score", "Layer", "Est. Value"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3.5 font-mono text-[11px] uppercase tracking-wider text-slate-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.lead_id} className="border-b border-ink-600/50 transition hover:bg-ink-700/40" style={{ animationDelay: `${i * 60}ms` }}>
                <td className="whitespace-nowrap px-4 py-3.5 font-mono text-slate-muted">{r.lead_id}</td>
                <td className="px-4 py-3.5">
                  <span className="block text-paper">{r.full_name}</span>
                  <span className="block text-[12px] text-slate-muted">{r.company || "Individual"}</span>
                </td>
                <td className="px-4 py-3.5 text-paper/80">{r.state}</td>
                <td className="max-w-[240px] px-4 py-3.5 text-paper/80">{r.intent_signal}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-12 overflow-hidden rounded-full bg-ink-600">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${r.intent_score}%`,
                          background: r.intent_score >= 80 ? "#15E0A0" : r.intent_score >= 70 ? "#FFB020" : "#8A93A2",
                        }}
                      />
                    </div>
                    <span className="font-mono text-[12px] text-paper">{r.intent_score}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium capitalize ${LAYER_STYLE[r.layer]}`}>
                    {r.layer}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 text-paper/80">{r.estimated_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-ink-600 bg-ink-800/50 px-4 py-3 text-center text-[12px] text-slate-muted">
        Preview of mock records · full schema includes email, phone, consent reference & capture timestamp
      </div>
    </div>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-ink-600/60">
      {items.map((item, i) => (
        <div key={i} className="py-1">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="pr-6 font-display text-[18px] text-paper">{item.q}</span>
            <span className={`shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15E0A0" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            className="grid transition-all duration-300"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="pb-5 pr-10 text-[15px] leading-relaxed text-slate-muted">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-paper sm:text-4xl text-balance">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[16px] leading-relaxed text-slate-muted">{sub}</p>}
    </div>
  );
}
