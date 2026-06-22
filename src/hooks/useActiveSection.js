import { useState, useEffect } from "react";

const SECTIONS = ["home", "skills", "experience", "projects", "certifications", "contact"];

/**
 * Returns the id of the section currently in view,
 * based on scroll position relative to each section's offsetTop.
 */
export function useActiveSection(offset = 120) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return active;
}
