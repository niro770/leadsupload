// One config object per SEO money page. Each targets ONE keyword cluster.
// 1 keyword = 1 page. No topic mixing. Used to generate all /vertical routes.

export const VERTICALS = {
  "business-loan-leads": {
    slug: "business-loan-leads",
    sampleKey: "business-loan",
    keyword: "buy business loan leads",
    metaTitle: "Buy Business Loan Leads — Real-Time Intent Streams | LeadsUpload",
    metaDescription:
      "Verified, intent-scored business loan leads for brokers and lenders. Live working-capital and SBA inquiries with consent records. Download a free sample.",
    h1: "Business Loan Leads Built for Funded Deals, Not Dead Dials",
    eyebrow: "Finance / Lending",
    problem:
      "Most business loan lists are recycled spreadsheets — owners who applied months ago, were already funded, or never asked for capital at all. Your closers burn hours on dials that go nowhere and your cost-per-funded-deal climbs every quarter.",
    solution:
      "LeadsUpload delivers loan inquiries the moment a business owner signals capital intent — a quote request, an SBA comparison, an equipment financing form. Each record carries an intent score, the trigger event, and a consent reference so your team calls owners who are actively shopping, not strangers.",
    leadTypes: [
      { name: "Working Capital Intent", desc: "Owners requesting short-term cash flow funding, scored on urgency and stated amount." },
      { name: "SBA & Term Loan", desc: "Comparison-stage borrowers evaluating structured loan products." },
      { name: "Equipment Financing", desc: "Inbound forms tied to a specific asset purchase — high close intent." },
      { name: "MCA / Renewal", desc: "Aged-layer volume for high-frequency dialing teams." },
    ],
    faqs: [
      { q: "How fresh are live business loan leads?", a: "Live-layer records are delivered within minutes of the intent signal being captured. Enriched leads are typically 1–7 days old; aged volume is 30–90 days." },
      { q: "Are these exclusive?", a: "Live-intent leads can be delivered exclusively or shared at a lower price point. You choose the model per stream." },
      { q: "What consent documentation comes with each lead?", a: "Every record includes an opt-in source reference and capture timestamp. Phone numbers are TCPA-screened before delivery." },
      { q: "Can I filter by loan amount or state?", a: "Yes. Streams are segmented by stated amount band, state, and intent score so you only receive records that match your funding box." },
    ],
    related: ["b2b-leads-usa", "insurance-leads"],
  },

  "insurance-leads": {
    slug: "insurance-leads",
    sampleKey: "insurance",
    keyword: "buy insurance leads",
    metaTitle: "Buy Insurance Leads — Live Intent for Agents | LeadsUpload",
    metaDescription:
      "Real-time insurance leads: final expense, auto, home, and term life. Intent-scored, consent-verified, segmented by state and product. Free sample download.",
    h1: "Insurance Leads Captured at the Moment of Intent",
    eyebrow: "Insurance",
    problem:
      "Generic insurance leads arrive cold and over-sold — the prospect has already taken five calls before yours, or was never seriously shopping. Agents waste premium dialing hours and contact rates collapse.",
    solution:
      "We capture the intent event itself — a final-expense quote request, an auto-and-home bundle comparison, a new-parent term life trigger — and route it to you while the prospect is still in-market. Each lead is scored, consent-stamped, and filtered by product line and state.",
    leadTypes: [
      { name: "Final Expense", desc: "Age-qualified quote requests with stated coverage interest." },
      { name: "Auto & Home Bundle", desc: "Multi-policy shoppers — highest premium value per close." },
      { name: "Term Life", desc: "Life-event-triggered inquiries (new parent, mortgage, marriage)." },
      { name: "Commercial Auto", desc: "Owner-operator and fleet policy shoppers." },
    ],
    faqs: [
      { q: "Are insurance leads TCPA compliant?", a: "All phone records are screened against TCPA requirements and carry an opt-in source reference and timestamp." },
      { q: "Can I get exclusive insurance leads?", a: "Yes — live-intent streams can be delivered exclusively. Shared delivery is available at a lower per-lead price." },
      { q: "Which products can I filter for?", a: "Final expense, term life, auto, home, bundled, and commercial auto — filterable by state and intent score." },
      { q: "How fast are leads delivered?", a: "Live-layer leads post to your CRM or inbox within minutes of capture. Aged volume is available for high-frequency dialing." },
    ],
    related: ["business-loan-leads", "real-estate-leads"],
  },

  "solar-leads": {
    slug: "solar-leads",
    sampleKey: "solar",
    keyword: "buy solar leads",
    metaTitle: "Buy Solar Leads — Homeowner Intent, Bill-Qualified | LeadsUpload",
    metaDescription:
      "Solar leads from real homeowners requesting install quotes. Bill-qualified, intent-scored, consent-verified, segmented by state. Download a free sample set.",
    h1: "Solar Leads From Homeowners Who Are Actually Ready to Quote",
    eyebrow: "Solar / Energy",
    problem:
      "Solar lead vendors flood installers with renters, sub-$100 utility bills, and tire-kickers who filled a form for a gift card. Your reps drive to dead appointments and close rates tank.",
    solution:
      "LeadsUpload only passes through homeowner records with a qualifying utility bill and an explicit install-quote request. Each lead is scored on roof, bill, and homeowner signals, and stamped with consent so your setters book appointments that actually sit.",
    leadTypes: [
      { name: "Quote-Ready Homeowner", desc: "Verified homeowner, qualifying bill, explicit install request." },
      { name: "Battery + Panel", desc: "Higher-ticket prospects interested in storage bundles." },
      { name: "Bill-Qualified Intent", desc: "Average monthly bill captured and scored for system sizing." },
      { name: "Aged Comparison", desc: "30–90 day shoppers for volume re-engagement campaigns." },
    ],
    faqs: [
      { q: "Are solar leads homeowner-verified?", a: "Yes. Renters are filtered out before delivery. Each record carries a homeownership signal and a captured utility-bill band." },
      { q: "Can I filter by state and utility bill?", a: "Streams are segmented by state, average bill band, and intent score so you only buy leads that fit your install footprint." },
      { q: "Are appointments included?", a: "Lead streams are data-only by default; live-transfer and appointment-set options are available on request." },
      { q: "How exclusive are these?", a: "Live-intent solar leads can be exclusive or shared. You set the model per stream." },
    ],
    related: ["home-services-leads", "real-estate-leads"],
  },

  "real-estate-leads": {
    slug: "real-estate-leads",
    sampleKey: "real-estate",
    keyword: "buy real estate leads",
    metaTitle: "Buy Real Estate Leads — Buyer & Seller Intent | LeadsUpload",
    metaDescription:
      "Real estate leads with real buyer and seller intent: pre-approvals, listing valuations, investor searches. Scored, consent-verified, segmented. Free sample.",
    h1: "Real Estate Leads Tied to a Real Buying or Selling Trigger",
    eyebrow: "Real Estate",
    problem:
      "Portal leads are a race — by the time you call, ten other agents already did, and half the contacts were just browsing Zillow with no intent to transact this year.",
    solution:
      "We capture the transaction trigger directly: a started pre-approval, a listing valuation request, an investor multi-unit search. Leads are scored on readiness and timeline, consent-stamped, and segmented by buyer, seller, and investor intent.",
    leadTypes: [
      { name: "Buyer — Pre-Approval", desc: "Prospects who started financing — highest close timeline." },
      { name: "Seller — Valuation", desc: "Homeowners requesting a listing valuation now." },
      { name: "Investor", desc: "Multi-unit and portfolio searches for commercial-leaning agents." },
      { name: "Relocation", desc: "Time-boxed movers with a defined 90-day window." },
    ],
    faqs: [
      { q: "Are these buyer or seller leads?", a: "Both — streams are segmented into buyer (pre-approval), seller (valuation), investor, and relocation intent." },
      { q: "How current is the intent signal?", a: "Live-layer leads reflect a trigger captured within minutes. Aged leads carry the original capture timestamp." },
      { q: "Can I filter by price band and state?", a: "Yes. Estimated home value band, state, and intent score are all filterable." },
      { q: "Is consent documented?", a: "Each record includes an opt-in source reference and capture timestamp; phone numbers are compliance-screened." },
    ],
    related: ["insurance-leads", "business-loan-leads"],
  },

  "home-services-leads": {
    slug: "home-services-leads",
    sampleKey: "home-services",
    keyword: "buy home services leads",
    metaTitle: "Buy Home Services Leads — Roofing, HVAC, Remodel | LeadsUpload",
    metaDescription:
      "Home services leads with project intent: roofing, HVAC, kitchen and bath remodels. Bid-ready, scored, consent-verified, segmented by trade and state.",
    h1: "Home Services Leads From Homeowners Ready to Get Bids",
    eyebrow: "Home Services",
    problem:
      "Shared home-improvement leads get sold to four contractors at once and most are early browsers, not buyers. Your estimators chase quotes that never had budget.",
    solution:
      "LeadsUpload routes project-intent records — a storm-damage roof quote, a multi-bid kitchen remodel, an HVAC replacement inquiry — scored on urgency and segmented by trade. Live-intent leads can be exclusive so you're not one of four trucks in the driveway.",
    leadTypes: [
      { name: "Roofing", desc: "Replacement and storm-damage quote requests, urgency-scored." },
      { name: "HVAC", desc: "System replacement and install inquiries." },
      { name: "Remodel — Kitchen/Bath", desc: "Multi-bid project requests with budget signals." },
      { name: "Aged Project", desc: "30–90 day browsers for nurture and re-quote campaigns." },
    ],
    faqs: [
      { q: "Can home services leads be exclusive?", a: "Yes. Live-intent leads can be delivered to you exclusively, or shared at a lower per-lead cost." },
      { q: "Which trades are covered?", a: "Roofing, HVAC, kitchen and bath remodel, with more trades available by request — filterable by trade and state." },
      { q: "How is urgency scored?", a: "The intent model weighs the trigger event (e.g. storm damage vs. browsing), stated timeline, and project signals into a 0–100 score." },
      { q: "What about consent?", a: "Every record carries an opt-in source reference and timestamp; phones are compliance-screened before delivery." },
    ],
    related: ["solar-leads", "real-estate-leads"],
  },

  "b2b-leads-usa": {
    slug: "b2b-leads-usa",
    sampleKey: "b2b",
    keyword: "b2b leads usa",
    metaTitle: "B2B Leads USA — Intent-Filtered Company Data | LeadsUpload",
    metaDescription:
      "US B2B leads with buying intent: software evaluations, RFP starts, demo requests. CRM-ready, intent-scored, consent-verified. Download a free sample.",
    h1: "B2B Leads USA — Filtered by Buying Intent, Not Just a Title",
    eyebrow: "B2B / Technology",
    problem:
      "Static B2B databases sell you 250 million records and call it a day. You still don't know which of those companies is in-market this quarter — so SDRs spray and pray.",
    solution:
      "We layer intent on top of company data: an evaluation started, an RFP opened, a demo requested. Records arrive CRM-ready, scored on buying readiness, and segmented by deal size so your SDRs work accounts that are actually shopping.",
    leadTypes: [
      { name: "Software Evaluation", desc: "Companies actively comparing tools in your category." },
      { name: "RFP / Procurement", desc: "Formal buying process started — highest intent." },
      { name: "Demo Request", desc: "Direct inbound interest signals from target accounts." },
      { name: "Enriched Company Data", desc: "CRM-ready firmographic enrichment on existing lists." },
    ],
    faqs: [
      { q: "Is this a static database?", a: "No. This is an intent-filtered stream — company data plus a captured buying signal — not a one-time list dump." },
      { q: "How is data delivered to my CRM?", a: "Records are formatted CRM-ready and can be pushed via export or integration. Field mapping is provided with each stream." },
      { q: "Can I filter by deal size?", a: "Yes. Estimated value band, state, and intent score are all filterable per stream." },
      { q: "What consent applies to B2B records?", a: "Business records include source attribution and capture timestamps; contact data is compliance-screened before delivery." },
    ],
    related: ["business-loan-leads", "insurance-leads"],
  },
};

export const VERTICAL_LIST = Object.values(VERTICALS);
