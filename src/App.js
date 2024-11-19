import React from 'react';
import Header from './layout/Header';
import Hero from './layout/Hero';
import About from './layout/About';
import Features from './layout/Features';
import Performance from './layout/Performance';

function App() {
  return (
    <div className="column font-sans">
      <Header />
      <Hero />
      <About />
      <Features />
      <Performance />
    </div>
  );
}

export default App;
