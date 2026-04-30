import React, { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "Someone"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );
    return `mailto:violettabasdenn@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="Want to collaborate, hire me, or just say hi? Send a message."
        />

        <div className="contactGrid">
          <form className="form card card--soft" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span className="field__label">Name</span>
              <input
                className="field__input"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                className="field__input"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                type="email"
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                className="field__input field__textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me what you’re building, what you need help with, or what role you’re hiring for…"
                rows={6}
              />
            </label>

            <div className="stack">
              <a className="btn btn--primary" href={mailto}>
                Open Email
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

            <p className="muted">
              Tip: the button opens your email app with the message filled in (no backend needed).
            </p>
          </form>

          <div className="contactSide">
            <div className="card">
              <h3 className="card__title">Quick links</h3>
              <div className="linkList">
                <a className="linkList__item" href="mailto:violettabasdenn@gmail.com">
                  Email: violettabasdenn@gmail.com
                </a>
                <a
                  className="linkList__item"
                  href="https://github.com/vviletta1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub: @vviletta1
                </a>
                <a
                  className="linkList__item"
                  href="https://www.linkedin.com/in/violetta-basden-aa4b95171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn: Violetta Basden
                </a>
              </div>
            </div>

            <div className="card card--outline">
              <h3 className="card__title">What I’m looking for</h3>
              <p className="text">
                Roles where I can combine <span className="accent">technical support / customer experience</span> with building
                and improving AI-powered products.
              </p>
              <p className="text muted">Remote or hybrid • Houston, TX area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
