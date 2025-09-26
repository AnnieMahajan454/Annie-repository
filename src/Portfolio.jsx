import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  User, 
  Briefcase, 
  Award, 
  Phone, 
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Home,
  Book,
  TrendingUp,
  Users,
  Target,
  Calendar,
  Star,
  Rocket,
  Zap,
  Globe,
  Database,
  CheckCircle,
  Server,
  Cpu,
  Cloud,
  GraduationCap,
  Building,
  Send,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

// Portfolio with animations and updated certifications - v2.2 - Netlify deployment trigger
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Generate random positions for background elements
  const backgroundStars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.15 + 0.05,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 25
  }));

  const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.08 + 0.02,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 20
  }));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 font-sans relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Moving Stars */}
        {backgroundStars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              transform: `scale(${star.size})`,
            }}
          >
            <div 
              className="w-full h-full bg-blue-400 rounded-full"
              style={{
                animation: `twinkle ${star.duration}s ease-in-out infinite ${star.delay}s`
              }}
            />
          </div>
        ))}
        
        {/* Floating Particles */}
        {floatingParticles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`
            }}
          />
        ))}
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.008]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="font-bold text-xl text-white">Annie Mahajan</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'skills', label: 'Skills', icon: Award },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800 ${
                      activeSection === item.id ? 'text-blue-400 bg-slate-800' : 'text-slate-300'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
            
            {/* Resume Button */}
            <a 
              href="https://drive.google.com/file/d/1jj0VzLt90X9nLzR60RM8H_GQ5UG9nkmR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download size={16} />
              Resume
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-700/50 py-4">
              <div className="flex flex-col gap-2">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'about', label: 'About', icon: User },
                  { id: 'projects', label: 'Projects', icon: Code },
                  { id: 'skills', label: 'Skills', icon: Award },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button 
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-slate-800 transition-colors text-slate-300"
                    >
                      <Icon size={20} />
                      {item.label}
                    </button>
                  );
                })}
                <a 
                  href="https://drive.google.com/file/d/1jj0VzLt90X9nLzR60RM8H_GQ5UG9nkmR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  <Download size={20} />
                  View Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-3 bg-slate-800 rounded-full flex items-center justify-center border-4 border-blue-500/20">
              <User className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Annie Mahajan
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-8">
            Full-Stack Developer & AI/ML Engineer
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base">
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <Book className="w-4 h-4" /> B.Tech CSE (AI & Robotics)
            </span>
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <Award className="w-4 h-4" /> CGPA: 8.34
            </span>
            <span className="px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm border border-slate-600/30 flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4" /> Chennai, India
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { href: "mailto:mahajanannie411@gmail.com", icon: Mail, label: "Email", color: "purple" },
              { href: "https://github.com/AnnieMahajan454", icon: Github, label: "GitHub", color: "gray" },
              { href: "https://leetcode.com/u/AnnieMahajan/", icon: Code, label: "LeetCode", color: "orange" },
              { href: "https://www.linkedin.com/in/annie-mahajan-1v7i0v4u", icon: Linkedin, label: "LinkedIn", color: "blue" }
            ].map((social) => {
              const Icon = social.icon;
              const colorClasses = {
                purple: 'bg-purple-600 hover:bg-purple-700',
                gray: 'bg-slate-800 hover:bg-slate-700',
                orange: 'bg-orange-600 hover:bg-orange-700',
                blue: 'bg-blue-600 hover:bg-blue-700'
              };
              
              return (
                <a 
                  key={social.label}
                  href={social.href} 
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-14 h-14 ${colorClasses[social.color]} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group`}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-600/30 hover:border-blue-500/50 text-slate-200 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 justify-center backdrop-blur-sm"
            >
              <Code className="w-5 h-5" />
              View My Work
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-400 text-lg">Passionate about creating intelligent solutions and building the future</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I am a dedicated Computer Science and Engineering student specializing in 
                  <span className="text-blue-400 font-semibold"> Artificial Intelligence & Robotics </span>
                  at VIT Chennai. My passion lies in building intelligent systems, developing 
                  full-stack web applications, and solving complex real-world problems through 
                  innovative technology solutions.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  With a strong foundation in both theoretical concepts and practical applications, 
                  I constantly strive to bridge the gap between cutting-edge research and industry 
                  applications. My goal is to contribute to the advancement of AI and robotics while 
                  creating impactful solutions for businesses and society.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  As an Operations Manager at the Event Managers Club, I've successfully organized 
                  and managed 300+ events, demonstrating my leadership skills and ability to handle 
                  complex logistics. Additionally, I have extensive experience in data analysis, 
                  statistical modeling, and extracting actionable insights from complex datasets 
                  to drive decision-making and optimize performance.
                </p>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: "AI/ML Specialist", color: "blue" },
                  { label: "Full-Stack Developer", color: "green" },
                  { label: "Data Analyst", color: "cyan" },
                  { label: "Problem Solver", color: "purple" },
                  { label: "Team Leader", color: "orange" }
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
                      ${tag.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        tag.color === 'green' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        tag.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                        tag.color === 'purple' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        'bg-orange-500/20 text-orange-300 border border-orange-500/30'}
                    `}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600/30">
                  <div className="text-center space-y-6">
                    {/* Profile Image */}
                    <div className="w-32 h-32 mx-auto mb-6 relative group">
                      <div className="w-full h-full rounded-2xl border-4 border-slate-600/30 shadow-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-600/20">
                        <img 
                          src="/annie-photo.jpg" 
                          alt="Annie Mahajan"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center" style={{display: 'none'}}>
                          <div className="text-center">
                            <User className="w-16 h-16 text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-xs text-slate-400 font-medium">Annie</div>
                            <div className="text-xs text-slate-500">Mahajan</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 flex items-center gap-2 text-sm">
                          <Code className="w-4 h-4" />
                          Projects Completed
                        </span>
                        <span className="text-blue-400 font-bold text-base">15+</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          Events Managed
                        </span>
                        <span className="text-green-400 font-bold text-base">300+</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4" />
                          Technologies
                        </span>
                        <span className="text-purple-400 font-bold text-base">20+</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4" />
                          CGPA
                        </span>
                        <span className="text-orange-400 font-bold text-base">8.34</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative element */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* What I Do Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  description: "Building end-to-end web applications using modern technologies like React, Node.js, and cloud platforms.",
                  color: "blue"
                },
                {
                  icon: Target,
                  title: "AI/ML Solutions",
                  description: "Developing intelligent systems and machine learning models to solve complex real-world problems.",
                  color: "purple"
                },
                {
                  icon: TrendingUp,
                  title: "Data Analysis",
                  description: "Extracting actionable insights from complex datasets, statistical modeling, and data visualization for informed decision-making.",
                  color: "cyan"
                },
                {
                  icon: Users,
                  title: "Project Management",
                  description: "Leading teams and managing large-scale events and projects with focus on efficiency and results.",
                  color: "green"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                const colorClasses = {
                  blue: 'from-blue-500 to-indigo-600',
                  purple: 'from-purple-500 to-violet-600',
                  cyan: 'from-cyan-500 to-teal-600',
                  green: 'from-green-500 to-emerald-600'
                };
                
                return (
                  <div key={index} className="bg-slate-800/60 rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">A showcase of my technical expertise and problem-solving abilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Construction Planner */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 shadow-xl border border-purple-800/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/Smart-Construction-Planner', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors">
                  Smart Construction Planner
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  AI-driven tool optimizing construction projects using pedestrian flow analysis 
                  and geospatial data for intelligent urban planning and resource allocation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['AI/ML', 'Python', 'Geospatial Data', 'Urban Planning'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <span className="text-purple-400 text-sm font-medium">View Project</span>
              </div>
              
              <div className="mt-4 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
            
            {/* Project Management System */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-green-900 rounded-2xl p-8 shadow-xl border border-green-800/30 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/MERN-Full-Stack', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-green-300 group-hover:text-green-200 transition-colors">
                  Project Management System
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Full-stack MERN application with user authentication, real-time updates, 
                  and collaboration tools for efficient team and project management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                </div>
                <span className="text-green-400 text-sm font-medium">View Project</span>
              </div>
              
              <div className="mt-4 text-sm text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
            
            {/* Financial Portfolio Tracker */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 shadow-xl border border-blue-800/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/Financial-Portfolio-Tracker', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-300 group-hover:text-blue-200 transition-colors">
                  Financial Portfolio Tracker
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Advanced financial tracking application with real-time market data integration, 
                  portfolio analytics, and comprehensive investment insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'API Integration', 'Data Analytics', 'FinTech'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <span className="text-blue-400 text-sm font-medium">View Project</span>
              </div>
              
              <div className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
            
            {/* Data Structures & Algorithms */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-orange-900 rounded-2xl p-8 shadow-xl border border-orange-800/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/DSA-Practice', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <Code className="w-8 h-8 text-orange-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-orange-300 group-hover:text-orange-200 transition-colors">
                  DSA Problem Solutions
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Comprehensive collection of optimized solutions to data structures and 
                  algorithms problems from LeetCode and competitive programming platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Java', 'Python', 'Algorithms', 'Problem Solving'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </div>
                <span className="text-orange-400 text-sm font-medium">View Solutions</span>
              </div>
              
              <div className="mt-4 text-sm text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
            
            {/* Machine Learning Projects */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-pink-900 rounded-2xl p-8 shadow-xl border border-pink-800/30 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/ML-Model-Collection', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <Rocket className="w-8 h-8 text-pink-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-pink-300 group-hover:text-pink-200 transition-colors">
                  ML Model Collection
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Collection of machine learning models and experiments including classification, 
                  regression, and neural network implementations with real-world datasets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'TensorFlow', 'Scikit-learn', 'Data Science'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" />
                </div>
                <span className="text-pink-400 text-sm font-medium">View Models</span>
              </div>
              
              <div className="mt-4 text-sm text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
            
            {/* Web Development Portfolio */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-indigo-900 rounded-2xl p-8 shadow-xl border border-indigo-800/30 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                 onClick={() => window.open('https://github.com/AnnieMahajan454/project_management_tool-1', '_blank')}>
              {/* Background Decoration */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                <Globe className="w-8 h-8 text-indigo-400" />
              </div>
              
              {/* Project Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              {/* Project Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-indigo-300 group-hover:text-indigo-200 transition-colors">
                  Web Development Projects
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Collection of responsive web applications and frontend projects showcasing 
                  modern web technologies and user interface design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['HTML/CSS', 'JavaScript', 'React', 'Responsive Design'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <span className="text-indigo-400 text-sm font-medium">View Projects</span>
              </div>
              
              <div className="mt-4 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view on GitHub →
              </div>
            </div>
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/AnnieMahajan454" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-slate-400 text-lg">My expertise across different technologies and programming languages</p>
          </div>
          
          {/* Professional Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                icon: Globe,
                skills: [
                  { name: "React.js", level: "Expert" },
                  { name: "JavaScript (ES6+)", level: "Advanced" },
                  { name: "HTML5/CSS3", level: "Expert" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "Responsive Design", level: "Expert" }
                ],
                color: "from-blue-500 to-indigo-600",
                bgColor: "from-blue-900/20 to-indigo-900/20",
                borderColor: "border-blue-500/30 hover:border-blue-400/50"
              },
              {
                category: "Backend & Database",
                icon: Server,
                skills: [
                  { name: "Node.js", level: "Advanced" },
                  { name: "Express.js", level: "Advanced" },
                  { name: "Python Flask", level: "Intermediate" },
                  { name: "MySQL", level: "Advanced" },
                  { name: "MongoDB", level: "Intermediate" }
                ],
                color: "from-green-500 to-emerald-600",
                bgColor: "from-green-900/20 to-emerald-900/20",
                borderColor: "border-green-500/30 hover:border-green-400/50"
              },
              {
                category: "AI/ML & Data Science",
                icon: Cpu,
                skills: [
                  { name: "Machine Learning", level: "Advanced" },
                  { name: "Data Analysis", level: "Expert" },
                  { name: "Python (NumPy, Pandas)", level: "Advanced" },
                  { name: "TensorFlow", level: "Intermediate" },
                  { name: "Statistical Analysis", level: "Advanced" }
                ],
                color: "from-purple-500 to-violet-600",
                bgColor: "from-purple-900/20 to-violet-900/20",
                borderColor: "border-purple-500/30 hover:border-purple-400/50"
              },
              {
                category: "Programming Languages",
                icon: Code,
                skills: [
                  { name: "Python", level: "Expert" },
                  { name: "JavaScript", level: "Expert" },
                  { name: "Java", level: "Advanced" },
                  { name: "C/C++", level: "Intermediate" },
                  { name: "SQL", level: "Advanced" }
                ],
                color: "from-orange-500 to-red-600",
                bgColor: "from-orange-900/20 to-red-900/20",
                borderColor: "border-orange-500/30 hover:border-orange-400/50"
              },
              {
                category: "Tools & Cloud Technologies",
                icon: Cloud,
                skills: [
                  { name: "Git/GitHub", level: "Expert" },
                  { name: "AWS", level: "Intermediate" },
                  { name: "Docker", level: "Intermediate" },
                  { name: "VS Code", level: "Expert" },
                  { name: "Postman", level: "Advanced" }
                ],
                color: "from-cyan-500 to-blue-600",
                bgColor: "from-cyan-900/20 to-blue-900/20",
                borderColor: "border-cyan-500/30 hover:border-cyan-400/50"
              },
              {
                category: "Data Analysis & Visualization",
                icon: TrendingUp,
                skills: [
                  { name: "Statistical Modeling", level: "Advanced" },
                  { name: "Data Visualization", level: "Expert" },
                  { name: "Excel/Sheets", level: "Expert" },
                  { name: "Jupyter Notebooks", level: "Advanced" },
                  { name: "Research & Analytics", level: "Expert" }
                ],
                color: "from-pink-500 to-rose-600",
                bgColor: "from-pink-900/20 to-rose-900/20",
                borderColor: "border-pink-500/30 hover:border-pink-400/50"
              }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.category}
                  className={`bg-gradient-to-br from-slate-800 ${category.bgColor} rounded-3xl p-8 border ${category.borderColor} transition-all duration-500 hover:transform hover:scale-105 group shadow-xl`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">{category.category}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const levelColors = {
                        "Expert": "bg-green-500/20 text-green-300 border-green-500/40",
                        "Advanced": "bg-blue-500/20 text-blue-300 border-blue-500/40",
                        "Intermediate": "bg-yellow-500/20 text-yellow-300 border-yellow-500/40"
                      };
                      
                      return (
                        <div key={skillIndex} className="flex items-center justify-between group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-slate-300 transition-colors"></div>
                            <span className="text-slate-300 group-hover:text-slate-200 transition-colors font-medium">{skill.name}</span>
                          </div>
                          <span className={`px-3 py-1 text-xs rounded-full border ${levelColors[skill.level]} font-semibold`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Skills & Interests */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Additional Skills & Interests</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Leadership</h4>
                <p className="text-slate-400">Event management, team coordination, and operations management with 300+ events organized</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Problem Solving</h4>
                <p className="text-slate-400">Competitive programming, algorithm optimization, and complex system design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
                <p className="text-slate-400">Research in AI/Robotics, creative solution development, and technology exploration</p>
              </div>
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Python', level: 'Advanced', color: 'green' },
                { name: 'JavaScript', level: 'Advanced', color: 'yellow' },
                { name: 'Java', level: 'Intermediate', color: 'orange' },
                { name: 'C/C++', level: 'Intermediate', color: 'blue' },
                { name: 'SQL', level: 'Intermediate', color: 'purple' },
                { name: 'HTML/CSS', level: 'Advanced', color: 'red' }
              ].map((lang) => {
                const colorClasses = {
                  green: 'bg-green-500/20 text-green-300 border-green-500/30',
                  yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
                  orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
                  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
                  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
                  red: 'bg-red-500/20 text-red-300 border-red-500/30'
                };
                
                return (
                  <span
                    key={lang.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default ${colorClasses[lang.color]}`}
                  >
                    {lang.name} <span className="text-xs opacity-75">({lang.level})</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience & Timeline Section */}
      <section id="experience" className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Experience & Journey
            </h2>
            <p className="text-slate-400 text-lg">My professional and academic timeline</p>
          </div>
          
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-pulse opacity-70"></div>
            </div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Current Experience */}
              <div className="relative flex items-start gap-8 group">
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 flex-1 shadow-2xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                        Operations Manager
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-slate-300 font-medium mb-2">
                        <Building className="w-5 h-5 text-blue-400" />
                        Event Managers Club, VIT Chennai
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2024 - 2025
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Successfully organized and managed 300+ events including major college festivals like 
                    <span className="text-blue-400 font-semibold"> TechnoVIT'24 </span> and 
                    <span className="text-blue-400 font-semibold"> Vibrance'25</span>. 
                    Responsible for venue coordination, team operations, and large-scale event logistics management. 
                    Led cross-functional teams and developed efficient operational processes.
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Managed 300+ events with zero major incidents
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Led teams of 50+ volunteers per major event
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Streamlined operations reducing setup time by 40%
                      </li>
                    </ul>
                  </div>
                  
                  {/* Skills Used */}
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Event Management', 'Team Coordination', 'Project Planning', 'Operations', 'Logistics'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Education - Current */}
              <div className="relative flex items-start gap-8 group">
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-slate-800 to-purple-900/20 rounded-2xl p-8 flex-1 shadow-2xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                        B.Tech Computer Science Engineering
                      </h3>
                      <div className="text-lg text-slate-300 font-medium mb-1">
                        Specialization: Artificial Intelligence & Robotics
                      </div>
                      <div className="flex items-center gap-2 text-lg text-slate-300 font-medium mb-2">
                        <Building className="w-5 h-5 text-purple-400" />
                        VIT Chennai
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2023 - 2027
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium ml-2">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400 mb-1">8.34</div>
                      <div className="text-sm text-slate-400">CGPA</div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Pursuing advanced coursework in Artificial Intelligence, Machine Learning, Robotics, and Software Engineering. 
                    Actively involved in research projects and technical clubs. Strong academic performance with focus on practical 
                    applications of AI/ML technologies and cutting-edge robotics research.
                  </p>
                  
                  {/* Key Subjects */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Subjects:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Artificial Intelligence',
                        'Machine Learning', 
                        'Robotics Engineering',
                        'Data Structures & Algorithms',
                        'Software Engineering',
                        'Computer Vision',
                        'Natural Language Processing',
                        'Database Management'
                      ].map((subject) => (
                        <div key={subject} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Academic Focus */}
                  <div className="flex flex-wrap gap-2">
                    {['AI Research', 'Robotics', 'Machine Learning', 'Software Development', 'Data Science', 'Computer Vision'].map((area) => (
                      <span key={area} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* School Education */}
              <div className="relative flex items-start gap-8 group">
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-slate-800 to-green-900/20 rounded-2xl p-8 flex-1 shadow-2xl border border-slate-600/30 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-green-300 mb-2 group-hover:text-green-200 transition-colors">
                        Senior Secondary Education
                      </h3>
                      <div className="text-lg text-slate-300 font-medium mb-1">
                        Stream: PCM with English
                      </div>
                      <div className="flex items-center gap-2 text-lg text-slate-300 font-medium mb-2">
                        <Building className="w-5 h-5 text-green-400" />
                        Presentation Convent Sr Sec School, Jammu
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2021 - 2023
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium ml-2">
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400 mb-1">90%</div>
                      <div className="text-sm text-slate-400">Grade</div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Completed higher secondary education with excellent performance in Physics, Chemistry, Mathematics, and English. 
                    Achieved 90% overall grade while building a strong foundation in mathematical and scientific principles 
                    essential for engineering studies. Active participation in science fairs and academic competitions.
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-slate-300">
                        <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        90% overall grade in PCM stream
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Consistent academic excellence throughout
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <Star className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Strong foundation in STEM subjects
                      </li>
                    </ul>
                  </div>
                  
                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {['Physics', 'Chemistry', 'Mathematics', 'English', 'Academic Excellence', 'STEM Foundation'].map((subject) => (
                      <span key={subject} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30 hover:bg-green-500/30 transition-colors">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Preview */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Generative AI Professional",
                  issuer: "Oracle",
                  year: "2025",
                  color: "red",
                  icon: Target,
                  link: "https://drive.google.com/file/d/1H8TWX2wGFABpOQGie9E-AqIcd7WKJ6ec/view?usp=drive_link"
                },
      {
                  title: "Data Science Professional",
                  issuer: "Oracle",
                  year: "2025",
                  color: "purple",
                  icon: Target,
                  link: "https://drive.google.com/file/d/1HA0RcQCRGMXTq9y_VgrRPk8Ytphs8cs6/view?usp=drive_link"
                },
                {
                  title: "MERN Full-Stack Web Development",
                  issuer: "Ethnus",
                  year: "2025",
                  color: "green",
                  icon: Globe,
                  link: "https://drive.google.com/file/d/1kZhoUNmELaHkMxP8cYPdo4i6aF-SkZst/view?usp=drive_link"
                },
                {
                  title: "Advanced Excel Certification",
                  issuer: "Internshala",
                  year: "2025",
                  color: "emerald",
                  icon: TrendingUp,
                  link: "https://drive.google.com/file/d/18LuptPOi3HUN6VbvbLvw875ialGugMu6/view?usp=drive_link"
                },
                {
                  title: "Python, C & C++",
                  issuer: "IIT Bombay",
                  year: "2024",
                  color: "blue", 
                  icon: Code,
                  link: "https://drive.google.com/drive/folders/1CxY-t3rbV6JFT_7oEsfFJzLmHia6kHm_?usp=drive_link"
                }
              ].map((cert, index) => {
                const Icon = cert.icon;
                const colorClasses = {
                  green: 'from-green-500 to-emerald-600 border-green-500/30 hover:border-green-400/50',
                  blue: 'from-blue-500 to-indigo-600 border-blue-500/30 hover:border-blue-400/50',
                  purple: 'from-purple-500 to-violet-600 border-purple-500/30 hover:border-purple-400/50',
                  red: 'from-red-500 to-orange-600 border-red-500/30 hover:border-red-400/50',
                  emerald: 'from-emerald-500 to-teal-600 border-emerald-500/30 hover:border-emerald-400/50'
                };
                
                return (
                  <a 
                    key={index} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-slate-800/60 rounded-2xl p-6 border ${colorClasses[cert.color]} transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer block`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[cert.color].split(' ')[0]} ${colorClasses[cert.color].split(' ')[1]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-slate-300 mb-1">{cert.issuer}</p>
                    <p className="text-slate-400 text-sm mb-2">{cert.year}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3 h-3" />
                      <span>View Certificate</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-10 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Let's collaborate on your next project! I'm always open to discussing new opportunities, 
              innovative ideas, and how we can work together to bring your vision to life.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Let's Connect
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm currently seeking opportunities in full-stack development, AI/ML engineering, 
                and innovative tech projects. Whether you're looking for a dedicated team member, 
                a project collaborator, or someone to bring fresh ideas to your organization, 
                I'd love to hear from you!
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Email Address</h4>
                  <a 
                    href="mailto:mahajanannie411@gmail.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm block mb-2"
                  >
                    mahajanannie411@gmail.com
                  </a>
                  <p className="text-slate-400 text-sm">Feel free to reach out for any inquiries</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Location</h4>
                  <p className="text-green-400 mb-2">Chennai, Tamil Nadu, India</p>
                  <p className="text-slate-400 text-sm">Open to remote work and relocation</p>
                </div>
              </div>
              
              {/* Availability */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Availability</h4>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-purple-400">Available for Projects</p>
                  </div>
                  <p className="text-slate-400 text-sm">Quick response within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-6">Connect on Social Media</h4>
              <div className="flex justify-center gap-6">
                {[
                  {
                    href: "https://linkedin.com/in/annie-mahajan-1v7i0v4u",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
                    description: "Professional Network"
                  },
                  {
                    href: "https://github.com/AnnieMahajan454",
                    icon: Github,
                    label: "GitHub",
                    color: "from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700",
                    description: "Code Repository"
                  },
                  {
                    href: "https://leetcode.com/u/AnnieMahajan/",
                    icon: Code,
                    label: "LeetCode",
                    color: "from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500",
                    description: "Coding Practice"
                  },
                  {
                    href: "mailto:mahajanannie411@gmail.com",
                    icon: Mail,
                    label: "Email",
                    color: "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
                    description: "Direct Contact"
                  }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <div key={social.label} className="group relative">
                      <a
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </a>
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-600">
                        <div className="text-center">
                          <div className="font-medium">{social.label}</div>
                          <div className="text-slate-400">{social.description}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                I'm passionate about creating innovative solutions and collaborating with talented teams. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mahajanannie411@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Email Me Directly
                </a>
                <a
                  href="https://linkedin.com/in/annie-mahajan-1v7i0v4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-600/30 hover:border-cyan-500/50 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-800 py-6 text-center">
        <p className="text-slate-400">© 2025 Annie Mahajan. All rights reserved.</p>
      </footer>
    </div>
  );
}
