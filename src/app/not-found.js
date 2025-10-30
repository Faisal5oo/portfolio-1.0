"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  // Glitch animation keyframes
  const glitchVariants = {
    normal: {
      x: 0,
      textShadow: "0 0 10px rgba(0, 168, 255, 0.5)"
    },
    glitch: {
      x: [0, -2, 2, -2, 2, 0],
      textShadow: [
        "0 0 10px rgba(0, 168, 255, 0.5)",
        "2px 0 rgba(255, 0, 0, 0.5), -2px 0 rgba(0, 255, 255, 0.5)",
        "-2px 0 rgba(255, 0, 0, 0.5), 2px 0 rgba(0, 255, 255, 0.5)",
        "2px 0 rgba(255, 0, 0, 0.5), -2px 0 rgba(0, 255, 255, 0.5)",
        "0 0 10px rgba(0, 168, 255, 0.5)"
      ],
      transition: {
        duration: 0.3,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    }
  };

  return (
    <LayoutWrapper>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with grid pattern */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-[100px]"></div>
        </div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glitch 404 Number */}
          <motion.div
            className="text-[120px] md:text-[200px] font-extrabold leading-none mb-4"
            variants={glitchVariants}
            initial="normal"
            animate="glitch"
            transition={{
              repeat: Infinity,
              repeatDelay: 3,
              duration: 0.3
            }}
          >
            <span className="gradient-text">404</span>
          </motion.div>
          
          {/* Glitch Text */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Lost in the <span className="gradient-text">Grid?</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The page you're looking for doesn't exist or has been moved to another dimension.
          </motion.p>
          
          {/* Button Group */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all w-full sm:w-auto"
              >
                <Home size={20} />
                Return Home
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black/60 backdrop-blur-sm border border-[#00a8ff]/30 text-white font-semibold rounded-xl hover:bg-[#00a8ff]/10 hover:border-[#00a8ff]/50 transition-all w-full sm:w-auto"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-[#00a8ff]/20"
                style={{
                  top: `${30 + i * 20}%`,
                  left: 0
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleX: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
          
          {/* Floating Particles */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 bg-[#00e5ff] rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
