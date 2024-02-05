import React from "react";
import Box from "@mui/material/Box";
import classNames from "classnames";
import { VARIANT_GAPS } from "./constants";
import { FLEX_HORIZONTAL_LIST } from "../../shared/constants";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  text: string,
  keyWords: string[],
  variant?: "h1" | "h2" | "h4" | "p",
};

const Highlighter = ({
  extraClassnames,
  text,
  keyWords,
  variant = "p",
}: Props) => (
  <Box
    className={classNames(styles.highlighter, extraClassnames)}
    {...FLEX_HORIZONTAL_LIST}
    columnGap={VARIANT_GAPS[variant]}
  >
    {text.split(" ").map((str, i) => (
      <span
        key={str.concat(i)}
        className={classNames({
          [styles.highlighted]: keyWords.includes(str),
        })}
      >
        {str}
      </span>
    ))}
  </Box>
);

export default Highlighter;
