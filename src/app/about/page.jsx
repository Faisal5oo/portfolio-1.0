"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Code, Video, Brain, Rocket } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const timelineData = [
    {
      year: "2024",
      title: "DevOps & AI Journey Begins",
      description: "Diving deep into containerization, orchestration, and machine learning fundamentals",
      icon: Rocket
    },
    {
      year: "2023",
      title: "Full-Stack Development",
      description: "Mastering MERN stack and building scalable web applications",
      icon: Code
    },
    {
      year: "2022",
      title: "Content Creation Starts",
      description: "Exploring cinematic storytelling and creating engaging video content",
      icon: Video
    },
    {
      year: "2021",
      title: "Engineering Foundation",
      description: "Building the foundation in software engineering and problem-solving",
      icon: Brain
    }
  ];

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        {/* Title Ellipse Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/6 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">About </span>
              <span className="gradient-text">Me</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Split Screen Section */}
      <section ref={sectionRef} className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Premium Glowing Shadow - Animated */}
                <motion.div 
                  className="absolute -inset-8 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(closest-side, rgba(0,232,255,0.18), rgba(0,168,255,0.10), transparent)" }}
                  animate={{ opacity: [0.18, 0.42, 0.18], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Cinematic Frame with Tron Accent */}
                <motion.div 
                  className="relative bg-gradient-to-b from-gray-900/20 to-black/20 p-2 rounded-2xl border border-[#00e5ff]/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.03,
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 24px rgba(0,229,255,0.18)",
                      "0 0 46px rgba(0,229,255,0.28)",
                      "0 0 24px rgba(0,229,255,0.18)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.5
                    }
                  }}
                >
                  {/* Image Container - Rounded with layered borders */}
                  <div className="bg-transparent rounded-xl h-[600px] w-full overflow-hidden relative">
                    {/* Grid pattern visible behind image */}
                    <div className="absolute inset-0 grid-pattern opacity-20"></div>
                    {/* Inner subtle border */}
                    <div className="absolute inset-0 rounded-xl border border-[#00a8ff]/30 pointer-events-none"></div>
                    {/* Outer accent corners */}
                    <div className="pointer-events-none">
                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#00e5ff]/70 rounded-tl-xl"></div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#00e5ff]/70 rounded-tr-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#00e5ff]/70 rounded-bl-xl"></div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#00e5ff]/70 rounded-br-xl"></div>
                    </div>
                    
                <motion.img 
                  src="/Faisal-fornow.png" 
                  alt="Faisal Haroon" 
                  className="relative z-10 w-full h-full object-cover"
                  initial={{ scale: 1.15, opacity: 0 }}
                  whileInView={{ scale: 1.1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    scale: 1.15,
                    filter: "brightness(1.08) drop-shadow(0 0 20px rgba(0, 229, 255, 0.45))"
                  }}
                />
                    
                    {/* Subtle Overlay Glow Effect on Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00a8ff]/3 to-[#00e5ff]/5 pointer-events-none z-10"></div>
                  </div>
                  
                  {/* Soft scanline shimmer */}
                  <motion.div 
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    initial={{ opacity: 0.08 }}
                    animate={{ background: [
                      "linear-gradient(180deg, rgba(0,229,255,0.08) 0%, transparent 60%)",
                      "linear-gradient(180deg, rgba(0,229,255,0.12) 0%, transparent 60%)",
                      "linear-gradient(180deg, rgba(0,229,255,0.08) 0%, transparent 60%)"
                    ] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                
                {/* Floating Particles Around Image */}
                {[...Array(6)].map((_, i) => {
                  // Generate random positions based on index (deterministic but random-looking)
                  const randomLeft = 10 + (Math.sin(i * 2.7) * 0.5 + 0.5) * 80;
                  const randomTop = 10 + (Math.cos(i * 3.1) * 0.5 + 0.5) * 80;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#00e5ff] rounded-full"
                      style={{
                        left: `${randomLeft}%`,
                        top: `${randomTop}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.05, 0.12, 0.05],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 6 + i * 0.8,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Who I Am */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Who <span className="gradient-text">I Am</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm an engineer passionate about building the future through code, creativity, and innovation. 
                  My journey spans full-stack development, DevOps engineering, and AI/ML exploration, 
                  all while creating cinematic content that tells compelling stories about technology, engineering challenges, 
                  and the art of building scalable systems.
                </p>
              </div>

              {/* My Journey */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  My <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Starting from software engineering fundamentals, I've evolved into a multi-faceted creator. 
                  I build scalable applications, orchestrate cloud infrastructure, experiment with AI models, 
                  and document my tech journey through cinematic storytelling. My content combines technical depth 
                  with visual narratives, making complex engineering concepts accessible and inspiring on LinkedIn and beyond.
                </p>
              </div>

              {/* Vision & Purpose */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Vision & <span className="gradient-text">Purpose</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My mission is to bridge the gap between technical excellence and creative expression. 
                  Through cinematic storytelling, I document the real journey of engineering — the challenges, 
                  breakthroughs, and moments of innovation. I believe the future belongs to those who can merge code 
                  with storytelling, engineering with artistry, and innovation with human connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Creator Section */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/3 w-[650px] h-[325px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
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
              <span className="text-white">The Creative </span>
              <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Beyond code, I'm a content creator documenting the tech journey through cinematic storytelling and visual narratives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6">
                <Video size={32} className="text-[#00e5ff]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Cinematic Videos</h3>
              <p className="text-gray-300 leading-relaxed">
                Creating visually stunning content that combines technical insights with cinematic storytelling, 
                making engineering concepts engaging and accessible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00e5ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6">
                <Brain size={32} className="text-[#00e5ff]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Tech Storytelling</h3>
              <p className="text-gray-300 leading-relaxed">
                Documenting real engineering experiences — the problem-solving process, architecture decisions, 
                and breakthrough moments through compelling narratives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
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
              <span className="text-white">My </span>
              <span className="gradient-text">Journey</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00a8ff] to-[#00e5ff] transform md:-translate-x-1/2 opacity-30"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#00a8ff] rounded-full border-4 border-black transform md:-translate-x-1/2 z-10"></div>

                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10"
                      >
                        <div className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}>
                          <div className="p-2 rounded-lg bg-[#00a8ff]/10 text-[#00e5ff]">
                            <Icon size={20} />
                          </div>
                          <span className="text-[#00e5ff] font-bold">{item.year}</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
