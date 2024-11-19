import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/SidebarStyles.module.css';

function Sidebar({ menuOpen, toggleMenu }) {
  return (
    <div className={`${styles.sidebar} ${menuOpen ? styles.show : ''}`}>
      {/* Collapse button on the top-right */}
      <button className={styles.collapseButton} onClick={toggleMenu}>
        <span className={styles.collapseArrow}>←</span> {/* Collapse arrow */}
      </button>

      <h1 className={styles.sidebarTitle}>T1 - Cybriant Attack Surface Management</h1>

      <ul className={styles.navList}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/demo" onClick={toggleMenu}>
            Demo Video
          </Link>
        </li>
        <li>
          <Link to="/report" onClick={toggleMenu}>
            Final Report
          </Link>
        </li>
        <li>
          <Link to="/looker" onClick={toggleMenu}>
            Looker Studio
          </Link>
        </li>
        <li>
          <Link to="/code" onClick={toggleMenu}>
            Source Code
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
