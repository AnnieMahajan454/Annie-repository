import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail, Code, Home, Book, Briefcase, Award, User, Phone, MapPin, Send, ExternalLink, Star, Sparkles, Zap, Rocket, Target, Globe, Download, ArrowRight, CheckCircle, TrendingUp, Users, MessageSquare, Calendar, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  const darkMode = true; // Always dark mode
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = [
    { name: 'JavaScript/React', level: 90, category: 'Frontend' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'Java', level: 80, category: 'Programming' },
    { name: 'Machine Learning', level: 75, category: 'AI/ML' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'AWS Cloud', level: 70, category: 'Cloud' },
    { name: 'ROS', level: 75, category: 'Robotics' },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Professor, VIT Chennai",
      content: "Annie consistently demonstrates exceptional technical skills and leadership qualities. Her work on AI-driven projects shows remarkable innovation.",
      avatar: "SC"
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Developer, Tech Corp",
      content: "Working with Annie on the project management system was impressive. Her full-stack expertise and attention to detail are outstanding.",
      avatar: "RK"
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator, VIT",
      content: "Annie's organizational skills and technical expertise made her an invaluable team member during major college events.",
      avatar: "ER"
    }
  ];

  const FloatingIcons = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 animate-bounce">
        <Code className="w-6 h-6 text-purple-300 opacity-20" />
      </div>
      <div className="absolute top-40 right-16 animate-pulse">
        <Zap className="w-8 h-8 text-indigo-300 opacity-20" />
      </div>
      <div className="absolute top-60 left-1/4 animate-spin" style={{animationDuration: '8s'}}>
        <Star className="w-5 h-5 text-pink-300 opacity-20" />
      </div>
      <div className="absolute top-80 right-1/3 animate-bounce" style={{animationDelay: '2s'}}>
        <Sparkles className="w-7 h-7 text-cyan-300 opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse" style={{animationDelay: '1s'}}>
        <Rocket className="w-6 h-6 text-emerald-300 opacity-20" />
      </div>
      <div className="absolute bottom-60 right-20 animate-bounce" style={{animationDelay: '3s'}}>
        <Target className="w-5 h-5 text-orange-300 opacity-20" />
      </div>
    </div>
  );

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
      {/* Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-bold text-xl text-white">Annie Mahajan</h1>
        </div>
        
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className="text-slate-300 hover:text-blue-400 transition-all duration-300 capitalize font-medium hover:scale-105 flex items-center gap-2"
            >
              {section === 'home' && <Home size={16} />}
              {section === 'about' && <User size={16} />}
              {section === 'skills' && <Zap size={16} />}
              {section === 'projects' && <Code size={16} />}
              {section === 'experience' && <Briefcase size={16} />}
              {section === 'certificates' && <Award size={16} />}
              {section === 'contact' && <Mail size={16} />}
              {section}
            </a>
          ))}
        </div>
        
        <motion.button 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          Resume
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-6 md:px-10 pt-28 overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Professional Floating Elements */}
        <motion.div 
          className="absolute top-32 left-20 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-slate-800/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-700/30">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-12 h-12 bg-slate-800/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-700/30">
            <Star className="w-6 h-6 text-indigo-400" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-20 hidden md:block"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-14 h-14 bg-slate-800/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-700/30">
            <Target className="w-7 h-7 text-cyan-400" />
          </div>
        </motion.div>
        
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
          
          <motion.div 
            className="mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Computer Science Student',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-2xl text-blue-300 font-semibold"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <Book className="w-4 h-4" /> B.Tech CSE (AI & Robotics)
            </span>
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <TrendingUp className="w-4 h-4" /> CGPA: 8.34
            </span>
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4" /> Chennai, India
            </span>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-4 md:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { href: "mailto:mahajanannie411@gmail.com", icon: Mail, label: "Email" },
              { href: "https://github.com/AnnieMahajan454", icon: Github, label: "GitHub" },
              { href: "https://leetcode.com/u/AnnieMahajan/", icon: Code, label: "LeetCode" },
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
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-14 h-14 bg-slate-800/60 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/60 hover:border-blue-500/50 transition-all duration-300">
                  <social.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              Get In Touch
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-600/30 hover:border-blue-500/50 text-slate-200 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 md:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a dedicated Computer Science and Engineering student specializing in Artificial Intelligence & Robotics at VIT Chennai. My passion lies in building intelligent systems, developing full-stack web applications, and solving complex real-world problems through innovative technology solutions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                With a strong foundation in both theoretical concepts and practical applications, I constantly strive to bridge the gap between cutting-edge research and industry applications. My goal is to contribute to the advancement of AI and robotics while creating impactful solutions for businesses and society.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: "AI/ML Specialist", color: "blue" },
                  { label: "Full-Stack Developer", color: "green" },
                  { label: "Problem Solver", color: "purple" },
                  { label: "Team Leader", color: "orange" }
                ].map((tag, index) => (
                  <motion.span
                    key={tag.label}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
                      ${tag.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        tag.color === 'green' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        tag.color === 'purple' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        'bg-orange-500/20 text-orange-300 border border-orange-500/30'}
                    `}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {tag.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600/30">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mx-auto flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Projects Completed</span>
                        <span className="text-blue-400 font-bold">15+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Events Managed</span>
                        <span className="text-green-400 font-bold">300+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Technologies</span>
                        <span className="text-purple-400 font-bold">20+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">CGPA</span>
                        <span className="text-orange-400 font-bold">8.34</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-8 h-8 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="p-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Book className="w-8 h-8 text-purple-600" />
          Education
        </h2>
        <div className="space-y-6">
          <div className={`relative rounded-3xl p-8 ${darkMode ? "bg-gradient-to-r from-gray-800 to-purple-900" : "bg-gradient-to-r from-white to-purple-100"} shadow-xl border ${darkMode ? "border-purple-800" : "border-purple-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="absolute top-4 right-4">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">VIT Chennai</h3>
            <p className="text-lg mb-2">B.Tech CSE (AI & Robotics)</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                CGPA: 8.34
              </span>
              <span className="text-gray-600 dark:text-gray-400">2023–Present</span>
            </div>
          </div>
          <div className={`relative rounded-3xl p-8 ${darkMode ? "bg-gradient-to-r from-gray-800 to-indigo-900" : "bg-gradient-to-r from-white to-indigo-100"} shadow-xl border ${darkMode ? "border-indigo-800" : "border-indigo-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="absolute top-4 right-4">
              <Award className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Presentation Convent Sr Sec School, Jammu</h3>
            <p className="text-lg mb-2">PCM with English</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                90%
              </span>
              <span className="text-gray-600 dark:text-gray-400">2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative p-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Rocket className="w-8 h-8 text-purple-600" />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`group relative rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-purple-900" : "bg-gradient-to-br from-white to-purple-50"} shadow-xl border ${darkMode ? "border-purple-800" : "border-purple-200"} transform hover:scale-105 hover:-rotate-1 transition-all duration-500`}>
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
              <Zap className="w-8 h-8 text-purple-500" />
            </div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple-700 dark:text-purple-300">Smart Construction Planner</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>AI-driven tool optimizing construction using pedestrian flow and geospatial data.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                AI/ML
              </span>
              <ExternalLink className="w-5 h-5 text-purple-500 group-hover:text-purple-700 transition-colors" />
            </div>
          </div>
          
          <div className={`group relative rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-green-900" : "bg-gradient-to-br from-white to-green-50"} shadow-xl border ${darkMode ? "border-green-800" : "border-green-200"} transform hover:scale-105 hover:rotate-1 transition-all duration-500`}>
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
              <Globe className="w-8 h-8 text-green-500" />
            </div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-300">Project Management System</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Full-stack website with authentication, real-time updates, and collaboration tools.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                MERN
              </span>
              <ExternalLink className="w-5 h-5 text-green-500 group-hover:text-green-700 transition-colors" />
            </div>
          </div>
          
          <div className={`group relative rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-orange-900" : "bg-gradient-to-br from-white to-orange-50"} shadow-xl border ${darkMode ? "border-orange-800" : "border-orange-200"} transform hover:scale-105 hover:-rotate-1 transition-all duration-500`}>
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
              <Rocket className="w-8 h-8 text-orange-500" />
            </div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">Campus Navigation Robot</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>ROS-based robot with mapping, obstacle avoidance, and location tracking.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                Robotics
              </span>
              <ExternalLink className="w-5 h-5 text-orange-500 group-hover:text-orange-700 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-200 mb-8">Skills & Proficiency</h3>
              {skillsData.map((skill, index) => {
                const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
                return (
                  <div key={skill.name} ref={ref} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="text-xs text-slate-400">{skill.category}</div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Skills Categories */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  category: "Frontend",
                  icon: Globe,
                  skills: ["React.js", "HTML5/CSS3", "JavaScript", "Tailwind CSS"],
                  color: "from-green-500 to-emerald-600"
                },
                {
                  category: "Backend",
                  icon: Code,
                  skills: ["Node.js", "Python", "Java", "MySQL"],
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  category: "AI/ML",
                  icon: Zap,
                  skills: ["Machine Learning", "Data Analysis", "TensorFlow", "Scikit-learn"],
                  color: "from-purple-500 to-violet-600"
                },
                {
                  category: "Tools",
                  icon: Target,
                  skills: ["Git/GitHub", "VS Code", "AWS", "Docker"],
                  color: "from-orange-500 to-red-600"
                }
              ].map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/60 rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-200 mb-3">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skill} className="text-sm text-slate-400 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-blue-400" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experience" className="relative py-20 px-6 md:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience & Timeline
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Experience Item */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-slate-800 shadow-xl z-10">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-slate-800/60 rounded-2xl p-8 flex-1 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-300 mb-2">Operations Manager</h3>
                      <p className="text-lg text-slate-300 font-medium">Event Managers Club, VIT Chennai</p>
                      <p className="text-sm text-slate-400 mt-1">2024 - Present</p>
                    </div>
                    <div className="text-right">
                      <Calendar className="w-6 h-6 text-blue-400 mb-2" />
                      <p className="text-sm text-slate-400">Current Role</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Successfully organized and managed 300+ events including major college festivals like TechnoVIT'24 and Vibrance'25. 
                    Responsible for venue coordination, team operations, and large-scale event logistics management. 
                    Led cross-functional teams and developed efficient operational processes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Event Management', 'Team Coordination', 'Project Planning', 'Operations'].map((skill, index) => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Education Item */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-slate-800 shadow-xl z-10">
                  <Book className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-slate-800/60 rounded-2xl p-8 flex-1 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-2">B.Tech CSE (AI & Robotics)</h3>
                      <p className="text-lg text-slate-300 font-medium">VIT Chennai</p>
                      <p className="text-sm text-slate-400 mt-1">2023 - 2027</p>
                    </div>
                    <div className="text-right">
                      <TrendingUp className="w-6 h-6 text-purple-400 mb-2" />
                      <p className="text-sm text-slate-400">CGPA: 8.34</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Pursuing advanced coursework in Artificial Intelligence, Machine Learning, Robotics, and Software Engineering. 
                    Actively involved in research projects and technical clubs. Strong academic performance with focus on practical applications 
                    of AI/ML technologies.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Artificial Intelligence', 'Machine Learning', 'Robotics', 'Data Structures', 'Software Engineering'].map((subject, index) => (
                      <span key={subject} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* School Item */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-slate-800 shadow-xl z-10">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div className="bg-slate-800/60 rounded-2xl p-8 flex-1 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-300 mb-2">Senior Secondary Education</h3>
                      <p className="text-lg text-slate-300 font-medium">Presentation Convent Sr Sec School, Jammu</p>
                      <p className="text-sm text-slate-400 mt-1">2021 - 2023</p>
                    </div>
                    <div className="text-right">
                      <Star className="w-6 h-6 text-green-400 mb-2" />
                      <p className="text-sm text-slate-400">90% Grade</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) and English. 
                    Achieved excellent academic performance with 90% overall grade. Built strong foundation in mathematical 
                    and scientific principles essential for engineering studies.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Physics', 'Chemistry', 'Mathematics', 'English', 'Academic Excellence'].map((subject, index) => (
                      <span key={subject} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Others Say
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/60 rounded-2xl p-8 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center text-blue-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">Verified Review</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="p-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Award className="w-8 h-8 text-purple-600" />
          Certificates & Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-green-900" : "bg-gradient-to-br from-white to-green-50"} shadow-xl border ${darkMode ? "border-green-800" : "border-green-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Full Stack Web Development</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>Ethnus</p>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">2025</span>
              </div>
            </div>
          </div>
          
          <div className={`rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-orange-900" : "bg-gradient-to-br from-white to-orange-50"} shadow-xl border ${darkMode ? "border-orange-800" : "border-orange-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-2">AWS Certified Cloud Practitioner</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>Amazon Web Services</p>
                <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">2025</span>
              </div>
            </div>
          </div>
          
          <div className={`rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-blue-900" : "bg-gradient-to-br from-white to-blue-50"} shadow-xl border ${darkMode ? "border-blue-800" : "border-blue-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Python, C & C++</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>IIT Bombay</p>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2024</span>
              </div>
            </div>
          </div>
          
          <div className={`rounded-3xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-purple-900" : "bg-gradient-to-br from-white to-purple-50"} shadow-xl border ${darkMode ? "border-purple-800" : "border-purple-200"} transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Core Committee Certificate</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-1`}>Event Managers Club</p>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">2024–2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative p-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Send className="w-8 h-8 text-purple-600" />
          Let's Connect!
        </h2>
        
        <div className={`relative rounded-3xl p-12 ${darkMode ? "bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900" : "bg-gradient-to-br from-white via-purple-50 to-indigo-50"} shadow-2xl border ${darkMode ? "border-purple-800" : "border-purple-200"} overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">
                Ready to create something amazing together?
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm always excited to discuss new opportunities, innovative projects, or just have a chat about technology and creativity. Let's connect and explore how we can collaborate!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:mahajanannie411@gmail.com" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">
                      mahajanannie411@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Let's Talk</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Available for calls and meetings</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Heart className="w-16 h-16 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <a href="https://github.com/AnnieMahajan454" className="group flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-2xl transition-all duration-300 hover:scale-105">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/annie-mahajan-1v7i0v4u" className="group flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a href="https://leetcode.com/u/AnnieMahajan/" className="group flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white rounded-2xl transition-all duration-300 hover:scale-105">
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">LeetCode</span>
                </a>
                
                <a href="mailto:mahajanannie411@gmail.com" className="group flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-2xl transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`p-6 text-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <p>© 2025 Annie Mahajan. All rights reserved.</p>
      </footer>
    </div>
  );
}