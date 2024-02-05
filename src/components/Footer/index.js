import React from "react";
import Diamond from "../Diamond";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../shared/constants";
import styles from "./styles.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <span>jgalante00@gmail.com</span>
        <Diamond />
        <span>845-764-1333</span>
      </div>
      <section className={styles.contactLinks}>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <Diamond />
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Diamond />
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
    </section>
  </div>
);

export default Footer;
