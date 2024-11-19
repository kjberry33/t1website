import React from 'react';
import LinkedIN from '../assets/images/linkedin.png';
import styles from './TeamMemberStyles.module.css'; // Import the CSS Module

function TeamMember({ name, role, imageUrl, profileUrl, linkedinUrl }) {
  return (
    <div className={styles.teamMember}>
      <a href={profileUrl} target="_blank"><img src={imageUrl} alt={name} className={styles.uniformSize} /></a> {/* Uniformly sized circular image */}
      <h4 className={styles.name}>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">{name}</a>
      </h4>
      <p className={styles.role}>{role}</p>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img src={LinkedIN} alt="LinkedIn" className={styles.linkedinIcon} />
      </a>
    </div>
  );
}

export default TeamMember;

