"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingChatWidget() {
  const pathname = usePathname();

  if (pathname === "/chat") return null;

  return (
    <Link
      href="/chat"
      aria-label="Chat with my AI"
      className="group fixed z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cyan-500/30 bg-slate-900/70 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md transition-all duration-300 ease-in-out hover:w-44 hover:justify-start hover:px-3 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
      style={{ bottom: 24, right: 24 }}
    >
      <span className="relative shrink-0">
        <Image
          src="/Faisal-fornow.png"
          alt="AI twin avatar"
          width={40}
          height={40}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-2.5 w-2.5 animate-pulse rounded-full border-2 border-slate-900 bg-emerald-400"
        />
      </span>
      <span className="w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:w-28 group-hover:opacity-100">
        <span className="block pl-2 font-orbitron text-[10px] font-bold uppercase tracking-wider text-cyan-400">
          Chat with me
        </span>
      </span>
    </Link>
  );
}
