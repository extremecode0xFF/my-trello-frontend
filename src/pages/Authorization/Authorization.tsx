import React, { useEffect, VoidFunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { IAdmission } from '../../common/interfaces/IAdmission';
import { login } from '../../store/modules/user/actions';
import style from './authorization.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface FormData {
  email: string;
  password: string;
  submit: string;
}

enum ErrorFormMessage {
  REQUIRE = 'Обязательно для заполнения',
  INVALID_DATA = 'Пользователь с такой почтой или паролем не найден',
}

const Authorization: VoidFunctionComponent = () => {
  const dispatch = useDispatch();
  const stateUser = useTypedSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' });

  useEffect(() => {
    clearErrors('submit');
  }, [watch('email')]);

  const onSubmit = handleSubmit((data) => {
    const user: IAdmission = { email: data.email, password: data.password };
    const error = (): void => {
      setError('submit', { message: ErrorFormMessage.INVALID_DATA });
    };
    dispatch(login(user, error));
  });

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={onSubmit}>
        <p className={style.title}>Вход</p>

        <div className={style.contentBlock}>
          <label htmlFor="email">Email</label>
          {errors.email && (
            <label className={style.error} htmlFor="email">
              {errors.email.message}
            </label>
          )}
          <input
            className={style.input}
            {...register('email', { required: { value: true, message: ErrorFormMessage.REQUIRE } })}
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
        </div>
        {errors.submit && <label className={style.error}>{errors.submit.message}</label>}
        <input className={style.submitButton} {...register('submit')} type="submit" value="Войти" />

        <div className={style.loginWrapper}>
          <span className={style.linkTitle}>Впервые у нас?</span>
          <Link className={style.link} to="/signup">
            Зарегестрироваться
          </Link>
        </div>

        <div className={style.loaderWrapper}>
          <Loader type="Oval" color="#00BFFF" height={50} width={50} visible={stateUser.isLoading} />
        </div>
      </form>
    </div>
  );
};

export default Authorization;
