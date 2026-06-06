import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Layers, Server, Database, Code, GitBranch, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <Layers size={20} />,
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '💻' },
      ],
    },
    {
      name: 'Backend Development',
      icon: <Server size={20} />,
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
      ],
    },
    {
      name: 'Database',
      icon: <Database size={20} />,
      skills: [
        { name: 'MongoDB', icon: '🍃' },
      ],
    },
    {
      name: 'Programming Languages',
      icon: <Code size={20} />,
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
      ],
    },
    {
      name: 'Tools & Version Control',
      icon: <GitBranch size={20} />,
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '📝' },
      ],
    },
    {
      name: 'Learning & Exploring',
      icon: <Brain size={20} />,
      skills: [
        { name: 'Artificial Intelligence', icon: '🤖' },
        { name: 'REST APIs', icon: '🔗' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="skills"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Building Blocks of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">My Development Journey</span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="border border-white/20 rounded-xl p-6 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                  <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-neonBlue transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">{category.name}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:border-neonBlue/40 hover:text-gray-100 transition-all duration-200"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
