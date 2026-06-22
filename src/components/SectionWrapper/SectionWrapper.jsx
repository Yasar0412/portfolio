import React from "react";
import { useInView } from "../../hooks/useInView";
import "../../styles/global.css";

/**
 * Wraps any section with a scroll-triggered fade-up animation.
 * Props:
 *   id        – HTML id for anchor nav
 *   children  – section content
 *   className – optional extra class
 */
export default function SectionWrapper({ id, children, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
      }}
    >
      {children}
    </section>
  );
}
