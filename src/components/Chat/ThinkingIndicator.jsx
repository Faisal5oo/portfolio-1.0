"use client";

import { motion } from "framer-motion";

export default function ThinkingIndicator() {
  return (
    <div className="flex w-full justify-start gap-3">
      <div className="relative mt-1 h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
        <div className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(0,229,255,0.18)]" />
        <div
          className="h-full w-full bg-white/5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.18), transparent 55%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md">
        <div className="flex items-center gap-1" aria-label="AI is thinking">
          <Dot delay={0} />
          <Dot delay={0.14} />
          <Dot delay={0.28} />
        </div>
        <span className="sr-only">Thinking…</span>
      </div>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-white/70"
      initial={{ opacity: 0.35, y: 0 }}
      animate={{ opacity: [0.35, 0.95, 0.35], y: [0, -2, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

