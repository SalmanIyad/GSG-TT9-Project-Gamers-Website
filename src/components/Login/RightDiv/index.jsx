import React from 'react';
import styles from './style.module.css';
import { Typography } from '../../Typography';
import Image from '../../Image';
import Container from '../../Container';

const RightDiv = () => {
  return (
    <Container>
      <div className={styles.right__div}>
        <div className={styles.right__div__icon}>
          <Image ImageSrc='/assets/Group 3.svg' />
          <Typography variant='h1'>Gamers</Typography>
        </div>
        <div className={styles.right__div__text}>
          <div className={styles.qout}>“</div>
          <Typography variant='body1'>
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </Typography>
          <Typography variant='h4'>Hideo Kojima</Typography>
        </div>
        <div className={styles.right__div__image}>
          <Image ImageSrc='/assets/superscene-34-joystick_trans 1.png' />
        </div>
      </div>
    </Container>
  );
};

export default RightDiv;
