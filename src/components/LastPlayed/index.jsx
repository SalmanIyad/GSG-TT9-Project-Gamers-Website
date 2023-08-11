import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';
import LastPlayedDiv from '../LastPlayedDiv';
import { lastPlayed } from '../../mock/data';

const LastPlayed = () => {
  return (
    <div className={styles.last_played}>
      <Typography variant={'h3'}>Last played</Typography>
      <div className={styles.last_played_children}>
        {lastPlayed.map((p) => (
          <LastPlayedDiv
            key={p.color}
            img={p.img}
            text={p.text}
            hover={p.color}
          />
        ))}
      </div>
    </div>
  );
};

export default LastPlayed;
