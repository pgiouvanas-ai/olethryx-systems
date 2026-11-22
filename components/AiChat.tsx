
"use client";

import { useState } from "react";

// Olethryx AI floating assistant and chat panel.
export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user" as const,
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Olethryx AI error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[300] w-[90%] max-w-[380px] h-[500px] bg-[#090D1C] border border-[#B388FF]/60 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_30px_rgba(179,136,255,0.15)]">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#B388FF]/30">
            <span className="font-display text-[#B388FF] text-lg">
              Olethryx AI
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[#B388FF] text-2xl leading-none hover:text-[#7FA6FF] transition-colors"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 text-white text-sm overflow-y-auto space-y-4">
            <p className="text-white/80">
              Welcome to Olethryx. How can I help you explore our AI and software solutions?
            </p>

            {messages.map((message, index) => (
              <div
                key={index}
                className={message.role === "user" ? "text-right" : "text-left"}
              >
                <span
                  className={`inline-block max-w-[90%] rounded-xl px-3 py-2 ${
                    message.role === "user"
                      ? "bg-[#B388FF]/20 border border-[#B388FF]/40 text-white"
                      : "bg-[#7FA6FF]/10 border border-[#7FA6FF]/30 text-white/90"
                  }`}
                >
                  {message.content}
                </span>
              </div>
            ))}

            {loading && (
              <p className="text-[#B388FF]">Thinking...</p>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#B388FF]/30 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask us anything..."
              disabled={loading}
              className="flex-1 min-w-0 bg-[#11182B] text-white border border-[#B388FF]/40 rounded-lg px-3 py-2 outline-none focus:border-[#7FA6FF] transition-colors placeholder:text-white/40"
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-[#B388FF] text-[#090D1C] font-semibold px-4 py-2 rounded-lg hover:bg-[#7FA6FF] transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open Olethryx AI assistant"
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[300] bg-[#B388FF] text-[#090D1C] w-14 h-14 rounded-full shadow-[0_0_22px_rgba(179,136,255,0.35)] flex items-center justify-center hover:bg-[#7FA6FF] hover:shadow-[0_0_28px_rgba(127,166,255,0.45)] transition-all duration-300"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C7.03 3 3 6.58 3 11c0 2.1.92 4 2.43 5.42L4 21l4.1-1.35A10.3 10.3 0 0 0 12 20c4.97 0 9-3.58 9-8s-4.03-9-9-9z" />
        </svg>
      </button>
    </>
  );
}
