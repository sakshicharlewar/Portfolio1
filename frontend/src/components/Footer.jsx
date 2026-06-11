import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail, MapPin, Code2 } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-20 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Code2 size={28} className="text-slate-950" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Sakshi<span className="text-cyan-400">.</span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Computer Engineering Student passionate about Full-Stack Web Development, AI, and building impactful software solutions.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-cyan-400" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:sakshicharlewar4@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Mail size={18} className="text-cyan-400" />
                <span>sakshicharlewar4@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sakshi-charlewar-39733234b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Linkedin size={18} className="text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/sakshicharlewar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Github size={18} className="text-cyan-400" />
                <span>GitHub Portfolio</span>
              </a>
              <a
                href="https://www.instagram.com/sakshicharlewar09/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Instagram size={18} className="text-cyan-400" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Glowing Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-500 font-medium">
            © 2026 Sakshi Charlewar. Designed & Developed with Passion and Innovation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
