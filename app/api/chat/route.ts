
import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages" },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: "You are the AI assistant for Olethryx AI Systems. Help visitors understand our software and AI services. Be professional, clear and concise. Never invent information about the company or its services.",
        },
        ...messages,
      ],
    });

    return NextResponse.json({
      message: completion.choices[0]?.message?.content ?? "",
    });
  } catch (error) {
    console.error("Olethryx AI error:", error);

    return NextResponse.json(
      { error: "Unable to process your request" },
      { status: 500 }
    );
  }
}
