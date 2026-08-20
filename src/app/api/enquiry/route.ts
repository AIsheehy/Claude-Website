import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/content";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  if (!resend) {
    console.error("Enquiry received but RESEND_API_KEY is not configured — email not sent.");
    return NextResponse.json({ ok: false, error: "Email is not configured." }, { status: 500 });
  }

  // Honeypot field was filled — likely a bot, but mobile/extension autofill
  // can trip this on real visitors too, so flag it rather than silently
  // dropping the enquiry (a filled-in honeypot previously meant the email
  // was never sent at all, with no record anywhere that it had happened).
  const suspectedSpam = Boolean(body.company);

  const email = body.email;
  const service = typeof body.service === "string" ? body.service : "";
  const message = typeof body.message === "string" ? body.message : "";
  const postcode = typeof body.postcode === "string" ? body.postcode : "";

  const { error } = await resend.emails.send({
    from: process.env.ENQUIRY_FROM_EMAIL || `Form & Function London <${business.email}>`,
    to: business.email,
    replyTo: email,
    subject: `${suspectedSpam ? "[Possible Spam] " : ""}New enquiry — ${service || "General enquiry"}`,
    text: [
      `Email: ${email}`,
      `Service: ${service || "Not specified"}`,
      `Property postcode: ${postcode || "Not specified"}`,
      "",
      "Message:",
      message || "(none provided)",
    ].join("\n"),
    html: `
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
      <p><strong>Property postcode:</strong> ${escapeHtml(postcode || "Not specified")}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message || "(none provided)").replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
