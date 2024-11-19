import React from 'react';
import TeamMember from './TeamMember';
import styles from './TeamGridStyles.module.css'; // Import the CSS Module for grid layout
import KeshaunBerry from '../assets/images/KeshaunBerry.png';
import SanCiin from '../assets/images/SanCiin.png';
import DanardMcLemore from '../assets/images/DanardMcLemore.png';
import NickTanner from '../assets/images/NickTanner.png';
import NelsonThairu from '../assets/images/NelsonThairu.png';

function TeamGrid () {
  return(
    <div className={styles.row}> {/* Applying the grid layout */}
      <TeamMember
        name="Keshaun Berry"
        role="Developer"
        imageUrl={KeshaunBerry}
        profileUrl="https://keshaunberry.netlify.app/"
        linkedinUrl="http://linkedin.com/in/keshaun-berry"
      />
      <TeamMember
        name="San Ciin"
        role="Documentation"
        imageUrl={SanCiin}
        profileUrl="https://www.linkedin.com/in/san-ciin"
        linkedinUrl="https://www.linkedin.com/in/san-ciin"
      />
      <TeamMember
        name="Danard McLemore"
        role="Team Leader/Documentation"
        imageUrl={DanardMcLemore}
        profileUrl="https://www.linkedin.com/in/danard-mclemore/"
        linkedinUrl="https://www.linkedin.com/in/danard-mclemore/"
      />
      <TeamMember
        name="Nick Tanner"
        role="Developer"
        imageUrl={NickTanner}
        profileUrl="https://github.com/flawlesscowboy0"
        linkedinUrl="https://www.linkedin.com/in/nicktanner42/"
      />
      <TeamMember
        name="Nelson Thairu"
        role="Developer"
        imageUrl={NelsonThairu}
        profileUrl="https://www.linkedin.com/in/nelsonthairu"
        linkedinUrl="https://www.linkedin.com/in/nelsonthairu"
      />
    </div>
  );
}

export default TeamGrid;
