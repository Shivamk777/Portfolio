import React from 'react'
import styles from "./Hero.module.css";

import heroImage from "/src/assets/hero/heroImage.jpg";
const Hero = () => {
  return (
     <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:shivampatel17119@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
         src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
