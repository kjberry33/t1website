import React from 'react';
import styles from './ToolTechCardStyles.module.css'; 

function ToolTechCard({ name, description, imageUrl, link }) {
  return (
    <>
      <a href={link} target="blank">
        <div className={styles.card}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={name} className={styles.cardImage} />
            <h4 className={styles.cardTitle}>{name}</h4>
            <p className={styles.cardDescription}>{description}</p>
          </a>
        </div>
      </a>
    </>
  );
}

export default ToolTechCard;
