import { useState } from "react";
import { Redirect } from "react-router-dom";

import Project from "../../components/Project";
import Button from "../../components/Button";
import { PROJECTS } from "./constants";

import styles from "./styles.module.scss";

const Projects = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <div className={styles.page}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <h1>Projects</h1>
      {PROJECTS.map((project) => (
        <Project {...project} />
      ))}

      <Button
        text="Contact Me"
        onClick={() => {
          setRedirect("/contact");
        }}
      />
    </div>
  );
};

export default Projects;
