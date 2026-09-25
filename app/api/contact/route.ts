import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { mode, fullName, email, phone, message } = data;

    const { error } = await resend.emails.send({
      from: "Olethryx AI Systems <onboarding@resend.dev>",
      to: "panagiotisgiouvanas@gmail.com",
      replyTo: email,
      subject: `New ${mode} request from ${fullName}`,
      html: `
        <h2>New ${mode === "hire" ? "Hire" : "Collaboration"} Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong> ${message || "—"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}