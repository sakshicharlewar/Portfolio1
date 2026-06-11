import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  Code2,
  Database,
  Brain,
  Zap,
  Globe,
  Link2,
  Target
} from 'lucide-react';

const Education = () => {
  const technicalAreas = [
    { name: "Full-Stack Development", icon: <Code2 size={16} /> },
    { name: "Artificial Intelligence", icon: <Brain size={16} /> },
    { name: "Data Structures & Algorithms", icon: <Zap size={16} /> },
    { name: "Database Management", icon: <Database size={16} /> },
    { name: "MERN Stack Development", icon: <Globe size={16} /> },
    { name: "REST API Development", icon: <Link2 size={16} /> }
  ];

  const currentFocus = [
    "AI-Powered Applications",
    "Modern Web Technologies",
    "Software Engineering"
  ];

  const strengths = [
    "Problem Solving",
    "Team Collaboration",
    "Quick Learner",
    "Analytical Thinking"
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building a Strong Foundation in Technology & Innovation
          </p>
        </motion.div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/70 to-cyan-400/30" style={{ animation: 'timelineGlow 2s ease-in-out infinite' }} />

          {/* Timeline Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-[#020817] border-4 border-cyan-400 shadow-[0_0_30px rgba(34,211,238,0.6)] transform -translate-x-1/2 z-10 flex items-center justify-center"
          >
            <GraduationCap size={18} className="text-cyan-400" />
          </motion.div>

          {/* Elongated Vertical Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ boxShadow: "0 0 40px rgba(34,211,238,0.2)" }}
            className="glass-card ml-12 md:ml-20 p-8 border border-cyan-500/20 rounded-[20px] hover:border-cyan-400/50 transition-all duration-300"
          >
            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Degree</span>
              </div>
              <div className="pl-8">
                <h3 className="text-xl font-bold text-white mb-2">Bachelor of Technology (B.Tech)</h3>
                <p className="text-cyan-400 font-semibold mb-3">Computer Engineering</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Passionate Computer Engineering student with a strong interest in Full-Stack Development, Artificial Intelligence, and modern software technologies. Focused on building practical projects, strengthening problem-solving skills, and continuously learning industry-relevant technologies.
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* College */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Building2 size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">College</span>
              </div>
              <div className="pl-8">
                <p className="text-slate-300 font-semibold mb-1">Suryodaya College of Engineering & Technology</p>
                <p className="text-slate-400 text-sm">Nagpur, Maharashtra</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Duration</span>
              </div>
              <div className="pl-8">
                <p className="text-white font-bold">2024 – 2028</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* Technical Areas */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Technical Focus</span>
              </div>
              <div className="pl-8 space-y-3">
                {technicalAreas.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-slate-300 font-medium text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Current Focus</span>
              </div>
              <div className="pl-8 space-y-2">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-slate-300 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Strengths</span>
              </div>
              <div className="pl-8 space-y-2">
                {strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-slate-300 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

            {/* Goal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Target size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Goal</span>
              </div>
              <div className="pl-8">
                <p className="text-slate-300 font-semibold">Aspiring Software Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
