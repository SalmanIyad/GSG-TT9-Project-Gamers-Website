import React, { Component } from 'react';
import styles from './style.module.css';
import Image from '../Image';

export default class SocialIcon extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className={styles.icon}>
        <Image ImageSrc={icon} />
      </div>
    );
  }
}
