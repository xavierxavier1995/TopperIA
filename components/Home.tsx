import React from 'react';
import Hero from './Hero';
import PainPoints from './PainPoints';
import Features from './Features';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Guarantee from './Guarantee';
import FAQ from './FAQ';
import ExitIntentModal from './ExitIntentModal';
import SocialProof from './SocialProof';
import FloatingActionButton from './FloatingActionButton';

// O Footer e Navbar agora ficam no App.tsx para aparecerem em todas as páginas, 
// ou podem ficar aqui se forem exclusivos da Home. 
// Neste caso, manteremos a estrutura limpa renderizando apenas o miolo.

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Guarantee />
      <FAQ />

      {/* Conversion Overlays */}
      <ExitIntentModal />
      <SocialProof />
      <FloatingActionButton />
    </>
  );
};

export default Home;