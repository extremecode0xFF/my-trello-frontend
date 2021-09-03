import { asyncDispatch as dispatch } from '../../store';
import { ModalActionTypes } from '../../types/modal';

export const setModalActive = (value: boolean): void => {
  if (value) {
    dispatch({ type: ModalActionTypes.SHOW_MODAL });
  } else {
    dispatch({ type: ModalActionTypes.HIDE_MODAL });
  }
};
