import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">AI & Robotics • Frontend + AI Builder</p>
        <h1 className="hero__title">
          Hey, I’m <span className="accent">Violetta</span>.
        </h1>
        <p className="hero__subtitle">
          I build practical AI tools (chatbots, security helpers, analytics) with clean UI — focused on real-world impact and
          delightful user experience.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero__scroll">
          <a href="#about" className="scrollHint" aria-label="Scroll to About">
            <span className="scrollHint__mouse" aria-hidden="true" />
            <span className="scrollHint__text">Scroll</span>
          </a>
        </div>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
}
