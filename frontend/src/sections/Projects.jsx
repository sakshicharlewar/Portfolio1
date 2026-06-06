import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Campus Vote",
    description: "A secure digital voting platform for academic institutions. Implements real-time result tracking and multi-factor authentication for transparent elections.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    category: "MERN Stack",
    live: "https://campusvote-1.onrender.com",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=600&h=400",
    glow: "shadow-[0_0_20px_rgba(0,242,255,0.2)]"
  },
  {
    title: "SAHIRASTA",
    description: "Home search today ignores commute time, cost, and safety, leading to poor living decisions and reduced quality of life.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "MERN Stack",
    live: "https://sahirasta-topaz.vercel.app",
    github: "https://github.com/sakshicharlewar/SAHIRASTA",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600&h=400",
    glow: "shadow-[0_0_20px_rgba(145,94,255,0.2)]"
  },
  {
    title: "SPECTRA-X",
    description: "AI and Blockchain-powered platform for detecting illegal deforestation, mining activities, and environmental changes through real-time monitoring and secure data tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python"],
    category: "AI & Python",
    live: "https://spectra-xfinal.onrender.com/",
    github: "https://github.com/sakshicharlewar/SPECTRA-X",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
    glow: "shadow-[0_0_20px_rgba(0,242,255,0.2)]"
  }
];

const categories = ["All", "MERN Stack", "AI & Python", "Other Projects"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#050816' }}
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: `${Math.random() * 10 + 6}s`,
              delay: `${Math.random() * 3}s`,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Tagline */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Builds That <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Speak Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A collection of scalable, real-world applications built with modern technologies, performance-first thinking, and clean architecture.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white/10 backdrop-blur-md border border-neonBlue/50 text-neonBlue shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:border-neonBlue/30 hover:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-neonBlue/40 transition-all duration-500 bg-white/3 backdrop-blur-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 bg-white/5 text-neonBlue border border-neonBlue/20 rounded-md font-bold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Floating Bottom-Right Icons */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative flex flex-col items-center opacity-0 translate-y-2 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-neonBlue/30 blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 group-hover/icon:text-neonBlue group-hover/icon:border-neonBlue/50 group-hover/icon:scale-110 transition-all duration-300">
                    <Github size={18} />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300">
                    GitHub Repo
                  </span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative flex flex-col items-center opacity-0 translate-y-2 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 delay-100"
                >
                  <div className="absolute inset-0 rounded-full bg-neonPurple/30 blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 group-hover/icon:text-neonPurple group-hover/icon:border-neonPurple/50 group-hover/icon:scale-110 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300">
                    Live Demo
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
