import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, AlertCircle, Loader2, Linkedin, Github, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setStatus('sending');
    const loadingToast = toast.loading('Transmitting message...');

    try {
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        toast.error('Missing EmailJS configuration. Please check your .env file!', {
          id: loadingToast
        });
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      if (!emailjs.init) {
        toast.error('EmailJS library not initialized correctly!');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      emailjs.init(PUBLIC_KEY);
      const templateParams = {
        to_name: "Sakshi Charlewar",
        to_email: "sakshicharlewar4@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: `New Portfolio Contact: ${formData.subject}`,
        message: formData.message,
        date_time: new Date().toLocaleString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      toast.success('Your message has been sent successfully! I will get back to you soon.', {
        id: loadingToast,
        duration: 5000,
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      let errorMsg = 'Transmission failed. Please try again later.';
      if (error?.text) errorMsg = error.text;
      if (error?.message) errorMsg = error.message;
      
      toast.error(errorMsg, {
        id: loadingToast,
      });
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/sakshi-charlewar-39733234b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <Github size={24} />, href: 'https://github.com/sakshicharlewar', label: 'GitHub' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/sakshicharlewar09/', label: 'Instagram' },
    { icon: <Mail size={24} />, href: 'mailto:sakshicharlewar4@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#E2E8F0] drop-shadow-[0_0_12px_rgba(34,211,238,0.2)] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Let's collaborate, build impactful projects, and create innovative digital experiences together.
          </p>
        </motion.div>

        {/* Centered Glassmorphism Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 border border-cyan-500/20 rounded-[20px] relative"
        >
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider ml-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className={`w-full px-5 py-4 bg-slate-900/60 border ${
                  errors.name ? 'border-red-500/50' : 'border-slate-700'
                } rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all text-white placeholder:text-slate-500 font-medium`}
              />
              {errors.name && (
                <span className="text-red-400 text-xs font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className={`w-full px-5 py-4 bg-slate-900/60 border ${
                  errors.email ? 'border-red-500/50' : 'border-slate-700'
                } rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all text-white placeholder:text-slate-500 font-medium`}
              />
              {errors.email && (
                <span className="text-red-400 text-xs font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider ml-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What's this about?"
                className={`w-full px-5 py-4 bg-slate-900/60 border ${
                  errors.subject ? 'border-red-500/50' : 'border-slate-700'
                } rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all text-white placeholder:text-slate-500 font-medium`}
              />
              {errors.subject && (
                <span className="text-red-400 text-xs font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider ml-1">
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className={`w-full px-5 py-4 bg-slate-900/60 border ${
                  errors.message ? 'border-red-500/50' : 'border-slate-700'
                } rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all text-white placeholder:text-slate-500 font-medium resize-none`}
              />
              {errors.message && (
                <span className="text-red-400 text-xs font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.message}
                </span>
              )}
            </div>

            {/* Send Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ y: -4, boxShadow: "0 0 40px rgba(34,211,238,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black rounded-xl shadow-lg shadow-cyan-900/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em]">
                {status === 'sending' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </div>
            </motion.button>
          </form>
        </motion.div>

        {/* Social Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 flex items-center justify-center bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-full text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
