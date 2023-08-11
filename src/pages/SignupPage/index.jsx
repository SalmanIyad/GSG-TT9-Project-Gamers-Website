import React from 'react';
import styles from './style.module.css';
import RightDiv from '../../components/SignUp/RightDiv';
import LeftDiv from '../../components/SignUp/LeftDiv';

const SignupPage = () => {
  return (
    <section className={styles.section}>
      <RightDiv />
      <LeftDiv />
    </section>
  );
};

export default SignupPage;
