import React from "react";

import styles from "./styles.module.scss";

type Props = {
  text: string,
  onClick: () => void,
};

const Button = ({ text, onClick }: Props) => (
  <input
    className={styles.button}
    type="button"
    value={text}
    onClick={onClick}
  />
);

export default Button;
