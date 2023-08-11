import React from 'react';
import styles from './style.module.css';
import RightDiv from '../../components/Login/RightDiv';
import LeftDiv from '../../components/Login/LeftDiv';

const LoginPage = () => {
  return (
    <section className={styles.section}>
      <RightDiv />
      <LeftDiv />
    </section>
  );
};

export default LoginPage;
