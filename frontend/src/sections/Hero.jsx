import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Briefcase } from 'lucide-react';

const Hero = () => {
  // Tech stack tags
  const techStack = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB',
    'JavaScript', 'Java', 'Python', 'Git & GitHub'
  ];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: '#050B1A' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neonBlue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full z-10 py-20">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/4 text-center lg:text-left"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism border border-neonBlue/30 mb-6"
          >
            <span className="text-orange-400">🔥</span>
            <span className="text-sm text-gray-300 font-medium">Driven by Code, Inspired by Innovation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Building Innovative Solutions with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-cyan-400 to-neonPurple">
              MERN Stack
            </span>
            {' '}&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-cyan-400 to-neonPurple">
              AI
            </span>
          </motion.h1>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-2xl"
          >
            I'm Sakshi Charlewar, a Computer Engineering student and passionate developer from Nagpur. I specialize in building modern, responsive, and scalable web applications using React.js, Node.js, Express.js, and MongoDB. With strong skills in Java, Python, and Data Structures & Algorithms, I enjoy transforming ideas into real-world digital products.
          </motion.p>

          {/* Social Icons (Above CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-4 mb-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glassmorphism rounded-xl border border-white/10 hover:border-neonBlue transition-all hover:scale-110">
              <Github size={24} className="text-gray-300 hover:text-neonBlue" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glassmorphism rounded-xl border border-white/10 hover:border-neonPurple transition-all hover:scale-110">
              <Linkedin size={24} className="text-gray-300 hover:text-neonPurple" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold rounded-xl flex items-center gap-2 transition-all"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glassmorphism border border-neonPurple/30 text-white font-semibold rounded-xl hover:border-neonPurple transition-all"
            >
              Hire Me
            </motion.a>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <div className="glassmorphism rounded-xl p-4 border border-neonBlue/20">
              <div className="flex items-center gap-2">
                <Briefcase size={20} className="text-neonBlue" />
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">5+</div>
              </div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="glassmorphism rounded-xl p-4 border border-cyan-400/20">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">2024–2028</div>
              <div className="text-sm text-gray-400">B.Tech Journey</div>
            </div>
          </motion.div>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glassmorphism border border-white/10 rounded-full text-sm text-gray-300 hover:border-neonBlue/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
