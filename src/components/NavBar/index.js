import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { PAGES } from "./constants";

import styles from "./styles.module.scss";

const NavBar = () => {
  const location = useLocation();
  const { pathname: path } = location;

  return (
    <nav className={styles.navBar}>
      {PAGES.map(({ to, title, Icon }) => (
        <Link
          key={`nav-bar-${title}`}
          to={to}
          className={classNames(styles.navLink, {
            [styles.active]: path === to,
          })}
        >
          <Icon />
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
