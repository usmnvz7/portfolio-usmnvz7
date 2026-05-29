import React from 'react';
import Hero from '../sections/Hero';
import { Skills } from '../sections/Skills/Skills';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
       <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;