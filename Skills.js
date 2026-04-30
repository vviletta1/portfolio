import React from "react";
import SectionHeader from "./SectionHeader";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "FastAPI",
  "Flask",
  "Git / GitHub",
  "MongoDB",
  "Prompting / LLMs",
  "Computer Vision (basics)",
  "Customer Support Systems (Zendesk/Salesforce)",
];

export default function Skills() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          title="Skills"
          subtitle="Tools I use regularly (and the ones I’m sharpening)."
        />

        <div className="pillGrid">
          {skills.map((s) => (
            <span key={s} className="pill pill--big">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
