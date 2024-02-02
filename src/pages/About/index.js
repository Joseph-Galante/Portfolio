import { useState } from "react";
import { Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import Page from "../../components/Page";
import Button from "../../components/Button";
import Chip from "../../components/Chip";
import { HARD_SKILLS, SOFT_SKILLS } from "./constant";
import {
  FLEX_HORIZONTAL_LIST,
  FLEX_VERTICAL_LIST,
} from "../../shared/constants";
import styles from "./styles.module.scss";

const About = () => {
  const [redirect, setRedirect] = useState("");
  const skills = [...HARD_SKILLS, ...SOFT_SKILLS].sort();

  return (
    <Page
      heading={<h1>About</h1>}
      controls={
        <Button
          text="Check Out My Projects"
          onClick={() => {
            setRedirect("/projects");
          }}
        />
      }
    >
      {redirect !== "" ? <Redirect to={redirect} /> : null}

      <Box
        {...FLEX_HORIZONTAL_LIST}
        justifyContent="space-between"
        width="100%"
      >
        <Box width="45%" height="100%">
          <Box {...FLEX_VERTICAL_LIST} gap="10px" mt={3}>
            <h2>Skills</h2>
            <Box {...FLEX_HORIZONTAL_LIST} gap={1}>
              <Chip label={"Hard"} />
              <Chip label={"Soft"} color="tertiary" />
            </Box>
          </Box>

          <Box {...FLEX_HORIZONTAL_LIST} columnGap={1} rowGap={1.5} mt={6}>
            {skills.map((skill) => (
              <Chip
                label={skill}
                color={HARD_SKILLS.includes(skill) ? "secondary" : "tertiary"}
              />
            ))}
          </Box>
        </Box>

        <Box width="45%" height="100%">
          <Box {...FLEX_VERTICAL_LIST} gap="10px" mt={3}>
            <h2>Experience</h2>
          </Box>

          <Box {...FLEX_VERTICAL_LIST} columnGap={1} rowGap={1.5} mt={6}>
            <h2 className={styles.scene}>Scene Health</h2>
            <Box textAlign="start">
              A fast-paced tech start-up in the healthcare industry with the
              mission of connecting patients and healthcare specialists across
              the globe.
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default About;
