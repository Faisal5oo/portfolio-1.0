"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { X, ExternalLink, Github, ShoppingCart, Brain, Container, BarChart3, Building2, Film } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "A scalable e-commerce solution built with MERN stack, featuring real-time inventory management and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: ShoppingCart,
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "AI Content Generator",
      category: "AI/ML",
      description: "Leveraging machine learning to generate creative content with natural language processing and deep learning models.",
      tech: ["Python", "TensorFlow", "OpenAI API", "Next.js"],
      icon: Brain,
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "DevOps Dashboard",
      category: "DevOps",
      description: "A comprehensive monitoring dashboard for containerized applications using Docker and Kubernetes.",
      tech: ["Kubernetes", "Docker", "React", "Prometheus"],
      icon: Container,
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      category: "Full-Stack",
      description: "Real-time analytics platform for social media metrics with interactive dashboards and data visualization.",
      tech: ["Next.js", "PostgreSQL", "Chart.js", "TypeScript"],
      icon: BarChart3,
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Microservices Architecture",
      category: "Backend",
      description: "Scalable microservices architecture with service mesh, API gateway, and distributed system patterns.",
      tech: ["Node.js", "Docker", "Kubernetes", "gRPC"],
      icon: Building2,
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Video Streaming Platform",
      category: "Full-Stack",
      description: "High-performance video streaming platform with adaptive bitrate streaming and real-time chat.",
      tech: ["Next.js", "WebRTC", "Node.js", "Redis"],
      icon: Film,
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                    <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-[#00e5ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded bg-gray-900 text-gray-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Link */}
                    <div className="flex items-center text-[#00e5ff] font-medium group-hover:gap-2 transition-all">
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
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
              
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              
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
              
              {/* Action Buttons */}
              <div className="flex gap-4">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutWrapper>
  );
}

