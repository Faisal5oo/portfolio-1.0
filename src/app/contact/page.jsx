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
      <div className="min-h-screen flex items-center justify-center bg-transparent py-32 px-6 relative overflow-hidden">
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
              I’m always looking for interesting collaborations, remote opportunities, or just a chat about tech & design.<br/>Based in Karachi, Pakistan.
            </p>
            <div className="flex justify-center gap-4 mb-2">
              <a href="https://twitter.com/faisalharoon" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#00a8ff]/10 hover:bg-[#00e5ff]/15 p-3 transition-colors border border-[#00a8ff]/10 hover:border-[#00e5ff]/50 flex items-center text-[#00e5ff]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22.46 6c-.79.35-1.64.58-2.52.69.9-.54 1.59-1.4 1.91-2.42-.84.5-1.77.87-2.76 1.06A4.475 4.475 0 0015.5 4c-2.48 0-4.5 2.2-4.5 4.91 0 .38.04.76.12 1.12C7.7 9.86 5.17 8.56 3.4 6.49c-.41.75-.65 1.62-.65 2.54 0 1.76.85 3.31 2.15 4.23-.78-.02-1.5-.25-2.13-.61v.06c0 2.46 1.62 4.51 3.78 4.98-.39.11-.81.17-1.25.17-.3 0-.59-.03-.87-.08.6 1.99 2.36 3.44 4.44 3.48A9 9 0 012 20.65C4.16 22.17 6.82 23 9.74 23 15.5 23 20 17.73 20 12.27l-.01-.59A7.05 7.05 0 0024 5.02c-.63.29-1.31.5-2.03.69.73-.44 1.37-1.02 1.89-1.69z" fill="currentColor"/></svg>
              </a>
              <a href="https://instagram.com/faisalharoon" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#00a8ff]/10 hover:bg-[#00e5ff]/15 p-3 transition-colors border border-[#00a8ff]/10 hover:border-[#00e5ff]/50 flex items-center text-[#00e5ff]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#00a8ff]/10 hover:bg-[#00e5ff]/15 p-3 transition-colors border border-[#00a8ff]/10 hover:border-[#00e5ff]/50 flex items-center text-[#00e5ff]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M20.52 3.47A11.88 11.88 0 0012 1C6.49 1 2 5.49 2 11c0 2.04.54 3.94 1.57 5.64L1 23l6.6-2a11.37 11.37 0 004.4.9c5.51 0 10-4.49 10-10 0-2.85-1.14-5.52-3.2-7.53zm-8.52 17.1c-1.3 0-2.57-.21-3.77-.64l-.27-.1-3.91 1.17 1.12-3.78-.18-.27a8.9 8.9 0 01-1.37-4.81C3.14 6.82 7.1 3 12 3s8.87 3.82 8.87 8.48c0 4.67-4 8.49-8.87 8.49zm4.63-6.87c-.13-.05-.78-.38-1.14-.56-.31-.16-.53-.05-.71.12-.2.18-.33.35-.7.28-2.11-.43-3.53-2.42-3.67-2.54-.16-.18-.18-.37-.05-.54.09-.12.22-.3.33-.46.18-.27.09-.52-.02-.68-.1-.15-.66-1.62-.89-2.21-.14-.34-.28-.35-.42-.35-.1 0-.23-.02-.36-.02s-.33.05-.5.25a8.55 8.55 0 00-1.13 2.24c-.22.49-.44 1.36.05 2.24a9.13 9.13 0 002.84 3.17c.81.59 1.45.71 2 .56.3-.09.68-.42.87-.64.07-.08.13-.18.2-.18.1 0 .23.03.36.08.12.05.72.34.82.37.09.03.2.04.28-.09.12-.19.74-.88.8-.95.07-.08.14-.17.01-.22z" fill="currentColor"/></svg>
              </a>
            </div>
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
