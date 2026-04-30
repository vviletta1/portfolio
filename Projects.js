import React from "react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "VeeBot (AI Chatbot)",
    desc: "A Flask + Python chatbot hosted live — designed for helpful, friendly, and fast answers.",
    links: [
      { label: "Live Demo", href: "https://veebot.onrender.com" },
      { label: "GitHub", href: "https://github.com/vviletta1/VeeBot" },
    ],
    tags: ["Python", "Flask", "LLM"],
  },
  {
    title: "CyberBuddy (Chrome Extension)",
    desc: "A real-time cybersecurity companion that scans URLs and warns about suspicious links.",
    links: [
      { label: "GitHub", href: "https://github.com/vviletta1" },
    ],
    tags: ["JavaScript", "Extension", "Security"],
  },
  {
    title: "Solviah.ai (Business Assistant)",
    desc: "An AI helper for small businesses that supports chat, follow-ups, and (future) analytics dashboards.",
    links: [
      { label: "Portfolio Notes", href: "#contact" },
    ],
    tags: ["React", "FastAPI", "MongoDB"],
  },
  {
    title: "VeloVision (Sponsor ROI)",
    desc: "Computer vision concept to detect sponsor logos in racing footage and measure visibility over time.",
    links: [
      { label: "Ask me about it", href: "#contact" },
    ],
    tags: ["Computer Vision", "YOLO", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="A few things I’ve built (and a few I’m actively leveling up)."
        />

        <div className="cards">
          {projects.map((p) => (
            <article key={p.title} className="projectCard">
              <div className="projectCard__top">
                <h3 className="projectCard__title">{p.title}</h3>
                <p className="projectCard__desc">{p.desc}</p>
              </div>

              <div className="projectCard__tags">
                {p.tags.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="projectCard__actions">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="btn btn--ghost btn--small"
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {l.label}
                  </a>
                ))}
                <a className="btn btn--primary btn--small" href="#contact">
                  Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
