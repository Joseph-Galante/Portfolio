import React from "react";
import classNames from "classnames";
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
}: Props) => {
  const VARIANT_STYLES = {
    filled: styles.filled,
    outlined: styles.outlined,
    text: styles.text,
  };
  const givenVariant = VARIANT_STYLES[variant];
  const variantStyle = givenVariant ? givenVariant : VARIANT_STYLES.outlined;

  return (
    <input
      className={classNames(styles.button, extraClassnames, variantStyle)}
      type="button"
      value={text}
      onClick={onClick}
    />
  );
};

export default Button;
