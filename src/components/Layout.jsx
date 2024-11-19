import React from 'react';
import BackGroundImage from '../assets/images/background2.jpg'; // Adjust the path as necessary
import styles from './LayoutStyles.module.css'; // Make sure the CSS is correctly imported

const Layout = ({ children }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${BackGroundImage})` }}
    >
      <div className={styles.sideMargins}></div>
      <main className={styles.content}>{children}</main>
      <div className={styles.sideMargins}></div>
    </div>
  );
};

export default Layout;
