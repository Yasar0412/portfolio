import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { experience } from "../../data/resumeData";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <p className="section-label">Career</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-sub">
        9+ years across global enterprises and consulting engagements.
      </p>

      <div className={styles.list}>
        {experience.map((job) => (
          <div key={job.company} className={styles.card}>
            <div className={styles.top}>
              <div>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.role}>{job.role}</p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>

            <ul className={styles.bullets}>
              {job.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
