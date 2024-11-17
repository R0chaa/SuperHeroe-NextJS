import { useState } from 'react';
import styles from './HeroCard.module.css';

const HeroCard = ({ name, image, intelligence = 0, strength = 0 }) => {
  const [isImageError, setIsImageError] = useState(false);

  const imageUrl = isImageError || !image ? '/noHeroe.png' : image;

  return (
    <article className={styles.heroCard}>
      <img
        src={imageUrl}
        alt={name}
        className={styles.heroImage}
        onError={() => setIsImageError(true)} 
      />
      <h1 className={styles.heroName}>{name}</h1>
      <p className={styles.heroStat}>
        Intelligence:
        <span
          className={styles.heroStatBar}
          style={{ width: `${intelligence}%`, backgroundColor: '#007aff' }}
        ></span>
      </p>
      <p className={styles.heroStat}>
        Strength:
        <span
          className={styles.heroStatBar}
          style={{ width: `${strength}%`, backgroundColor: '#731d1b' }}
        ></span>
      </p>
    </article>
  );
};

export default HeroCard;
