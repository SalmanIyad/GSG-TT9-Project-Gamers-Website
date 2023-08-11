import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';

const NotFound = () => {
  return (
    <div className='container'>
      <h1 className='error-code'>404</h1>
      <p className='error-message'>Oops! Page not found</p>
      <p>
        Go back to{' '}
        <Link to={PATHS.HOME} className='back-link'>
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
