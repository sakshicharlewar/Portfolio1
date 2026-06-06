import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Rocket, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Identity required';
    if (!formData.email.trim()) {
      newErrors.email = 'Access point required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid access protocol';
    }
    if (!formData.message.trim()) newErrors.message = 'Transmission data missing';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    try {
      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        message: formData.message,
        from_name: "Sakshi Charlewar",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(error?.text || 'Transmission interrupted. Please verify credentials.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neonBlue/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neonPurple/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
              ESTABLISH <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">COMMUNICATION</span>
            </h2>
            <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-sm">Protocol: Secure_Transmission_V2</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative group overflow-hidden shadow-2xl"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neonBlue/20 transition-colors duration-500 rounded-[2.5rem] pointer-events-none"></div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest ml-2">
                  <User size={14} className="text-neonBlue" /> Identification
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER DESIGNATION"
                    className={`w-full px-6 py-4 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/20 transition-all text-white placeholder:text-gray-700 font-medium`}
                  />
                  {errors.name && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-[10px] font-bold flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest ml-2">
                  <Mail size={14} className="text-neonPurple" /> Access Point (Email)
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="USER@PROTOCOL.COM"
                    className={`w-full px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple/20 transition-all text-white placeholder:text-gray-700 font-medium`}
                  />
                  {errors.email && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-[10px] font-bold flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest ml-2">
                  <MessageSquare size={14} className="text-neonBlue" /> Data Payload (Message)
                </label>
                <div className="relative">
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="INITIATING TRANSMISSION..."
                    className={`w-full px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/20 transition-all text-white placeholder:text-gray-700 font-medium resize-none`}
                  ></textarea>
                  {errors.message && (
                    <span className="absolute right-4 top-4 text-red-500 text-[10px] font-bold flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative w-full py-5 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-black rounded-2xl shadow-neon hover:brightness-110 transition-all disabled:opacity-50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative z-10 flex items-center justify-center gap-3 tracking-[0.2em]">
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Status Overlays */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 glassmorphism z-20 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    <Rocket size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-2">Transmission Successful 🚀</h3>
                  <p className="text-gray-400 font-medium">Automatic confirmation has been dispatched to your access point.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 glassmorphism z-20 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem]"
                >
                  <div className="w-20 h-20 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                    <AlertCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Protocol Failure</h3>
                  <p className="text-gray-400 font-medium">{errorMessage}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-neonBlue text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Retry Protocol
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
