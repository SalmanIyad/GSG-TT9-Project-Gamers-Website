import React from 'react';
import styles from './style.module.css';
import { Typography } from '../../components/Typography';
import { useAuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.profile}>
      <div className={styles.profile_img}>
        <img src='assets/profile_img.jpg' alt='profile pic' />
      </div>
      <div className={styles.text}>
        <Typography variant={'h3'}>User Name: {user?.name}</Typography>
        <Typography variant={'h3'}>User Email: {user?.email} </Typography>
        <Typography variant={'h3'}>
          User type: {user?.isAdmin ? 'Admin' : 'User'}
        </Typography>
      </div>
    </div>
  );
};

export default ProfilePage;
