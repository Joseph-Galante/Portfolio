import React from "react";
import classNames from "classnames";
import { VARIANT_STYLES } from "./constants";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  variant?: "filled" | "outlined" | "text",
  text: string,
  onClick: () => void,
};

const Button = ({
  extraClassnames,
  variant = "outlined",
  text,
  onClick,
}: Props) => (
  <input
    className={classNames(
      styles.button,
      extraClassnames,
      VARIANT_STYLES[variant]
    )}
    type="button"
    value={text}
    onClick={onClick}
  />
);

export default Button;
