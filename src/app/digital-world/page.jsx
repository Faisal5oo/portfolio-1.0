"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Play, ExternalLink, Video, Youtube, Instagram, Linkedin, TrendingUp, Eye } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function DigitalWorld() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState(null);
  const iframeRef = useRef(null);
  const DEFAULT_VIDEO_ID = "lILHEnz8fTk";
  // const extractVideoId = (url) => {
  //   try {
  //     const u = new URL(url);
  //     if ((u.hostname.includes("youtube.com") || u.hostname.includes("m.youtube.com")) && u.searchParams.get("v")) {
  //       return u.searchParams.get("v");
  //     }
  //     if (u.hostname === "youtu.be") {
  //       return u.pathname.replace("/", "");
  //     }
  //     return null;
  //   } catch (e) {
  //     return null;
  //   }
  // };

  const videos = [
    {
      id: 1,
      title: "AI is reshaping the world, and I don't want to watch this era from the sidelines.",
      description: "This moment marks a turning point the beginning of the journey I've committed to. This is the start of learning, building, and evolving with it. Episode 01 is here.",
      category: "AI Journey",
      views: "",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/posts/faisal-haroon500_artificialintelligence-techjourney-learninginpublic-activity-7396824437490167808-RPgU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADzUpOgBkDzeY3tTedbD366rXYoQyLvBqqY",
      thumbnail: Video
    }
  ];

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "#0077B5",
      link: "https://www.linkedin.com/in/faisal-haroon500/",
      description: "Professional network & tech content"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "#E4405F",
      link: "https://instagram.com/faisalharoon",
      description: "Visual tech journey & insights"
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      color: "#000000",
      link: "https://tiktok.com/@faisalharoon",
      description: "Short-form tech content & insights"
    }
  ];

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 px-6 overflow-x-hidden overflow-y-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        {/* Title Ellipse Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/6 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">My Digital </span>
              <span className="gradient-text">World</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mt-6"></div>
            <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
              Explore my tech journey through videos, projects, and content across platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="bg-transparent py-24 px-6 relative overflow-x-hidden overflow-y-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
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
              <span className="text-white">Connect With Me </span>
              <span className="gradient-text">Everywhere</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all shadow-lg shadow-[#00a8ff]/10"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <Icon size={32} className="text-[#00e5ff]" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2 text-center group-hover:text-[#00e5ff] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-300 text-sm text-center">{platform.description}</p>
                  <div className="mt-6 flex items-center justify-center text-[#00e5ff] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Visit Profile</span>
                    <ExternalLink size={14} className="ml-2" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section ref={sectionRef} className="bg-transparent py-24 px-6 relative overflow-x-hidden overflow-y-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 right-1/3 w-[700px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Videos</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => {
              const ThumbnailIcon = video.thumbnail;
              const PlatformIcon = video.platform === "LinkedIn" ? Linkedin : video.platform === "YouTube" ? Youtube : Instagram;
              
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-left w-full"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 overflow-hidden transition-all shadow-lg shadow-[#00a8ff]/10">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center overflow-hidden">
                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#00a8ff]/20 to-[#00e5ff]/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <ThumbnailIcon size={48} className="text-[#00e5ff]" />
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
                      </div>
                      
                      {/* Video Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 rounded-full bg-[#00a8ff]/10 text-[#00e5ff] text-xs font-medium">
                            {video.category}
                          </span>
                          {video.views && (
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <Eye size={14} />
                              <span>{video.views}</span>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#00e5ff] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                          {video.description}
                        </p>
                        
                        {/* Platform Badge */}
                        <div className="flex items-center gap-2 text-sm">
                          <PlatformIcon size={16} className="text-[#00e5ff]" />
                          <span className="text-gray-400">{video.platform}</span>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10">                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              try {
                if (iframeRef.current) {
                  iframeRef.current.contentWindow.postMessage(
                    JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
                    "*"
                  );
                }
              } catch {}
              setActiveVideo(null);
            }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                try {
                  if (iframeRef.current) {
                    iframeRef.current.contentWindow.postMessage(
                      JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
                      "*"
                    );
                  }
                } catch {}
                setActiveVideo(null);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "0 0 18px 0 rgba(0,229,255,0.35)",
                  "0 0 34px 2px rgba(0,229,255,0.55)",
                  "0 0 20px 0 rgba(0,229,255,0.35)"
                ]
              }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                boxShadow: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#00a8ff]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0&controls=1&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="absolute -inset-1 pointer-events-none bg-gradient-to-r from-[#00a8ff]/20 to-[#00e5ff]/20 blur-2xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutWrapper>
  );
}

