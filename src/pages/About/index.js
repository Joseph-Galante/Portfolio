import { useState } from "react";
import { Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import Page from "../../components/Page";
import Button from "../../components/Button";
import Chip from "../../components/Chip";
import Diamond from "../../components/Diamond";
import Highlighter from "../../components/Highlighter";
import SkillSet from "../../components/SkillSet";
import { SCENE_BULLETS, SCENE_SKILLS } from "./constants";
import {
  FLEX_HORIZONTAL_LIST,
  FLEX_VERTICAL_LIST,
  HARD_SKILLS,
  SOFT_SKILLS,
  SCENE_URL,
} from "../../shared/constants";
import styles from "./styles.module.scss";

const About = () => {
  const [redirect, setRedirect] = useState("");

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
        <Box maxWidth="35%" height="100%">
          <Box {...FLEX_VERTICAL_LIST} gap="10px">
            <h2>Skills</h2>
            <Box {...FLEX_HORIZONTAL_LIST} gap={1}>
              <Chip label={"Hard"} />
              <Chip label={"Soft"} color="tertiary" />
            </Box>
          </Box>

          <SkillSet skills={[...HARD_SKILLS, ...SOFT_SKILLS]} mt={5} />
        </Box>

        <Box maxWidth="55%" height="100%">
          <Box {...FLEX_VERTICAL_LIST} gap="10px">
            <h2>Experience</h2>
          </Box>

          <Box {...FLEX_VERTICAL_LIST} columnGap={1} rowGap={1.5} mt={8}>
            <a
              className={styles.scene}
              href={SCENE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Scene Health</h2>
            </a>
            <Box textAlign="start">
              <Highlighter
                extraClassnames={styles.description}
                text="In my initial professional software development role at a dynamic healthcare tech start-up, I honed my skills in a fast-paced, collaborative setting. This position offered me profound insights into industry standards and workflows, with the company adopting a two-week sprint cycle that enhanced my adaptability and proficiency while I regularly:"
                keyWords={[
                  "professional",
                  "dynamic",
                  "start-up,",
                  "collaborative",
                  "insights",
                  "standards",
                  "enhanced",
                  "adaptability",
                  "proficiency",
                ]}
              />

              <Box {...FLEX_VERTICAL_LIST} rowGap={2} mt={2}>
                {SCENE_BULLETS.map(({ text, keyWords }, i) => (
                  <Box
                    key={`scene-bullets-${i}`}
                    {...FLEX_HORIZONTAL_LIST}
                    flexWrap="nowrap"
                    columnGap={2}
                  >
                    <Diamond size="10px" extraClassnames={styles.bullet} />
                    <Highlighter
                      extraClassnames={styles.bulletPoint}
                      text={text}
                      keyWords={keyWords}
                    />
                  </Box>
                ))}
              </Box>
              <SkillSet skills={SCENE_SKILLS} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default About;
