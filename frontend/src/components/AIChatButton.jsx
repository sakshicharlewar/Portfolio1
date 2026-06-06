import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am Sakshi\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'That sounds interesting! Sakshi is currently available for collaborations. You can contact her via the form above or email.' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glassmorphism w-80 md:w-96 h-[450px] rounded-3xl border border-white/10 shadow-2xl mb-4 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-neonBlue to-neonPurple flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">SAKSHI_AI</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neonBlue/20 border border-neonBlue/30 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neonBlue transition-all pr-10"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-neonBlue hover:text-neonPurple transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 glassmorphism border border-white/10 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

export default AIChatButton;
