/* eslint-disable eqeqeq */
import React, { useState, Fragment } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './style.module.css';
import { Typography } from '../../Typography';
import { socialIcons } from '../../../mock/data';
import SocialIcon from '../../SocialIcon';
import Container from '../../Container';
import Or from '../../OrSeprator';
import Image from '../../Image';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/pathes';
import { useAuthContext } from '../../../context/AuthContext';

const inputs = [
  {
    name: 'email',
    id: 'email',
    type: 'email',
    label: 'Your email',
    placeholder: 'Enter email address',
  },
  {
    name: 'password',
    id: 'password',
    type: 'password',
    label: 'Enter your password',
    placeholder: 'Enter your password'
  },
];

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      RegExp('(.*[a-z].*)'),
      'Password must contain at least one Lowercase letter'
    )
    .matches(RegExp('(.*\\d.*)'), 'Password must contain at least one Number ')
    ,
});

const LeftDiv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onHandleSubmit = (body) => {
    login(body);
  };

  return (
    <Container>
      <section className={styles.left__div}>
        <div className={styles.left__div__text}>
          <Typography variant={'h2'}>Join the game!</Typography>
          <Typography variant={'h5'}>
            Go inside the best gamers social network!
          </Typography>
        </div>
        <div className={styles.social__icons}>
          {socialIcons.map(({ icon }) => (
            <SocialIcon key={icon} icon={icon} />
          ))}
        </div>
        <Or />
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          className={styles.Wrapped__form__group}>
          {inputs.map((input, index) =>
            input.type == 'email' ? (
              <div key={input.id} className={styles.form__group}>
                <label htmlFor={input.id} className={styles.form__label}>
                  <Typography variant={'h6'}>{input.label}</Typography>
                </label>
                <input
                  {...register('email')}
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  className={styles.form__input}
                  placeholder={input.placeholder}
                />
                {errors.email && (
                  <span className={styles.errors}>{errors.email.message}</span>
                )}
              </div>
            ) : (
              <Fragment key={input.id}>
                <div className={styles.form__input__password}>
                  <label htmlFor={input.id} className={styles.form__label}>
                    <Typography variant={'h6'}>{input.label}</Typography>
                  </label>
                  <input
                    {...register('password')}
                    id={input.id}
                    name={input.name}
                    type={showPassword ? 'text' : 'password'}
                    className={styles.form__input}
                    placeholder={input.placeholder}
                  />
                  {showPassword ? (
                    <svg
                      onClick={handleShowPassword}
                      stroke='gray'
                      fill='gray'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='2rem'
                      width='2rem'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z'></path>
                    </svg>
                  ) : (
                    <Image
                      handleShowPassword={handleShowPassword}
                      ImageSrc='/assets/Vector.svg'
                    />
                  )}
                </div>
                {errors.password && (
                  <span className={styles.errors}>
                    {errors.password.message}
                  </span>
                )}
              </Fragment>
            )
          )}
          <button type='submit' className={styles.form__submit}>
            {isLoading ? 'loading...' : 'Login'}
          </button>
        </form>
        <div className={styles.register}>
          <Typography variant={'h6'}>
            Don’t have an account?{' '}
            <span
              onClick={() => {
                navigate(PATHS.SIGNUP);
              }}>
              Register
            </span>
          </Typography>
        </div>
      </section>
    </Container>
  );
};

export default LeftDiv;
