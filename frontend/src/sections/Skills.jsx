import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Brain, 
  BarChart3, 
  Wrench,
  FileCode,
  Layout,
  Terminal,
  Server,
  Database,
  Coffee,
  GitBranch as Git,
  Github
} from 'lucide-react';

const Skills = () => {
  // Category definitions
  const categories = [
    { id: 'languages', name: 'Languages', icon: <Code size={28} /> },
    { id: 'web', name: 'Web Development', icon: <Globe size={28} /> },
    { id: 'ai', name: 'Artificial Intelligence', icon: <Brain size={28} /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 size={28} /> },
    { id: 'tools', name: 'Tools & Version Control', icon: <Wrench size={28} /> }
  ];

  // Skills data by category with themed icons
  const skillsData = {
    languages: [
      { name: 'Java', icon: <Coffee size={18} /> },
      { name: 'Python', icon: <Terminal size={18} /> },
      { name: 'JavaScript', icon: <FileCode size={18} /> }
    ],
    web: [
      { name: 'HTML', icon: <Globe size={18} /> },
      { name: 'CSS', icon: <Layout size={18} /> },
      { name: 'React.js', icon: <Code size={18} /> },
      { name: 'Node.js', icon: <Terminal size={18} /> },
      { name: 'Express.js', icon: <Server size={18} /> },
      { name: 'MongoDB', icon: <Database size={18} /> }
    ],
    ai: [
      { name: 'AI Fundamentals', icon: <Brain size={18} /> },
      { name: 'Prompt Engineering', icon: <Code size={18} /> },
      { name: 'Machine Learning Basics', icon: <BarChart3 size={18} /> }
    ],
    analytics: [
      { name: 'Data Analysis', icon: <BarChart3 size={18} /> },
      { name: 'REST APIs', icon: <Server size={18} /> },
      { name: 'Problem Solving', icon: <Code size={18} /> }
    ],
    tools: [
      { name: 'Git', icon: <Git size={18} /> },
      { name: 'GitHub', icon: <Github size={18} /> },
      { name: 'VS Code', icon: <FileCode size={18} /> }
    ]
  };

  // Active category state
  const [activeCategory, setActiveCategory] = useState('languages');

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#E2E8F0] drop-shadow-[0_0_12px_rgba(34,211,238,0.2)] tracking-tight">
            Technologies Behind The <span className="text-[#22D3EE]">Build</span>
          </h2>
        </motion.div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative flex items-center justify-center
                w-20 h-20 md:w-24 md:h-24 rounded-full
                bg-slate-900/60 backdrop-blur-xl
                border-2 transition-all duration-300
                ${activeCategory === category.id 
                  ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] text-cyan-400' 
                  : 'border-cyan-500/20 text-slate-400 hover:border-cyan-500/40'
                }
              `}
            >
              {category.icon}
              {/* Tooltip for mobile */}
              <span className="absolute -bottom-8 text-xs font-medium opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Name */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skillsData[activeCategory].map((skill, idx) => (
              <motion.div
                key={`${activeCategory}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(34,211,238,0.3)",
                  borderColor: "rgba(34,211,238,0.5)"
                }}
                className="flex items-center gap-3 px-6 py-3 bg-slate-900/60 backdrop-blur-xl border-2 border-cyan-500/20 rounded-full text-lg font-medium text-cyan-400 transition-all duration-300"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
