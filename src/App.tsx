import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechnologiesSection />
      </main>
      <Footer />
    </>
  );
};

export default App;