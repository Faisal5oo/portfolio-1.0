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

            {/* Global ambient glow — fixed behind all content */}
            <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        top: '5%', left: '15%',
                        width: '55vw', height: '55vw',
                        maxWidth: 900, maxHeight: 900,
                        background: 'radial-gradient(closest-side, rgba(0,168,255,0.10), rgba(0,168,255,0.04), transparent)',
                        filter: 'blur(80px)',
                    }}
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        top: '40%', right: '5%',
                        width: '45vw', height: '45vw',
                        maxWidth: 700, maxHeight: 700,
                        background: 'radial-gradient(closest-side, rgba(0,229,255,0.09), rgba(0,229,255,0.03), transparent)',
                        filter: 'blur(90px)',
                    }}
                    animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                    transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                />
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        bottom: '10%', left: '30%',
                        width: '50vw', height: '50vw',
                        maxWidth: 800, maxHeight: 800,
                        background: 'radial-gradient(closest-side, rgba(0,102,255,0.08), rgba(0,102,255,0.02), transparent)',
                        filter: 'blur(100px)',
                    }}
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
                />
            </div>

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
