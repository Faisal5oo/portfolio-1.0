"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Code2, Database, Server, Brain, Cloud, Box } from "lucide-react";

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "TailwindCSS", level: 90 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "RESTful APIs", level: 85 }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 70 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 85 },
        { name: "Terraform", level: 0, inProgress: true },
        { name: "Jenkins", level: 0, inProgress: true }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 75 },
        { name: "AI/ML Concepts", level: 0, inProgress: true },
        { name: "Machine Learning", level: 0, inProgress: true }
      ]
    }
  ];

  const techStack = [
    { name: "JavaScript", icon: Code2, color: "#F7DF1E" },
    { name: "TypeScript", icon: Code2, color: "#3178C6" },
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Next.js", icon: Box, color: "#000000" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "Docker", icon: Box, color: "#2496ED" },
    { name: "Kubernetes", icon: Box, color: "#326CE5" },
    { name: "Python", icon: Code2, color: "#3776AB" },
    { name: "AWS", icon: Cloud, color: "#FF9900" }
  ];

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        {/* Title Ellipse Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/6 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Engineering The Future, </span>
              <span className="gradient-text">One Skill At A Time</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mt-6"></div>
            <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
              Continuously learning and mastering technologies that power the next generation of applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        {/* Ellipse Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[#00a8ff]/10 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[250px] bg-[#00e5ff]/8 rounded-full blur-[110px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Technology </span>
              <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all group cursor-pointer shadow-lg shadow-[#00a8ff]/10"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#00a8ff]/10 to-[#00e5ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-[#00e5ff]" />
                  </div>
                  <p className="text-white font-medium text-sm group-hover:text-[#00e5ff] transition-colors">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Skills with Progress Bars */}
      <section ref={sectionRef} className="bg-transparent py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-br from-gray-900/20 to-black/20 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 shadow-lg shadow-[#00a8ff]/10"
              >
                <h3 className="text-2xl font-bold mb-8 text-white">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.15 + skillIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        {skill.inProgress ? (
                          <span className="text-gray-500 text-xs font-medium">In Progress</span>
                        ) : (
                          <span className="text-[#00e5ff] font-bold">{skill.level}%</span>
                        )}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                        {skill.inProgress ? (
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-full">
                            <motion.div
                              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#00a8ff]/20 to-[#00e5ff]/20 rounded-full"
                              animate={{
                                x: ["-100%", "400%"]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </div>
                        ) : (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: categoryIndex * 0.15 + skillIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] rounded-full"
                            style={{
                              boxShadow: "0 0 10px rgba(0, 168, 255, 0.5)"
                            }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

