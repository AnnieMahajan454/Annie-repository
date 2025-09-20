import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, User, Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsLoading(false), 1500);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-100 font-sans relative overflow-x-hidden">
      {/* Basic Navbar */}
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700/50" : "bg-transparent"
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-bold text-xl text-white">Annie Mahajan</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-6 md:px-10 pt-28">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-2xl"></div>
              <div className="absolute inset-3 bg-slate-900 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Annie Mahajan
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-8">
            Computer Science Student | AI/ML Enthusiast
          </p>
          
          <div className="flex justify-center gap-4 md:gap-6">
            {[
              { href: "mailto:annie.mahajan2023@vitstudent.ac.in", icon: Mail, label: "Email" },
              { href: "https://github.com/AnnieMahajan454", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/annie-mahajan-1v7i0v4u", icon: Linkedin, label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a 
                key={social.label}
                href={social.href} 
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-14 h-14 bg-slate-800/60 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/60 hover:border-blue-500/50 transition-all duration-300">
                  <social.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
