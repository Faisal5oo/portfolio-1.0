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
    { name: "Resume", path: "/resume" },
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

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-black/50 border border-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} className="pointer-events-auto" /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with improved animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)', y: 30 }}
              animate={{ opacity: 1, backdropFilter: 'blur(18px)', y: 0 }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)', y: 60 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="md:hidden fixed top-0 left-0 w-full h-full z-[60] bg-black/70"
              style={{ boxShadow: '0 2px 42px 7px #00e5ff14' }}
            >
              {/* Close button inside overlay */}
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg border border-[#00a8ff]/40 bg-black/50 text-white"
              >
                <X size={22} />
              </button>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 60 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 220, damping: 24 }}
                className="rounded-3xl mt-28 mx-5 py-8 px-5 shadow-2xl shadow-[#00e5ff44] bg-gradient-to-b from-[#00141e]/90 to-black/90 border border-[#00a8ff]/40 ring-2 ring-[#00e5ff]/10 backdrop-blur-xl"
              >
                <motion.ul 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.12 }
                    }
                  }}
                  className="space-y-2"
                >
                  {navLinks.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={{
                        hidden: { y: 35, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      transition={{ type: 'spring', stiffness: 210, damping: 17 }}
                    >
                      <Link
                        href={item.path}
                        className={`block py-3 px-6 rounded-xl text-lg font-semibold shadow-md shadow-[#00e5ff14] transition-colors duration-200 ${
                          activeLink === item.path
                            ? "bg-[#00a8ff]/25 text-white"
                            : "text-gray-200 hover:bg-[#001122]/60 hover:text-[#00e5ff]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          {activeLink === item.path && <div className="w-1.5 h-5 bg-gradient-to-b from-[#00a8ff] to-[#00e5ff] rounded-full mr-2"></div>}
                          {item.name}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={{
                      hidden: { y: 25, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <Link href="/contact" className="block mt-5 py-3 px-6 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold text-lg text-center shadow-lg shadow-[#00e5ff21]">
                      Let's Connect
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
