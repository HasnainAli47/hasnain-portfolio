import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const W3F_KEY = process.env.WEB3FORMS_KEY || "";

export async function POST(req: NextRequest) {
  if (!W3F_KEY) {
    return NextResponse.json(
      { error: "Contact form not configured. Please email codingwithhasnain@gmail.com directly." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

    const { name, email, company, budget, message } = body;

    if (!name?.trim() || name.trim().length < 2)
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    if (!message?.trim() || message.trim().length < 10)
      return NextResponse.json({ error: "Please add a bit more detail." }, { status: 400 });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: W3F_KEY,
        subject: `Portfolio: New inquiry from ${name.trim()}${company ? ` @ ${company.trim()}` : ""}`,
        from_name: name.trim(),
        replyto: email.trim(),
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || "Not specified",
        budget: budget || "Not specified",
        message: message.trim(),
      }),
    });

    const data = await res.json();

    if (!data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { error: "Failed to send. Please email codingwithhasnain@gmail.com directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json(
      { error: "Server error. Please email codingwithhasnain@gmail.com directly." },
      { status: 500 },
    );
  }
}
