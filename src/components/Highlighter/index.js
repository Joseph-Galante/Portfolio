import React from "react";
import Box from "@mui/material/Box";
import classNames from "classnames";
import { VARIANTS } from "./constants";
import { FLEX_HORIZONTAL_LIST } from "../../shared/constants";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  text: string,
  keyWords: string[],
  variant?: "h1" | "h2" | "h4" | "p",
  disabled?: boolean,
};

const Highlighter = ({
  extraClassnames,
  text,
  keyWords,
  variant = "p",
  disabled = false,
}: Props) => {
  const { style: variantStyle, gap: variantGap } = VARIANTS[variant];

  return (
    <Box
      className={classNames(styles.highlighter, variantStyle, extraClassnames)}
      {...FLEX_HORIZONTAL_LIST}
      columnGap={variantGap}
    >
      {text.split(" ").map((str, i) => (
        <span
          key={str.concat(i)}
          className={classNames({
            [styles.highlighted]: !disabled && keyWords.includes(str),
          })}
        >
          {str}
        </span>
      ))}
    </Box>
  );
};

export default Highlighter;
