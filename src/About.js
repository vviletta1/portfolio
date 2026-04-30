import React from "react";
import profilePic from "../profile.jpg";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeader
          title="About"
          subtitle="A little more about me, what I’m building, and what I’m learning."
        />

        <div className="grid2">
          <div className="card card--soft">
            <h3 className="card__title">Get to know me</h3>
            <p className="text">
              I’m a current AI & Robotics student who loves mixing <span className="accent">smart AI</span> with
              <span className="accent"> clean frontend</span>. I’m happiest when I’m building tools people can actually use —
              like chatbots, cybersecurity helpers, and analytics dashboards.
            </p>
            <p className="text">
              I’m open to opportunities where I can contribute, learn, and grow — especially in roles that sit between
              customer experience and technical problem-solving.
            </p>

            <div className="stack">
              <a className="btn btn--primary" href="#contact">
                Let’s work together
              </a>
              <a
                className="btn btn--ghost"
                href="https://www.linkedin.com/in/violetta-basden-aa4b95171"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="profile">
            <div className="profile__frame">
              <img src={profilePic} alt="Violetta" className="profile__img" />
              <div className="profile__badge">
                <span className="badge">Neon Builder</span>
              </div>
            </div>

            <div className="profile__meta">
              <div className="metaRow">
                <span className="metaLabel">Focus</span>
                <span className="metaValue">AI tools + UX</span>
              </div>
              <div className="metaRow">
                <span className="metaLabel">Stack</span>
                <span className="metaValue">React • Python • FastAPI</span>
              </div>
              <div className="metaRow">
                <span className="metaLabel">Interests</span>
                <span className="metaValue">Security • CV • Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
