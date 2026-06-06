import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const aboutLines = [
    "Hi, I'm <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>Sakshi Charlewar</span>, a third-year Computer Engineering student based in Nagpur.",
    "I am passionate about building modern, user-centric, and performance-driven web applications using <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>Full-Stack Development</span>. I enjoy transforming ideas into real-world digital products that are both functional and visually clean.",
    "My core tech stack includes <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>React</span>, <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>Node.js</span>, <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>Express.js</span>, and <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>MongoDB</span>, and I actively work on improving my backend logic, API development, and frontend responsiveness.",
    "Along with web development, I am also exploring <span class='text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple font-semibold'>Artificial Intelligence</span> and its real-world applications to build smarter and more intelligent systems.",
    "I strongly believe in writing clean, efficient, and scalable code. I enjoy solving real-world problems, understanding system workflows, and continuously upgrading my technical and logical skills through hands-on projects.",
    "Currently, I am focused on strengthening my development skills, building impactful projects, and preparing myself for professional opportunities in software development.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#050816' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Me</span>
        </motion.h2>

        {/* Transparent Box with Border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div
            className="border-2 border-white/30 rounded-xl p-6 md:p-8 text-left transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,242,255,0.6)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Lines with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {aboutLines.map((line, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed"
                >
                  <p dangerouslySetInnerHTML={{ __html: line }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
