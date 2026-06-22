import React from "react";
import { meta } from "../../data/resumeData";
import styles from "./Hero.module.css";

const STATS = [
  ["9+", "Years Experience"],
  ["4",  "Companies"],
  ["7",  "Key Projects"],
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Ambient glow blobs */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.badge} fade-up delay-1`}>
          <span className={styles.dot} aria-hidden="true" />
          Available for opportunities
        </div>

        <h1 className={`${styles.title} fade-up delay-2`}>
          {meta.name.split(" ")[0]}
          <br />
          <span className={styles.titleGrad}>{meta.name.split(" ")[1]}</span>
        </h1>

        <p className={`${styles.sub} fade-up delay-3`}>
          {meta.summary}
        </p>

        <div className={`${styles.actions} fade-up delay-4`}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>

        <div className={`${styles.stats} fade-up delay-5`}>
          {STATS.map(([num, label]) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
