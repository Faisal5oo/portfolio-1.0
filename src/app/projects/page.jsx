"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { X, ExternalLink, Github, ShoppingCart, Brain, Container, BarChart3, Building2, Film, Users, Briefcase, Globe, Image, Video, Calendar, Store, Tv } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Clokify",
      category: "Full-Stack",
      description: "Initiated and crafted the frontend from scratch for this Human Resource Management System, overcoming the challenges of being a novice. Significantly enhanced proficiency in Material UI within React.js and gained familiarity with Redux Toolkit for efficient state management. Demonstrated adaptability and problem-solving skills, highlighting a commitment to delivering high-quality and innovative solutions.",
      tech: ["React.js", "Material UI", "Redux Toolkit"],
      icon: Users,
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "POS E-commerce",
      category: "Full-Stack",
      description: "My role encompassed comprehensive frontend and backend development, presenting a valuable opportunity to master Node.js and Express.js. This hands-on experience also extended to database management, particularly with Postgres. The exposure to these technologies has significantly enriched my skill set, fostering a nuanced understanding of server-side development and enhancing my proficiency in creating robust and scalable applications.",
      tech: ["Node.js", "Express.js", "PostgreSQL"],
      icon: ShoppingCart,
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "BarterX Exchange",
      category: "Full-Stack",
      description: "Developed a full-stack web platform that allows users to trade or exchange items without cash by listing products, applying filters (price, location), and sending barter requests. Implemented real-time chat using Socket.io and built a notification system for transaction updates. Integrated JWT-based user authentication to ensure secure login and user management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
      icon: Briefcase,
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Green Entertainment",
      category: "Full-Stack",
      description: "Developed a complete CMS and public-facing website for Green Entertainment, a national TV channel. Designed and implemented the admin panel for content management. Built RESTful APIs and integrated them with the frontend for real-time content updates. Ensured responsive, user-friendly UI across all device sizes. Collaborated with cross-functional teams to align with brand and business requirements. Delivered a scalable, production-ready solution from scratch.",
      tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      icon: Tv,
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "hytGenx",
      category: "Frontend",
      description: "Independently built the official website for a software company. Designed a futuristic, AI-themed aesthetic reflecting the company's services. Ensured full mobile responsiveness and performance optimization. Handled complete end-to-end development and deployment.",
      tech: ["Next.js", "Tailwind CSS"],
      icon: Building2,
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "AI-Powered Social Media Campaign Tool",
      category: "AI/ML",
      description: "Built a full-stack AI tool for automating social media campaign generation and scheduling. Integrated Google OAuth and JWT authentication alongside email/password login. Collaborated with AI team to auto-generate titles, hashtags, images using AI agents. Enabled automatic scheduling and publishing to Facebook/Instagram.",
      tech: ["Next.js", "Tailwind CSS", "React Query", "Python", "FastAPI", "MongoDB"],
      icon: Brain,
      link: "#",
      github: "#"
    },
    {
      id: 7,
      title: "Realtor.Ai",
      category: "AI/ML",
      description: "Built a dashboard for real-time customer support handled by AI agents. Displayed customer data, AI chat transcripts, and call metadata in a clean UI. Enabled smooth integration of AI customer service agents with dashboard functions.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      icon: Brain,
      link: "#",
      github: "#"
    },
    {
      id: 8,
      title: "Client Demo Websites for AI Tools",
      category: "Frontend",
      description: "Developed 3 responsive demo websites for internal AI tools presentation. Integrated Calendly for seamless Google Meet booking. Played a key role in client onboarding and product pitching.",
      tech: ["Next.js", "Tailwind CSS"],
      icon: Globe,
      link: "#",
      github: "#"
    },
    {
      id: 9,
      title: "Siidi Fashion Muslim",
      category: "Full-Stack",
      description: "Led development of a feature-rich e-commerce platform for a U.S. fashion brand. Supported multilingual product management, custom order workflows, and real-time chat. Included dynamic pricing logic and analytics dashboard. Managed end-to-end system design, technical documentation, and deployment.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
      icon: Store,
      link: "#",
      github: "#"
    },
    {
      id: 10,
      title: "AI-Powered Image Editor",
      category: "AI/ML",
      description: "Enhanced an image editor with AI capabilities including upscaling, magic eraser, and cut-and-fill features. Contributed to new feature development and bug fixing for real-time image processing. Utilized Gemini AI models for intelligent visual editing.",
      tech: ["React.js", "Firebase Cloud Functions", "Gemini AI"],
      icon: Image,
      link: "#",
      github: "#"
    },
    {
      id: 11,
      title: "ClipsFlick",
      category: "Full-Stack",
      description: "Designed and implemented a platform for video creators to submit content for licensing. Integrated referral-based submission via unique employee-generated links. Enabled secure uploads of video, signatures, and agreements. Used Cloudflare R2 for scalable video storage and GoDaddy for domain management. Delivered complete system from architecture to deployment and cost optimization.",
      tech: ["Next.js", "Cloudflare R2"],
      icon: Video,
      link: "#",
      github: "#"
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
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            suppressHydrationWarning
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="gradient-text">Projects</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mt-6"></div>
            <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
              Showcasing innovative solutions that combine technical excellence with creative problem-solving
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[700px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[275px] bg-[#00e5ff]/8 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
              <motion.div
                key={project.id}
                initial={isMounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                whileInView={isMounted ? { opacity: 1, y: 0 } : false}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isMounted ? { y: -10 } : {}}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                suppressHydrationWarning
              >
                <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all h-full overflow-hidden shadow-lg shadow-[#00a8ff]/10">
                  {/* 3D Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Icon */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon size={40} className="text-[#00e5ff]" />
                  </div>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00a8ff]/10 text-[#00e5ff] text-xs font-medium mb-4 relative z-10">
                    {project.category}
                  </span>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white text-2xl font-bold group-hover:text-[#00e5ff] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.period && (
                      <p className="text-gray-500 text-sm mb-3 italic">{project.period}</p>
                    )}
                    <p className="text-gray-400 mb-4 line-clamp-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded bg-gray-900/50 text-gray-300 text-xs border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded bg-gray-900/50 text-gray-500 text-xs border border-gray-800">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    {/* View Project Link - Hidden for now */}
                    {/* <div className="flex items-center text-[#00e5ff] font-medium group-hover:gap-2 transition-all">
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div> */}
                  </div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl border border-[#00a8ff]/40 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#00a8ff]/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Details */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center mb-6">
                {(() => {
                  const Icon = selectedProject.icon;
                  return Icon ? <Icon size={40} className="text-[#00e5ff]" /> : null;
                })()}
              </div>
              
              <span className="inline-block px-3 py-1 rounded-full bg-[#00a8ff]/10 text-[#00e5ff] text-sm font-medium mb-4">
                {selectedProject.category}
              </span>
              
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h2>
              
              {selectedProject.period && (
                <p className="text-gray-500 text-sm mb-4 italic">{selectedProject.period}</p>
              )}
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded bg-[#00a8ff]/10 text-[#00e5ff] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons - Hidden for now */}
              {/* <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00a8ff]/30 transition-all"
                >
                  <ExternalLink size={18} />
                  View Live
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutWrapper>
  );
}

