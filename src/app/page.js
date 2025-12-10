"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles, Zap, Video, Cpu, Code, Cloud, Target, Eye, Rocket, Layers, Camera, Server, Brain, LineChart } from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Particle effect
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => {
        // Random movement ranges per particle (avoid strictly diagonal by using independent ranges)
        const xSpread = 15 + Math.random() * 35; // 15 - 50 px
        const ySpread = 15 + Math.random() * 35; // 15 - 50 px
        const xDir = Math.random() > 0.5 ? 1 : -1;
        const yDir = Math.random() > 0.5 ? 1 : -1;
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          xKeyframes: [0, xDir * xSpread, xDir * -xSpread * 0.6, 0],
          yKeyframes: [0, yDir * -ySpread, yDir * ySpread * 0.5, 0],
          duration: 3.2 + Math.random() * 2.3
        };
      });
      setParticles(newParticles);
    };
    generateParticles();
  }, []);
  
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-[#00a8ff] opacity-20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                x: particle.xKeyframes,
                y: particle.yKeyframes,
                opacity: [0.12, 0.34, 0.18, 0.12],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Background */}
        <motion.div 
          className="absolute inset-0 grid-pattern opacity-20"
          style={{ y: heroBgY }}
        />

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#0066ff]/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Title Ellipse Glow Background */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-r from-[#00a8ff]/15 via-[#00e5ff]/10 to-[#00a8ff]/15 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[150px] sm:h-[200px] md:h-[300px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[250px] sm:w-[350px] md:w-[500px] h-[125px] sm:h-[175px] md:h-[250px] bg-[#00a8ff]/8 rounded-full blur-[100px]"></div>
        </div>

        {/* Cyan glow shadow near footer-left behind the main title */}
        <motion.div
          className="absolute bottom-8 left-0 sm:left-6 w-[200px] sm:w-[300px] md:w-[420px] h-[200px] sm:h-[300px] md:h-[420px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(closest-side, rgba(0,232,255,0.18), rgba(0,168,255,0.08), transparent)" }}
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <motion.span 
              className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 rounded-full bg-[#00a8ff]/10 backdrop-blur-sm text-[#00e5ff] text-xs sm:text-sm font-medium border border-[#00a8ff]/30"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 168, 255, 0.3)",
                  "0 0 30px rgba(0, 168, 255, 0.5)",
                  "0 0 20px rgba(0, 168, 255, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Welcome to My Digital World</span>
            </motion.span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight px-4"
          >
            <span className="text-white block mb-2">Faisal Haroon</span>
            <span className="gradient-text block text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Engineer, Learner, Creator</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Documenting my evolution in the era of AI. learning, building, and exploring what's next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold text-base sm:text-lg rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore My World
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00a8ff]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 sm:bottom-10 left-0 right-0 mx-auto flex flex-col items-center cursor-pointer w-32 sm:w-40"
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <span className="text-gray-400 text-xs sm:text-sm mb-2">Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="text-[#00e5ff]" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Intro Section */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Engineering Excellence",
                description: "Building scalable solutions with modern tech stack",
                icon: Zap
              },
              {
                title: "Creative Storytelling",
                description: "Crafting cinematic narratives that inspire",
                icon: Video
              },
              {
                title: "AI & Innovation",
                description: "Exploring the future of intelligent systems",
                icon: Cpu
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-900/30 to-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all group shadow-lg shadow-[#00a8ff]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[#00e5ff]" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            );
            })}
          </motion.div>
        </div>
      </section>

      {/* Scroll text highlights - animated underline on view */}
      <section className="bg-transparent py-12 sm:py-16 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          {[
            "Design for emotion. Engineer for resilience.",
            "Ship value, not just features.",
            "Tell the story behind the system."
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-6 relative inline-block px-2"
            >
              {line}
              <motion.span
                className="absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-[#00a8ff] via-[#00e5ff] to-transparent"
                initial={{ width: 0, opacity: 0.6 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.p>
          ))}
        </div>
      </section>

      {/* Storytelling & Content Creation Section */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[150px] sm:h-[200px] md:h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[125px] sm:h-[175px] md:h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-white">Documenting My </span>
              <span className="gradient-text">Tech Journey</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Through cinematic storytelling, I document the real journey of engineering — challenges, breakthroughs, and innovation moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video size={32} className="text-[#00e5ff]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#00e5ff] transition-colors">
                Cinematic Storytelling
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creating visual narratives that bring engineering challenges to life, making complex concepts accessible 
                through storytelling and cinematography.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={32} className="text-[#00e5ff]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#00e5ff] transition-colors">
                Technical Documentation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sharing real engineering experiences, from debugging sessions to architecture decisions, 
                documented through engaging video content on LinkedIn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights - continuous motion with enhanced neon glow - HIDDEN */}
      {/* <section className="bg-transparent py-24 px-6 relative overflow-visible hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="absolute -top-10 -left-0 sm:-left-10 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#00e5ff]/8 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-10 -right-0 sm:-right-10 w-[200px] sm:w-[300px] md:w-[420px] h-[200px] sm:h-[300px] md:h-[420px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 relative"
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-[720px] h-[120px] sm:h-[180px] md:h-[240px] rounded-full blur-[140px] pointer-events-none"
              style={{ background: "radial-gradient(closest-side, rgba(0,232,255,0.20), rgba(0,168,255,0.10), transparent)" }}
              animate={{ opacity: [0.18, 0.42, 0.18], scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-white">Highlights </span>
              <span className="gradient-text">in Motion</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-gray-300"
            >
              Engineering in flow — crisp visuals, smooth motion, and neon clarity.
            </motion.p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="flex gap-4 will-change-transform"
              animate={{ x: [0, -600, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 18px rgba(0, 229, 255, 0.16))" }}
            >
              {[
                "Cinematic", "DevOps", "AI/ML", "React", "Next.js", "Cloud", "Design", "Open Source", "Storytelling"
              ].concat([
                "Cinematic", "DevOps", "AI/ML", "React", "Next.js"
              ]).map((chip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.06 }}
                  className="px-5 py-3 rounded-xl border border-[#00a8ff]/40 bg-gradient-to-b from-gray-900/40 to-black/30 text-[#cdefff] backdrop-blur-md shadow-[0_0_22px_rgba(0,229,255,0.10)]"
                >
                  <span className="text-sm font-semibold tracking-wide">{chip}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Vision - 3D tilt with tron accents */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[520px] h-[250px] sm:h-[350px] md:h-[520px] bg-[#00a8ff]/10 rounded-full blur-[150px]"></div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-white">Vision </span>
              <span className="gradient-text">Forward</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">Building useful, clear, and visually polished digital experiences through engineering, design, and storytelling.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 perspective-[1200px]">
            {[{ Icon: Eye, title: "Clarity", desc: "Make complex things feel simple and easy to understand." }, { Icon: Rocket, title: "Velocity", desc: "Move fast, stay consistent, and improve with every iteration." }, { Icon: Layers, title: "Depth", desc: "Think deeply, build intentionally, and merge creativity with solid engineering." }].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ rotateX: -6, rotateY: 6, z: 10 }}
                className="relative bg-gradient-to-b from-gray-900/40 to-black/40 border border-[#00e5ff]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md transform-gpu will-change-transform"
              >
                <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#00e5ff]/70"></div>
                <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#00e5ff]/70"></div>
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#00e5ff]/70"></div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#00e5ff]/70"></div>

                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/15 to-[#00e5ff]/15 flex items-center justify-center mb-5">
                  <Icon size={30} className="text-[#00e5ff]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes - media placeholders with cinematic fades */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="absolute bottom-0 left-1/3 w-[250px] sm:w-[350px] md:w-[540px] h-[250px] sm:h-[350px] md:h-[540px] bg-[#00e5ff]/8 rounded-full blur-[150px]"></div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-white">Behind the </span>
              <span className="gradient-text">Scenes</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg px-4">Peeks into process — from scripting to deployment.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[Camera, Video, Sparkles].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#00a8ff]/30 bg-gradient-to-br from-gray-900/40 to-black/40"
              >
                <div className="absolute inset-0 bg-[url('/section-2.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.75, 0.95, 0.75] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backdropFilter: "blur(2px)" }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/20 border border-[#00e5ff]/40 flex items-center justify-center">
                    <Icon size={20} className="text-[#00e5ff]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Cinematic Workflow</p>
                    <p className="text-gray-300 text-sm">Shot planning • Edits • Grading</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps & AI/ML Learning - neon timeline */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-0 sm:left-10 w-[200px] sm:w-[300px] md:w-[420px] h-[200px] sm:h-[300px] md:h-[420px] bg-[#00a8ff]/10 rounded-full blur-[140px]"></div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-white">DevOps & </span>
              <span className="gradient-text">AI/ML Learning</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg px-4 max-w-3xl mx-auto">A transparent log of my current upskilling — moving from full-stack into DevOps, systems, and AI engineering. This is the first phase of my journey.</p>
          </motion.div>

          <div className="relative pl-4">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/60 via-[#00a8ff]/40 to-transparent"></div>
            {[{ Icon: Server, title: "Containerization & CI/CD", desc: "Docker, GitHub Actions, Amazon EC2 servers foundations for shipping production-ready apps." }, { Icon: Brain, title: "AI Systems", desc: "RAG, vector DBs, agents, orchestration and real-world experimentation." }].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16 py-4 sm:py-6"
              >
                <motion.div
                  className="absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#00e5ff]/20 border border-[#00e5ff]/40 flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 20px rgba(0,229,255,.18)", "0 0 32px rgba(0,229,255,.32)", "0 0 20px rgba(0,229,255,.18)"] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                >
                  <Icon size={20} className="text-[#00e5ff]" />
                </motion.div>
                <div className="bg-gradient-to-b from-gray-900/40 to-black/40 border border-[#00a8ff]/30 rounded-2xl p-4 sm:p-6">
                  <p className="text-white font-semibold text-base sm:text-lg mb-1">{title}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Expertise Section */}
      <section className="bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/3 right-1/3 w-[300px] sm:w-[450px] md:w-[700px] h-[150px] sm:h-[225px] md:h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[125px] sm:h-[175px] md:h-[250px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-white">Core </span>
              <span className="gradient-text">Expertise</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Code, title: "Full-Stack", desc: "End-to-end development", inProgress: false },
              { icon: Cloud, title: "DevOps", desc: "Cloud infrastructure", inProgress: true },
              { icon: Cpu, title: "AI/ML", desc: "Machine learning", inProgress: true },
              { icon: Video, title: "Content", desc: "Technical storytelling", inProgress: false }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-4 sm:p-6 rounded-xl border transition-all group shadow-lg ${
                    item.inProgress 
                      ? 'border-gray-700/50 hover:border-gray-600/50 shadow-gray-900/10' 
                      : 'border-[#00a8ff]/30 hover:border-[#00a8ff]/50 shadow-[#00a8ff]/10'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                    item.inProgress 
                      ? 'bg-gradient-to-br from-gray-800/20 to-gray-900/20' 
                      : 'bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10'
                  }`}>
                    <Icon size={28} className={item.inProgress ? "text-gray-500" : "text-[#00e5ff]"} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg group-hover:transition-colors ${
                      item.inProgress ? 'text-gray-400' : 'text-white group-hover:text-[#00e5ff]'
                    }`}>{item.title}</h3>
                    {item.inProgress && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse"></span>
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${item.inProgress ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                  {item.inProgress && (
                    <div className="mt-3 pt-3 border-t border-gray-800/50">
                      <p className="text-xs text-gray-600 italic">Currently learning</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
