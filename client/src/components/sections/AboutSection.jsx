import React from "react";
import styles from "./styles/AboutSection.module.css";

// formula presentation
const Formula = () => {
  return (
    <div className={styles.formulaContainer}>
      <p className={styles.formulaHeader}>Distance Formula:</p>
      <p className={styles.formula}>
        <span>d = </span>
        <span style={{ fontSize: "22px" }}>&#8730;</span>
        <span>&nbsp;(x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup></span>
      </p>
      <p className={styles.formulaDescription}>
        This formula calculates the Euclidean distance between two points (x₁, y₁) and (x₂, y₂).
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h1 className={styles.header}>How It Works!</h1>
        <p className={styles.paragraph}>
          This section features an interactive animated canvas in the background, powered by the HTML Canvas API and JavaScript. It creates a dynamic effect with bouncing bubbles that connect with lines when they approach each other or the mouse pointer.
        </p>
        <p className={styles.paragraph}>
        The animation is fully responsive, adjusting to screen size changes and user interactions, while the foreground content showcases key information in a clean and modern layout.
        </p>

        {/* The Formula */}
        <Formula />
      </div>
    </div>
  );
};

export default AboutSection;
