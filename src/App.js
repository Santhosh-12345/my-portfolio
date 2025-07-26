import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './responsive.css';
const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '70px' }}>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
