import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Python', 'DSA'];
  const stats = [
    { number: '8+', label: 'Technologies Explored' },
    { number: '5+', label: 'Projects Built' },
    { number: '∞', label: 'Consistent Learning & Development' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Available for Work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight leading-tight">
            Building Innovative Solutions
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">MERN Stack & AI</span>
          </h2>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-slate-400 mb-4 leading-relaxed max-w-3xl mx-auto">
            I’m Sakshi Charlewar, a Computer Engineering student and passionate developer from Nagpur. I specialize in building modern, responsive, and scalable web applications using React.js, Node.js, Express.js, and MongoDB. I also have strong knowledge of Java, Python, and Data Structures & Algorithms.
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            I love turning ideas into real-world digital products.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-4 border-cyan-400/20 rounded-[20px] min-w-[180px]"
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-1">
                  {stat.number}
                </p>
                <p className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6,182,212,0.3)" }}
                className="px-4 py-2 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-400 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card py-3 px-8 font-bold hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1gvMzVGhYa4Dymyd2Hn2KdKHsEF0AFJ9q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card py-3 px-8 font-bold hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
