import { initialUserState, UserState, UserAction, UserActionTypes } from '../../types/user';

export default function reducer(state = initialUserState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, isLoading: true };
    case UserActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuthorized: true };
    case UserActionTypes.LOGIN_ERROR:
      return { ...state, isLoading: false };
    case UserActionTypes.SIGNUP:
      return { ...state, isLoading: true };
    case UserActionTypes.SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case UserActionTypes.SIGNUP_ERROR:
      return { ...state, isLoading: false };
    case UserActionTypes.LOGOUT:
      return { ...state, isAuthorized: false };
    default: {
      return state;
    }
  }
}
