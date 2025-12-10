"use client";
import { useRef, useState, useEffect } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Code2, Database, Server, Brain, Cloud, Box, GitBranch, Container, FileCode, Palette, Zap } from "lucide-react";

export default function Skills() {
  const techStackRef = useRef(null);
  const skillsRef = useRef(null);
  const [techStackInView, setTechStackInView] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);

  useEffect(() => {
    // Observer for Tech Stack section
    const techStackObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTechStackInView(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    // Observer for Skills section
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (techStackRef.current) {
      techStackObserver.observe(techStackRef.current);
    }

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (techStackRef.current) {
        techStackObserver.unobserve(techStackRef.current);
      }
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", category: "expert" },
        { name: "CSS", category: "expert" },
        { name: "JavaScript", category: "expert" },
        { name: "React.js", category: "expert" },
        { name: "Redux Toolkit", category: "expert" },
        { name: "Material UI", category: "expert" },
        { name: "Next.js", category: "expert" },
        { name: "Tailwind CSS", category: "expert" },
        { name: "TypeScript", category: "learning" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", category: "expert" },
        { name: "Express.js", category: "expert" },
        { name: "MongoDB", category: "expert" },
        { name: "Python", category: "intermediate" },
        { name: "FastAPI", category: "intermediate" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", category: "expert" },
        { name: "Docker", category: "learning" },
        { name: "CI/CD", category: "learning" },
        { name: "Cloud Infrastructure", category: "learning" },
        { name: "Kubernetes", category: "learning" }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python for AI/ML", category: "learning" },
        { name: "Machine Learning Fundamentals", category: "learning" }
      ]
    },
    {
      title: "Agentic AI",
      skills: [
        { name: "Agentic AI Foundations", category: "learning" },
        { name: "OpenAI Agents SDK", category: "learning" },
        { name: "CrewAI", category: "learning" },
        { name: "LangGraph", category: "learning" },
        { name: "AutoGen", category: "learning" },
        { name: "MCP Architecture", category: "learning" },
        { name: "AI Tools & Autonomy Patterns", category: "learning" },
        { name: "LLM Orchestration", category: "learning" }
      ]
    }
  ];

  const techStack = [
    { name: "HTML", icon: FileCode, color: "#E34F26" },
    { name: "CSS", icon: Palette, color: "#1572B6" },
    { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { name: "React", icon: Zap, color: "#61DAFB" },
    { name: "Next.js", icon: Box, color: "#000000" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "Python", icon: Code2, color: "#3776AB" },
    { name: "Docker", icon: Container, color: "#2496ED" },
    { name: "Git", icon: GitBranch, color: "#F05032" }
  ];


  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 px-6 overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        {/* Title Ellipse Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/6 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
          <div
            className="opacity-0 animate-fade-in"
            style={{
              animation: "fadeIn 1s ease-out forwards"
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Engineering The Future, </span>
              <span className="gradient-text">One Skill At A Time</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mt-6"></div>
            <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
              Continuously learning and mastering technologies that power the next generation of applications
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section ref={techStackRef} className="bg-transparent py-24 px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${techStackInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Technology </span>
              <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-400 mt-4">Core technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all group cursor-pointer shadow-lg shadow-[#00a8ff]/10 hover:scale-105 hover:-translate-y-2 ${techStackInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{
                  transitionDelay: techStackInView ? `${index * 0.08}s` : '0s',
                  transitionDuration: '0.6s'
                }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-[#00e5ff]" />
                  </div>
                  <p className="text-white font-medium text-sm group-hover:text-[#00e5ff] transition-colors">
                    {tech.name}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Skills with Progress Bars */}
      <section ref={skillsRef} className="bg-transparent py-24 px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-gradient-to-br from-gray-900/20 to-black/20 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 shadow-lg shadow-[#00a8ff]/10 transition-all duration-700 ease-out ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: skillsInView ? `${categoryIndex * 0.15}s` : '0s'
                }}
              >
                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#00a8ff] to-[#00e5ff] rounded-full"></div>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const getCategoryConfig = (cat) => {
                      switch (cat) {
                        case "expert":
                          return {
                            label: "Expert",
                            width: "90%",
                            color: "from-[#00e5ff] to-[#00a8ff]",
                            textColor: "text-[#00e5ff]",
                            bgColor: "from-[#00a8ff]/20 to-[#00e5ff]/20"
                          };
                        case "intermediate":
                          return {
                            label: "Intermediate",
                            width: "65%",
                            color: "from-[#00a8ff] to-[#00e5ff]",
                            textColor: "text-[#00a8ff]",
                            bgColor: "from-[#00a8ff]/15 to-[#00e5ff]/15"
                          };
                        case "learning":
                          return {
                            label: "Currently Learning",
                            width: "30%",
                            color: "from-gray-600/60 to-gray-500/60",
                            textColor: "text-gray-500",
                            bgColor: "from-gray-800/20 to-gray-700/20",
                            isAnimated: true
                          };
                        default:
                          return {
                            label: "Learning",
                            width: "30%",
                            color: "from-gray-600/60 to-gray-500/60",
                            textColor: "text-gray-500",
                            bgColor: "from-gray-800/20 to-gray-700/20",
                            isAnimated: true
                          };
                      }
                    };
                    
                    const config = getCategoryConfig(skill.category);
                    
                    return (
                    <div
                      key={skillIndex}
                      className={`group transition-all duration-500 ease-out ${skillsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                      style={{
                        transitionDelay: skillsInView ? `${categoryIndex * 0.15 + skillIndex * 0.08}s` : '0s'
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className={`${config.textColor} font-semibold text-sm flex items-center gap-2`}>
                          {config.isAnimated && <span className="animate-pulse text-xs">●</span>}
                          {config.label}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800/30">
                        {config.isAnimated ? (
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-full">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00a8ff]/20 to-[#00e5ff]/20 rounded-full"
                              style={{
                                width: config.width,
                                animation: "shimmer 2s linear infinite"
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: "shimmer 2s linear infinite" }}></div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${config.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: skillsInView ? config.width : "0%",
                                boxShadow: "0 0 12px rgba(0, 168, 255, 0.5)"
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: "shimmer-slow 3s ease-in-out infinite" }}></div>
                            </div>
                            {/* Glow effect */}
                            <div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${config.color} rounded-full opacity-30 blur-sm transition-all duration-1000 ease-out`}
                              style={{
                                width: skillsInView ? config.width : "0%"
                              }}
                            ></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes shimmer-slow {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 3s ease-in-out infinite;
        }

        .animate-progress-shimmer {
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </LayoutWrapper>
  );
}
