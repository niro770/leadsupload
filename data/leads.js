// Canonical lead record schema + mock sample sets per vertical.
// This is the JSON structure delivered in sample CSVs and shown in preview tables.

export const LEAD_SCHEMA = {
  lead_id: "string — unique identifier (LU-XXXXXX)",
  vertical: "string — business-loan | insurance | solar | real-estate | home-services | b2b",
  full_name: "string",
  company: "string | null",
  email: "string (verified)",
  phone: "string (E.164, TCPA-checked)",
  state: "string — US state code",
  intent_signal: "string — captured trigger event",
  intent_score: "number 0–100 — readiness model output",
  layer: "string — live | enriched | aged",
  captured_at: "ISO 8601 timestamp",
  consent: "string — opt-in source reference",
  estimated_value: "string — deal size band",
};

export const SAMPLE_LEADS = {
  "business-loan": [
    { lead_id: "LU-840192", full_name: "Marcus Whitfield", company: "Whitfield Logistics LLC", state: "TX", intent_signal: "Requested $150K working capital quote", intent_score: 91, layer: "live", estimated_value: "$120K–$200K", captured_at: "2026-05-20T13:42Z" },
    { lead_id: "LU-840188", full_name: "Dana Reyes", company: "Coastal Print & Sign", state: "FL", intent_signal: "Compared SBA vs. merchant cash advance", intent_score: 84, layer: "live", estimated_value: "$60K–$90K", captured_at: "2026-05-20T13:31Z" },
    { lead_id: "LU-840175", full_name: "Aaron Pollack", company: "Pollack HVAC Group", state: "OH", intent_signal: "Submitted equipment financing application", intent_score: 78, layer: "enriched", estimated_value: "$40K–$75K", captured_at: "2026-05-20T12:58Z" },
    { lead_id: "LU-839902", full_name: "Priya Nandakumar", company: "Saffron Hospitality", state: "NJ", intent_signal: "Expansion loan inquiry — 2 locations", intent_score: 73, layer: "enriched", estimated_value: "$200K+", captured_at: "2026-05-20T11:20Z" },
  ],
  "insurance": [
    { lead_id: "LU-771044", full_name: "Gloria Estevez", company: null, state: "CA", intent_signal: "Final-expense quote requested (age 62)", intent_score: 88, layer: "live", estimated_value: "Med", captured_at: "2026-05-20T13:50Z" },
    { lead_id: "LU-771038", full_name: "Trevor Banks", company: null, state: "GA", intent_signal: "Auto + home bundle comparison", intent_score: 81, layer: "live", estimated_value: "High", captured_at: "2026-05-20T13:39Z" },
    { lead_id: "LU-770991", full_name: "Lena Okafor", company: null, state: "IL", intent_signal: "Term life — new parent trigger", intent_score: 79, layer: "enriched", estimated_value: "Med", captured_at: "2026-05-20T12:44Z" },
    { lead_id: "LU-770820", full_name: "Sam Cortez", company: "Cortez Trucking", state: "AZ", intent_signal: "Commercial auto policy shopping", intent_score: 70, layer: "aged", estimated_value: "High", captured_at: "2026-04-28T09:11Z" },
  ],
  "solar": [
    { lead_id: "LU-662310", full_name: "Bill Hammersmith", company: null, state: "AZ", intent_signal: "Avg bill $310 — requested install quote", intent_score: 93, layer: "live", estimated_value: "$22K–$30K", captured_at: "2026-05-20T13:55Z" },
    { lead_id: "LU-662288", full_name: "Renata Cole", company: null, state: "CA", intent_signal: "Homeowner, roof <10yrs, quote request", intent_score: 86, layer: "live", estimated_value: "$18K–$26K", captured_at: "2026-05-20T13:33Z" },
    { lead_id: "LU-662140", full_name: "Devon Pak", company: null, state: "NV", intent_signal: "Battery + panel bundle interest", intent_score: 80, layer: "enriched", estimated_value: "$28K+", captured_at: "2026-05-20T12:15Z" },
    { lead_id: "LU-661702", full_name: "Marta Quinn", company: null, state: "TX", intent_signal: "Compared 3 installers — no purchase", intent_score: 64, layer: "aged", estimated_value: "$20K–$25K", captured_at: "2026-04-15T16:40Z" },
  ],
  "real-estate": [
    { lead_id: "LU-553701", full_name: "Caleb Stone", company: null, state: "NC", intent_signal: "Pre-approval started — buyer", intent_score: 90, layer: "live", estimated_value: "$380K home", captured_at: "2026-05-20T13:48Z" },
    { lead_id: "LU-553688", full_name: "Yara Haddad", company: null, state: "WA", intent_signal: "Listing valuation request — seller", intent_score: 85, layer: "live", estimated_value: "$640K home", captured_at: "2026-05-20T13:29Z" },
    { lead_id: "LU-553540", full_name: "Owen Brady", company: "Brady Holdings", state: "FL", intent_signal: "Investor — 4-unit search", intent_score: 77, layer: "enriched", estimated_value: "$900K+", captured_at: "2026-05-20T11:52Z" },
    { lead_id: "LU-553201", full_name: "Nina Alvarado", company: null, state: "CO", intent_signal: "Relocation inquiry — 90-day window", intent_score: 68, layer: "aged", estimated_value: "$450K home", captured_at: "2026-04-22T10:05Z" },
  ],
  "home-services": [
    { lead_id: "LU-448120", full_name: "Greg Tomlin", company: null, state: "TX", intent_signal: "Roof replacement quote — storm damage", intent_score: 92, layer: "live", estimated_value: "$14K–$22K", captured_at: "2026-05-20T13:51Z" },
    { lead_id: "LU-448099", full_name: "Hana Liu", company: null, state: "CA", intent_signal: "Kitchen remodel — 3 bids requested", intent_score: 83, layer: "live", estimated_value: "$35K+", captured_at: "2026-05-20T13:22Z" },
    { lead_id: "LU-447950", full_name: "Doug Reiner", company: null, state: "PA", intent_signal: "HVAC system replacement inquiry", intent_score: 79, layer: "enriched", estimated_value: "$8K–$12K", captured_at: "2026-05-20T12:30Z" },
    { lead_id: "LU-447611", full_name: "Bea Costa", company: null, state: "FL", intent_signal: "Bathroom remodel — browsing only", intent_score: 61, layer: "aged", estimated_value: "$10K–$18K", captured_at: "2026-04-19T14:18Z" },
  ],
  "b2b": [
    { lead_id: "LU-339204", full_name: "Elaine Foss", company: "Northvale SaaS", state: "MA", intent_signal: "Evaluating CRM — 40 seats", intent_score: 87, layer: "live", estimated_value: "$48K ARR", captured_at: "2026-05-20T13:46Z" },
    { lead_id: "LU-339188", full_name: "Raj Mehta", company: "Helix Manufacturing", state: "MI", intent_signal: "ERP migration RFP started", intent_score: 82, layer: "live", estimated_value: "$120K", captured_at: "2026-05-20T13:18Z" },
    { lead_id: "LU-339040", full_name: "Tomás Vela", company: "Vela Logistics Co", state: "IL", intent_signal: "Fleet telematics demo request", intent_score: 76, layer: "enriched", estimated_value: "$60K ARR", captured_at: "2026-05-20T11:40Z" },
    { lead_id: "LU-338701", full_name: "Sophie Krause", company: "Krause Legal", state: "NY", intent_signal: "Compared 2 vendors — stalled", intent_score: 66, layer: "aged", estimated_value: "$30K ARR", captured_at: "2026-04-25T08:55Z" },
  ],
};

export const USER_SEGMENTS = ["Broker", "Agency", "Call Center", "SMB / In-house"];
export const VOLUME_BANDS = ["< 100 / mo", "100–500 / mo", "500–2,000 / mo", "2,000+ / mo"];
export const USE_CASES = ["Cold outreach", "Live transfers", "Email nurture", "CRM enrichment", "Appointment setting"];
