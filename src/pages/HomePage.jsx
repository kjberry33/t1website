import React from 'react';
import TeamGrid from '../components/TeamGrid';
import styles from './HomeStyles.module.css';
import Cybriant from '../assets/images/cybriant.png';

// Import your images for the sections
import MyImage1 from '../assets/images/image1.avif';
import MyImage2 from '../assets/images/image2.jpg';
import MyImage3 from '../assets/images/image3.jpg';

function HomePage() {
  console.log("Rendering HomePage");
  return (
    <>
    <main>
      <div className={styles.firstsight}>
        <img src={Cybriant} alt="Cybriant"></img>
        <h1>T1 - Cybriant Attack Surface Management and Analysis</h1>
      </div>
      {/* First Section: Image on left, text on right */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={MyImage1} alt="Image 1" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Objective</h1>
          <p className={styles.description}>
            <h4>Empowering Businesses to Strengthen Their Digital Security</h4>
          We help businesses identify and fix vulnerabilities 
          in their digital environments to improve security, 
          reduce risks, and cut costs associated with data protection
           and insurance premiums.
          </p>
        </div>
      </div>

      {/* Second Section: Image on right, text on left (flipped) */}
      <div className={`${styles.section} ${styles.reverseSection}`}>
        <div className={styles.imageContainer}>
          <img src={MyImage2} alt="Image 2" className={styles.image} />
        </div>
        <div className={styles.textContainerInv}>
          <h1 className={styles.title}>Strategy</h1>
          <p className={styles.description}>
          <h4>Our Approach to Simplifying Security</h4>
          Our attack surface management tool scans digital environments,
           identifies vulnerabilities, and provides actionable insights.
            Powered by Google Cloud and a robust Linux-Python pipeline,
             it offers scalable, real-time security solutions.
              A user-friendly dashboard highlights critical issues,
               enabling businesses to prioritize and resolve threats
                effectively.
          </p>
        </div>
        
      </div>

      {/* Third Section: Image on left, text on right */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <img src={MyImage3} alt="Image 3" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Rationale</h1>
          <p className={styles.description}>
          <h4>Why It Matters</h4>
          Misconfigurations create vulnerabilities that
           lead to data breaches, financial losses, and
            reputational damage. Addressing these risks
             improves security posture, reduces insurance
              premiums, and ensures long-term operational
               resilience.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <h2>Welcome to our website!</h2>
      <p>We are Cybriant Team 1, the number 1 team!</p>
      <TeamGrid />
    </main>
  </>
  );
}

export default HomePage;
