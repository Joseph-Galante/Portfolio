import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import classNames from "classnames";
import { FLEX_VERTICAL_LIST } from "../../shared/constants";
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
    {...FLEX_VERTICAL_LIST}
    mb="40px"
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
    <Box className={styles.content}>{children}</Box>
  </Box>
);

export default Page;
