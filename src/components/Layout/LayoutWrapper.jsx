'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import CursorGlow from '../CursorGlow';
import { motion } from 'framer-motion';
import { useMemo } from "react";

export default function Layout({ children }) {
    // Fix: memoize circle positions per user session to avoid SSR mismatch
    const circles = useMemo(() => (
      Array.from({ length: 6 }).map((_, i) => ({
        left: ((i * 9) + ((i * 13) % 6)) % 100,
        top: ((i * 13) + ((i * 7) % 10)) % 100,
        spread: 6 + ((i * 4) % 10),
        opacity: 0.16 + (i % 3) * 0.06,
        scale: 1 + (((i * 2) % 7) * 0.06)
      }))
    ), []);

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full">
            <CursorGlow />
            {/* Global subtle floating particles */}
            <div className="pointer-events-none fixed inset-0 z-[5]">
                {circles.map((c, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #22303d 0%, #00e5ff 100%)',
                          left: `${c.left}%`,
                          top: `${c.top}%`
                        }}
                        animate={{
                            y: [0, -c.spread, 0, c.spread * 0.55, 0],
                            opacity: [0.12, c.opacity, 0.1, c.opacity, 0.12],
                            scale: [1, c.scale, 0.9, c.scale * 0.95, 1]
                        }}
                        transition={{
                            duration: 5 + i * 0.15,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.45
                        }}
                    />
                ))}
            </div>
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow overflow-x-hidden max-w-full">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
