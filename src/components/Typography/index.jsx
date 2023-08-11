import React from 'react';
import styles from './style.module.css';
import { THEMES } from '../../constants';
import { useThemeContext } from '../../context/ThemeContext';

export const Typography = ({ children, variant, registerRedirect }) => {
  const { theme } = useThemeContext();
  
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`${styles.t__h1} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`${styles.t__h2} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`${styles.t__h3} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`${styles.t__h4} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={`${styles.t__h5} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          onClick={registerRedirect ? registerRedirect : () => {}}
          className={`${styles.t__h6} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}
        </h6>
      );
    case 'body1':
      return (
        <p
          className={`${styles.t__body1} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}{' '}
        </p>
      );
    case 'body2':
      return (
        <p
          className={`${styles.t__body2} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}{' '}
        </p>
      );
    case 'span':
      return (
        <span
          className={`${styles.t__span} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}{' '}
        </span>
      );
    case 'caption':
      return (
        <span
          className={`${styles.t__caption} ${
            theme === THEMES.DARK ? styles.light : styles.dark
          }`}>
          {children}{' '}
        </span>
      );
    default:
      break;
  }
};
