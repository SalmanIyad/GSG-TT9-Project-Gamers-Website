import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { ImageSrc, handleShowPassword } = this.props;
    return (
      <img
        src={ImageSrc}
        alt='img'
        onClick={handleShowPassword ? handleShowPassword : () => {}}
      />
    );
  }
}
