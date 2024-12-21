import React from "react";
import styles from "./styles/AboutSection.module.css";


const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <h1 className={styles.header}> ABOUT ME</h1>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed iusto cupiditate, cum repudiandae dolore adipisci. Distinctio perspiciatis, beatae debitis est ex voluptates et culpa ratione fugiat, corporis, consectetur cupiditate?</p>
            </div>
        </div>
    );
}


export default AboutSection