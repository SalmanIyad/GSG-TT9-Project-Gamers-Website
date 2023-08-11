import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';

const MostRecent = () => {
  return (
    <div className={styles.trophy}>
      <Typography variant={'h3'}>most recent trophy</Typography>
      <div className={styles.trophy_img}>
        <div className={styles.cup}>
          <img src='assets/cup.png' alt='' />
        </div>
        <div className={styles.text}>
          <Typography variant={'h4'}>assassin's creed odyssey</Typography>
          <Typography variant={'body1'}>last played: 34 hours ago</Typography>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
