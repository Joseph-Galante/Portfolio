import { useState } from "react";
import { Redirect } from "react-router-dom";

import Page from "../../components/Page";
import Project from "../../components/Project";
import Button from "../../components/Button";
import { PROJECTS } from "./constants";

import styles from "./styles.module.scss";

const Projects = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <Page>
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
        extraClassnames={styles.toContact}
      />
    </Page>
  );
};

export default Projects;
