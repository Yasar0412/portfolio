import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { projects } from "../../data/resumeData";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">Key Projects</h2>
      <p className="section-sub">
        Delivered across consumer banking, telecom, HR, and IoT-connected vehicle tracking.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
