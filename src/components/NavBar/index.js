import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "./constants";
import styles from "./styles.module.scss";

const NavBar = () => (
  <nav className={styles.navBar}>
    {PAGES.map(({ to, title }) => (
      <Link key={`nav-bar-${title}`} to={to} className={styles.navLink}>
        {title}
      </Link>
    ))}
  </nav>
);

export default NavBar;
