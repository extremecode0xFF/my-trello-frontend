import React, { VoidFunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';
import { email } from '../../common/validator/validator';
import { admission, setToken } from '../../api/request';
import api from '../../common/constants/api';
import { IAdmission } from '../../common/interfaces/IAdmission';
import history from '../../common/history/history';
import style from './registration.module.scss';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

enum ErrorFormMessage {
  REQUIRE = 'Обязательно для заполнения',
  INCORRECT_EMAIL = 'Некорректная запись email',
  PASSWORD_MISMATCH = 'Пароли несовпадают',
}

export const Registration: VoidFunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all', delayError: 1000 });
  const onSubmit = handleSubmit(async (data) => {
    const newUser: IAdmission = { email: data.email, password: data.password };
    await admission.post(api.user, newUser);
    const authData = await admission.post<unknown, { token: string }>(api.login, newUser);
    setToken(authData.token);
    history.push('/');
  });
  const currentPassword = watch('password');
  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={onSubmit}>
        <p className={style.title}>Регистрация</p>
        <div className={style.contentBlock}>
          <label htmlFor="email">Email</label>
          {errors.email && <p className={style.error}>{errors.email.message}</p>}
          <input
            {...register('email', {
              required: { value: true, message: ErrorFormMessage.REQUIRE },
              pattern: { value: email, message: ErrorFormMessage.INCORRECT_EMAIL },
            })}
            type="text"
          />
        </div>
        <div className={style.contentBlock}>
          <label htmlFor="password">Пароль</label>
          {errors.password && <p className={style.error}>{errors.password.message}</p>}
          <input
            {...register('password', { required: { value: true, message: ErrorFormMessage.REQUIRE } })}
            type="password"
          />
          <PasswordStrengthBar scoreWordStyle={{ display: 'none' }} password={currentPassword} minLength={4} />
        </div>
        <div className={style.contentBlock}>
          <label htmlFor="confirmPassword">Повторите пароль</label>
          {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword.message}</p>}
          <input
            {...register('confirmPassword', {
              required: { value: true, message: ErrorFormMessage.REQUIRE },
              validate: (value) => value === currentPassword || ErrorFormMessage.PASSWORD_MISMATCH,
            })}
            type="password"
          />
        </div>
        <input className={style.submitButton} type="submit" value="Зарегистрироваться" />
        <div className={style.loginWrapper}>
          <span className={style.linkTitle}>Уже есть аккаунт?</span>
          <Link className={style.link} to="/login">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
