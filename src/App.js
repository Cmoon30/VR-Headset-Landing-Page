import React from 'react';
import { Header, Hero, About, Features, Performance, Footer } from "./layout/IndexLayout"
function App() {
  return (
    <div className="column font-sans">
      <Header />
      <Hero />
      <About />
      <Features />
      <Performance />
      <Footer />
    </div>
  );
}

export default App;
