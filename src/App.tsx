import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects/Projects';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <Navigation />
        <Hero />
      </header>
      <Services />
      <Stats />
      <Projects />
      <Process />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;