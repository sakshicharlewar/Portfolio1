import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company: "Tech Solutions Inc.",
    location: "Nagpur, India",
    period: "June 2025 - August 2025",
    description: [
      "Developed and maintained responsive web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Optimized application performance and improved user experience by 25%."
    ],
    icon: <Briefcase size={20} className="text-neonBlue" />
  },
  {
    title: "Java & Python Developer (Trainee)",
    company: "Innovate Labs",
    location: "Remote",
    period: "Jan 2025 - May 2025",
    description: [
      "Worked on backend logic for data processing applications using Python and Java.",
      "Implemented REST APIs and integrated third-party services.",
      "Participated in code reviews and debugging sessions to ensure software quality."
    ],
    icon: <Briefcase size={20} className="text-neonPurple" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Professional <span className="text-neonBlue">Journey</span>
        </h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-0'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-11px] md:left-auto md:right-[-11px] w-5 h-5 bg-primary border-2 border-neonBlue rounded-full z-10 shadow-[0_0_10px_#00f2ff]">
                {index % 2 !== 0 && <div className="md:hidden"></div>}
              </div>
              {index % 2 !== 0 && <div className="hidden md:block absolute top-0 left-[-11px] w-5 h-5 bg-primary border-2 border-neonPurple rounded-full z-10 shadow-[0_0_10px_#bc13fe]"></div>}

              <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-neonBlue/30 transition-colors">
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {index % 2 === 0 ? (
                    <>
                      <span className="text-sm font-bold text-neonBlue uppercase tracking-tighter">{exp.period}</span>
                      <Calendar size={16} className="text-gray-500" />
                    </>
                  ) : (
                    <>
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-sm font-bold text-neonPurple uppercase tracking-tighter">{exp.period}</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-neonBlue font-medium mb-4">{exp.company}</p>
                
                <div className={`flex items-center gap-2 text-gray-500 text-sm mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                <ul className={`space-y-3 text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      {index % 2 !== 0 ? (
                        <>
                          <div className="mt-1.5 w-1.5 h-1.5 bg-neonPurple rounded-full flex-shrink-0"></div>
                          <span>{item}</span>
                        </>
                      ) : (
                        <>
                          <span className="w-full">{item}</span>
                          <div className="mt-1.5 w-1.5 h-1.5 bg-neonBlue rounded-full flex-shrink-0 hidden md:block"></div>
                          <div className="mt-1.5 w-1.5 h-1.5 bg-neonBlue rounded-full flex-shrink-0 md:hidden"></div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
