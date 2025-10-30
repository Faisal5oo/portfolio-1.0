"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <motion.div
        className="cursor-glow fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovering ? 40 : 20,
          height: isHovering ? 40 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          left: 0,
          top: 0,
        }}
      />
      
      {/* Optional: Secondary glow trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] w-10 h-10 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 168, 255, 0.2) 0%, transparent 70%)",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      />
    </>
  );
}

