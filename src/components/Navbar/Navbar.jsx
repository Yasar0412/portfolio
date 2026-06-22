import React from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = ["skills", "experience", "projects", "certifications"];

export default function Navbar({ active }) {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        YA<span className={styles.logoAccent}>.</span>
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${active === id ? styles.linkActive : ""}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:yasarags@gmail.com" className={styles.cta}>
        Hire Me
      </a>
    </nav>
  );
}
