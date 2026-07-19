import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/content";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  if (body.company) {
    // Honeypot field was filled — silently accept without sending anywhere.
    return NextResponse.json({ ok: true });
  }

  if (!resend) {
    console.error("Enquiry received but RESEND_API_KEY is not configured — email not sent.");
    return NextResponse.json({ ok: false, error: "Email is not configured." }, { status: 500 });
  }

  const name = body.name;
  const email = body.email;
  const phone = typeof body.phone === "string" ? body.phone : "";
  const service = typeof body.service === "string" ? body.service : "";
  const message = typeof body.message === "string" ? body.message : "";

  const { error } = await resend.emails.send({
    from: process.env.ENQUIRY_FROM_EMAIL || `Form & Function London <${business.email}>`,
    to: business.email,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service || "Not specified"}`,
      "",
      "Message:",
      message || "(none provided)",
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message || "(none provided)").replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
