export interface UserState {
  isAuthorized: boolean;
  isLoading: boolean;
}

export const initialUserState: UserState = {
  isAuthorized: false,
  isLoading: false,
};

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  SIGNUP = 'SIGNUP',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_ERROR = 'SIGNUP_ERROR',

  LOGOUT = 'LOGOUT',
}

interface ActionLogin {
  type: UserActionTypes.LOGIN;
}

interface ActionLoginSuccess {
  type: UserActionTypes.LOGIN_SUCCESS;
  payload: boolean;
}

interface ActionLoginError {
  type: UserActionTypes.LOGIN_ERROR;
}

interface ActionSignUp {
  type: UserActionTypes.SIGNUP;
}

interface ActionSignUpSuccess {
  type: UserActionTypes.SIGNUP_SUCCESS;
}

interface ActionSignUpError {
  type: UserActionTypes.SIGNUP_ERROR;
}

interface ActionLogOut {
  type: UserActionTypes.LOGOUT;
}

export type UserAction =
  | ActionLogin
  | ActionLoginSuccess
  | ActionLoginError
  | ActionSignUp
  | ActionSignUpSuccess
  | ActionSignUpError
  | ActionLogOut;
