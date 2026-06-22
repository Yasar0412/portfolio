import React from "react";
import { meta } from "../../data/resumeData";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const { degree, college, cgpa } = meta.education;

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© {year} {meta.name}. Built with React.</p>
      <span className={styles.edu}>
        {degree.split(" ").slice(0, 2).join(" ")} · {college.split(" ")[0]} · CGPA {cgpa}
      </span>
    </footer>
  );
}
