import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Zap, Database } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Maintainable, reusable, and production-ready code architecture'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Modern Tech Stack',
      description: 'Leveraging cutting-edge frameworks and developer tools'
    },
    {
      icon: <Database size={24} />,
      title: 'Full Stack Engineering',
      description: 'End-to-end development of scalable web applications'
    },
    {
      icon: <Zap size={24} />,
      title: 'High Performance Systems',
      description: 'Optimized applications focused on speed, scalability, and UX'
    }
  ];

  const stats = [
    {
      number: '5+',
      label: 'Projects Built'
    },
    {
      number: '8+',
      label: 'Technologies Explored'
    },
    {
      number: '50+',
      label: 'Coding Challenges'
    },
    {
      number: '1000+',
      label: 'Hours of Learning'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Me</span>
          </h2>
          <p className="text-cyan-400 text-lg font-semibold mb-2">
            Building the Future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left - About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-6 text-white">About Me</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I'm Sakshi Charlewar, a third-year Computer Engineering student from Nagpur with a strong passion for software development, artificial intelligence, and modern web technologies. I enjoy transforming innovative ideas into practical digital solutions that create meaningful user experiences and solve real-world challenges.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                My expertise includes React.js, Node.js, MongoDB, JavaScript, Python, and Java, with a growing interest in AI-powered applications and full-stack development. Through hands-on projects, continuous learning, and problem-solving challenges, I am constantly expanding my technical knowledge and development skills.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I believe in building scalable, user-centric, and impactful applications while staying updated with emerging technologies. My goal is to grow as a software engineer and contribute to innovative products that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all rounded-[20px]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 0 30px rgba(6,182,212,0.2)" }}
              className="text-center p-4 glass-card border-cyan-400/20 hover:border-cyan-400/40 transition-all rounded-[20px]"
            >
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-1">{stat.number}</p>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
