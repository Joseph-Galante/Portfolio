import React from "react";

import styles from "./styles.module.scss";

type Props = {
  title: string,
  description: string,
  skillSet: string[],
  thumbnail: string,
  gitUrl: string,
  appUrl?: string,
};

const Project = ({
  title,
  description,
  skillSet,
  thumbnail,
  gitUrl,
  appUrl,
}: Props) => (
  <div className={styles.project}>
    <section className={styles.projectDetails}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skillSet.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
    <section className={styles.thumbnail}>
      <img src={thumbnail} alt="404" width={300} height={150} />
      <span className={styles.thumbnailOptions}>
        <a
          className={styles.toGit}
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.toGitDark}
            src="https://i.imgur.com/J73iQKo.png"
            alt="404"
            width={50}
            height={50}
          />
          <img
            className={styles.toGitLight}
            src="https://i.imgur.com/7ihJ5Q7.png"
            alt="404"
            width={50}
            height={50}
          />
          <p className={styles.toGitTooltip}>View Repo</p>
        </a>
        {appUrl && (
          <a
            className={styles.toApp}
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.toAppDark}
              src="https://i.imgur.com/JDWntEK.png"
              alt="404"
              width={50}
              height={50}
            />
            <img
              className={styles.toAppLight}
              src="https://i.imgur.com/a4O1kq4.png"
              alt="404"
              width={50}
              height={50}
            />
            <p className={styles.toAppTooltip}>Launch App</p>
          </a>
        )}
      </span>
    </section>
  </div>
);

export default Project;
