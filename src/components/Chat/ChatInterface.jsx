"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Wifi, WifiOff } from "lucide-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Message from "./Message";
import ThinkingIndicator from "./ThinkingIndicator";
import QuickStartChips from "./QuickStartChips";

const API_URL = "https://faisalharoon.mooo.com/faisal-ai-twin/chat";

const DEFAULT_SUGGESTIONS = [
  "Tell me about your projects",
  "How can we collaborate?",
  "What are you learning right now?",
  "What services do you offer?",
];

export default function ChatInterface({
  title,
  subtitle,
  aiAvatarSrc,
}) {
  const [messages, setMessages] = useState(() => [
    {
      id: "seed",
      sender: "ai",
      text: "Hey — I’m your AI twin. Ask me anything about my work, projects, or how we can collaborate.",
      createdAtMs: Date.now(),
    },
  ]);

  const [draft, setDraft] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const inputId = useId();
  const bottomRef = useRef(null);

  const suggestions = useMemo(() => DEFAULT_SUGGESTIONS, []);

  useEffect(() => {
    if (!bottomRef.current) return;

    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages.length, isThinking]);

  const convertHistoryForAPI = () => {
    return messages
      .filter((m) => m.id !== "seed")
      .map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));
  };

  const submit = async (text) => {
    const trimmed = (text || "").trim();

    if (!trimmed || isThinking) return;

    const userMsg = {
      id: uuidv4(),
      sender: "user",
      text: trimmed,
      createdAtMs: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setDraft("");
    setIsThinking(true);

    try {
      setIsConnected(true);

      const response = await axios.post(
        API_URL,
        {
          message: trimmed,
          history: convertHistoryForAPI(),
        },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiReply =
        response?.data?.response ||
        "I received your message but couldn't generate a response.";

      const aiMsg = {
        id: uuidv4(),
        sender: "ai",
        text: aiReply,
        createdAtMs: Date.now(),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat API Error:", error);

      setIsConnected(false);

      let errorMessage =
        "Sorry — the AI server is currently unavailable. Please try again in a moment.";

      if (error.code === "ECONNABORTED") {
        errorMessage =
          "The request took too long to respond. Please try again.";
      }

      if (error.response?.status === 500) {
        errorMessage =
          "The AI backend encountered an issue. Please try again shortly.";
      }

      const errorMsg = {
        id: uuidv4(),
        sender: "ai",
        text: errorMessage,
        createdAtMs: Date.now(),
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  const onPickSuggestion = (value) => submit(value);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -inset-6 opacity-70 blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(0,168,255,0.22), transparent 55%), radial-gradient(circle at 85% 75%, rgba(0,229,255,0.18), transparent 55%), radial-gradient(circle at 55% 10%, rgba(0,102,255,0.14), transparent 55%)",
          }}
        />
      </div>

      <div
        className={[
          "mx-auto overflow-hidden rounded-3xl",
          "bg-black/30 ring-1 ring-white/10 backdrop-blur-md",
          "shadow-[0_30px_120px_rgba(0,229,255,0.08)]",
        ].join(" ")}
      >
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${
                    isConnected
                      ? "bg-emerald-500/50"
                      : "bg-red-500/50"
                  }`}
                />

                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    isConnected
                      ? "bg-emerald-500"
                      : "bg-red-500"
                  }`}
                />
              </span>

              <span className="text-xs font-semibold tracking-wide text-white/70">
                {isConnected ? "LIVE" : "OFFLINE"}
              </span>
            </div>

            <div className="mt-1 flex items-baseline gap-2">
              <p className="truncate font-orbitron text-sm text-white sm:text-[15px]">
                {title}
              </p>

              <p className="truncate text-xs text-white/60">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/60">
            {isConnected ? (
              <Wifi className="h-4 w-4" />
            ) : (
              <WifiOff className="h-4 w-4 text-red-400" />
            )}

            <span className="hidden text-xs sm:inline">
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </header>

        <div className="px-4 pb-4 pt-4 sm:px-6">
          <QuickStartChips
            suggestions={suggestions}
            onPick={onPickSuggestion}
            disabled={isThinking}
          />

          <div className="mt-2 max-h-[62vh] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-white/0 px-2 py-3 sm:px-3">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <Message
                  key={m.id}
                  message={m}
                  aiAvatarSrc={aiAvatarSrc}
                />
              ))}
            </AnimatePresence>

            {isThinking ? <ThinkingIndicator /> : null}

            <div ref={bottomRef} />
          </div>

          <form
            className="mt-4 flex items-end gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              submit(draft);
            }}
          >
            <label htmlFor={inputId} className="sr-only">
              Message
            </label>

            <textarea
              id={inputId}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit(draft);
                }
              }}
              placeholder="Ask my AI twin…"
              rows={1}
              className={[
                "min-h-[44px] flex-1 resize-none rounded-2xl px-4 py-3 text-sm text-white",
                "bg-white/5 ring-1 ring-white/10 backdrop-blur-md",
                "placeholder:text-white/40",
                "focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/40",
              ].join(" ")}
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={!draft.trim() || isThinking}
              className={[
                "inline-flex h-[44px] w-[44px] items-center justify-center rounded-2xl",
                "bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black",
                "ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,168,255,0.18)]",
                "transition disabled:cursor-not-allowed disabled:opacity-40",
              ].join(" ")}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </motion.button>
          </form>

          <p className="mt-2 text-center text-[11px] text-white/40">
            Press <span className="text-white/60">Enter</span> to send ·{" "}
            <span className="text-white/60">Shift</span> +{" "}
            <span className="text-white/60">Enter</span> for a new line
          </p>
        </div>
      </div>
    </section>
  );
}