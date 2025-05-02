// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Projects from './components/Projects';
import CV from './components/CV';
import Footer from './components/Footer';
import Hero from './components/Hero'
import './styles.css';

const App = () => (
  <div>
    <Header />
    <main>
    <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <CV /> {/* CV component moved here under Projects */}
    </main>
    <Footer />
  </div>
);

export default App;
