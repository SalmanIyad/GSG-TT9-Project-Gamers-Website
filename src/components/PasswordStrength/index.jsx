import style from './style.module.css';

const PasswordStrength = ({ strength }) => {
  if (strength >= 100) {
    return (
      <article className={style.password_strength}>
        <div className={style.backLine}>
          <div className={style.password_strength_meter_very_strong}></div>
        </div>
        <div className={style.reasons_very_strong}>Very Strong Password</div>
      </article>
    );
  } else if (strength >= 80) {
    return (
      <article className={style.password_strength}>
        <div className={style.backLine}>
          <div className={style.password_strength_meter_strong}></div>
        </div>
        <div className={style.reasons_strong}>You are good to go</div>
      </article>
    );
  } else if (strength >= 60) {
    return (
      <article className={style.password_strength}>
        <div class={style.backLine}>
          <div className={style.password_strength_meter_medium}></div>
        </div>
        <div className={style.reasons_medium}>
          Not bad but you know you can do it better
        </div>
      </article>
    );
  } else if (strength >= 40) {
    return (
      <article className={style.password_strength}>
        <div class={style.backLine}>
          <div className={style.password_strength_meter_low}></div>
        </div>
        <div className={style.reasons_low}>Very Weak Password</div>
      </article>
    );
  }
};

export default PasswordStrength;
