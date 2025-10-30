"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles, Zap, Video, Cpu, Code, Cloud, Target } from "lucide-react";

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
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);
  
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: particle.delay,
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00a8ff]/15 via-[#00e5ff]/10 to-[#00a8ff]/15 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[250px] bg-[#00a8ff]/8 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <motion.span 
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#00a8ff]/10 backdrop-blur-sm text-[#00e5ff] text-sm font-medium border border-[#00a8ff]/30"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 168, 255, 0.3)",
                  "0 0 30px rgba(0, 168, 255, 0.5)",
                  "0 0 20px rgba(0, 168, 255, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} />
              Welcome to My Digital World
            </motion.span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white block mb-2">Faisal Haroon</span>
            <span className="gradient-text block">Engineer. Creator. Visionary.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Merging Technology, Design, and AI to Build the Future
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
                className="group relative px-10 py-5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold text-lg rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore My World
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
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
            className="absolute bottom-10 left-0 right-0 mx-auto flex flex-col items-center cursor-pointer w-40"
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll to discover</span>
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
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
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
                className="bg-gradient-to-b from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all group shadow-lg shadow-[#00a8ff]/10"
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

      {/* Storytelling & Content Creation Section */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Documenting My </span>
              <span className="gradient-text">Tech Journey</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Through cinematic storytelling, I document the real journey of engineering — challenges, breakthroughs, and innovation moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Tech Expertise Section */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-[700px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Core </span>
              <span className="gradient-text">Expertise</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Full-Stack", desc: "End-to-end development" },
              { icon: Cloud, title: "DevOps", desc: "Cloud infrastructure" },
              { icon: Cpu, title: "AI/ML", desc: "Machine learning" },
              { icon: Video, title: "Content", desc: "Technical storytelling" }
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
                  className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all group shadow-lg shadow-[#00a8ff]/10"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-[#00e5ff]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00e5ff] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
