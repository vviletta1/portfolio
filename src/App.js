import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav__inner">
        <a className="nav__brand" href="#home">
          <span className="nav__dot" /> Violetta
        </a>

        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Hi, I’m Violetta 👋</h1>

        <p className="hero__text">
          AI & Robotics student building AI tools, support systems, cloud
          projects, and real-world software ideas.
        </p>

        <a
          className="hero__button"
          href="https://github.com/vviletta1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>About Me</h2>

        <p>
          I’m passionate about artificial intelligence, cloud technology,
          cybersecurity, technical support systems, and building projects that
          solve real problems.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>

        <ul className="project__list">
          <li>Solviah.ai</li>
          <li>AI-Assisted Support Resolution System</li>
          <li>CyberBuddy Chrome Extension</li>
          <li>Trading Dashboard & Signal Bot</li>
          <li>Scam Detection API</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>

        <p>
          React • Python • FastAPI • AI/ML • Technical Support • GitHub •
          Vercel • APIs • Cloud • Troubleshooting
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>Contact</h2>

        <p>Email: violettabasdenn@gmail.com</p>

        <a
          href="https://github.com/vviletta1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

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

            <p className="muted">
              © {new Date().getFullYear()} • Built with React
            </p>
          </div>

          <div className="footer__right">
            <a
              className="footer__link"
              href="mailto:violettabasdenn@gmail.com"
            >
              Email
            </a>

            <a
              className="footer__link"
              href="https://github.com/vviletta1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="footer__link"
              href="https://www.linkedin.com/in/violetta-basden-aa4b95171"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
