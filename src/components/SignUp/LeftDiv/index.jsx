import React from 'react';
import * as yup from 'yup';
import styles from './style.module.css';
import Container from '../../Container';
import Image from '../../Image';
import { Typography } from '../../Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/pathes';
import { useAuthContext } from '../../../context/AuthContext';
import OrSeprator from "../../OrSeprator";

const inputs = [
  {
    name: 'username',
    id: 'username',
    type: 'text',
    label: 'Username*',
    placeholder: 'Enter username',
  },
  {
    name: 'email',
    id: 'email',
    type: 'email',
    label: 'Email address*',
    placeholder: 'Enter email address',
  },
  {
    name: 'password',
    id: 'password',
    type: 'password',
    label: 'Password*',
    placeholder: 'password',
  },
  {
    name: 'rPassword',
    id: 'rPassword',
    type: 'password',
    label: 'Repeat password*',
    placeholder: 'Repeat password',
  },
];

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 8 characters long')
    .matches(
      RegExp('(.*[a-z].*)'),
      'Password must contain at least one Lowercase letter'
    )
    .matches(RegExp('(.*\\d.*)'), 'Password must contain at least one Number ')
    ,
  rPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const LeftDiv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { signup, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const onHandleSubmit = (body) => {
    const data = {
      email: body?.email,
      name: body?.username,
      password: body?.password,
    };
    signup(data);
  };
  return (
    <div className={styles.section}>
      <div
        className={styles.back__btn}
        onClick={() => {
          navigate(PATHS.LOGIN);
        }}>
        <Image ImageSrc={'/assets/arrow_back_ios_24px.svg'} />
        <Typography variant={'h6'}>Back</Typography>
      </div>
      <Container>
        <div className={styles.leftDiv}>
          <div className={styles.leftDiv__text}>
            <Typography variant={'h3'}>Register Individual Account!</Typography>
            <Typography variant={'h5'}>
              For the purpose of gamers regulation, your details are required.
            </Typography>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
            {inputs.map((input) => (
              <div key={input.id} className={styles.form__group}>
                <label htmlFor={input.id} className={styles.form__label}>
                  <Typography variant={'h6'}>{input.label}</Typography>
                </label>
                <input
                  {...register(input.name)}
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  className={styles.form__input}
                  placeholder={input.placeholder}
                />
                {errors[input.name] && (
                  <span className={styles.errors}>
                    {errors[input.name].message}
                  </span>
                )}
              </div>
            ))}
            <button type='submit' className={styles.form__submit}>
              {isLoading ? 'loading..' : 'Register'}  
            </button>
          </form>
          <OrSeprator/>
        <button 
          className={styles.login_button}
          onClick={() => {
            navigate(PATHS.LOGIN);
          }}
        >
          login
        </button>
        </div>
      </Container>
    </div>
  );
};


export default LeftDiv;
