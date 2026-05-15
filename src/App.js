import React from "react";
import "./App.css";
import profileImg from "../profile.jpg";

const projects = [
  {
    title: "Solviah.ai",
    desc: "AI assistant that turns complex manuals into clear step-by-step guidance.",
    tech: "React • AI • Vercel",
    github: "https://github.com/vviletta1",
    demo: "https://solviah-ai.vercel.app",
  },
  {
    title: "AI Support Resolution System",
    desc: "A support workflow tool for ticket summaries, root cause analysis, and escalations.",
    tech: "Python • Streamlit • AI",
    github: "https://github.com/vviletta1",
    demo: "#",
  },
  {
    title: "Scam Detection API",
    desc: "API that checks messages, screenshots, and documents for scam risk.",
    tech: "FastAPI • Python • AI",
    github: "https://github.com/vviletta1",
    demo: "#",
  },
  {
    title: "CyberBuddy",
    desc: "Chrome extension concept for real-time cybersecurity alerts and URL scanning.",
    tech: "JavaScript • Chrome Extension",
    github: "https://github.com/vviletta1",
    demo: "#",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="brand"><span></span>Violetta</div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="tag">AI & Robotics Student • Cloud • Support Tech</p>
          <h1>Building AI tools that solve real problems.</h1>
          <p>
            I’m Violetta, an AI & Robotics student building projects across AI,
            technical support, automation, cloud, and cybersecurity.
          </p>
          <div className="buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="https://github.com/vviletta1" className="btn" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="heroCard">
          <img src={profileImg} alt="Violetta" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I enjoy building useful technology, especially tools that make confusing
          systems easier for people to understand. My work blends AI, support
          operations, troubleshooting, and real-world problem solving.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>{project.tech}</span>
              <div className="cardBtns">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span><span>Python</span><span>FastAPI</span>
          <span>AI/ML</span><span>Vercel</span><span>GitHub</span>
          <span>APIs</span><span>Cloud</span><span>Technical Support</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s Connect</h2>
        <p>Open to AI, technical support, cloud, and customer experience technology roles.</p>
        <a href="mailto:violettabasdenn@gmail.com" className="btn primary">Email Me</a>
      </section>

      <footer>© {new Date().getFullYear()} Violetta • Built with React</footer>
    </div>
  );
}

export default App;
