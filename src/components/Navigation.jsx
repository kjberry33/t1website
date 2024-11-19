import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../components/NavigationStyles.module.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={location.pathname === '/' ? styles.active : ''}>
          <a href="/">About</a>
        </li>
        <li className={location.pathname === '/demo' ? styles.active : ''}>
          <a href="/demo">Demo Video</a>
        </li>
        <li className={location.pathname === '/report' ? styles.active : ''}>
          <a href="/report">Final Report</a>
        </li>
        <li className={location.pathname === '/looker' ? styles.active : ''}>
          <a href="/looker">Looker Studio</a>
        </li>
        <li className={location.pathname === '/code' ? styles.active : ''}>
          <a href="/code">Source Code</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
