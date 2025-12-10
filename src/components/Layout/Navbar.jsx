"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Digital World", path: "/digital-world" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar spacer - fixes the overlap issue with content */}
      <div className="h-24"></div>
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md py-3 shadow-xl shadow-[#00a8ff]/10 border-b border-[#00a8ff]/20"
            : "bg-black/60 py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo with animation - replaced FH with image */}
          <Link href="/" className="group flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.4, 1] }}
              whileHover={{ scale: 1.035 }}
              className="flex items-center space-x-2"
            >
              {/* Avatar with classic border + stronger outer shadow */}
              <motion.div
                className="relative h-10 w-10 rounded-full overflow-hidden border border-[#00a8ff]/40 shadow-[0_0_24px_rgba(0,168,255,0.45)]"
                whileHover={{ scale: 1.04 }}
              >
                <Image src="/Faisal-fornow.png" alt="Faisal" fill className="object-cover rounded-full aspect-square relative z-10 select-none" />
              </motion.div>
              {/* Animated Text */}
              <motion.span
                className="text-white font-bold text-lg font-orbitron ml-1 relative"
                initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.4, 1] }}
                whileHover={{ textShadow: "0 0 24px #00e5ff, 0 0 6px #00e5ff99", x: 2 }}
              >
                Faisal Haroon
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.path}
                    className={`relative px-2 md:px-2 lg:px-4 py-2 rounded-lg text-xs md:text-xs lg:text-sm font-medium transition-all duration-300 ${
                      activeLink === item.path
                        ? "text-white bg-[#00a8ff]/20"
                        : "text-gray-300 hover:text-white hover:bg-[#00a8ff]/10"
                    }`}
                  >
                    {item.name}
                    {activeLink === item.path && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              {/* CTA Button */}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="ml-2 md:ml-2 lg:ml-4 px-3 md:px-3 lg:px-5 py-2 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black rounded-lg text-xs md:text-xs lg:text-sm font-bold flex items-center group hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all">
                  <span>Let's Connect</span>
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Mobile Menu Button - Modern Tron Style */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 border border-[#00e5ff]/40 shadow-lg shadow-[#00e5ff]/20"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#00e5ff] pointer-events-auto" />
            ) : (
              <Menu size={24} className="text-[#00e5ff]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu - Modern Tron Inspired */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 w-full h-full z-[60] bg-black/90 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            >
              {/* Close button - Tron style */}
              <motion.button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute top-6 right-6 p-3 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#00e5ff]/20 border-2 border-[#00e5ff]/40 shadow-lg shadow-[#00e5ff]/30 z-10"
              >
                <X size={20} className="text-[#00e5ff]" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative mt-24 mx-4 py-8 px-6 rounded-3xl bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-[#00e5ff]/30 backdrop-blur-2xl shadow-2xl shadow-[#00e5ff]/20"
              >
                {/* Tron corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00e5ff]/60"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00e5ff]/60"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00e5ff]/60"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00e5ff]/60"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00a8ff]/20 via-[#00e5ff]/20 to-[#00a8ff]/20 rounded-3xl blur-xl opacity-50 -z-10"></div>
                <motion.ul 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  className="space-y-3 relative z-10"
                >
                  {navLinks.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={{
                        hidden: { x: -20, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={item.path}
                        className={`group relative block py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 ${
                          activeLink === item.path
                            ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#00e5ff]/20 text-white border-2 border-[#00e5ff]/50 shadow-lg shadow-[#00e5ff]/30"
                            : "text-gray-300 border-2 border-transparent hover:border-[#00e5ff]/30 hover:bg-[#00a8ff]/10 hover:text-[#00e5ff]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          {activeLink === item.path && (
                            <motion.div 
                              className="w-1.5 h-6 bg-gradient-to-b from-[#00a8ff] to-[#00e5ff] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                          )}
                          <span className="relative z-10">{item.name}</span>
                          {activeLink === item.path && (
                            <motion.div
                              className="ml-auto w-2 h-2 rounded-full bg-[#00e5ff]"
                              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </div>
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00a8ff]/0 via-[#00e5ff]/0 to-[#00a8ff]/0 group-hover:from-[#00a8ff]/10 group-hover:via-[#00e5ff]/10 group-hover:to-[#00a8ff]/10 transition-all duration-300 -z-10"></div>
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1 }
                    }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Link 
                      href="/contact" 
                      className="block mt-6 py-4 px-6 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold text-base text-center shadow-xl shadow-[#00e5ff]/40 hover:shadow-2xl hover:shadow-[#00e5ff]/50 transition-all relative overflow-hidden group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Let's Connect
                        <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00a8ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
