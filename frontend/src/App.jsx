import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  // Always dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const [particles] = useState(Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 1}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`
  })));

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Background grid */}
      <div className="grid-pattern" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay
            }}
          />
        ))}
      </div>

      {/* Glowing nodes */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px]"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 25) % 100}%`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      <Toaster position="top-right" />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
