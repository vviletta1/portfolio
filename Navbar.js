import React, { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const items = useMemo(
    () =>
      navLinks.map((l) => (
        <a key={l.href} href={l.href} className="nav__link" onClick={close}>
          {l.label}
        </a>
      )),
    []
  );

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={close}>
          <span className="nav__dot" aria-hidden="true" />
          Violetta
        </a>

        <nav className="nav__links" aria-label="Primary">
          {items}
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__overlay" role="dialog" aria-modal="true">
          <div className="nav__panel">
            <div className="nav__panelTop">
              <span className="nav__panelTitle">Menu</span>
              <button className="nav__close" type="button" onClick={close} aria-label="Close menu">
                ×
              </button>
            </div>
            <div className="nav__panelLinks">{items}</div>
            <div className="nav__panelHint">
              <span className="badge">Neon Yellow Theme</span>
            </div>
          </div>
          <button className="nav__backdrop" type="button" aria-label="Close menu" onClick={close} />
        </div>
      )}
    </header>
  );
}
