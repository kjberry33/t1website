import React, { useState } from 'react';
import KSU from '../assets/images/ksu-logo2.png';
import styles from '../components/HeaderStyles.module.css';
import Sidebar from './Sidebar'; // Import Sidebar component

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.banner}>
      <img src={KSU} alt="KSU" />
      <h1 className={styles.title}><a href="https://vite.dev/guide/">Built with React + Vite</a></h1>
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Pass menuOpen and toggleMenu as props to Sidebar */}
      <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
