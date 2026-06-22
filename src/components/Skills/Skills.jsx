import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { skills } from "../../data/resumeData";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <p className="section-label">What I Know</p>
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-sub">
        A breadth of frontend expertise paired with strong architectural sensibility.
      </p>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.label} className={styles.card}>
            <span className={styles.cardLabel}>{skill.label}</span>
            <div className={styles.tags}>
              {skill.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
