import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.error_code}>404</h1>
      <p className={styles.error_message}>This is not he page you are looking for</p>
      <p>
        Go back to{' '}
        <Link to={PATHS.HOME} className={styles.back_link}>
          HomePage
        </Link>
        .
      </p>
    </div>
  );  
};

export default NotFound;
