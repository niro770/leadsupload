# LeadsUpload — Intent-Filtered Lead Intelligence Platform

A high-performance lead generation + data marketplace site built to the supplied
blueprint. Positioned as **structured, intent-filtered lead streams — not static
databases**.

## Stack

- **Next.js 14** (App Router) — SEO + static prerendering
- **Tailwind CSS** — custom design tokens (Fraunces display / Public Sans body / IBM Plex Mono)
- No external backend required to run; lead capture is a self-contained API route
  with a Supabase/CRM persistence stub.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
# or
npm run build && npm start
```

> The build fetches Google Fonts via `next/font`. If your build environment has no
> network, swap the font imports in `app/layout.js` for local fonts.

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, trust strip, 4-step pipeline, 3 layers, vertical grid, compliance, CTA |
| `/pricing` | Layer-based pricing (Aged / Enriched / Live Intent) |
| `/sample-data` | Central sample funnel |
| `/business-loan-leads` | SEO money page — `buy business loan leads` |
| `/insurance-leads` | SEO money page — `buy insurance leads` |
| `/solar-leads` | SEO money page — `buy solar leads` |
| `/real-estate-leads` | SEO money page — `buy real estate leads` |
| `/home-services-leads` | SEO money page — `buy home services leads` |
| `/b2b-leads-usa` | SEO money page — `b2b leads usa` |
| `/api/capture-lead` | Lead capture + segmentation routing |
| `/sitemap.xml`, `/robots.txt` | Auto-generated |

## Architecture

**One config, six pages.** Every SEO money page is rendered from
`components/VerticalPage.js` driven by `data/verticals.js`. Each page targets ONE
keyword cluster, emits `Dataset` + `FAQPage` schema, and internal-links only to its
two `related` verticals — no keyword cannibalization.

**Conversion engine** (`components/SampleForm.js` → `app/api/capture-lead/route.js`):

```
Traffic → value gate → capture (email + volume + segment + use case)
        → server-side segmentation tags + routing decision
        → CSV sample unlocked
```

Routing logic in `routeLead()`:
- High volume (500+/mo) → `sales_call`
- Broker / Agency → `whatsapp_followup`
- Otherwise → `email_sequence`

Swap the `console.log` persistence stub in the API route for a Supabase insert or
CRM webhook to go live.

**Lead schema** is defined once in `data/leads.js` (`LEAD_SCHEMA`) with
schema-accurate mock records per vertical. The downloaded CSV uses this exact shape.

## Customization

- **Add a vertical:** add an entry to `VERTICALS` in `data/verticals.js` and a
  matching key in `SAMPLE_LEADS` in `data/leads.js`, then create
  `app/<slug>/page.js` (copy any existing one — 8 lines).
- **Theme:** all colors/fonts are in `tailwind.config.js` and `app/globals.css`.
- **Email/WhatsApp sequences:** wire the `next_step` value returned by
  `/api/capture-lead` to your ESP / messaging provider.

## Notes

All lead data shown is mock and illustrative. No contractual data ships from this
codebase; the sample-first funnel is the acquisition mechanism, not a data source.
