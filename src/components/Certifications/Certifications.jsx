import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { certifications } from "../../data/resumeData";
import styles from "./Certifications.module.css";

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <p className="section-label">Credentials</p>
      <h2 className="section-title">Certifications</h2>
      <p className="section-sub">
        Continuous learning through recognised industry programmes.
      </p>

      <div className={styles.grid}>
        {certifications.map((cert) => (
          <div key={cert.name} className={styles.card}>
            <div className={styles.icon}>
              <StarIcon />
            </div>
            <div>
              <p className={styles.name}>{cert.name}</p>
              <p className={styles.by}>{cert.by}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
