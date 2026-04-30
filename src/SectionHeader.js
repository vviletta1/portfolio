import React from "react";

export default function SectionHeader({ title, subtitle, center = true }) {
  return (
    <div className={center ? "sectionHeader sectionHeader--center" : "sectionHeader"}>
      <h2 className="sectionHeader__title">{title}</h2>
      {subtitle ? <p className="sectionHeader__subtitle">{subtitle}</p> : null}
      <div className="sectionHeader__line" aria-hidden="true" />
    </div>
  );
}
