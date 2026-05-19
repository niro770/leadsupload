"use client";

import { useState } from "react";
import { USER_SEGMENTS, VOLUME_BANDS, USE_CASES } from "../data/leads";

// Conversion engine, step 3–5: value gate -> capture -> segmentation -> CSV release.
// On submit: POST to /api/capture-lead (segmentation tagging happens server-side),
// then unlock the sample CSV download for the given vertical.

export default function SampleForm({ vertical = "b2b", compact = false }) {
  const [form, setForm] = useState({
    email: "",
    industry: vertical,
    volume: "",
    segment: "",
    useCase: "",
  });
  const [state, setState] = useState("idle"); // idle | loading | done | error
  const [downloadReady, setDownloadReady] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid =
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) &&
    form.volume &&
    form.segment;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source_page: vertical }),
      });
      if (!res.ok) throw new Error("capture failed");
      setState("done");
      setDownloadReady(true);
    } catch {
      // Funnel must never dead-end: still release the sample on capture error.
      setState("done");
      setDownloadReady(true);
    }
  }

  function downloadCsv() {
    // Client-side CSV generation from the sample set for this vertical.
    import("../data/leads").then(({ SAMPLE_LEADS }) => {
      const key = vertical === "business-loan-leads" ? "business-loan"
        : vertical.replace("-leads", "").replace("-usa", "");
      const rows = SAMPLE_LEADS[key] || SAMPLE_LEADS["b2b"];
      const headers = Object.keys(rows[0]);
      const csv = [
        headers.join(","),
        ...rows.map((r) =>
          headers.map((h) => `"${String(r[h] ?? "").replace(/"/g, '""')}"`).join(",")
        ),
      ].join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `leadsupload-sample-${key}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  if (state === "done") {
    return (
      <div className="card p-8 text-center grain relative overflow-hidden">
        <div className="relative z-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-signal-glow">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#15E0A0" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-paper">Your sample stream is ready</h3>
          <p className="mt-2 text-slate-muted text-[15px] max-w-sm mx-auto">
            We&apos;ve tagged your account as <span className="text-signal font-medium">{form.segment}</span> at{" "}
            <span className="text-signal font-medium">{form.volume}</span>. A segmented follow-up will hit your inbox.
          </p>
          <button onClick={downloadCsv} className="btn-primary mt-6">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Sample CSV
          </button>
          <p className="mt-4 text-[12px] font-mono text-slate-muted/70">
            {downloadReady ? "20 mock records · schema-accurate" : ""}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-7 sm:p-8 grain relative overflow-hidden">
      <div className="relative z-10">
        {!compact && (
          <>
            <span className="eyebrow">Free sample · no card</span>
            <h3 className="mt-3 font-display text-2xl text-paper text-balance">
              Get a real sample stream
            </h3>
            <p className="mt-2 text-slate-muted text-[14px]">
              Schema-accurate mock leads for this vertical. See the structure before you commit.
            </p>
          </>
        )}

        <div className="mt-6 space-y-4">
          <Field label="Work email">
            <input
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="you@company.com"
              className="lu-input"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Monthly volume">
              <select value={form.volume} onChange={set("volume")} className="lu-input" required>
                <option value="">Select…</option>
                {VOLUME_BANDS.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </Field>
            <Field label="You are a">
              <select value={form.segment} onChange={set("segment")} className="lu-input" required>
                <option value="">Select…</option>
                {USER_SEGMENTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Primary use case (optional)">
            <select value={form.useCase} onChange={set("useCase")} className="lu-input">
              <option value="">Select…</option>
              {USE_CASES.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </Field>
        </div>

        <button
          type="submit"
          disabled={!valid || state === "loading"}
          className="btn-primary mt-6 w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          {state === "loading" ? "Preparing your stream…" : "Download Sample Leads"}
        </button>

        <p className="mt-3 text-center text-[12px] text-slate-muted/80">
          Sample data only. No contractual data is delivered without a signed agreement.
        </p>
      </div>

      <style jsx>{`
        :global(.lu-input) {
          width: 100%;
          background: #11161f;
          border: 1px solid #27303f;
          border-radius: 12px;
          padding: 12px 14px;
          color: #f7f8fa;
          font-size: 14px;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        :global(.lu-input:focus) {
          border-color: #15e0a0;
          box-shadow: 0 0 0 3px rgba(21, 224, 160, 0.12);
        }
        :global(.lu-input::placeholder) {
          color: #8a93a2;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-slate-muted">{label}</span>
      {children}
    </label>
  );
}
