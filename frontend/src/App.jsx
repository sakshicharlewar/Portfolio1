import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  // Always dark mode for this aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white-100 selection:bg-neonBlue/30">
      {/* Background Particles Effect */}
      <div className="bg-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
