import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  extraClassnames?: string,
  children: ReactNode,
  heading?: ReactNode,
  controls?: ReactNode,
  showHeading?: boolean,
};

const Page = ({
  extraClassnames,
  children,
  heading,
  controls,
  showHeading = true,
}: Props) => (
  <Box
    className={classNames(styles.page, extraClassnames)}
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="flex-start"
  >
    {showHeading && heading && (
      <Box
        className={styles.heading}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {heading}
        {controls}
      </Box>
    )}
    {children}
  </Box>
);

export default Page;
