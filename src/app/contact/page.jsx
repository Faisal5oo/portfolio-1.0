"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle2, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <LayoutWrapper>
      <div className="min-h-screen flex items-center justify-center bg-transparent py-32 px-6 relative overflow-x-hidden overflow-y-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        {/* Title Ellipse Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00a8ff]/12 via-[#00e5ff]/8 to-[#00a8ff]/12 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-[100px]"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl relative z-10"
        >
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block py-2 px-4 rounded-full bg-[#00a8ff]/10 text-[#00e5ff] text-sm font-medium mb-4 border border-[#00a8ff]/30"
            >
              Let's Build Something Great Together
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get In </span>
              <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-5">
              I'm always open to meaningful collaborations, remote opportunities, or a conversation about engineering and growth.<br/>Based in Lahore, Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-8 rounded-2xl border border-[#00a8ff]/30 relative overflow-hidden shadow-lg shadow-[#00a8ff]/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a8ff]/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-12 pr-4 py-4 bg-black/60 text-white rounded-lg border ${errors.name ? 'border-red-500' : 'border-[#00a8ff]/30'} focus:border-[#00a8ff] focus:outline-none transition-colors focus:ring-2 focus:ring-[#00a8ff]/20`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full pl-12 pr-4 py-4 bg-black/60 text-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#00a8ff]/30'} focus:border-[#00a8ff] focus:outline-none transition-colors focus:ring-2 focus:ring-[#00a8ff]/20`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 flex items-start pointer-events-none text-gray-500">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project or idea..."
                        className={`w-full pl-12 pr-4 py-4 bg-black/60 text-white rounded-lg border ${errors.message ? 'border-red-500' : 'border-[#00a8ff]/30'} focus:border-[#00a8ff] focus:outline-none transition-colors focus:ring-2 focus:ring-[#00a8ff]/20 resize-none`}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    whileHover={{ scale: formStatus !== 'sending' ? 1.02 : 1 }}
                    whileTap={{ scale: formStatus !== 'sending' ? 0.98 : 1 }}
                    className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                      formStatus === 'sending'
                        ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#00a8ff] to-[#00e5ff] text-black hover:shadow-lg hover:shadow-[#00a8ff]/30'
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </motion.button>
                  
                  {/* Success Message */}
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="p-6 bg-gradient-to-r from-[#00a8ff]/20 to-[#00e5ff]/20 border border-[#00a8ff]/40 rounded-lg flex items-center gap-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-12 h-12 rounded-full bg-[#00e5ff]/20 flex items-center justify-center flex-shrink-0"
                        >
                          <CheckCircle2 size={24} className="text-[#00e5ff]" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">Message Sent!</h4>
                          <p className="text-gray-300 text-sm">I'll get back to you as soon as possible.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info & Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Email Card */}
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 hover:border-[#00a8ff]/50 transition-all group shadow-lg shadow-[#00a8ff]/10">
                <div className="p-3 rounded-lg bg-[#00a8ff]/10 inline-flex items-center justify-center mb-4 group-hover:bg-[#00a8ff]/20 transition-colors">
                  <Mail className="text-[#00e5ff]" size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <a 
                  href="mailto:faisal@example.com" 
                  className="text-[#00e5ff] hover:text-[#00e5ff] transition-colors text-sm flex items-center gap-1"
                >
                  Get in Touch
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Social Links Card */}
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md p-6 rounded-xl border border-[#00a8ff]/30 shadow-lg shadow-[#00a8ff]/10">
                <h3 className="text-white font-bold mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/faisal-haroon500/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/40 hover:bg-[#00a8ff]/10 border border-transparent hover:border-[#00a8ff]/30 transition-all group"
                  >
                    <Linkedin className="text-[#00e5ff] group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                    <ExternalLink size={14} className="ml-auto text-gray-500 group-hover:text-[#00e5ff] transition-colors" />
                  </a>
                  <a
                    href="https://github.com/Faisal5oo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/40 hover:bg-[#00a8ff]/10 border border-transparent hover:border-[#00a8ff]/30 transition-all group"
                  >
                    <Github className="text-[#00e5ff] group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                    <ExternalLink size={14} className="ml-auto text-gray-500 group-hover:text-[#00e5ff] transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
