import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { meta } from "../../data/resumeData";
import styles from "./Contact.module.css";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
    </svg>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className={styles.box}>
        <p className="section-label" style={{ textAlign: "center" }}>Let's Connect</p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "0.75rem" }}>Get in Touch</h2>
        <p className={styles.sub}>
          Open to new roles, freelance projects and collaborations. Reach out directly.
        </p>
        <div className={styles.links}>
          <a href={`mailto:${meta.email}`} className={styles.link}>
            <MailIcon />
            {meta.email}
          </a>
          <a href={`tel:${meta.phone}`} className={styles.link}>
            <PhoneIcon />
            {meta.phone}
          </a>
          <a href="https://www.linkedin.com/in/yasar-arafat-95ab53103/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
