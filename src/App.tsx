import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { PrintResume } from './components/PrintResume';
import './App.css';

const App: React.FC = () => {
  const isResumePage = window.location.search.includes('resume=true');

  if (isResumePage) {
    return <PrintResume />;
  }

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
