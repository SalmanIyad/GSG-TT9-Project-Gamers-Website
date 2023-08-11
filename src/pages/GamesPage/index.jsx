import React from 'react';
import styles from './style.module.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../constants';

const GamesPage = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${styles.div_parent} ${
        theme === THEMES.LIGHT ? styles.light : styles.dark
      }`}>
      <Sidebar />
      <span
        className={`${styles.line} ${
          theme === THEMES.LIGHT ? styles.line_dark : styles.line_light
        }`}></span>
      <main className={styles.main}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default GamesPage;
