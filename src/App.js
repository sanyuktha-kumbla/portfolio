import React, { useRef } from 'react';
import './App.css';
import Header from './Header';
import Introduction from './Introduction';
import About from './About';
import Timeline from './Timeline';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import { useEffect } from 'react';

function App() {




  return (
    <div className="antialiased" id="home">
      <Header/>
      <Introduction   />
      <About  />
      <Timeline/>
      <Skills  />
      <Work  />
      <Contact/>
      <Footer />
    </div>
   
  );
}

export default App;
