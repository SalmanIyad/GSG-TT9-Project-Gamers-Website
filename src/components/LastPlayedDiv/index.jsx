import React from 'react';
import styles from './style.module.css';
import { Typography } from '../Typography';
import { useThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../constants';

const LastPlayedDiv = ({ img, text, hover }) => {
  const { theme } = useThemeContext();
  const hovered = () => {
    switch (hover) {
      case 'sky_blue':
        return styles.sky_blue;
      case 'blue':
        return styles.blue;
      case 'green':
        return styles.green;
      case 'yellow':
        return styles.yellow;

      default:
        break;
    }
  };

  return (
    <div
      className={`${styles.div} ${
        theme === THEMES.LIGHT ? styles.div_dark : styles.div_light
      }`}>
      <img className={hovered()} src={img} alt='hero last played' />
      <Typography variant={'h5'}>{text}</Typography>
    </div>
  );
};

export default LastPlayedDiv;
