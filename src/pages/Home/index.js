import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Highlighter from "../../components/Highlighter";
import {
  FLEX_HORIZONTAL_LIST,
  FLEX_VERTICAL_LIST,
} from "../../shared/constants";
import styles from "./styles.module.scss";

const Home = () => {
  const [redirect, setRedirect] = useState("");

  return (
    <Page extraClassnames={styles.home}>
      {redirect !== "" ? <Redirect to={redirect} /> : null}
      <Box {...FLEX_VERTICAL_LIST} textAlign="start">
        <h2 className={styles.greeting}>{"> start greeting.exe"}</h2>
        <h1 className={styles.introduction}>Hello! I'm</h1>
        <h1 className={styles.name}>Joe Galante</h1>
        <Box
          className={styles.journey}
          {...FLEX_HORIZONTAL_LIST}
          columnGap={1}
          mt={2}
        >
          <h2>Electrical Engineer</h2>
          <h2>turned</h2>
          <h2>Software Developer</h2>
        </Box>
        <Highlighter
          extraClassnames={styles.summary}
          text="A highly self-motivated and naturally curious perfectionist with a passion for offering creative solutions for UX/UI"
          keyWords={["self-motivated", "perfectionist", "creative"]}
          variant="h4"
        />
        <Button
          text="Read More About Me"
          onClick={() => {
            setRedirect("/about");
          }}
        />
      </Box>
    </Page>
  );
};

export default Home;
