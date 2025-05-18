import React from "react";

import styles from "./Contact.module.css";

// Importing images directly
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} />
          <a href="mailto:shivampatel17119@email.com">shivampatel17119@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} />
          <a
            href="https://www.linkedin.com/in/shivam-patel-a11979247"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/shivam-patel-a11979247
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} />
          <a
            href="https://github.com/Shivamk777"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Shivamk777
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
