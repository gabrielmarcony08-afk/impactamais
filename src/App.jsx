import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import ImpactSection from './components/ImpactSection';
import OdsSection from './components/OdsSection';
import AudienceSection from './components/AudienceSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col font-sans text-brand-text">
      {/* Header Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ImpactSection />
        <OdsSection />
        <AudienceSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
