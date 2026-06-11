import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Home, CheckCircle, Cpu, Database, Brain, Globe, Code2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Campus Voting System',
      description: 'A secure voting platform for student elections with real-time results. Implements modern authentication, role-based access control, and smooth UX to ensure fair and transparent elections on campus.',
      tags: [
        { name: 'React', icon: <Globe size={14} /> },
        { name: 'Node.js', icon: <Cpu size={14} /> },
        { name: 'MongoDB', icon: <Database size={14} /> }
      ],
      category: 'MERN Stack',
      github: 'https://github.com/sakshicharlewar/CAMPUSVOTE',
      live: 'https://campusvote-1.onrender.com',
      icon: <CheckCircle />
    },
    {
      title: 'Sahirasta',
      description: 'SahiRasta is an AI-driven home search platform developed using the MERN Stack. It goes beyond traditional property listings by evaluating real-world factors like daily commute, living expenses, safety, and nearby amenities to recommend homes that best match a user\'s lifestyle and preferences.',
      tags: [
        { name: 'React', icon: <Globe size={14} /> },
        { name: 'Node.js', icon: <Cpu size={14} /> },
        { name: 'MongoDB', icon: <Database size={14} /> },
        { name: 'AI', icon: <Brain size={14} /> }
      ],
      category: 'MERN Stack',
      github: 'https://github.com/sakshicharlewar/SAHIRASTA',
      live: 'https://sahirasta-topaz.vercel.app',
      icon: <Home />
    },
    {
      title: 'Spectra X',
      description: 'AI and Blockchain-powered platform for detecting illegal deforestation, mining activities, and environmental changes through real-time monitoring and secure data tracking. Combines satellite imagery analysis with smart contracts for immutable audit trails.',
      tags: [
        { name: 'Python', icon: <Cpu size={14} /> },
        { name: 'React', icon: <Globe size={14} /> },
        { name: 'AI', icon: <Brain size={14} /> },
        { name: 'Blockchain', icon: <Zap size={14} /> }
      ],
      category: 'AI & Python',
      github: 'https://github.com/sakshicharlewar/SPECTRA-X',
      live: 'https://spectra-xfinal.onrender.com/',
      icon: <Zap />
    },
    {
      title: '45 Days DSA Internship',
      description: 'Comprehensive Data Structures and Algorithms repository with solutions to 45+ days of coding problems, including arrays, linked lists, trees, graphs, dynamic programming, and more. Built to master problem-solving and interview preparation.',
      tags: [
        { name: 'DSA', icon: <Code2 size={14} /> },
        { name: 'Problem Solving', icon: <CheckCircle size={14} /> },
        { name: 'Interview Prep', icon: <Zap size={14} /> }
      ],
      category: 'Other Projects',
      github: 'https://github.com/sakshicharlewar/45DAYS_DSAINTERSHIP',
      live: null,
      icon: <Code2 />
    }
  ];

  const filters = ['All', 'MERN Stack', 'AI & Python', 'Other Projects'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Showcasing my work and contributions
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
                    : 'glass-card text-slate-300 hover:border-cyan-400/40'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -12, boxShadow: '0 0 60px rgba(6,182,212,0.25)' }}
                className="glass-card overflow-hidden group border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 rounded-2xl"
              >
                {/* Project Image Area */}
                <div className="h-56 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center relative overflow-hidden border-b border-cyan-500/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.25)_0%,_transparent_70%)]" />
                  <div className="text-9xl text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.7)]">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(6,182,212,0.3)' }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900/70 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold hover:border-cyan-400 transition-all duration-300"
                      >
                        {tag.icon}
                        <span>{tag.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900/80 border border-cyan-500/40 rounded-xl text-white font-bold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 ${!project.live ? 'w-full' : ''}`}
                    >
                      <Github size={16} />
                      View Source Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(20,184,166,0.4)' }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm rounded-xl hover:from-cyan-400 hover:to-teal-400 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Explore Project
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;