import { NextRequest, NextResponse } from "next/server";

// TODO: wire up to a real email/CRM destination (e.g. Resend, Postmark, or a
// CRM webhook) once credentials are available. For now this validates the
// payload and returns success so the front-end flow can be built and tested.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  if (body.company) {
    // Honeypot field was filled — silently accept without processing.
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}
