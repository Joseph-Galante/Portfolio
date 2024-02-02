import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  children: ReactNode,
};

const Page = ({ extraClassnames, children }: Props) => (
  <div className={classNames(styles.page, extraClassnames)}>{children}</div>
);

export default Page;
