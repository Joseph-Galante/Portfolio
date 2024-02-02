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
    <Page
      heading={<h1>Projects</h1>}
      controls={
        <Button
          text="Contact Me"
          onClick={() => {
            setRedirect("/contact");
          }}
        />
      }
    >
      {redirect !== "" ? <Redirect to={redirect} /> : null}

      {PROJECTS.map((project) => (
        <Project {...project} />
      ))}
    </Page>
  );
};

export default Projects;
