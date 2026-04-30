import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="footer__brand">
              <span className="nav__dot" aria-hidden="true" />
              Violetta
            </div>
            <p className="muted">© {new Date().getFullYear()} • Built with React</p>
          </div>

          <div className="footer__right">
            <a className="footer__link" href="mailto:violettabasdenn@gmail.com">Email</a>
            <a className="footer__link" href="https://github.com/vviletta1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="footer__link" href="https://www.linkedin.com/in/violetta-basden-aa4b95171" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
