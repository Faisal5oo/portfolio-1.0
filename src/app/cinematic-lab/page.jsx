"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Play, ExternalLink, Video, Film, Settings, Cloud, Palette, Brain, BookOpen } from "lucide-react";

export default function CinematicLab() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const videos = [
    {
      id: 1,
      title: "The Future of AI",
      description: "Exploring how artificial intelligence is reshaping our world",
      icon: Film,
      category: "Technology",
      views: "12K",
      link: "#"
    },
    {
      id: 2,
      title: "Engineering Stories",
      description: "Behind the scenes of building scalable systems",
      icon: Settings,
      category: "Engineering",
      views: "8K",
      link: "#"
    },
    {
      id: 3,
      title: "DevOps Journey",
      description: "From code to cloud: A DevOps transformation story",
      icon: Cloud,
      category: "DevOps",
      views: "15K",
      link: "#"
    },
    {
      id: 4,
      title: "Creative Coding",
      description: "Where art meets technology in modern development",
      icon: Palette,
      category: "Creative",
      views: "10K",
      link: "#"
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      description: "Demystifying ML concepts for engineers",
      icon: Brain,
      category: "AI/ML",
      views: "20K",
      link: "#"
    },
    {
      id: 6,
      title: "The Art of Storytelling",
      description: "How to craft compelling narratives in content creation",
      icon: BookOpen,
      category: "Storytelling",
      views: "18K",
      link: "#"
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
        
        <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Video size={64} className="text-[#00e5ff]" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Cinematic </span>
              <span className="gradient-text">Lab</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mt-6"></div>
            <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
              Where storytelling meets visual excellence. Exploring narratives through cinematic content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Behind The Scenes Section */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Behind The </span>
              <span className="gradient-text">Scenes</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every story is crafted with precision, passion, and a deep understanding of visual narrative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section ref={sectionRef} className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/3 w-[650px] h-[325px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => {
              const Icon = video.icon;
              return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 overflow-hidden transition-all shadow-lg shadow-[#00a8ff]/10">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center overflow-hidden">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#00e5ff]/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Icon size={48} className="text-[#00e5ff]" />
                      </div>
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] flex items-center justify-center"
                        >
                          <Play size={24} className="text-black ml-1" />
                        </motion.div>
                      </div>
                      
                      {/* Holographic Reflection Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] duration-1000"></div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#00a8ff]/10 text-[#00e5ff] text-xs font-medium">
                          {video.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Video size={14} />
                          {video.views}
                        </span>
                      </div>
                      
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {video.description}
                      </p>
                      
                      {/* Watch Link */}
                      <div className="mt-4 flex items-center text-[#00e5ff] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Watch on LinkedIn</span>
                        <ExternalLink size={14} className="ml-2" />
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                  </div>
                </a>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-12 rounded-2xl border border-[#00a8ff]/30 shadow-lg shadow-[#00a8ff]/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Follow My </span>
              <span className="gradient-text">Storytelling Journey</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join me on LinkedIn for regular updates on engineering insights, AI exploration, and cinematic content.
            </p>
            <a
              href="https://www.linkedin.com/in/faisal-haroon500/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all"
            >
              <ExternalLink size={20} />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

