import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
import { admission, deleteToken, setToken } from '../../../api/request';
import api from '../../../common/constants/api';
import { IAdmission } from '../../../common/interfaces/IAdmission';
import history from '../../../common/history/history';
import { AppState } from '../../store';

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, UserAction>;

export const login = (user: IAdmission, callbackError?: () => void): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: UserActionTypes.LOGIN });
    const data = await admission.post<unknown, { token: string }>(api.login, user);
    dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: true });
    setToken(data.token);
    history.push('/');
  } catch (e) {
    dispatch({ type: UserActionTypes.LOGIN_ERROR });
    if (callbackError) callbackError();
  }
};

export const signup = (user: IAdmission, callbackError?: () => void): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: UserActionTypes.SIGNUP });
    await admission.post(api.user, user);
    dispatch({ type: UserActionTypes.SIGNUP_SUCCESS });
    await dispatch(login(user));
  } catch (e) {
    dispatch({ type: UserActionTypes.SIGNUP_ERROR });
    if (callbackError) callbackError();
  }
};

export const logout: ActionCreator<Action> = () => {
  deleteToken();
  history.push('login');
  return {
    type: UserActionTypes.LOGOUT,
  };
};
