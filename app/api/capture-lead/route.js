import { NextResponse } from "next/server";

// Conversion engine step 4: segmentation + monetization routing.
// In production: persist to Supabase/CRM, enqueue the segmented email/WhatsApp
// sequence, and flag high-volume records for a sales call.
// Here it computes the segmentation tags and routing decision deterministically.

function routeLead({ segment, volume, useCase, industry }) {
  const highVolume = volume === "500–2,000 / mo" || volume === "2,000+ / mo";
  const tags = [
    `segment:${(segment || "unknown").toLowerCase().replace(/[^a-z]/g, "-")}`,
    `volume:${(volume || "unknown").replace(/[^0-9+]/g, "") || "low"}`,
    `industry:${industry || "general"}`,
  ];
  if (useCase) tags.push(`use-case:${useCase.toLowerCase().replace(/\s+/g, "-")}`);

  let route;
  if (highVolume) route = "sales_call"; // human touch for high-volume buyers
  else if (segment === "Broker" || segment === "Agency") route = "whatsapp_followup";
  else route = "email_sequence";

  return { tags, route, priority: highVolume ? "high" : "standard" };
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { email } = payload;
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const routing = routeLead(payload);

  // Persistence stub — swap for Supabase insert / CRM webhook.
  console.log("[capture-lead]", {
    email,
    source: payload.source_page,
    ...routing,
    received_at: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    segmentation: routing.tags,
    next_step: routing.route,
    sample_unlocked: true,
  });
}
