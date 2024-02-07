import { useState } from "react";
import { Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import Page from "../../components/Page";
import Project from "../../components/Project";
import Button from "../../components/Button";
import { PROJECTS } from "./constants";
import { FLEX_VERTICAL_LIST } from "../../shared/constants";

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

      <Box {...FLEX_VERTICAL_LIST} rowGap={14}>
        {PROJECTS.map((project) => (
          <Project key={`${project.title}-project`} {...project} />
        ))}
      </Box>
    </Page>
  );
};

export default Projects;
