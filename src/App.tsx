import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <ScrollReveal direction="up" delay={0.2}>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <TechnologiesSection />
        </ScrollReveal>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;