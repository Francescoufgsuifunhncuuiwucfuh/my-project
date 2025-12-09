import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Bio from './components/Bio';
import SocialHub from './components/SocialHub';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen text-white font-sans selection:bg-neonPurple selection:text-white">
      <ParticleBackground />
      
      <div className="flex flex-col relative z-10">
        <Hero />
        
        <div className="space-y-6 pb-20 animate-[fadeIn_1.5s_ease-out_0.5s_both]">
          <Bio />
          <SupportSection />
          <SocialHub />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}

export default App;