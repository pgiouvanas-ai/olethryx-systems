
import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { olethryxKnowledge } from "@/lib/olethryx/knowledge";

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
         content: `
         You are the AI assistant for Olethryx AI Systems.

         Use the following knowledge base as your source of truth when answering questions about Olethryx, its projects, services, policies and contact information.

          ${olethryxKnowledge}

          Instructions:
          - Be professional, clear and concise.
          - Never invent company information, features, services or capabilities.
          - Respect project statuses: distinguish LIVE, IN DEVELOPMENT and PLANNED.
          - If the knowledge base does not contain the answer, say so rather than guessing.
          - Do not claim planned features are already available.
          - Answer questions about the company using the knowledge base.
          `,
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
