import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Zap } from 'lucide-react';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Sakshi's AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    const userMsg = input;
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `Thanks for your message! This is a demo chat, but feel free to reach out to Sakshi directly for real conversations! 🚀` }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="glass-card w-80 md:w-96 h-[500px] mb-4 rounded-2xl border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950">AI Assistant</h3>
                <p className="text-xs text-slate-800">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-950 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 h-[370px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'ml-auto bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 rounded-br-sm'
                    : 'bg-slate-800/80 text-white rounded-bl-sm'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-cyan-500/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button type="submit" className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 rounded-xl hover:scale-105 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center"
      >
        <MessageCircle size={32} className="text-slate-950" />
      </motion.button>
    </div>
  );
};

export default AIChatButton;
