import React from "react";
import Box from "@mui/material/Box";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../shared/constants";
import styles from "./styles.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    {/* <section className={styles.projectsSection}>
      <h4>My Projects</h4>
      <a
        href="https://github.com/Joseph-Galante/Demons-Respite"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demon's Respite
      </a>
      <br />
      <a
        href="https://github.com/Joseph-Galante/U2_Project_Frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Minecraft Recipe Finder
      </a>
      <br />
      <a
        href="https://github.com/Joseph-Galante/WorkBear_App"
        target="_blank"
        rel="noopener noreferrer"
      >
        WorkBear
      </a>
      <br />
      <a
        href="https://github.com/Joseph-Galante/Final_Project_Frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Anduin
      </a>
    </section> */}

    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <span>jgalante00@gmail.com</span>
        <Box className={styles.divider} />
        <span>845-764-1333</span>
      </div>
      <section className={styles.contactLinks}>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <Box className={styles.divider} />
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Box className={styles.divider} />
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
    </section>
  </div>
);

export default Footer;
