import React from "react";
import MuiChip from "@mui/material/Chip";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  label: string,
  variant?: "filled" | "outlined",
  color?: "primary" | "secondary" | "tertiary",
};

const Chip = ({
  extraClassnames,
  variant = "outlined",
  color = "secondary",
  ...rest
}: Props) => {
  const COLOR_STYLES = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };
  const givenColor = COLOR_STYLES[color];
  const colorStyle = givenColor ? givenColor : COLOR_STYLES.secondary;

  return (
    <MuiChip
      classes={{ root: classNames(styles.chip, extraClassnames, colorStyle) }}
      variant={variant}
      {...rest}
    />
  );
};

export default Chip;
