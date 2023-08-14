import React, { useState } from "react";
import * as yup from "yup";
import styles from "./style.module.css";
import Container from "../../Container";
import Image from "../../Image";
import { Typography } from "../../Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/pathes";
import { useAuthContext } from "../../../context/AuthContext";
import OrSeprator from "../../OrSeprator";

const inputs = [
  {
    name: "username",
    id: "username",
    type: "text",
    label: "Username*",
    placeholder: "Enter username",
  },
  {
    name: "email",
    id: "email",
    type: "email",
    label: "Email address*",
    placeholder: "Enter email address",
  },
  {
    name: "password",
    id: "password",
    type: "password",
    label: "Password*",
    placeholder: "password",
  },
  {
    name: "rPassword",
    id: "rPassword",
    type: "password",
    label: "Repeat password*",
    placeholder: "Repeat password",
  },
];

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 8 characters long")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Password must contain at least one Lowercase letter"
    )
    .matches(RegExp("(.*\\d.*)"), "Password must contain at least one Number "),
  rPassword: yup
    .string()
    .required("Repeat password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        }}
      >
        <Image ImageSrc={"/assets/arrow_back_ios_24px.svg"} />
        <Typography variant={"h6"}>Back</Typography>
      </div>
      <Container>
        <div className={styles.leftDiv}>
          <div className={styles.leftDiv__text}>
            <Typography variant={"h3"}>Register Individual Account!</Typography>
            <Typography variant={"h5"}>
              For the purpose of gamers regulation, your details are required.
            </Typography>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
            {inputs.map((input) => (
              <div key={input.id} className={styles.form__group}>
                <label htmlFor={input.id} className={styles.form__label}>
                  <Typography variant={"h6"}>{input.label}</Typography>
                </label>
                <input
                  {...register(input.name)}
                  id={input.id}
                  name={input.name}
                  type={showPassword ? "text" : input.type}
                  className={styles.form__input}
                  placeholder={input.placeholder}
                />  
                {input.name === 'password' ? 
                  (showPassword ? (
                    <svg
                      onClick={handleShowPassword}
                      stroke='#8692A6'
                      fill='#8692A6'
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
                  ))
                : null }
              </div>
            ))}
            <div className={styles.form_checkbox}>
              <label htmlFor='terms'>
                <input
                  type='checkbox'
                  id='terms'
                  {...register('terms')}
                />
                <span className='checkmark'></span>
                I agree to terms & conditions
              </label>
              {errors.terms && (
                <span className={styles.errors}>
                  {errors.terms.message}
                </span>
              )}
            </div>
            <button type="submit" className={styles.form__submit}>
              {isLoading ? "loading.." : "Register"}
            </button>
          </form>
          <OrSeprator />
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
