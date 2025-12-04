import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Details from './components/Details';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Details />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
