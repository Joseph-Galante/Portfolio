import React from "react";
import Box from "@mui/material/Box";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  size?: string,
};

const Diamond = ({ extraClassnames, size = "5px" }: Props) => (
  <Box
    className={classNames(styles.diamond, extraClassnames)}
    sx={{ width: size, minWidth: size, height: size, minHeight: size }}
  />
);

export default Diamond;
