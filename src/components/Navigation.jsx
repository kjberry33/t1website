import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../components/NavigationStyles.module.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={location.pathname === "/" ? styles.active : ""}>
          <Link to="/">About</Link>
        </li>
        <li className={location.pathname === "/demo" ? styles.active : ""}>
          <Link to="/demo">Demo Video</Link>
        </li>
        <li className={location.pathname === "/report" ? styles.active : ""}>
          <Link to="/report">Final Report</Link>
        </li>
        <li className={location.pathname === "/looker" ? styles.active : ""}>
          <Link to="/looker">Looker Studio</Link>
        </li>
        <li className={location.pathname === "/code" ? styles.active : ""}>
          <Link to="/code">Source Code</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;