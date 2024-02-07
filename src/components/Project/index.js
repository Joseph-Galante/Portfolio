import React from "react";
import Box from "@mui/material/Box";
import SkillSet from "../SkillSet";
import styles from "./styles.module.scss";
import {
  FLEX_HORIZONTAL_LIST,
  FLEX_VERTICAL_LIST,
} from "../../shared/constants";
import Highlighter from "../Highlighter";
import classNames from "classnames";

type Props = {
  title: string,
  currentStatus?: string,
  description: { text: string, keyWords: string[] },
  skillSet: string[],
  thumbnail: string,
  gitUrl: string,
  appUrl?: string,
};

const Project = ({
  title,
  description: { text, keyWords },
  currentStatus,
  skillSet,
  thumbnail,
  gitUrl,
  appUrl,
}: Props) => (
  <Box
    {...FLEX_HORIZONTAL_LIST}
    justifyContent="space-between"
    rowGap={3}
    width="100%"
  >
    <Box {...FLEX_VERTICAL_LIST} gap={3} minWidth="60%" maxWidth="100%">
      <Box {...FLEX_VERTICAL_LIST} rowGap={1} width="100%">
        <h2 className={styles.title}>{title}</h2>
        <Box {...FLEX_HORIZONTAL_LIST} gap={2}>
          <a
            className={classNames(styles.link, {
              [styles.disabledLink]: !gitUrl,
            })}
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </a>
          <a
            className={classNames(styles.link, {
              [styles.disabledLink]: !appUrl,
            })}
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </Box>
        {currentStatus && (
          <h4 className={styles.currentStatus}>{currentStatus}</h4>
        )}
      </Box>
      <Highlighter text={text} keyWords={keyWords} />
      <SkillSet skills={skillSet} mt={0} />
    </Box>
    {thumbnail && (
      <img src={thumbnail} alt="No screenshot available" height={192} />
    )}
  </Box>
);

export default Project;
