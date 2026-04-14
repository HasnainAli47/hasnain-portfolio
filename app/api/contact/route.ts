import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL || "alihasnain.031350.pk@gmail.com";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured yet. Please email codingwithhasnain@gmail.com directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }
    const { name, email, company, budget, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Please tell me a bit more about what you're building." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` @ ${company}` : ""}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px; border-radius: 12px;">
          <div style="background: #7c3aed; padding: 4px; border-radius: 8px; margin-bottom: 24px; height: 4px;"></div>
          <h2 style="font-size: 22px; font-weight: 800; color: #111827; margin: 0 0 24px;">New contact from your portfolio</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; width: 120px; font-weight: 600;">NAME</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">EMAIL</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;"><a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">COMPANY</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #111827;">${company}</td>
            </tr>` : ""}
            ${budget ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600;">BUDGET</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #111827;">${budget}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #fff; border-radius: 10px; border-left: 4px solid #7c3aed;">
            <p style="font-size: 13px; color: #6b7280; font-weight: 600; margin: 0 0 10px;">MESSAGE</p>
            <p style="font-size: 15px; color: #1f2937; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: #7c3aed; color: #fff; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px;">
              Reply to ${name}
            </a>
          </div>

          <p style="font-size: 12px; color: #9ca3af; margin-top: 24px;">Sent from hasnainali.vercel.app</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to send. Please email codingwithhasnain@gmail.com directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
