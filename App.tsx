import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints'; // Block 02: A Dor
import Features from './components/Features'; // Block 03: O Poder da IA
import Gallery from './components/Gallery'; // Block 04: Vitrine
import Pricing from './components/Pricing'; // Block 05: Planos
import Testimonials from './components/Testimonials'; // Nova seção de Depoimentos
import Guarantee from './components/Guarantee'; // Block 06: Garantia
import FAQ from './components/FAQ'; // Keep FAQ as extra value
import Footer from './components/Footer';

// Conversion Features
import ExitIntentModal from './components/ExitIntentModal';
import SocialProof from './components/SocialProof';
import FloatingActionButton from './components/FloatingActionButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white font-sans relative">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <PainPoints />
        <Features />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />

      {/* Conversion Overlays */}
      <ExitIntentModal />
      <SocialProof />
      <FloatingActionButton />
    </div>
  );
};

export default App;