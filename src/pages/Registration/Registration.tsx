import React, { useEffect, VoidFunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { email } from '../../common/validator/validator';
import { IAdmission } from '../../common/interfaces/IAdmission';
import { signup } from '../../store/modules/user/actions';
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
  EMAIL_ALREADY_EXIST = 'Данная почта уже используется',
}

export const Registration: VoidFunctionComponent = () => {
  const dispatch = useDispatch();
  const stateUser = useTypedSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all', delayError: 1000 });
  const currentPassword = watch('password');

  const onSubmit = handleSubmit(async (data) => {
    const newUser: IAdmission = { email: data.email, password: data.password };
    const error = (): void => {
      setError('email', { message: ErrorFormMessage.EMAIL_ALREADY_EXIST });
    };
    dispatch(signup(newUser, error));
  });

  useEffect(() => {
    clearErrors('email');
  }, [watch('email')]);

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={onSubmit}>
        <p className={style.title}>Регистрация</p>

        <div className={style.contentBlock}>
          <label htmlFor="email">Email</label>
          {errors.email && <p className={style.error}>{errors.email.message}</p>}
          <input
            className={style.input}
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
            className={style.input}
            {...register('password', { required: { value: true, message: ErrorFormMessage.REQUIRE } })}
            type="password"
          />
          <PasswordStrengthBar scoreWordStyle={{ display: 'none' }} password={currentPassword} minLength={4} />
        </div>

        <div className={style.contentBlock}>
          <label htmlFor="confirmPassword">Повторите пароль</label>
          {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword.message}</p>}
          <input
            className={style.input}
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

        <div className={style.loaderWrapper}>
          <Loader type="Oval" color="#00BFFF" height={50} width={50} visible={stateUser.isLoading} />
        </div>
      </form>
    </div>
  );
};
