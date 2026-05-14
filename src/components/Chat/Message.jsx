"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Message({ message, aiAvatarSrc }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={[
        "flex w-full gap-3",
        isUser ? "justify-end" : "justify-start",
      ].join(" ")}
    >
      {!isUser ? (
        <div className="relative mt-1 h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
          <div className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(0,229,255,0.18)]" />
          <Image
            src={aiAvatarSrc}
            alt="AI avatar"
            fill
            sizes="36px"
            className="object-cover"
            priority={false}
          />
        </div>
      ) : null}

      <div
        className={[
          "max-w-[78%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed sm:text-[15px]",
          isUser
            ? "bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black shadow-[0_10px_40px_rgba(0,168,255,0.16)]"
            : "bg-white/5 text-white ring-1 ring-white/10 backdrop-blur-md",
        ].join(" ")}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
    </motion.div>
  );
}

