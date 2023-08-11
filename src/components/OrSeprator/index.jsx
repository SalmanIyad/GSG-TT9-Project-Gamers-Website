import React, { Component } from 'react';
import styles from './style.module.css';

export default class Or extends Component {
  render() {
    return (
      <div className={styles.or__serprate}>
        <span></span>
        <div className={styles.or__text}>Or</div>
        <span></span>
      </div>
    );
  }
}
